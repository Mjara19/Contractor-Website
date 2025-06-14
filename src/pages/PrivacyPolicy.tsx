import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | HMD Pro Construction</title>
      </Helmet>
      <div className="bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-700 mb-6">Last Updated: March 15, 2024</p>
          <p className="mb-6 text-gray-700">
            <span className="font-bold">HMD Construction Group, LLC</span> ("us", "we", or "our") operates <span className="font-bold">hmdnj.com</span>. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect the information you provide when you visit our website or interact with us.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-2">Information We Collect</h2>
          <p className="mb-2 text-gray-700">When you visit our website or communicate with us, we may collect personal information that you voluntarily provide, such as:</p>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>Contact Information: Your name, email address, phone number, and postal address.</li>
            <li>Business Information: Your company name and job title.</li>
            <li>Payment Information: If you make purchases through the Website, we may collect payment card information.</li>
            <li>Communications: Information you provide when you contact us or communicate with us through the website.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-2">How We Use Your Information</h2>
          <p className="mb-2 text-gray-700">We may use the information we collect for the following purposes:</p>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>To provide and maintain our website.</li>
            <li>To communicate with you and respond to your inquiries.</li>
            <li>To process transactions and fulfill orders.</li>
            <li>To send you promotional and marketing communications.</li>
            <li>To improve our products and services.</li>
            <li>To conduct research and analysis.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-2">Information Sharing & Disclosures</h2>
          <p className="mb-6 text-gray-700">We may share your personal information with third-party service providers who assist us in operating our website, conducting our business, or serving you. These third parties are required to maintain the confidentiality of your information and are prohibited from using it for any other purpose.<br /><br />We may also disclose your personal information in response to legal requirements, such as subpoenas or court orders, or to protect our rights and interests or those of others.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-2">Data Security</h2>
          <p className="mb-6 text-gray-700">We implement appropriate technical and organizational measures to protect the security of your personal information and prevent unauthorized access, disclosure, alteration, or destruction.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-2">Your Choices</h2>
          <p className="mb-6 text-gray-700">You may choose not to provide certain personal information, but this may limit your ability to access certain features of our website or receive specific services.<br /><br />You can opt-out of receiving promotional or marketing communications from us by following the unsubscribe instructions provided in such communications.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-2">Changes to This Privacy Policy</h2>
          <p className="mb-6 text-gray-700">We reserve the right to update or modify this Privacy Policy at any time without prior notice. Any changes will be effective immediately upon posting the updated Privacy Policy on our website.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-2">Contact Us</h2>
          <p className="mb-8 text-gray-700">If you have any questions or concerns about our Privacy Policy or our practices regarding your personal information, please contact us at <a href="mailto:admin@hmdnj.com" className="font-bold text-red-700 hover:underline">admin@hmdnj.com</a>.</p>

          <Link to="/" className="inline-flex items-center px-5 py-3 bg-red-600 text-white font-semibold rounded shadow hover:bg-red-700 transition-colors">
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy; 