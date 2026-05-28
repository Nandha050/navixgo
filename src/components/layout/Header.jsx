import React from 'react';
import { Globe, Menu, X } from 'lucide-react';
import Logo from '../common/Logo';

const Header = ({
  currentPage,
  setCurrentPage,
  handleNavClick,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  controlRoomUnlocked,
}) => {
  return (
    <nav className="sticky top-0 left-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-slate-200 shadow-sm select-none">
      <div className="max-w-[96%] mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Logo onClick={() => setCurrentPage('home')} />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-5 xl:space-x-8 2xl:space-x-10 3xl:space-x-14">
            <button
              onClick={() => handleNavClick('features')}
              className="text-xs lg:text-sm 3xl:text-base font-semibold text-slate-600 hover:text-[#ea580c] transition-colors whitespace-nowrap"
            >
              Features
            </button>

            <button
              onClick={() => handleNavClick('testimonials')}
              className="text-xs lg:text-sm 3xl:text-base font-semibold text-slate-600 hover:text-[#ea580c] transition-colors whitespace-nowrap"
            >
              Testimonials
            </button>

            <button
              onClick={() => setCurrentPage('plans')}
              className={`text-xs lg:text-sm 3xl:text-base font-semibold transition-colors whitespace-nowrap ${
                currentPage === 'plans' ? 'text-[#ea580c]' : 'text-slate-600 hover:text-[#ea580c]'
              }`}
            >
              Plans & Services
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="text-xs lg:text-sm 3xl:text-base font-semibold text-slate-600 hover:text-[#ea580c] transition-colors whitespace-nowrap"
            >
              Contact
            </button>

            <button
              onClick={() => handleNavClick('about-us')}
              className="text-xs lg:text-sm 3xl:text-base font-semibold text-slate-600 hover:text-[#ea580c] transition-colors whitespace-nowrap"
            >
              About Us
            </button>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-6 3xl:space-x-8 shrink-0">
            <div className="hidden lg:flex items-center gap-1 text-xs lg:text-sm 3xl:text-base font-semibold text-slate-600 cursor-pointer hover:text-black whitespace-nowrap">
              <Globe size={16} />
              <span>USA</span>
            </div>
            <button
              onClick={() => { window.location.href = 'https://where-are-you-admin-frontend.vercel.app/'; }}
              className="text-xs lg:text-sm 3xl:text-base font-semibold text-slate-600 hover:text-black px-1.5 lg:px-2 transition-colors whitespace-nowrap"
            >
              Log in
            </button>
            <button
              onClick={() => { window.location.href = 'https://where-are-you-admin-frontend.vercel.app/'; }}
              className="bg-gradient-to-b from-[#0056b3] to-[#004494] text-white text-xs lg:text-sm 3xl:text-base font-bold px-3 py-2 lg:px-5 lg:py-2.5 xl:px-7 xl:py-3 rounded-full hover:shadow-[0_8px_20px_rgba(0,86,179,0.3)] hover:-translate-y-0.5 transition-all shadow-[0_4px_10px_rgba(0,86,179,0.2)] whitespace-nowrap"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 focus:outline-none p-1"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 absolute top-full left-0 w-full pb-6 px-4 shadow-2xl">
          <div className="flex flex-col space-y-5 pt-4">
            <button
              onClick={() => {
                handleNavClick('features');
                setIsMobileMenuOpen(false);
              }}
              className="text-left text-lg font-semibold text-slate-600"
            >
              Features
            </button>

            <button
              onClick={() => {
                handleNavClick('testimonials');
                setIsMobileMenuOpen(false);
              }}
              className="text-left text-lg font-semibold text-slate-600"
            >
              Testimonials
            </button>

            <button
              onClick={() => {
                setCurrentPage('plans');
                setIsMobileMenuOpen(false);
              }}
              className="text-left text-lg font-semibold text-slate-600"
            >
              Plans & Services
            </button>

            <button
              onClick={() => {
                handleNavClick('contact');
                setIsMobileMenuOpen(false);
              }}
              className="text-left text-lg font-semibold text-slate-600"
            >
              Contact
            </button>

            <button
              onClick={() => {
                handleNavClick('about-us');
                setIsMobileMenuOpen(false);
              }}
              className="text-left text-lg font-semibold text-slate-600"
            >
              About Us
            </button>

            <hr className="border-slate-100" />
            <button
              onClick={() => {
                window.location.href = 'https://where-are-you-admin-frontend.vercel.app/';
                setIsMobileMenuOpen(false);
              }}
              className="text-left text-lg font-semibold text-slate-600"
            >
              Log in
            </button>
            <button
              onClick={() => {
                window.location.href = 'https://where-are-you-admin-frontend.vercel.app/';
                setIsMobileMenuOpen(false);
              }}
              className="bg-[#0056b3] text-white text-lg font-bold px-4 py-3 rounded-xl w-full shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
