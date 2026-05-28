import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 max-w-[94%] 2xl:max-w-[96%] 3xl:max-w-[98%] mx-auto text-center relative overflow-hidden">
      <h2 className="text-4xl md:text-5xl lg:text-[54px] 3xl:text-[64px] font-bold text-[#1a1a1a] mb-20 tracking-tight leading-tight">
        What our users say <br /> about us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-2 md:px-0">
        {[1, 2, 3].map((item) => (
          <div 
            key={item} 
            className="bg-white rounded-[2rem] pt-12 pb-8 px-8 relative shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col items-start text-left mt-8 md:mt-0 mx-4 md:mx-0 hover:scale-[1.03] transition-all duration-300"
          >
            <div className="absolute -top-6 left-8 w-[50px] h-[50px] bg-[#2563eb] rounded-full flex items-center justify-center shadow-md">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11H6.5C6.5 8.51472 8.51472 6.5 11 6.5V3.5C6.85786 3.5 3.5 6.85786 3.5 11V19.5H10V11Z" fill="white" />
                <path d="M20.5 11H17C17 8.51472 19.0147 6.5 21.5 6.5V3.5C17.3579 3.5 14 6.85786 14 11V19.5H20.5V11Z" fill="white" />
              </svg>
            </div>
            <p className="text-[#64748b] leading-relaxed mb-8 flex-grow font-medium text-[15px] 3xl:text-[17px]">
              "NavixGo completely transformed our campus transport. Students are no longer waiting blindly for delayed buses. It's affordable and works perfectly."
            </p>
            <div className="border-t border-slate-100 w-full pt-6 flex items-center gap-4">
              <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=User${item}`} alt="User" className="w-[50px] h-[50px] rounded-full bg-slate-100 object-cover" />
              <div className="flex flex-col justify-center">
                <h5 className="font-bold text-slate-900 text-sm 3xl:text-base">Campus Admin</h5>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <svg key={i} className="w-3.5 h-3.5 text-[#fbbf24]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
