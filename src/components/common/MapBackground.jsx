import React from 'react';

const MapBackground = () => {
  return (
    <svg className="absolute inset-0 w-[150%] h-[150%] -top-1/4 -left-1/4 opacity-40 z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M-10 20 Q 30 15 50 50 T 110 80" stroke="#cbd5e1" strokeWidth="0.5" fill="none" />
      <path d="M20 -10 Q 25 40 60 60 T 80 110" stroke="#cbd5e1" strokeWidth="0.8" fill="none" />
      <path d="M-10 40 Q 40 45 70 20 T 110 10" stroke="#e2e8f0" strokeWidth="0.5" fill="none" />
      <path d="M0 60 Q 50 70 80 50 T 100 90" stroke="#cbd5e1" strokeWidth="0.6" fill="none" />
      <path d="M10 90 Q 60 80 90 90" stroke="#e2e8f0" strokeWidth="0.5" fill="none" />
      <path d="M40 0 Q 50 50 100 40" stroke="#cbd5e1" strokeWidth="0.7" fill="none" />
      <path d="M0 80 Q 50 60 100 100" stroke="#e2e8f0" strokeWidth="0.5" fill="none" />
    </svg>
  );
};

export default MapBackground;
