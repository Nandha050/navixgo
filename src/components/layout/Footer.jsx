import React from 'react';
import Logo from '../common/Logo';

const Footer = ({ setCurrentPage, handleNavClick, controlRoomUnlocked }) => {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-slate-900 mt-auto select-none">
      <div className="max-w-[94%] 2xl:max-w-[96%] 3xl:max-w-[98%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo onClick={() => setCurrentPage('home')} dark={true} />
            </div>
            <p className="text-slate-400 text-sm 3xl:text-base leading-relaxed max-w-xs font-medium">
              Genuine tales from entrepreneurs who revolutionized their companies. Discover how they turned challenges into success.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-lg 3xl:text-xl">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => handleNavClick('features')}
                  className="text-slate-400 hover:text-white transition-colors font-medium text-sm 3xl:text-base text-left"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('plans')}
                  className="text-slate-400 hover:text-white transition-colors font-medium text-sm 3xl:text-base text-left"
                >
                  Plans & Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('about-us')}
                  className="text-slate-400 hover:text-white transition-colors font-medium text-sm 3xl:text-base text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('contact-us')}
                  className="text-slate-400 hover:text-white transition-colors font-medium text-sm 3xl:text-base text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('privacy-policy')}
                  className="text-slate-400 hover:text-white transition-colors font-medium text-sm 3xl:text-base text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('terms-of-service')}
                  className="text-slate-400 hover:text-white transition-colors font-medium text-sm 3xl:text-base text-left"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-lg 3xl:text-xl">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="text-slate-400 bg-slate-800 p-1.5 rounded-full">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <a
                  href="mailto:navixgosupport@gmail.com"
                  className="text-slate-400 hover:text-white transition-colors font-medium text-sm 3xl:text-base"
                >
                  navixgosupport@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="text-slate-400 bg-slate-800 p-1.5 rounded-full">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <span className="text-slate-400 font-medium text-sm 3xl:text-base">+91 9949445524, 9381837737</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-slate-400 bg-slate-800 p-1.5 rounded-full mt-0.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span className="text-slate-400 font-medium leading-relaxed text-sm 3xl:text-base">
                  Sangareddy, Telangana, 502001
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-lg 3xl:text-xl">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-sm"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm 3xl:text-base font-medium">© 2026 NavixGo LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <button
              onClick={() => setCurrentPage('privacy-policy')}
              className="text-slate-500 hover:text-white text-sm 3xl:text-base font-medium transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setCurrentPage('terms-of-service')}
              className="text-slate-500 hover:text-white text-sm 3xl:text-base font-medium transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
