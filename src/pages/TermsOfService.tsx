import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | HMD Pro Construction</title>
      </Helmet>
      <div className="bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-gray-700 mb-6">Last Updated: March 15, 2024</p>
          <p className="mb-6 text-gray-700">
            Welcome to <span className="font-bold">HMD Pro Construction, LLC!</span> These Terms of Service ("Terms") govern your access to and use of our website, located at <a href="https://hmdproconstruction.com/" rel="external nofollow noopener" target="_blank" className="text-red-600 hover:underline">https://hmdproconstruction.com/</a> including any content, functionality, and services offered on or through the website (collectively, the "Service").
          </p>
          <p className="mb-6 text-gray-700">Please read these Terms carefully before using the Service.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-2">Acceptance of Terms</h2>
          <p className="mb-6 text-gray-700">By accessing or using the Service, you agree to be bound by these Terms and our <Link to="/privacy-policy" className="text-red-700 font-bold hover:underline">Privacy Policy</Link>. If you do not agree to these Terms or our Privacy Policy, you may not use the Service.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-2">Use of the Service</h2>
          <p className="mb-6 text-gray-700">You may use the Service for lawful purposes only. You agree not to use the Service in any way that violates any applicable laws or regulations or infringes on the rights of others.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-2">Intellectual Property</h2>
          <p className="mb-6 text-gray-700">The Service and its original content, features, and functionality are owned by HMD Pro Construction and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any part of the Service without our prior written consent.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-2">Links to Third-Party Websites</h2>
          <p className="mb-6 text-gray-700">The Service may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such third-party websites or services.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-2">Limitation of Liability</h2>
          <p className="mb-6 text-gray-700">In no event shall HMD Pro Construction, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-2">Governing Law</h2>
          <p className="mb-6 text-gray-700">These Terms shall be governed by and construed in accordance with the laws of the State of New Jersey, without regard to its conflict of law provisions.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-2">Changes to Terms</h2>
          <p className="mb-6 text-gray-700">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-2">Contact Us</h2>
          <p className="mb-8 text-gray-700">If you have any questions about these Terms, please contact us at <a href="mailto:info@hmdproconstruction.com" className="font-bold text-red-700 hover:underline">info@hmdproconstruction.com</a>.</p>

          <Link to="/" className="inline-flex items-center px-5 py-3 bg-red-600 text-white font-semibold rounded shadow hover:bg-red-700 transition-colors">
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default TermsOfService; 