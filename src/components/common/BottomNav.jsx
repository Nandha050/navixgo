import React from 'react';

const BottomNav = ({ active = 'home' }) => {
  return (
    <div className="absolute bottom-6 left-6 right-6 bg-[#f8fafc] rounded-[2rem] px-8 py-4 flex justify-between items-center shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-white z-30 select-none">
      <div className="flex flex-col items-center gap-1.5 cursor-pointer">
        <div className={`w-5 h-5 rounded-sm transform rotate-45 ${active === 'home' ? 'bg-[#3b82f6]' : 'bg-slate-300'}`}></div>
        <span className={`text-[11px]  ${active === 'home' ? 'text-[#3b82f6]' : 'text-slate-400'}`}>Home</span>
      </div>
      <div className="flex flex-col items-center gap-1.5 cursor-pointer">
        <div className={`w-5 h-5 rounded-full bg-slate-300`}></div>
        <span className={`text-[11px]  text-slate-400`}>Alerts</span>
      </div>
      <div className="flex flex-col items-center gap-1.5 cursor-pointer">
        <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[18px] border-l-transparent border-r-transparent border-b-slate-300 rounded-sm"></div>
        <span className="text-[11px]  text-slate-400">Settings</span>
      </div>
      <div className="flex flex-col items-center gap-1.5 cursor-pointer">
        <div className="w-5 h-5 bg-slate-300 rounded-md transform rotate-45 flex items-center justify-center">
          <div className="w-5 h-5 absolute bg-slate-300 rounded-md transform rotate-45"></div>
        </div>
        <span className="text-[11px]  text-slate-400">Label</span>
      </div>
    </div>
  );
};

export default BottomNav;
