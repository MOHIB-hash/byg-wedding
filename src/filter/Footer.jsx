import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa"; // Social icons
import { SiVisa, SiMastercard, SiPaypal, SiGooglepay } from "react-icons/si"; // Payment icons

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-12 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between gap-x-4 mt-4">
          {/* Customer Support */}
          <div>
            <h3 className="font-bold text-base mb-3">Customer Support</h3>
            <ul className="space-y-3 text-[10px] ml-4">
              <li>
                <a href="#" className="hover:underline">
                  About Chiltoh
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How To Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Payment Methods
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Color and Size
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Customer Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Terms & Service (Centered) */}
          <div className="text-center">
            <h3 className="font-bold text-base mb-3">Terms & Service</h3>
            <ul className="space-y-3 text-[10px] mx-auto inline-block">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Wholesale Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Affiliate Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Intellectual Property Infringement Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Top Collection */}
          <div>
            <h3 className="font-bold text-base mb-3">Top Collection</h3>
            <ul className="space-y-3 text-[10px]">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Wedding Dresses
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Prom Dresses
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Bridesmaid Dresses
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Special Occasion Dresses
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Wedding Guest Dresses
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Ready to Ship
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Color Swatch
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-2 mt-8">
          <a href="#" className="text-white hover:text-gray-400">
            <FaFacebook />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaPinterest />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaYoutube />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaTwitter />
          </a>
        </div>

        {/* Payment Icons and ATM Card images */}
        <div className="flex justify-between mt-8 items-center relative">
          {/* Footer bottom content parallel to ATM cards */}
          <div className="flex justify-between items-center w-full">
            {/* Footer Text */}
            <div className="text-sm font-semibold ml-4">
              <p>&copy; 2025 BYG Wedding Dresses</p>
            </div>

            {/* ATM Cards */}
            <div className="flex space-x-2 absolute bottom-2 right-2 z-10">
              <img src="/pic11.png" alt="ATM Card 1" className="w-10" />{" "}
              {/* Reduced size to w-10 */}
              <img src="/pic10.png" alt="ATM Card 2" className="w-4" />
              <img src="/pic11.png" alt="ATM Card 3" className="w-4" />
              <img src="/pic10.png" alt="ATM Card 4" className="w-4" />
              <img src="/pic11.png" alt="ATM Card 3" className="w-4" />
              <img src="/pic10.png" alt="ATM Card 4" className="w-4" />
              <img src="/pic11.png" alt="ATM Card 3" className="w-4" />
              <img src="/pic10.png" alt="ATM Card 4" className="w-4" />
              <img src="/pic11.png" alt="ATM Card 3" className="w-4" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
