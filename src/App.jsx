import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Plans from './pages/Plans';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ContactUs from './pages/ContactUs';
import TermsOfService from './pages/TermsOfService';
import AboutUs from './pages/AboutUs';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'plans', 'privacy-policy', 'contact-us', 'terms-of-service', 'about-us'

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavClick = (id) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#ea580c] selection:text-white flex flex-col w-full overflow-x-hidden">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        handleNavClick={handleNavClick}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main className="flex-1 w-full overflow-x-hidden flex flex-col justify-start items-center">
        {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === 'plans' && <Plans setCurrentPage={setCurrentPage} />}
        {currentPage === 'privacy-policy' && <PrivacyPolicy setCurrentPage={setCurrentPage} />}
        {currentPage === 'contact-us' && <ContactUs setCurrentPage={setCurrentPage} />}
        {currentPage === 'terms-of-service' && <TermsOfService setCurrentPage={setCurrentPage} />}
        {currentPage === 'about-us' && <AboutUs setCurrentPage={setCurrentPage} />}
      </main>

      <Footer 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} 
        handleNavClick={handleNavClick} 
      />
    </div>
  );
};

export default App;