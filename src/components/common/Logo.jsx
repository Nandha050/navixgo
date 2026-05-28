import React from 'react';
import logoImg from '../../assets/logo.png';

const Logo = ({ onClick, dark = false }) => {
  return (
    <div onClick={onClick} className="flex items-center gap-2 cursor-pointer group select-none">
      <img
        src={logoImg}
        alt="NavixGo Logo"
        className="h-8 lg:h-10 xl:h-12 w-auto object-contain transform group-hover:scale-105 transition-all duration-300 shrink-0"
      />
      <span className="text-xl lg:text-2xl xl:text-3xl font-bold font-sans tracking-tight shrink-0">
        <span className={dark ? 'text-white' : 'text-black'}>Navix</span>
        <span className="text-[#ea580c]">Go</span>
      </span>
    </div>
  );
};

export default Logo;

