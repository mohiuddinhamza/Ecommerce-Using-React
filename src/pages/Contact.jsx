import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLightbulb } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-24 xl:px-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Contact Info */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 sm:p-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-500 mb-6">Get in Touch</h2>
          <p className="text-gray-700 text-base sm:text-lg mb-8">
            Whether you have a question, need support, or want to collaborate—we’re here to listen and respond. Our team is committed to fast, friendly, and helpful communication.
          </p>

          <div className="space-y-6 text-gray-700 text-base sm:text-lg">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-amber-500 text-xl shrink-0" />
              <span>support@novagadget.pk</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-amber-500 text-xl shrink-0" />
              <span>+92 300 1234567</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-amber-500 text-xl shrink-0" />
              <span>Abbottabad, Pakistan</span>
            </div>
          </div>

          {/* UX Tip */}
          <div className="mt-10 bg-amber-50 border-l-4 border-amber-400 p-4 rounded-md flex items-start gap-3">
            <FaLightbulb className="text-amber-500 text-xl mt-1 shrink-0" />
            <p className="text-sm sm:text-base text-gray-700">
              <strong>Tip:</strong> Include details like your preferred contact method, urgency level, or project scope. It helps us respond with precision and speed.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 sm:p-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-500 mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input
                id="name"
                type="text"
                placeholder="Mohi-Uddin"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Tell us how we can help..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
