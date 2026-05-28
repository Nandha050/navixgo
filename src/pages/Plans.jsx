import React from 'react';
import { Check, Minus, School, Smartphone, Bus } from 'lucide-react';
import Testimonials from '../components/common/Testimonials';

const Plans = ({ setCurrentPage }) => {
  const plansData = [
    {
      name: 'Free Trial',
      price: 'Free',
      period: 'for 3 Buses upto 3 Days',
      desc: 'Experience all premium features completely free.',
      color: 'bg-slate-100',
      text: 'text-slate-900',
      btn: 'bg-white text-slate-900 border-2 border-slate-200 hover:border-slate-400 hover:bg-slate-50',
      features: [
        'Real-time bus tracking',
        'Driver GPS tracking',
        'Student notifications',
        'ETA updates',
        'Route & stop management',
        'Admin dashboard',
        'Live location updates',
      ],
    },
    {
      name: 'Monthly',
      price: '₹300',
      period: 'per Bus / Month',
      desc: 'All Free Trial Features Plus:',
      color: 'bg-[#f8fafc]',
      border: 'border border-slate-200',
      text: 'text-slate-900',
      btn: 'bg-white text-slate-900 border-2 border-slate-200 hover:border-slate-400 hover:bg-slate-50',
      features: [
        'Unlimited live tracking',
        'Current & next stop visibility',
        'Real-time ETA',
        'Bus arrival alerts',
        'Delay notifications',
        'Driver & route management',
      ],
    },
    {
      name: 'Quarterly',
      price: '₹750',
      period: 'per Bus / 3 Months',
      desc: 'All Monthly Features Plus:',
      color: 'bg-[#f8fafc]',
      border: 'border border-slate-200',
      text: 'text-slate-900',
      btn: 'bg-white text-slate-900 border-2 border-slate-200 hover:border-slate-400 hover:bg-slate-50',
      features: [
        'Faster live location refresh',
        'Personalized student notifications',
        'Live route visibility',
        'Trip history access',
        'Priority support',
      ],
    },
    {
      name: 'Half-Yearly',
      price: '₹1500',
      period: 'per Bus / 6 Months',
      desc: 'All Quarterly Features Plus:',
      recommended: true,
      color: 'bg-[#fff7ed]',
      border: 'border-2 border-[#f97316]',
      text: 'text-slate-900',
      btn: 'bg-[#ea580c] text-white hover:bg-[#c24100] hover:shadow-lg shadow-orange-500/20',
      features: [
        'Advanced admin dashboard',
        'Live fleet monitoring',
        'Driver activity tracking',
        'Route performance monitoring',
        'Improved ETA accuracy',
      ],
    },
    {
      name: 'Annual',
      price: '₹2500',
      period: 'per Bus / 12 Months',
      desc: 'All Half-Yearly Features Plus:',
      color: 'bg-[#0b101e]',
      text: 'text-white',
      btn: 'bg-white text-slate-900 hover:bg-slate-200 hover:shadow-lg',
      features: [
        'Lowest cost per month',
        'Dedicated onboarding support',
        'Institution branding support',
        'Early access to upcoming features',
        'Premium customer support',
      ],
    },
  ];

  const featureTable = [
    { name: 'Real-Time Bus Tracking', vals: [true, true, true, true, true] },
    { name: 'Driver GPS Tracking', vals: [true, true, true, true, true] },
    { name: 'Current Bus Location', vals: [true, true, true, true, true] },
    { name: 'Next Stop Visibility', vals: [true, true, true, true, true] },
    { name: 'ETA Updates', vals: [true, true, true, true, true] },
    { name: 'Student Notifications', vals: [true, true, true, true, true] },
    { name: 'Delay Alerts', vals: [true, true, true, true, true] },
    { name: 'Route Management', vals: [true, true, true, true, true] },
    { name: 'Driver Management', vals: [true, true, true, true, true] },
    { name: 'Trip History', vals: [false, false, true, true, true] },
    { name: 'Live Fleet Dashboard', vals: [false, false, false, true, true] },
    { name: 'Priority Support', vals: [false, false, true, true, true] },
    { name: 'Institution Branding', vals: [false, false, false, false, true] },
  ];

  return (
    <div className="pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-[94%] 2xl:max-w-[96%] 3xl:max-w-[98%] mx-auto w-full">
      <div className="text-center mb-16 select-none">
        <h1 className="text-3xl sm:text-4xl md:text-6xl 3xl:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
          NavixGo Membership Plans
        </h1>
        <p className="text-base sm:text-lg md:text-xl 3xl:text-2xl text-slate-600 font-medium">
          Pick your perfect plan and enjoy features the whole institution will love.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-24">
        {plansData.map((plan, i) => (
          <div
            key={i}
            className={`rounded-[2rem] p-6 relative flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-300 ${
              plan.color
            } ${plan.border || ''} ${plan.text}`}
          >
            {plan.recommended && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f97316] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-md flex items-center gap-1 select-none">
                ⭐ Recommended
              </div>
            )}
            <div className="mb-6 text-left">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-extrabold">{plan.price}</span>
              </div>
              <span className="text-xs font-semibold opacity-80 block mb-4">{plan.period}</span>
              <p className="text-sm font-bold opacity-90 leading-snug">{plan.desc}</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1 text-left">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 shrink-0 mt-0.5 opacity-80" />
                  <span className="opacity-90 font-medium">{f}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => { window.location.href = 'https://where-are-you-admin-frontend.vercel.app/'; }}
              className={`w-full py-3 rounded-xl font-bold transition-all active:scale-95 duration-200 select-none ${plan.btn}`}
            >
              Select Plan
            </button>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="mb-24 overflow-x-auto pb-4 shadow-sm border border-slate-100 rounded-[2rem] bg-white p-6 md:p-8">
        <table className="w-full min-w-[800px] border-collapse">
          <thead>
            <tr className="border-b border-slate-200 select-none">
              <th className="py-6 px-4 text-left text-lg font-bold text-slate-900 w-1/4">Platform Features</th>
              {plansData.map((p) => (
                <th key={p.name} className="py-6 px-4 text-center font-bold text-slate-900">
                  {p.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featureTable.map((row, i) => (
              <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 text-sm font-semibold text-slate-700 text-left">{row.name}</td>
                {row.vals.map((val, j) => (
                  <td key={j} className="py-4 px-4 text-center">
                    {val ? (
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mx-auto text-green-600">
                        <Check size={14} strokeWidth={3} />
                      </div>
                    ) : (
                      <div className="w-6 h-6 flex items-center justify-center mx-auto text-slate-300">
                        <Minus size={16} strokeWidth={3} />
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Value Props matched to the design style */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 max-w-5xl 3xl:max-w-6xl mx-auto text-center">
        <div className="hover:-translate-y-1 transition-transform duration-300">
          <div className="w-16 h-16 bg-blue-50 text-[#0056b3] rounded-full flex items-center justify-center mx-auto mb-6 shrink-0">
            <School size={32} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3 3xl:text-3xl">Perfect For Institutions</h3>
          <p className="text-slate-600 font-medium 3xl:text-lg">
            Ideal for Schools, Colleges, Universities, and Campus Transport Services looking to digitize their fleets
            affordably.
          </p>
        </div>
        <div className="hover:-translate-y-1 transition-transform duration-300">
          <div className="w-16 h-16 bg-orange-50 text-[#ea580c] rounded-full flex items-center justify-center mx-auto mb-6 shrink-0">
            <Smartphone size={32} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3 3xl:text-3xl">Why NavixGo?</h3>
          <p className="text-slate-600 font-medium 3xl:text-lg">
            No expensive GPS hardware required. Driver smartphone acts as a live GPS tracker with real-time WebSocket
            architecture.
          </p>
        </div>
      </div>

      <Testimonials />

      {/* Pitch CTA */}
      <div className="bg-[#f8fafc] rounded-[3rem] p-12 text-center max-w-4xl 3xl:max-w-5xl mx-auto border border-slate-100 shadow-sm mt-12">
        <div className="w-12 h-12 bg-[#ea580c] text-white rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/30 shrink-0">
          <Bus size={24} />
        </div>
        <h2 className="text-2xl md:text-3xl 3xl:text-4xl font-extrabold text-slate-900 mb-8 leading-snug">
          “NavixGo is a smart campus transport platform that enables institutions to provide real-time bus tracking,
          ETA updates, and student notifications using driver smartphones as live GPS devices.”
        </h2>
        <button
          onClick={() => { window.location.href = 'https://where-are-you-admin-frontend.vercel.app/'; }}
          className="bg-[#0056b3] text-white px-10 py-4 rounded-full font-bold hover:bg-[#004494] active:scale-95 transition-all shadow-md text-lg 3xl:text-xl select-none"
        >
          Start Free Trial Now
        </button>
      </div>
    </div>
  );
};

export default Plans;
