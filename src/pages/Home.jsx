import React from 'react';
import {
  Bus,
  MapPin,
  Smartphone,
  Activity,
  CheckCircle2,
  Bell,
  ShieldAlert,
  AlertTriangle,
  Clock,
  Settings,
  Navigation,
} from 'lucide-react';
import BottomNav from '../components/common/BottomNav';
import MapBackground from '../components/common/MapBackground';
import Testimonials from '../components/common/Testimonials';
import phoneHandMockup from '../assets/phone_hand_mockup.png';
import busesimg2 from '../assets/image2.png';
import busesimg from '../assets/image.png';
import transitBusBg from '../assets/transit_bus_bg.png';

const Home = ({ setCurrentPage }) => {
  const handleGetAccess = (e) => {
    e.preventDefault();
    window.location.href = 'https://navixgo.in/login/';
  };

  return (
    <div className="w-full">
      {/* Self-contained CSS Animations for High-Tech Graphics */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1.5deg); }
        }
        @keyframes pulse-radar {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(3.5); opacity: 0; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="pt-10 pb-16 px-4 sm:px-6 lg:px-8 max-w-[94%] 2xl:max-w-[96%] 3xl:max-w-[98%] mx-auto">
        <div className="bg-[#0b101e] rounded-[2rem] sm:rounded-[3rem] relative flex flex-col items-center text-center px-6 py-12 sm:py-20 lg:py-32 3xl:py-40 overflow-hidden border border-slate-800 shadow-2xl">
          {/* Animated High-Fidelity Street Map Background */}
          <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" fill="none">
              {/* Grid pattern overlay for high-tech mesh */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(51, 65, 85, 0.25)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Street Network Grid */}
              {/* Horizontal roads */}
              <path d="M 0 100 L 1200 100" stroke="rgba(30, 41, 59, 0.5)" strokeWidth="1.5" />
              <path d="M 0 250 L 1200 250" stroke="rgba(30, 41, 59, 0.5)" strokeWidth="1.5" />
              <path d="M 0 420 L 1200 420" stroke="rgba(30, 41, 59, 0.5)" strokeWidth="1.5" />
              <path d="M 0 540 L 1200 540" stroke="rgba(30, 41, 59, 0.5)" strokeWidth="1.5" />

              {/* Vertical roads */}
              <path d="M 150 0 L 150 600" stroke="rgba(30, 41, 59, 0.5)" strokeWidth="1.5" />
              <path d="M 450 0 L 450 600" stroke="rgba(30, 41, 59, 0.5)" strokeWidth="1.5" />
              <path d="M 750 0 L 750 600" stroke="rgba(30, 41, 59, 0.5)" strokeWidth="1.5" />
              <path d="M 1050 0 L 1050 600" stroke="rgba(30, 41, 59, 0.5)" strokeWidth="1.5" />

              {/* Angled Arterial Highways */}
              <path d="M -100 600 L 450 250 L 750 250 L 1300 -100" stroke="rgba(30, 41, 59, 0.6)" strokeWidth="2.5" />
              <path d="M -50 100 L 150 250 L 450 420 L 750 420 L 1050 540 L 1300 540" stroke="rgba(30, 41, 59, 0.6)" strokeWidth="2.5" />

              {/* Glowing Active Transit Routes */}
              {/* Cyan Active Route */}
              <path id="route-cyan" d="M 150 600 L 150 250 L 450 250 L 750 250 L 1050 540 L 1250 540" 
                    stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" opacity="0.85" />
              
              {/* Indigo Active Route */}
              <path id="route-indigo" d="M -50 100 L 150 250 L 450 420 L 750 420 L 750 -50" 
                    stroke="#818cf8" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 8" opacity="0.75" />

              {/* Pulsing Radar Stop Nodes */}
              {/* Stop A (150, 250) */}
              <g transform="translate(150, 250)">
                <circle r="6" fill="#3b82f6" />
                <circle r="18" fill="none" stroke="#3b82f6" strokeWidth="1.5" style={{ transformOrigin: 'center', animation: 'pulse-radar 3s infinite' }} />
              </g>

              {/* Stop B (450, 420) */}
              <g transform="translate(450, 420)">
                <circle r="6" fill="#818cf8" />
                <circle r="18" fill="none" stroke="#818cf8" strokeWidth="1.5" style={{ transformOrigin: 'center', animation: 'pulse-radar 3.5s infinite' }} />
              </g>

              {/* Stop C (750, 250) */}
              <g transform="translate(750, 250)">
                <circle r="6" fill="#3b82f6" />
                <circle r="18" fill="none" stroke="#3b82f6" strokeWidth="1.5" style={{ transformOrigin: 'center', animation: 'pulse-radar 2.8s infinite' }} />
              </g>

              {/* Animated Gliding Vehicles */}
              {/* Vehicle A */}
              <g>
                <animateMotion dur="22s" repeatCount="indefinite" rotate="auto" path="M 150 600 L 150 250 L 450 250 L 750 250 L 1050 540 L 1250 540" />
                <rect x="-12" y="-6" width="24" height="12" rx="4" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
                <rect x="2" y="-3.5" width="6" height="7" rx="1.5" fill="#0056b3" />
                <circle cx="8" cy="-3" r="1.2" fill="#fef08a" />
                <circle cx="8" cy="3" r="1.2" fill="#fef08a" />
                <circle cx="0" cy="0" r="14" fill="#3b82f6" opacity="0.25" />
              </g>

              {/* Vehicle B */}
              <g>
                <animateMotion dur="17s" repeatCount="indefinite" rotate="auto" path="M -50 100 L 150 250 L 450 420 L 750 420 L 750 -50" />
                <rect x="-12" y="-6" width="24" height="12" rx="4" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
                <rect x="2" y="-3.5" width="6" height="7" rx="1.5" fill="#4f46e5" />
                <circle cx="8" cy="-3" r="1.2" fill="#fef08a" />
                <circle cx="8" cy="3" r="1.2" fill="#fef08a" />
                <circle cx="0" cy="0" r="14" fill="#818cf8" opacity="0.2" />
              </g>
            </svg>
          </div>

          <div className="relative z-10 max-w-4xl 3xl:max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mb-8 text-blue-300 text-xs sm:text-sm 3xl:text-base font-medium shadow-sm select-none">
              <svg className="w-4 h-4 text-blue-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Zero Hardware Installation Required</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[72px] 3xl:text-[84px] font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Bus tracking just got <br />{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#818cf8]">
                radically simpler.
              </span>
            </h1>
            <p className="text-xs sm:text-base md:text-xl 3xl:text-2xl text-slate-400 mb-10 max-w-2xl 3xl:max-w-3xl mx-auto leading-relaxed">
              Transform any driver's smartphone into a live GPS tracker. A scalable, low-cost platform delivering real-time ETA and route visualization for passengers and administrators.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => { window.location.href = 'https://navixgo.in/login/'; }}
                className="w-full sm:w-auto bg-[#2563eb] text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-600 active:scale-95 transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 text-lg 3xl:text-xl"
              >
                Get Started
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentPage('plans')}
                className="w-full sm:w-auto bg-[#1e293b] text-white font-semibold px-8 py-4 rounded-full hover:bg-slate-700 active:scale-95 transition-all border border-slate-700 text-lg 3xl:text-xl"
              >
                View Plans
              </button>
            </div>
          </div>

          <div className="absolute bottom-10 left-10 hidden lg:flex items-center gap-4 bg-[#0f172a]/90 border border-slate-700/50 backdrop-blur-md p-4 rounded-2xl shadow-xl hover:-translate-y-1 transition-transform select-none">
            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-sm">Bus 42 - Express</p>
              <p className="text-slate-400 text-xs mt-0.5">Arriving in 3 mins</p>
            </div>
          </div>

          <div className="absolute bottom-10 right-10 hidden lg:flex items-center gap-4 bg-[#0f172a]/90 border border-slate-700/50 backdrop-blur-md p-4 rounded-2xl shadow-xl hover:-translate-y-1 transition-transform select-none">
            <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-sm">Active Grid Sync</p>
              <p className="text-slate-400 text-xs mt-0.5">99.8% ETA Accuracy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1: Passenger App */}
      <section id="features" className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[94%] 2xl:max-w-[96%] 3xl:max-w-[98%] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative z-10 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[44px] 3xl:text-[50px] font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight leading-tight">
              The solution to your passenger problems
            </h2>
            <p className="text-sm sm:text-base lg:text-lg 3xl:text-xl text-slate-600 mb-6 sm:mb-10 leading-relaxed font-medium">
              We understand that waiting for a bus can be a challenge for many. Our app addresses this problem with pinpoint accuracy, delivering peace of mind through these essential features:
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-[#0056b3] w-6 h-6 flex-shrink-0" />
                <h4 className="font-semibold text-slate-800 text-base sm:text-lg lg:text-xl 3xl:text-2xl">Well-organized information</h4>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-[#0056b3] w-6 h-6 flex-shrink-0" />
                <h4 className="font-semibold text-slate-800 text-base sm:text-lg lg:text-xl 3xl:text-2xl">Google Maps integration</h4>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-[#0056b3] w-6 h-6 flex-shrink-0" />
                <h4 className="font-semibold text-slate-800 text-base sm:text-lg lg:text-xl 3xl:text-2xl">Integration with smart notifications</h4>
              </div>
            </div>
            <button
              onClick={() => setCurrentPage('plans')}
              className="mt-6 sm:mt-12 px-6 py-3 sm:px-8 sm:py-3.5 rounded-full border-2 border-slate-300 text-slate-700 font-bold hover:border-slate-900 hover:text-slate-900 transition-colors shadow-sm"
            >
              Learn more
            </button>
            <div className="mt-8 select-none opacity-95 scale-100 lg:scale-150 duration-300 max-w-full overflow-hidden">
              <img 
                src={transitBusBg} 
                alt="Transit Bus Stop Illustration" 
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center relative w-full h-[500px] sm:h-[600px] lg:h-[700px] select-none mt-10 lg:mt-0">
            <div className="absolute inset-0 bg-[#0056b3]/10 rounded-[3rem] sm:rounded-[4rem] blur-3xl transform rotate-3 -z-10 w-3/4 mx-auto h-[400px] sm:h-[600px]"></div>

            <div className="w-[280px] h-[560px] sm:w-[340px] sm:h-[680px] bg-white rounded-[3rem] sm:rounded-[3.5rem] p-1.5 sm:p-2 relative z-20 transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500 shadow-2xl border-[3px] border-slate-200">
              {/* Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30 flex items-center justify-between px-3 shadow-md">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0056b3] animate-pulse"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
              </div>

              <div className="w-full h-full bg-[#eff4fa] rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden flex flex-col relative border border-slate-100/50">
                {/* Status Bar */}
                <div className="pt-5 px-6 flex justify-between items-center z-20 relative">
                  <span className="text-[13px] font-bold text-slate-900">9:41</span>
                  <div className="flex gap-1.5 items-center">
                    <Activity size={14} className="text-slate-900" />
                    <div className="w-5 h-3 border border-slate-900 rounded-sm relative">
                      <div className="absolute left-0.5 right-0.5 top-0.5 bottom-0.5 bg-slate-900 rounded-[1px]"></div>
                    </div>
                  </div>
                </div>

                {/* Map View Mockup */}
                <div className="absolute inset-0 z-0 bg-[#eff4fa] pt-10">
                  <MapBackground />
                  <svg className="absolute inset-0 w-full h-full z-10" preserveAspectRatio="none">
                    <path
                      d="M-20 450 Q 50 430 80 450 T 110 500"
                      stroke="#94a3b8"
                      strokeWidth="4"
                      strokeDasharray="6 6"
                      fill="none"
                    />
                    <path d="M-10 380 Q 150 400 380 320" stroke="#334155" strokeWidth="5" fill="none" />
                  </svg>
                  {/* Pin */}
                  <div className="absolute top-[490px] left-[70px] z-20">
                    <div className="w-5 h-5 bg-[#312e81] rounded-full shadow-lg relative border-2 border-white"></div>
                  </div>
                </div>

                {/* Info Card inside Mockup */}
                <div className="flex-1 flex flex-col justify-end p-4 z-20 relative pb-28">
                  <div className="bg-white/95 backdrop-blur-md rounded-[2.5rem] p-5 flex items-center justify-between shadow-[0_15px_30px_rgba(0,0,0,0.06)] border border-white mb-2 cursor-pointer transform hover:scale-[1.02] transition-transform">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#2563eb] shadow-[0_0_0_4px_rgba(37,99,235,0.15)] ml-2"></div>
                      <div className="text-left">
                        <p className="text-[16px] font-bold text-slate-900 leading-tight">Next Stop: BVRIT</p>
                        <p className="text-[12px] text-slate-500 font-semibold mt-0.5">
                          Sangareddy • <span className="text-[#ea580c]">Upcoming</span>
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#eff6ff] px-4 py-2.5 rounded-[1rem] shrink-0">
                      <p className="text-[13px] font-bold text-slate-900">ETA: 2 min</p>
                    </div>
                  </div>
                </div>

                <BottomNav active="home" />
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Feature 2: Smart Notifications */}
      <section className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[94%] 2xl:max-w-[96%] 3xl:max-w-[98%] mx-auto border-t border-slate-200/60 mt-6 sm:mt-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 flex justify-center relative w-full h-[500px] sm:h-[600px] lg:h-[700px] select-none mt-10 lg:mt-0">
            <div className="absolute inset-0 bg-[#ea580c]/5 rounded-[3rem] sm:rounded-[4rem] blur-3xl transform -rotate-3 -z-10 w-3/4 mx-auto h-[400px] sm:h-[600px]"></div>

            <div className="w-[280px] h-[560px] sm:w-[340px] sm:h-[680px] bg-white rounded-[3rem] sm:rounded-[3.5rem] p-1.5 sm:p-2 relative z-20 transform hover:-translate-y-2 hover:-rotate-1 transition-all duration-500 shadow-2xl border-[3px] border-slate-200">
              {/* Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30 flex items-center justify-between px-3 shadow-md">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ea580c] animate-pulse"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
              </div>

              <div className="w-full h-full bg-[#f8fafc] rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden flex flex-col relative border border-slate-100/50">
                {/* Status Bar */}
                <div className="pt-5 px-6 flex justify-between items-center z-20 bg-[#f8fafc]">
                  <span className="text-[13px] font-bold text-slate-900">9:41</span>
                  <div className="flex gap-1.5 items-center">
                    <Activity size={14} className="text-slate-900" />
                    <div className="w-5 h-3 border border-slate-900 rounded-sm relative">
                      <div className="absolute left-0.5 right-0.5 top-0.5 bottom-0.5 bg-slate-900 rounded-[1px]"></div>
                    </div>
                  </div>
                </div>

                {/* Notifications Panel Header */}
                <div className="pt-4 pb-4 px-6 text-center bg-[#f8fafc]">
                  <h3 className="text-[22px] font-semibold text-slate-900 mb-3">Notifications</h3>
                  <p className="text-[12px] text-slate-500 font-semibold leading-snug px-2">
                    Stay updated with real-time alerts about your bus, stops, and journey.
                  </p>
                </div>

                {/* Toggles */}
                <div className="flex-1 overflow-y-auto px-6 pb-24 scrollbar-hide bg-[#f8fafc] text-left">
                  {[
                    {
                      title: 'Bus Near My Stop',
                      desc: 'Get notified when your bus is approaching your stop.',
                      checked: true,
                    },
                    {
                      title: 'Bus Arrived',
                      desc: 'Receive an alert when the bus reaches your stop.',
                      checked: true,
                    },
                    {
                      title: 'Trip Started',
                      desc: 'Get notified when your bus begins its journey.',
                      checked: false,
                    },
                    {
                      title: 'Delay Alerts',
                      desc: 'Stay informed if the bus is delayed or off schedule.',
                      checked: true,
                    },
                  ].map((item, i) => (
                    <div key={i} className="py-4 flex justify-between items-center border-t border-slate-200/60">
                      <div className="pr-4">
                        <h4 className="text-[15px] font-semibold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-[12px] text-[#78909c] font-medium leading-tight">{item.desc}</p>
                      </div>
                      <div className="w-[52px] h-[30px] bg-[#1e293b] rounded-full relative shadow-inner shrink-0 cursor-pointer">
                        <div
                          className={`absolute ${
                            item.checked ? 'right-1' : 'left-1'
                          } top-1 bottom-1 w-[22px] bg-white rounded-full shadow-sm transition-all`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <BottomNav active="alerts" />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-[#ea580c] text-xs sm:text-sm 3xl:text-base font-bold mb-6 select-none">
              <Bell size={16} />
              <span>Smart Notifications</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[44px] 3xl:text-[50px] font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight leading-tight">
              Stay in the loop without opening the app.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg 3xl:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed font-medium">
              NavixGo puts you in control. Customize highly relevant notifications so you only get alerted when it matters most to you.
            </p>
            <div className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-2xl shrink-0">
                  <MapPin className="text-[#0056b3] w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 3xl:text-xl">Proximity Alerts</h4>
                  <p className="text-slate-500 text-sm 3xl:text-base mt-1 font-semibold leading-relaxed">
                    "Bus Near My Stop" dynamically alerts you based on real-time traffic and distance, not just schedule.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-orange-50 p-3 rounded-2xl shrink-0">
                  <ShieldAlert className="text-[#ea580c] w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 3xl:text-xl">Delay & Schedule Changes</h4>
                  <p className="text-slate-500 text-sm 3xl:text-base mt-1 font-semibold leading-relaxed">
                    If a bus goes off route or gets stuck, you're the first to know, preventing unnecessary waiting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Driver App */}
      <section className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[94%] 2xl:max-w-[96%] 3xl:max-w-[98%] mx-auto bg-gradient-to-b from-transparent to-slate-100/50 rounded-[2rem] sm:rounded-[4rem] my-10 relative overflow-hidden border border-white/50">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
          <div className="lg:w-1/2 flex justify-center relative w-full h-[580px] sm:h-[700px] select-none mt-10 lg:mt-0">
            <div className="w-[280px] h-[560px] sm:w-[340px] sm:h-[680px] bg-white rounded-[3rem] sm:rounded-[3.5rem] p-1.5 sm:p-2 relative z-20 transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25),_inset_0_0_0_1px_#e5e7eb,_inset_0_0_0_4px_#f8fafc,_inset_0_0_20px_rgba(0,0,0,0.05)] border-[3px] border-slate-200">
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30 shadow-md"></div>

              <div className="w-full h-full bg-[#eff4fa] rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden flex flex-col relative border border-slate-100/50">
                {/* Simulated Content */}
                <div className="absolute inset-0 z-0 bg-[#f8fafc] pt-24 sm:pt-28 px-4 flex flex-col gap-3">
                  <div className="bg-white p-3.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.04)] border border-slate-100 flex items-center justify-between text-left">
                    <div>
                      <p className="text-[10px] sm:text-[12px] text-slate-500 font-semibold">Next Stop</p>
                      <p className="text-[14px] sm:text-[16px] font-bold text-slate-900">University Campus</p>
                    </div>
                    <p className="text-[12px] sm:text-[14px] font-bold text-[#0056b3] shrink-0">4 mins</p>
                  </div>

                  <div className="bg-white p-3.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.04)] border border-slate-100 flex items-center justify-between text-left opacity-60">
                    <div>
                      <p className="text-[10px] sm:text-[12px] text-slate-500 font-semibold">Upcoming</p>
                      <p className="text-[14px] sm:text-[16px] font-bold text-slate-900">Tech Park</p>
                    </div>
                    <p className="text-[12px] sm:text-[14px] font-bold text-slate-600 shrink-0">12 mins</p>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="pt-5 px-6 flex justify-between items-center z-20 relative">
                  <span className="text-[13px] font-bold text-slate-900">9:41</span>
                  <div className="flex gap-1.5 items-center">
                    <Activity size={14} className="text-slate-900" />
                    <div className="w-5 h-3 border border-slate-900 rounded-sm relative">
                      <div className="absolute left-0.5 right-0.5 top-0.5 bottom-0.5 bg-slate-900 rounded-[1px]"></div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 px-6 relative z-20 flex justify-between items-start">
                  <div className="bg-white/95 backdrop-blur-md rounded-[1.5rem] px-5 py-3 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-white text-left">
                    <p className="text-[10px] font-extrabold text-[#0056b3] uppercase tracking-wider mb-1">
                      Driver Portal
                    </p>
                    <h3 className="font-extrabold text-slate-900 text-[18px]">Route 42A</h3>
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-end p-4 z-20 relative pb-20 sm:pb-28">
                  <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-6 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white mb-2">
                    <div className="flex items-center justify-between mb-4 sm:mb-5 pb-4 sm:pb-5 border-b border-slate-100 text-left">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-50 flex items-center justify-center border border-green-100 shrink-0">
                          <Activity size={20} className="text-green-600 animate-pulse" />
                        </div>
                        <div>
                          <p className="text-[14px] sm:text-[16px] font-bold text-slate-900">Broadcasting</p>
                          <p className="text-[11px] sm:text-[12px] text-slate-500 font-semibold">GPS: Strong</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[18px] sm:text-[20px] font-bold text-[#0056b3]">
                          45 <span className="text-[10px] sm:text-xs text-slate-500 font-semibold">km/h</span>
                        </p>
                      </div>
                    </div>
                    <button className="w-full bg-[#1e293b] hover:bg-black text-white font-bold py-3.5 sm:py-4 rounded-xl sm:rounded-2xl transition-colors shadow-md text-sm sm:text-base">
                      End Trip
                    </button>
                  </div>
                </div>

                {/* Internal Driver bottomnav */}
                <div className="absolute bottom-6 left-4 right-4 sm:left-6 sm:right-6 bg-[#f8fafc] rounded-[1.5rem] sm:rounded-[2rem] px-6 sm:px-8 py-3.5 sm:py-4 flex justify-between items-center shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-white z-30">
                  <div className="flex flex-col items-center gap-1.5 cursor-pointer">
                    <Navigation size={18} className="text-[#3b82f6]" />
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#3b82f6]">Drive</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 cursor-pointer opacity-50">
                    <Clock size={18} className="text-black" />
                    <span className="text-[10px] sm:text-[11px] font-bold text-black">Schedule</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 cursor-pointer opacity-50">
                    <Settings size={18} className="text-black" />
                    <span className="text-[10px] sm:text-[11px] font-bold text-black">System</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[44px] 3xl:text-[50px] font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight leading-tight">
              Empower drivers. Control the fleet.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg 3xl:text-xl text-slate-600 mb-6 sm:mb-8 lg:mb-10 leading-relaxed font-medium">
              No need for expensive telematics installations. The driver’s smartphone becomes the tracking device, maintaining a beautiful, consistent UI experience across the entire platform.
            </p>
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.1)] flex items-start gap-4 sm:gap-5 hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-slate-100 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shrink-0">
                  <Smartphone className="text-slate-800 w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base sm:text-lg 3xl:text-xl">One-Tap Operation</h4>
                  <p className="text-slate-500 text-xs sm:text-sm 3xl:text-base mt-1.5 sm:mt-2 leading-relaxed font-semibold">
                    Drivers simply select their route and tap start. The app runs efficiently in the background without draining excessive battery.
                  </p>
                </div>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.1)] flex items-start gap-4 sm:gap-5 hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-[#ea580c]/10 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shrink-0">
                  <ShieldAlert className="text-[#ea580c] w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base sm:text-lg 3xl:text-xl">Instant Admin Sync</h4>
                  <p className="text-slate-500 text-xs sm:text-sm 3xl:text-base mt-1.5 sm:mt-2 leading-relaxed font-semibold">
                    Administrators see live vehicle locations on their web dashboard instantly, enabling rapid response to fleet issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Row */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-[94%] 2xl:max-w-[96%] 3xl:max-w-[98%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col items-start text-left hover:-translate-y-1.5 transition-transform duration-300">
            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-blue-50 text-[#0056b3] rounded-xl flex items-center justify-center mb-5 sm:mb-6 shrink-0">
              <Smartphone size={22} />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 3xl:text-2xl">Bring Your Own Device</h4>
            <p className="text-slate-500 font-bold leading-relaxed text-xs sm:text-sm 3xl:text-base">
              Turn any driver's smartphone into a powerful tracking device. No dedicated hardware required.
            </p>
          </div>
          <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col items-start text-left hover:-translate-y-1.5 transition-transform duration-300">
            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-orange-50 text-[#ea580c] rounded-xl flex items-center justify-center mb-5 sm:mb-6 shrink-0">
              <Activity size={22} />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 3xl:text-2xl">Real-Time Sync</h4>
            <p className="text-slate-500 font-bold leading-relaxed text-xs sm:text-sm 3xl:text-base">
              Sub-second latency powered by WebSockets ensures passengers always see the live location.
            </p>
          </div>
          <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col items-start text-left hover:-translate-y-1.5 transition-transform duration-300">
            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-5 sm:mb-6 shrink-0">
              <CheckCircle2 size={22} />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 3xl:text-2xl">Rapid Deployment</h4>
            <p className="text-slate-500 font-bold leading-relaxed text-xs sm:text-sm 3xl:text-base">
              Set up your entire fleet in hours, not weeks. Highly scalable for colleges and transit agencies.
            </p>
          </div>
        </div>
      </section>

      {/* Google Play Download Area */}
      <div id="download-area" className="py-16 text-center select-none flex flex-col items-center justify-center">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Download the NavixGo App
        </h3>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="flex items-center gap-3 bg-black text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shrink-0 border border-neutral-800"
        >
          {/* Clean, high-fidelity native Google Play Store SVG path */}
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" viewBox="0 0 24 24" fill="none">
            <path
              d="M3.253 3.518C3.09 3.824 3 4.184 3 4.582v14.836c0 .398.09.758.253 1.064L11.53 12 3.253 3.518z"
              fill="#3b82f6"
            />
            <path
              d="M14.935 8.63L3.253 3.518c.27-.16.574-.242.887-.242.476 0 .937.183 1.285.508L14.935 8.63z"
              fill="#10b981"
            />
            <path
              d="M14.935 15.37L5.425 20.22c-.348.325-.81.508-1.286.508-.312 0-.616-.082-.887-.243L14.935 15.37z"
              fill="#ef4444"
            />
            <path
              d="M20.61 11.23c.52.26.52.88 0 1.14l-5.675 3.002-3.405-3.372 3.405-3.372L20.61 11.23z"
              fill="#f59e0b"
            />
          </svg>
          <div className="text-left leading-none">
            <p className="text-[9px] uppercase font-semibold text-slate-400 tracking-wider">GET IT ON</p>
            <p className="text-sm sm:text-base font-extrabold mt-1">Google Play</p>
          </div>
        </a>
      </div>

      {/* Bottom CTA Section (Shrinked & Simplified) */}
      <section id="contact" className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-[94%] sm:max-w-[85%] 2xl:max-w-[88%] 3xl:max-w-[90%] mx-auto">
        <div className="bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-[0_20px_45px_-10px_rgba(37,99,235,0.3)] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          <div className="relative z-10 max-w-xl text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight 3xl:text-5xl">
              Be part of the future of
              <br />
              smart transit today.
            </h2>
            <p className="text-blue-100 text-sm sm:text-base lg:text-lg mb-6 leading-relaxed max-w-sm md:max-w-md font-medium 3xl:text-xl">
              Try the application, improve transport transparency, and optimize fleet monitoring without the hefty hardware costs.
            </p>

            <form
              onSubmit={handleGetAccess}
              className="flex flex-col sm:flex-row bg-white p-1.5 sm:p-1 rounded-2xl sm:rounded-full w-full max-w-sm shadow-md border border-white"
            >
              <input
                type="email"
                required
                placeholder="Drop your email address..."
                className="bg-transparent border-none outline-none px-4 py-2 sm:py-0 text-sm text-slate-700 w-full placeholder:text-slate-400 font-semibold"
              />
              <button
                type="submit"
                className="bg-[#000000] hover:bg-neutral-900 text-white px-6 py-2.5 rounded-xl sm:rounded-full font-bold active:scale-95 transition-all mt-2 sm:mt-0 whitespace-nowrap shadow-sm shrink-0 text-sm"
              >
                Get early Access
              </button>
            </form>
          </div>

          {/* Premium 3D Isometric Transit Graphic */}
          <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-end relative z-10">
            <img
              src={busesimg2}
              alt="Futuristic Smart Transit Graphic"
              className="w-full max-w-[500px] xl:max-w-[600px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      
      
    </div>
  );
};


export default Home;
