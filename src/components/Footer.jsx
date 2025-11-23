import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4 text-center sm:text-left">
            <h1 className="text-amber-500 text-2xl font-bold">GadgetNova</h1>
            <p className="text-base font-semibold">Where Innovation Meets Identity.</p>
            <p className="text-sm">TechZone Plaza, 3rd Floor, Main Mansehra Road, Abbottabad, KP, Pakistan</p>
            <p className="text-sm">
              Email: <a href="mailto:support@novagadget.pk" className="underline">support@novagadget.pk</a>
            </p>
            <p className="text-sm">
              Phone: +92 300 1234567 <br />
              <span className="text-xs text-gray-400">(Mon–Sat, 10am–6pm PKT)</span>
            </p>
          </div>

          {/* Customer Service */}
          <div className="space-y-4 text-center sm:text-left">
            <h2 className="text-xl font-semibold">Customer Service</h2>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-amber-400 cursor-pointer">Contact Us</li>
              <li className="hover:text-amber-400 cursor-pointer">Shipping & Returns</li>
              <li className="hover:text-amber-400 cursor-pointer">FAQs</li>
              <li className="hover:text-amber-400 cursor-pointer">Order Tracking</li>
              <li className="hover:text-amber-400 cursor-pointer">Guide</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4 text-center sm:text-left">
            <h2 className="text-xl font-semibold">Follow Us</h2>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
              <a href="#" className="flex items-center gap-2 text-sm hover:text-blue-500 transition">
                <FaFacebook className="text-blue-600" />
                Facebook
              </a>
              <a href="#" className="flex items-center gap-2 text-sm hover:text-blue-400 transition">
                <FaTwitter className="text-blue-400" />
                Twitter
              </a>
              <a href="#" className="flex items-center gap-2 text-sm hover:text-pink-500 transition">
                <FaInstagram className="text-pink-500" />
                Instagram
              </a>
              <a href="#" className="flex items-center gap-2 text-sm hover:text-red-600 transition">
                <FaYoutube className="text-red-600" />
                YouTube
              </a>
              <a href="#" className="flex items-center gap-2 text-sm hover:text-sky-600 transition">
                <FaLinkedin className="text-sky-700" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 text-center sm:text-left">
            <h2 className="text-xl font-semibold">Stay In The Loop</h2>
            <p className="text-sm">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
