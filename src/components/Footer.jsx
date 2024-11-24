import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Add social icons

const Footer = () => {
  return (
    <footer className="bg-[#854CCA] py-4 pb-3">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 m-12 text-sm">
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul>
              <li><a href="/home" className="hover:text-[#6c34af]">Home</a></li>
              <li><a href="/about" className="hover:text-[#6c34af]">About Us</a></li>
              <li><a href="/contact" className="hover:text-[#6c34af]">Contact</a></li>
              <li><a href="/privacy-policy" className="hover:text-[#6c34af]">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul>
              <li><a href="/" className="hover:text-[#6c34af]">FAQ</a></li>
              <li><a href="/" className="hover:text-[#6c34af]">Help Center</a></li>
              <li><a href="/" className="hover:text-[#6c34af]">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-[#6c34af]">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="hover:text-[#6c34af]">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" className="hover:text-[#6c34af]">
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com" className="hover:text-[#6c34af]">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p className="text-gray-400 mb-4">123 Company St, City, Country</p>
            <a href='mailto:himanshprajapati2004@gmail.com' className="text-gray-400 decoration-0">Email: support@company.com</a>
          </div>
        </div>

        <div className="text-center text-sm text-white p-2 bg-[#6c34af]">
          <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;