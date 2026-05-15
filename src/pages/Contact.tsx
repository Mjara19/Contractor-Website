import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, X, Image as ImageIcon, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ReCAPTCHA from 'react-google-recaptcha';

interface ImageFile {
  file: File;
  preview: string;
}

interface UploadDescriptor {
  key: string;
  uploadUrl: string;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [images, setImages] = useState<ImageFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragCounterRef = useRef(0);
  const dropZoneRef = useRef<HTMLButtonElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    | { type: 'success'; message: string }
    | { type: 'error'; message: string }
    | null
  >(null);

  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '';
  const API_ENDPOINT =
    import.meta.env.VITE_CONTACT_API_ENDPOINT ||
    'https://7sqnme6o32.execute-api.us-east-2.amazonaws.com/contactFormHandler';

  // Revoke any outstanding object URLs when the component unmounts so
  // previews don't leak memory if the user navigates away mid-form.
  useEffect(() => {
    return () => {
      images.forEach((img) => URL.revokeObjectURL(img.preview));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Format phone number as (XXX) XXX-XXXX
  const formatPhoneNumber = (value: string): string => {
    // Remove all non-digit characters
    const phoneNumber = value.replace(/\D/g, '');
    
    // Limit to 10 digits
    const phoneNumberDigits = phoneNumber.slice(0, 10);
    
    // Format based on length
    if (phoneNumberDigits.length === 0) {
      return '';
    } else if (phoneNumberDigits.length <= 3) {
      return `(${phoneNumberDigits}`;
    } else if (phoneNumberDigits.length <= 6) {
      return `(${phoneNumberDigits.slice(0, 3)}) ${phoneNumberDigits.slice(3)}`;
    } else {
      return `(${phoneNumberDigits.slice(0, 3)}) ${phoneNumberDigits.slice(3, 6)}-${phoneNumberDigits.slice(6)}`;
    }
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  // Process files (used by both file input and drag & drop).
  // We no longer base64-encode here — files stay as File objects and get
  // PUT directly to S3 via pre-signed URLs at submit time.
  const processFiles = async (files: FileList | null) => {
    if (!files) return;

    const MAX_IMAGES = 10;
    const MAX_SIZE = 5 * 1024 * 1024; // 5MB per image
    const validImageTypes = new Set(['image/jpeg', 'image/jpg', 'image/png', 'image/webp']);

    if (images.length + files.length > MAX_IMAGES) {
      setSubmitStatus({
        type: 'error',
        message: `You can upload a maximum of ${MAX_IMAGES} images.`,
      });
      return;
    }

    const newImages: ImageFile[] = [];
    const rejected: string[] = [];

    for (const file of Array.from(files)) {
      if (!validImageTypes.has(file.type)) {
        rejected.push(`${file.name} (unsupported format)`);
        continue;
      }
      if (file.size > MAX_SIZE) {
        rejected.push(`${file.name} (over 5MB)`);
        continue;
      }
      const preview = URL.createObjectURL(file);
      newImages.push({ file, preview });
    }

    if (rejected.length > 0) {
      setSubmitStatus({
        type: 'error',
        message: `Skipped: ${rejected.join(', ')}. Supported: JPEG, PNG, WebP up to 5MB.`,
      });
    } else if (newImages.length > 0) {
      setSubmitStatus(null);
    }

    setImages([...images, ...newImages]);
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Handle image selection from file input
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await processFiles(e.target.files);
  };

  // Drag and drop handlers
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounterRef.current += 1;
    if (e.dataTransfer.types.includes('Files')) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounterRef.current -= 1;
    
    // Only set dragging to false if we've truly left the drop zone
    // Check if we're leaving the drop zone itself, not just a child element
    if (dragCounterRef.current === 0) {
      setIsDragging(false);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.types.includes('Files')) {
      setIsDragging(true);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounterRef.current = 0;
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      await processFiles(files);
    }
  };

  // Remove image
  const removeImage = (index: number) => {
    const imageToRemove = images[index];
    URL.revokeObjectURL(imageToRemove.preview);
    setImages(images.filter((_, i) => i !== index));
  };

  // Step 1: ask the Lambda for pre-signed PUT URLs for each file.
  const requestUploadUrls = async (): Promise<UploadDescriptor[]> => {
    if (images.length === 0) return [];

    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'get-upload-urls',
        files: images.map((img) => ({
          contentType: img.file.type,
          size: img.file.size,
        })),
      }),
    });

    if (!response.ok) {
      const body = await response.json().catch(() => ({}));
      throw new Error(body.error || 'Could not get upload URLs');
    }

    const data = (await response.json()) as { uploads: UploadDescriptor[] };
    return data.uploads;
  };

  // Step 2: PUT each file directly to S3 using its pre-signed URL.
  const uploadFilesToS3 = async (uploads: UploadDescriptor[]) => {
    await Promise.all(
      uploads.map((upload, index) =>
        fetch(upload.uploadUrl, {
          method: 'PUT',
          headers: { 'Content-Type': images[index].file.type },
          body: images[index].file,
        }).then((res) => {
          if (!res.ok) throw new Error(`Upload failed for ${images[index].file.name}`);
        })
      )
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (RECAPTCHA_SITE_KEY && !recaptchaToken) {
      setSubmitStatus({
        type: 'error',
        message: 'Please complete the reCAPTCHA verification before sending.',
      });
      return;
    }

    setSubmitStatus(null);
    setIsSubmitting(true);

    try {
      // Steps 1 & 2: get pre-signed URLs, then upload to S3 directly.
      const uploads = await requestUploadUrls();
      await uploadFilesToS3(uploads);

      // Step 3: submit the form with the S3 keys (not the file bodies).
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
          imageKeys: uploads.map((u) => u.key),
        }),
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: "Message sent! We'll get back to you within one business day.",
        });
        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
        images.forEach((img) => URL.revokeObjectURL(img.preview));
        setImages([]);
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'We couldn’t send your message. Please try again, or call us directly at (732) 325-5895.',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setRecaptchaToken(null);
      recaptchaRef.current?.reset();
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Apply phone formatting if it's the phone field
    if (name === 'phone') {
      setFormData({
        ...formData,
        [name]: formatPhoneNumber(value)
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | HMD Pro Construction</title>
        <meta name="description" content="Contact HMD Pro Construction for a free estimate. Call (732) 325-5895 or fill out our contact form. Serving New Jersey with professional construction services." />
      </Helmet>
      <div>
        {/* Hero Section */}
        <div className="bg-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl font-bold mb-6"
            >CONTACT US</motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-24 h-1 bg-red-600 mx-auto mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl text-gray-300"
            >
              Ready to start your project? Get professional results backed by 20+ years of construction experience. Contact us today for a free estimate.
            </motion.p>
          </div>
        </div>

        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-xl p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">GET FREE ESTIMATE</h2>
                <div className="w-24 h-1 bg-red-600 mb-8"></div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-gray-700 font-semibold mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-colors"
                      required
                    >
                      <option value="">Select a project type</option>
                      <option value="Home Renovation">Home Renovation</option>
                      <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                      <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                      <option value="Interior Finishing">Interior Finishing</option>
                      <option value="Flooring">Flooring</option>
                      <option value="Masonry Services">Masonry Services</option>
                      <option value="Concrete Services">Concrete Services</option>
                      <option value="Hardscape, Walls & Pavers">Hardscape, Walls & Pavers</option>
                      <option value="Fencing">Fencing</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      minLength={20}
                      maxLength={2000}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-colors"
                      placeholder="Please describe your project in detail (at least 20 characters)..."
                      required
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="images" className="block text-gray-700 font-semibold mb-2">
                      Photos (Optional)
                    </label>
                    <button
                      type="button"
                      ref={dropZoneRef}
                      onDragEnter={handleDragEnter}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`w-full border-2 border-dashed rounded-lg p-4 transition-colors cursor-pointer ${
                        isDragging
                          ? 'border-red-600 bg-red-50'
                          : 'border-gray-300 hover:border-red-500'
                      }`}
                    >
                      <input
                        type="file"
                        id="images"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                        accept="image/jpeg,image/jpg,image/png,image/webp"
                        multiple
                        className="hidden"
                      />
                      <div className="flex flex-col items-center justify-center py-4">
                        <ImageIcon className={`h-10 w-10 mb-2 transition-colors ${
                          isDragging ? 'text-red-600' : 'text-gray-400'
                        }`} />
                        <span className={`text-sm mb-1 transition-colors ${
                          isDragging ? 'text-red-600 font-semibold' : 'text-gray-600'
                        }`}>
                          {isDragging ? 'Drop photos here' : 'Click to upload photos or drag and drop'}
                        </span>
                        <span className="text-xs text-gray-500">
                          PNG, JPG, WEBP up to 5MB each (Max 10 images)
                        </span>
                      </div>
                    </button>
                    {images.length > 0 && (
                      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {images.map((image, index) => (
                          <div key={`${image.file.name}-${index}`} className="relative group">
                            <img
                              src={image.preview}
                              alt={`Preview ${index + 1}`}
                              className="w-full h-32 object-cover rounded-lg border-2 border-gray-200"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700"
                              aria-label="Remove image"
                            >
                              <X className="h-4 w-4" />
                            </button>
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 rounded-b-lg truncate">
                              {image.file.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {RECAPTCHA_SITE_KEY && (
                    <div className="flex justify-center">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={RECAPTCHA_SITE_KEY}
                        onChange={handleRecaptchaChange}
                        theme="light"
                      />
                    </div>
                  )}
                  <AnimatePresence>
                    {submitStatus && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        role="status"
                        aria-live="polite"
                        className={`flex items-start gap-3 rounded-lg p-4 text-sm ${
                          submitStatus.type === 'success'
                            ? 'bg-green-50 text-green-800 border border-green-200'
                            : 'bg-red-50 text-red-800 border border-red-200'
                        }`}
                      >
                        {submitStatus.type === 'success' ? (
                          <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        )}
                        <span>{submitStatus.message}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <button
                    type="submit"
                    disabled={isSubmitting || (Boolean(RECAPTCHA_SITE_KEY) && !recaptchaToken)}
                    className="w-full bg-red-600 text-white py-4 px-6 rounded-lg hover:bg-red-700 transition-colors font-bold text-lg flex items-center justify-center disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        SENDING...
                      </>
                    ) : (
                      <>
                        SEND MESSAGE
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Contact Details */}
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">CONTACT INFORMATION</h2>
                  <div className="w-24 h-1 bg-red-600 mb-8"></div>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">PHONE</h3>
                        <a href="tel:(732) 325-5895" className="text-lg text-gray-600 hover:text-red-600 transition-colors">
                          (732) 325-5895
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">EMAIL</h3>
                        <a href="mailto:info@hmdproconstruction.com" className="text-lg text-gray-600 hover:text-red-600 transition-colors">
                          info@hmdproconstruction.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">LOCATION</h3>
                        <p className="text-lg text-gray-600">
                          New Jersey, United States
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Clock className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">BUSINESS HOURS</h3>
                        <p className="text-lg text-gray-600">
                          Monday - Friday: 8:00 AM - 5:00 PM<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Service Area */}
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">SERVICE AREA</h2>
                  <div className="w-24 h-1 bg-red-600 mb-8"></div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We proudly serve the following areas throughout New Jersey with reliable, professional service:
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <span className="h-2 w-2 bg-red-600 rounded-full mr-3"></span>
                        Middlesex County
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-2 w-2 bg-red-600 rounded-full mr-3"></span>
                        Essex County
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-2 w-2 bg-red-600 rounded-full mr-3"></span>
                        Monmouth County
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <span className="h-2 w-2 bg-red-600 rounded-full mr-3"></span>
                        Somerset County
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-2 w-2 bg-red-600 rounded-full mr-3"></span>
                        Mercer County
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-2 w-2 bg-red-600 rounded-full mr-3"></span>
                        Union County
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;