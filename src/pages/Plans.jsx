import React from 'react';
import { Check, Minus, School, Smartphone, Bus } from 'lucide-react';

const Plans = () => {
  const plansData = [
    {
      name: 'Freemium',
      price: 'Free',
      period: '3 Buses • 3 Days',
      desc: 'Allow institutions to evaluate the platform.',
      color: 'bg-slate-50',
      border: 'border border-slate-200',
      text: 'text-slate-900',
      btn: 'bg-white text-slate-900 border-2 border-slate-200 hover:border-slate-400 hover:bg-slate-100',
      btnText: 'Start Freemium',
      features: [
        'Real-Time Bus Tracking',
        'Driver GPS Tracking',
        'Student Notifications',
        'ETA Updates',
        'Route Management',
        'Driver Management',
        'Admin Dashboard',
        'Live Location Updates',
      ],
    },
    {
      name: 'Monthly',
      price: '₹300',
      period: 'Per Bus / Month',
      desc: 'Everything you need to manage and track your transportation operations.',
      color: 'bg-white',
      border: 'border border-slate-200',
      text: 'text-slate-900',
      btn: 'bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg',
      btnText: 'Choose Monthly',
      features: [
        'Real-Time Bus Tracking',
        'Driver GPS Tracking',
        'Student Notifications',
        'ETA Updates',
        'Route Management',
        'Driver Management',
        'Admin Dashboard',
        'Live Location Updates',
        'Email Support',
        'Standard Response Time',
      ],
    },
    {
      name: 'Quarterly',
      price: '₹750',
      originalPrice: '₹900',
      badge: 'Save ₹150 • 17% OFF',
      badgeColor: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
      period: 'Per Bus / Quarter',
      desc: 'Ideal for institutions seeking ongoing support and better operational continuity.',
      color: 'bg-white',
      border: 'border border-slate-200',
      text: 'text-slate-900',
      btn: 'bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg',
      btnText: 'Choose Quarterly',
      features: [
        'Everything in Monthly',
        'Priority Email Support',
        'Faster Issue Resolution',
        'Onboarding Guidance',
        'Route Setup Assistance',
        'Best Practice Recommendations',
      ],
    },
    {
      name: 'Half-Yearly',
      price: '₹1500',
      originalPrice: '₹1800',
      badge: 'Most Popular',
      badgeColor: 'bg-orange-100 text-orange-800 border border-orange-200',
      secondaryBadge: 'Save ₹300',
      secondaryBadgeColor: 'bg-orange-50 text-orange-600',
      period: 'Per Bus / 6 Months',
      desc: 'Best for institutions preparing for a full academic semester.',
      recommended: true,
      color: 'bg-[#fff7ed]',
      border: 'border-2 border-[#ea580c]',
      text: 'text-slate-900',
      btn: 'bg-[#ea580c] text-white hover:bg-[#c24100] shadow-md hover:shadow-xl shadow-orange-500/20',
      btnText: 'Choose Half-Yearly',
      features: [
        'Everything in Quarterly',
        'Dedicated Onboarding Assistance',
        'Fleet Setup Support',
        'Route Configuration Help',
        'Student Notification Setup Assistance',
        'Priority Support Queue',
      ],
    },
    {
      name: 'Annual',
      price: '₹2500',
      originalPrice: '₹3600',
      badge: 'Best Value',
      badgeColor: 'bg-blue-100 text-blue-800 border border-blue-200',
      secondaryBadge: 'Save ₹1100 • 31% OFF',
      secondaryBadgeColor: 'bg-blue-950 text-blue-300',
      period: 'Per Bus / Year',
      desc: 'Complete institutional partnership with premium support and long-term benefits.',
      color: 'bg-gradient-to-b from-[#0b101e] to-slate-900',
      border: 'border border-slate-800',
      text: 'text-white',
      btn: 'bg-white text-slate-900 hover:bg-slate-200 shadow-md hover:shadow-xl',
      btnText: 'Choose Annual',
      features: [
        'Everything in Half-Yearly',
        'Dedicated Success Support',
        'Institution Branding Support',
        'Priority Feature Requests',
        'Early Access to New Features',
        'Premium Customer Support',
        'Quarterly Platform Reviews',
      ],
    },
  ];

  const featureCategories = [
    {
      category: 'TRACKING',
      features: [
        { name: 'Real-Time Bus Tracking', vals: [true, true, true, true, true] },
        { name: 'Driver GPS Tracking', vals: [true, true, true, true, true] },
        { name: 'Current Bus Location', vals: [true, true, true, true, true] },
        { name: 'ETA Updates', vals: [true, true, true, true, true] },
        { name: 'Next Stop Visibility', vals: [true, true, true, true, true] },
      ]
    },
    {
      category: 'STUDENT EXPERIENCE',
      features: [
        { name: 'Student Notifications', vals: [true, true, true, true, true] },
        { name: 'Delay Alerts', vals: [true, true, true, true, true] },
        { name: 'Arrival Notifications', vals: [true, true, true, true, true] },
      ]
    },
    {
      category: 'MANAGEMENT',
      features: [
        { name: 'Route Management', vals: [true, true, true, true, true] },
        { name: 'Driver Management', vals: [true, true, true, true, true] },
        { name: 'Admin Dashboard', vals: [true, true, true, true, true] },
      ]
    },
    {
      category: 'SUPPORT',
      features: [
        { name: 'Standard Support', vals: [false, true, true, true, true] },
        { name: 'Priority Support', vals: [false, false, true, true, true] },
        { name: 'Dedicated Onboarding', vals: [false, false, false, true, true] },
        { name: 'Premium Support', vals: [false, false, false, false, true] },
        { name: 'Dedicated Success Assistance', vals: [false, false, false, false, true] },
      ]
    },
    {
      category: 'SERVICES',
      features: [
        { name: 'Route Setup Guidance', vals: [false, false, true, true, true] },
        { name: 'Fleet Configuration Assistance', vals: [false, false, false, true, true] },
        { name: 'Institution Branding', vals: [false, false, false, false, true] },
        { name: 'Quarterly Success Reviews', vals: [false, false, false, false, true] },
        { name: 'Priority Feature Requests', vals: [false, false, false, false, true] },
      ]
    }
  ];

  return (
    <div className="pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1600px] mx-auto w-full overflow-x-hidden">
      <div className="text-center mb-16 select-none">
        <h1 className="text-3xl sm:text-4xl md:text-5xl 3xl:text-6xl font-700 font-satoshi text-slate-900 tracking-tight mb-4">
          NavixGo Membership Plans
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          The core platform works great on every plan. Higher plans provide more support, services, and onboarding assistance for a smoother institutional rollout.
        </p>
      </div>

      {/* Free Trial Card */}
      <div className="flex justify-center mb-16">
        {(() => {
          const plan = plansData[0]; // Freemium
          return (
            <div
              className={`w-full min-w-0 max-w-[340px] xl:max-w-[360px] rounded-[2.5rem] p-8 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 ${plan.color} ${plan.border || ''} ${plan.text}`}
            >
              <div className="mb-6 text-center">
                <h3 className={`text-2xl lg:text-3xl font-700 font-satoshi mb-2 ${plan.text}`}>{plan.name}</h3>
                <div className="flex justify-center items-end gap-2 mb-1">
                  <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                </div>
                <span className="text-sm font-600 opacity-80 block mb-4 tracking-wide uppercase">{plan.period}</span>
                <p className="text-sm opacity-90 leading-relaxed font-medium min-h-[40px]">{plan.desc}</p>
              </div>

              <ul className="grid grid-cols-1 2xl:grid-cols-2 gap-x-4 gap-y-3 mb-8 flex-1 text-left border-t border-slate-200/20 pt-6 min-w-0">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 opacity-90 text-green-500" strokeWidth={3} />
                    <span className="opacity-90 font-medium leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => { window.location.href = 'https://admin.navixgo.in/signup/'; }}
                className={`w-full py-3.5 rounded-xl transition-all active:scale-95 duration-200 select-none font-bold text-sm tracking-wide mt-auto ${plan.btn}`}
              >
                {plan.btnText}
              </button>
            </div>
          );
        })()}
      </div>

      {/* Paid Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6 lg:gap-8 mb-24 items-stretch">
        {plansData.slice(1).map((plan, i) => (
          <div
            key={i}
            className={`w-full min-w-0 rounded-[2rem] p-6 lg:p-7 xl:p-8 relative flex flex-col h-full shadow-sm hover:shadow-2xl transition-all duration-300 ${plan.color} ${plan.border || ''} ${plan.text}`}
          >
            {/* Top Badges */}
            <div className="flex flex-col gap-2 mb-6 h-12">
              {plan.badge && (
                <div className={`inline-flex self-start text-xs font-bold font-satoshi px-3 py-1 rounded-full whitespace-nowrap shadow-sm select-none ${plan.badgeColor}`}>
                  {plan.badge}
                </div>
              )}
              {plan.secondaryBadge && (
                <div className={`inline-flex self-start text-[11px] font-bold font-satoshi px-2 py-0.5 rounded-full whitespace-nowrap select-none ${plan.secondaryBadgeColor}`}>
                  {plan.secondaryBadge}
                </div>
              )}
            </div>

            <div className="mb-6 text-left">
              <h3 className={`text-xl lg:text-2xl font-700 font-satoshi mb-2 ${plan.text}`}>{plan.name}</h3>
              <div className="flex items-end gap-2 mb-1">
                <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                {plan.originalPrice && (
                  <span className="text-lg line-through opacity-50 font-semibold pb-1">{plan.originalPrice}</span>
                )}
              </div>
              <span className="text-xs font-600 opacity-80 block mb-4 tracking-wide uppercase">{plan.period}</span>
              <p className="text-sm opacity-90 leading-relaxed font-medium min-h-[40px]">{plan.desc}</p>
            </div>

            <ul className="grid grid-cols-1 2xl:grid-cols-2 gap-x-4 gap-y-3 mb-8 flex-1 text-left border-t border-slate-200/20 pt-6 min-w-0">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-start gap-2 text-[13px] xl:text-sm">
                  <Check className="w-4 h-4 shrink-0 mt-0.5 opacity-90 text-green-500" strokeWidth={3} />
                  <span className="opacity-90 font-medium leading-tight">{f}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => { window.location.href = 'https://admin.navixgo.in/signup/'; }}
              className={`w-full py-3.5 rounded-xl transition-all active:scale-95 duration-200 select-none font-bold text-sm tracking-wide mt-auto ${plan.btn}`}
            >
              {plan.btnText}
            </button>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="mb-24 overflow-x-auto shadow-sm border border-slate-200 rounded-[2rem] bg-white p-6 md:p-10">
        <div className="mb-8 text-left">
          <h2 className="text-2xl font-bold font-satoshi text-slate-900">Compare Features & Services</h2>
          <p className="text-slate-500 text-sm mt-1">See exactly what is included in every plan.</p>
        </div>
        <table className="w-full min-w-[900px] border-collapse text-left">
          <thead>
            <tr className="border-b-2 border-slate-100 select-none">
              <th className="py-4 px-4 text-xs tracking-wider uppercase font-bold text-slate-400 w-1/4">Feature</th>
              {plansData.map((p) => (
                <th key={p.name} className="py-4 px-4 text-center font-bold text-slate-900 text-sm">
                  {p.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featureCategories.map((categoryGroup, idx) => (
              <React.Fragment key={idx}>
                {/* Category Header */}
                <tr className="bg-slate-50/50">
                  <td colSpan={6} className="py-5 px-4 text-xs font-bold text-slate-500 tracking-widest uppercase border-t border-slate-100">
                    {categoryGroup.category}
                  </td>
                </tr>
                {/* Features rows */}
                {categoryGroup.features.map((row, i) => (
                  <tr key={i} className="border-t border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-4 text-sm font-600 text-slate-700">{row.name}</td>
                    {row.vals.map((val, j) => (
                      <td key={j} className="py-4 px-4 text-center">
                        {val ? (
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mx-auto text-green-600">
                            <Check size={14} strokeWidth={3} />
                          </div>
                        ) : (
                          <div className="w-6 h-6 flex items-center justify-center mx-auto text-slate-200">
                            <Minus size={16} strokeWidth={3} />
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Value Props matched to the design style */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 max-w-5xl mx-auto text-center">
        <div className="hover:-translate-y-1 transition-transform duration-300">
          <div className="w-16 h-16 bg-blue-50 text-[#0056b3] rounded-full flex items-center justify-center mx-auto mb-6 shrink-0">
            <School size={32} />
          </div>
          <h3 className="text-2xl font-600 font-satoshi text-slate-900 mb-3">Perfect For Institutions</h3>
          <p className="text-slate-600 font-medium">
            Ideal for Schools, Colleges, Universities, and Campus Transport Services looking to digitize their fleets affordably.
          </p>
        </div>
        <div className="hover:-translate-y-1 transition-transform duration-300">
          <div className="w-16 h-16 bg-orange-50 text-[#ea580c] rounded-full flex items-center justify-center mx-auto mb-6 shrink-0">
            <Smartphone size={32} />
          </div>
          <h3 className="text-2xl font-600 font-satoshi text-slate-900 mb-3">Why NavixGo?</h3>
          <p className="text-slate-600 font-medium">
            No expensive GPS hardware required. Driver smartphone acts as a live GPS tracker with real-time WebSocket architecture.
          </p>
        </div>
      </div>

      {/* Pitch CTA */}
      <div className="bg-gradient-to-br from-slate-900 to-[#0b101e] rounded-[3rem] p-12 text-center max-w-4xl mx-auto shadow-2xl mt-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(circle at top right, #ea580c 0%, transparent 40%)' }}></div>
        <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm shrink-0 border border-white/20 relative z-10">
          <Bus size={24} />
        </div>
        <h2 className="text-2xl md:text-3xl font-700 font-satoshi text-white mb-8 leading-snug relative z-10">
          “NavixGo is a smart campus transport platform that enables institutions to provide real-time bus tracking,
          ETA updates, and student notifications using driver smartphones.”
        </h2>
        <button
          onClick={() => { window.location.href = 'https://admin.navixgo.in/signup/'; }}
          className="bg-[#ea580c] text-white px-10 py-4 rounded-full hover:bg-orange-500 active:scale-95 transition-all shadow-lg text-lg select-none relative z-10 font-bold"
        >
          Start Freemium Now
        </button>
      </div>
    </div>
  );
};

export default Plans;
