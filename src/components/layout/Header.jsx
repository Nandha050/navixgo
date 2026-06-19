import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../common/Logo';

const navItems = [
  { label: 'Features', type: 'section', id: 'features', path: '/#features' },
  { label: 'Plans', type: 'page', path: '/plans' },
  { label: 'About Us', type: 'page', path: '/about-us' },
  { label: 'Privacy', type: 'page', path: '/privacy-policy' },
  { label: 'Contact', type: 'page', path: '/contact-us' },
];

const Header = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    setIsMobileMenuOpen(false);
    window.location.href = 'https://navixgo.in/login';
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-6 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 xl:px-20"
    >
      <div className=" ">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 ">
          <div className="flex items-center gap-3">
            <Logo onClick={() => navigate('/')} />
          </div>

          <div className="hidden lg:flex justify-center min-w-0">
            <motion.div
              className="flex items-center rounded-full bg-white/95 px-5 lg:px-8 py-3 border border-[rgba(0,0,0,0.06)] shadow-[0_10px_30px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.04)]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            >
              <ul className="flex font-700 font-satoshi text-[16px] items-center gap-6 lg:gap-10">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id || item.path}
                    className="list-none"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-[20px] lg:text-sm font-700 font-satoshi tracking-tight-xs text-slate-900 transition-all duration-300 hover:text-slate-950 focus:outline-none whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="flex items-center justify-end gap-3 flex-shrink-0">
            <motion.button
              type="button"
              onClick={handleCTAClick}
              whileHover={{ y: -2, scale: 1.04 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="hidden md:inline-flex group items-center justify-center gap-3 rounded-full bg-[#0F1115] px-5 py-3 text-sm font-600 font-satoshi text-white shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition-all duration-300"
            >
              <span>Free Demo</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/12 transition-all duration-300">
                <ArrowUpRight size={16} />
              </span>
            </motion.button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="lg:hidden mt-3 rounded-[32px] border border-[rgba(15,17,21,0.08)] bg-white/95 px-4 py-5 shadow-[0_18px_40px_rgba(15,17,21,0.12)] backdrop-blur-xl"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.id || item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full text-left text-base font-600 font-satoshi text-slate-800 transition-all duration-300 hover:text-slate-950"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="border-t border-slate-200 pt-4">
                  <button
                    type="button"
                    onClick={handleCTAClick}
                    className="w-full rounded-2xl bg-slate-950 px-4 py-3 text-base font-600 font-satoshi text-white transition-all duration-300 hover:bg-slate-900"
                  >
                    Free Demo
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Header;
