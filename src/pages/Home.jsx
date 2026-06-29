import React, { useState } from 'react';
import SEO from '../components/SEO';
import {
  Bus,
  MapPin,
  Smartphone,
  Activity,
  CheckCircle2,
  Bell,
  ShieldAlert,
  Clock,
  Navigation,
  ArrowRight,
  BarChart3,
  Users,
  Zap,
} from 'lucide-react';
import BottomNav from '../components/common/BottomNav';
import busesimg2 from '../assets/image2.png';
import googleIcon from '../assets/GetItOnGooglePlay_Badge_Web_color_English.svg';
import transitBusBg from '../assets/transit_bus_bg.png';
import { motion } from 'framer-motion';

/* ─── Real Screenshots ────────────────────────────── */
import screenshotLive from '../assets/livetracking.png';
import screenshotNotif from '../assets/notification.png';
import screenshotDriver from '../assets/driver.png';
import screenshotDashboard from '../assets/orgdashboard.png';

/* ════════════════════════════════════════════════════
   IPHONE MOCKUP FRAME
   A clean, minimal phone shell — Tailwind only
════════════════════════════════════════════════════ */
// SSD: Since the product is a mobile app, we want to show it in a realistic phone frame. Instead of using a static image of a phone, we create a flexible "shell" component that can wrap any screenshot. This allows us to easily swap out the screen content while maintaining a consistent, polished presentation across the site.

/* ════════════════════════════════════════════════════
   FLOATING INFO CARD — glassmorphism chip
════════════════════════════════════════════════════ */
const InfoChip = ({ icon, label, sub, className = '' }) => (
  <div
    className={`flex items-center gap-3 rounded-2xl px-4 py-3 shadow-lg ${className}`}
    style={{
      background: 'rgba(255,255,255,0.88)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255,255,255,0.9)',
    }}
  >
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <p className="text-[13px] font-bold text-slate-900 font-satoshi leading-tight m-0">{label}</p>
      {sub && <p className="text-[11px] text-slate-500 font-satoshi font-medium mt-0.5 m-0 leading-tight">{sub}</p>}
    </div>
  </div>
);

/* ════════════════════════════════════════════════════
   PRODUCT SHOWCASE TABS config
════════════════════════════════════════════════════ */
const TABS = [
  {
    id: 'student',
    label: 'Student App',
    emoji: '🎓',
    screenshot: screenshotLive,
    accentColor: '#2563eb',
    title: 'Live bus tracking on Google Maps',
    desc: 'Students see the exact bus position in real time, with ETA countdown and upcoming stops — all on a familiar Google Maps interface.',
    bullets: [
      'Live bus pin on Google Maps',
      'ETA countdown to your stop',
      'Upcoming stop list at a glance',
    ],
  },
  {
    id: 'driver',
    label: 'Driver App',
    emoji: '🚌',
    screenshot: screenshotDriver,
    accentColor: '#ea580c',
    title: 'One-tap trip control for drivers',
    desc: "Drivers see their assigned bus, route, and a single Start Trip button. No clutter — just tap and the GPS broadcast begins automatically.",
    bullets: [
      'Bus & route assignment at a glance',
      'One-tap trip start broadcasting',
      'Live map & telemetry access',
    ],
  },
  {
    id: 'notifications',
    label: 'Smart Alerts',
    emoji: '🔔',
    screenshot: screenshotNotif,
    accentColor: '#7c3aed',
    title: 'Granular notification control',
    desc: 'Passengers configure exactly which events trigger an alert — reducing noise while keeping you informed of what matters most.',
    bullets: [
      'Proximity-based bus near stop alerts',
      'Delay & schedule change notices',
      'Fully customisable per-alert toggles',
    ],
  },
  {
    id: 'dashboard',
    label: 'Admin Dashboard',
    emoji: '📊',
    screenshot: screenshotDashboard,
    accentColor: '#059669',
    title: 'Full fleet visibility for admins',
    desc: 'Never get another panicked call from a parent asking where the bus is. Monitor every vehicle and trip in real time — no hardware, no installation.',
    bullets: [
      'Live fleet map across all routes',
      'Trip history & analytics',
      'Instant alerts for fleet issues',
    ],
  },
];

import { useNavigate } from 'react-router-dom';

/* ════════════════════════════════════════════════════
   HOME PAGE
════════════════════════════════════════════════════ */
const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('student');
  const active = TABS.find(t => t.id === activeTab);

  const handleGetAccess = (e) => {
    e.preventDefault();
    window.location.href = 'https://admin.navixgo.in/signup/';
  };

  return (
    <div className="w-full">
      <SEO
        title="NavixGo | Real-Time Bus Tracking for Smarter Campus Mobility"
        description="NavixGo offers real-time bus tracking and smart campus mobility software for colleges, schools, and shuttle services. No GPS hardware needed."
        url="https://navixgo.in/"
        keywords="Real-Time Bus Tracking, Campus Mobility, College Bus Tracking, School Bus Tracking, Fleet Management, Transportation Software, Student Bus Tracking, Bus ETA, Smart Campus, Campus Transportation, Live Bus Tracking, GPS Bus Tracking, Shuttle Tracking"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is NavixGo?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "NavixGo is a Real-Time Bus Tracking and Campus Mobility Platform that allows educational institutions and organizations to track their fleets without expensive GPS hardware."
              }
            },
            {
              "@type": "Question",
              "name": "How does the real-time bus tracking work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It transforms any driver's smartphone into a live GPS tracker. The driver app broadcasts the location, and students or employees can track the bus on a live Google Map via the passenger app."
              }
            },
            {
              "@type": "Question",
              "name": "Is dedicated GPS hardware required?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, NavixGo requires zero hardware installation. It operates entirely through the driver's smartphone, making it a highly cost-effective fleet management solution."
              }
            },
            {
              "@type": "Question",
              "name": "Who can use NavixGo?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "NavixGo is designed for colleges, universities, schools, corporate organizations, and shuttle services looking for reliable institutional transportation software."
              }
            },
            {
              "@type": "Question",
              "name": "Does NavixGo provide ETA for buses?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our smart campus software provides live ETA countdowns to specific stops with 99.8% accuracy based on real-time traffic and GPS sync."
              }
            },
            {
              "@type": "Question",
              "name": "Can passengers receive notifications?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, passengers receive smart alerts such as 'Bus Near Your Stop' and delay notices, which they can customize completely within the student bus tracking app."
              }
            },
            {
              "@type": "Question",
              "name": "What features does the Admin Dashboard include?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Administrators get full fleet visibility across all routes, trip history, instant alerts for fleet issues, and passenger/driver management."
              }
            },
            {
              "@type": "Question",
              "name": "Is the app available on both iOS and Android?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "NavixGo is launching soon and will be available as a cross-platform mobile application, accessible on Android via Google Play and iOS via the App Store."
              }
            },
            {
              "@type": "Question",
              "name": "How quickly can we deploy NavixGo for our campus?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Since there is no hardware to install, deployment is rapid. You can set up your entire fleet in hours rather than weeks."
              }
            },
            {
              "@type": "Question",
              "name": "Is NavixGo secure?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we prioritize security and privacy, ensuring that live location data is only accessible to authorized passengers and administrators."
              }
            },
            {
              "@type": "Question",
              "name": "Can we manage multiple routes simultaneously?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. The platform is designed for scalable fleet management, allowing admins to oversee multiple routes and buses concurrently."
              }
            },
            {
              "@type": "Question",
              "name": "How does it help reduce student wait times?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "By providing real-time visibility and accurate ETA countdowns, students know exactly when to leave for their stop, eliminating long waits in bad weather."
              }
            },
            {
              "@type": "Question",
              "name": "What happens if a driver loses internet connection?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The app caches location points locally and syncs them automatically to the server the moment the connection is restored."
              }
            },
            {
              "@type": "Question",
              "name": "Does the app consume a lot of battery?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The driver app is heavily optimized for background efficiency to minimize battery drain while ensuring a consistent GPS broadcast."
              }
            },
            {
              "@type": "Question",
              "name": "How do I get early access?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can sign up for early access on our website by entering your email address, or by visiting our admin signup portal."
              }
            }
          ]
        }}
      />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="pt-12 pb-0 px-4 sm:px-6 lg:px-8 max-w-[92%] mx-auto">
        {/* ── Text copy ── */}
        <div className="text-center max-w-3xl mx-auto pb-14">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-orange-700 text-base font-semibold font-satoshi">Zero Hardware Installation Required</span>
          </div>

          <h1 className="text-6xl sm:text-6xl font-bold font-satoshi text-slate-900 tracking-tight leading-[1.1] mb-5">
            Campus Bus Tracking.
            {' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">
              No Hardware. No Guessing.
            </span>
          </h1>

          <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed">
            Transform any driver's smartphone into a live GPS tracker. Real-time ETA, route visualisation, and smart alerts for every passenger and administrator.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/contact-us')}
              className="w-full sm:w-auto bg-slate-900 text-white font-semibold font-satoshi px-8 py-3.5 rounded-full hover:bg-slate-800 active:scale-95 transition-colors flex items-center justify-center gap-2 text-base shadow-lg shadow-slate-900/20"
            >
              Request a Pilot Program <ArrowRight size={16} />
            </button>
            <button
              onClick={() => navigate('/plans')}
              className="w-full sm:w-auto bg-white text-slate-700 font-semibold font-satoshi px-8 py-3.5 rounded-full hover:bg-slate-50 active:scale-95 transition-colors border border-slate-200 shadow-sm text-base"
            >
              View Plans
            </button>
          </div>
        </div>

        {/* ── Hero Device ── */}
        <div className="relative flex items-end justify-center gap-6 lg:gap-12">
          {/* Left chips */}
          <div className="hidden lg:flex flex-col gap-3 mb-20 flex-shrink-0">
            <InfoChip
              icon={<Bus size={16} className="text-blue-600" />}
              label="Bus 42 – Express"
              sub="Live Tracking Active"
            />
            <InfoChip
              icon={<MapPin size={16} className="text-orange-500" />}
              label="ETA: 4 mins"
              sub="Sangareddy Campus"
            />
          </div>

          {/* Primary image */}
          <div className="relative z-10 w-full max-w-4xl mx-auto px-2 sm:px-4 lg:px-0">
            {/* Soft glow behind image */}
            <div className="absolute inset-0 rounded-full blur-3xl opacity-30 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse,rgba(37,99,235,.4),transparent)' }} />
            <img src={screenshotDashboard} fetchPriority="high" alt="NavixGo live tracking" className="relative z-10 w-full h-auto object-contain rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200/50" />
          </div>

          {/* Right chips */}
          <div className="hidden lg:flex flex-col gap-3 mb-20 flex-shrink-0">
            <InfoChip
              icon={<Bell size={16} className="text-violet-600" />}
              label="Bus Near Your Stop"
              sub="Smart notification sent"
            />
            <InfoChip
              icon={<Activity size={16} className="text-green-600" />}
              label="99.8% ETA Accuracy"
              sub="Real-time GPS sync"
            />
          </div>
        </div>

        {/* Fade-out bottom */}
        <div className="h-24 -mt-1"
          style={{ background: 'linear-gradient(to bottom,transparent,#fafafa)' }} />
      </section>

      {/* ══════════════════════════════════════════
          AUDIENCE SECTION (Who Can Use NavixGo)
      ══════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[92%] mx-auto relative">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-6">
            <Users size={14} className="text-slate-600" />
            <span className="text-slate-700 text-xs font-semibold font-satoshi uppercase tracking-wider">Built For Everyone</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-satoshi text-slate-900 tracking-tight mb-4">
            Who Can Use NavixGo?
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            If your students are guessing when their bus arrives, parents are flooding your office with calls, and your drivers have no way to flag delays — NavixGo fixes all three. No hardware. No IT project. Live in hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6 lg:gap-8">
          {[
            {
              icon: "🎓",
              title: "Colleges & Universities",
              desc: "Provide students with real-time bus tracking, accurate arrival updates, and a better campus commuting experience.",
              color: "blue"
            },
            {
              icon: "🏫",
              title: "Schools",
              desc: "Help parents, students, and administrators stay informed with reliable school bus visibility and notifications.",
              color: "orange"
            },
            {
              icon: "🏢",
              title: "Organizations",
              desc: "Manage employee transportation and shuttle operations with live tracking and operational transparency.",
              color: "purple"
            },
            {
              icon: "🚌",
              title: "Shuttle Services",
              desc: "Monitor routes, improve passenger communication, and streamline daily transport operations.",
              color: "green"
            }
          ].map((item, i) => {
            const colorMap = {
              blue: { bg: 'bg-blue-50', text: 'text-blue-600', borderHover: 'hover:border-blue-200', shadowHover: 'hover:shadow-blue-900/5' },
              orange: { bg: 'bg-orange-50', text: 'text-orange-600', borderHover: 'hover:border-orange-200', shadowHover: 'hover:shadow-orange-900/5' },
              purple: { bg: 'bg-purple-50', text: 'text-purple-600', borderHover: 'hover:border-purple-200', shadowHover: 'hover:shadow-purple-900/5' },
              green: { bg: 'bg-emerald-50', text: 'text-emerald-600', borderHover: 'hover:border-emerald-200', shadowHover: 'hover:shadow-emerald-900/5' }
            };
            const theme = colorMap[item.color];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                className={`bg-white rounded-3xl p-8 border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl ${theme.borderHover} ${theme.shadowHover} flex flex-col items-start text-left group`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${theme.bg} transition-transform duration-300 group-hover:scale-110`}>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h4 className="font-bold font-satoshi text-slate-900 text-xl mb-3">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed m-0">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRODUCT SHOWCASE — TABS
      ══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[92%] mx-auto border-t border-slate-100">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold font-satoshi mb-4">
            <Smartphone size={12} /> Product Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-satoshi text-slate-900 tracking-tight mt-2 mb-3">
            Three apps. One platform.
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Designed for every stakeholder — students, drivers, and administrators.
          </p>
        </div>

        {/* Tab strip */}
        <div className="flex justify-center mb-10">
          <div
            className="flex gap-1 flex-wrap justify-center p-1.5 rounded-2xl border border-slate-200 bg-slate-50"
          >
            {TABS.map(t => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold font-satoshi transition-colors cursor-pointer
                  ${activeTab === t.id
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                    : 'text-slate-500 hover:text-slate-700 hover:bg-white/60'
                  }`}
              >
                <span>{t.emoji}</span>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Device */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <div
              className="absolute -inset-8 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: `radial-gradient(ellipse,${active.accentColor},transparent)` }}
            />
            <img src={active.screenshot} alt={active.label} width="300" height="500" />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 text-left">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-satoshi mb-4"
              style={{ background: `${active.accentColor}14`, color: active.accentColor, border: `1px solid ${active.accentColor}28` }}
            >
              {active.emoji} {active.label}
            </span>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-satoshi text-slate-900 tracking-tight leading-tight mb-4 mt-2">
              {active.title}
            </h3>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              {active.desc}
            </p>

            <ul className="space-y-4 mb-8">
              {active.bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: `${active.accentColor}14` }}
                  >
                    <CheckCircle2 size={14} style={{ color: active.accentColor }} />
                  </div>
                  <span className="text-slate-700 font-medium text-sm font-satoshi">{b}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => { window.location.href = 'https://admin.navixgo.in/signup/'; }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-slate-200 text-slate-700 font-semibold font-satoshi text-sm hover:border-slate-900 hover:text-slate-900 transition-colors"
            >
              Explore Product <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURE 1 — LIVE TRACKING (Student)
      ══════════════════════════════════════════ */}
      <section id="features" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[92%] mx-auto border-t border-slate-100">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-24">
          {/* Text */}
          <div className="lg:w-1/2 text-left order-2 lg:order-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold font-satoshi mb-4">
              <MapPin size={12} /> Live Tracking
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-satoshi text-slate-900 tracking-tight leading-tight mb-4 mt-2">
              Every student knows exactly where their bus is.
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              No more guessing. NavixGo shows the live bus position on Google Maps with ETA and upcoming stops — right in every student's pocket.
            </p>

            <div className="space-y-5 mb-8">
              {[
                { icon: <MapPin size={18} />, title: 'Google Maps Integration', desc: 'Accurate, familiar map tiles with a live bus pin updated every second.', color: '#2563eb' },
                { icon: <Bell size={18} />, title: 'Smart Proximity Alerts', desc: 'Get notified the moment your bus is approaching your specific stop.', color: '#ea580c' },
                { icon: <CheckCircle2 size={18} />, title: 'Organised Stop List', desc: 'See all stops in order with live ETA for each — at a single glance.', color: '#059669' },
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${f.color}12` }}>
                    <span style={{ color: f.color }}>{f.icon}</span>
                  </div>
                  <div>
                    <h6 className="font-700 font-satoshi text-slate-900 text-sm mb-0.5">{f.title}</h6>
                    <p className="text-slate-500 text-sm leading-relaxed m-0">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate('/plans')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-slate-200 text-slate-700 font-semibold font-satoshi text-sm hover:border-slate-900 hover:text-slate-900 transition-colors"
            >
              Learn more <ArrowRight size={14} />
            </button>
          </div>

          {/* Device */}
          <div className="lg:w-1/2 flex justify-center relative order-1 lg:order-2">
            <div className="absolute -inset-8 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse,rgba(37,99,235,.45),transparent)' }} />

            <div className="relative">
              {/* Chips pinned to device */}
              <div className="absolute -left-32 top-20 z-10 hidden lg:block">
                <InfoChip
                  icon={<Navigation size={14} className="text-blue-600" />}
                  label="ETA: 2 min"
                  sub="Sangareddy Campus"
                />
              </div>
              <div className="absolute -right-28 bottom-28 z-10 hidden lg:block">
                <InfoChip
                  icon={<Activity size={14} className="text-green-600" />}
                  label="Live GPS"
                  sub="Signal strong"
                />
              </div>
              <img src={screenshotLive} alt="Live bus tracking" width="300" height="500" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURE 2 — SMART NOTIFICATIONS
      ══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[92%] mx-auto border-t border-slate-100">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-24">
          {/* Device — left */}
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="absolute -inset-8 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse,rgba(124,58,237,.4),transparent)' }} />

            <div className="relative">
              <div className="absolute -right-32 top-20 z-10 hidden lg:block">
                <InfoChip
                  icon={<Bell size={14} className="text-violet-600" />}
                  label="Bus Arrived"
                  sub="Your stop — now"
                />
              </div>
              <div className="absolute -left-28 bottom-28 z-10 hidden lg:block">
                <InfoChip
                  icon={<ShieldAlert size={14} className="text-orange-500" />}
                  label="Delay Alert"
                  sub="Bus delayed 5 min"
                />
              </div>
              <img src={screenshotNotif} alt="Smart notifications" width="300" height="500" />
            </div>
          </div>

          {/* Text — right */}
          <div className="lg:w-1/2 text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-xs font-semibold font-satoshi mb-4">
              <Bell size={12} /> Smart Notifications
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-satoshi text-slate-900 tracking-tight leading-tight mb-4 mt-2">
              Stay informed without opening the app.
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              NavixGo puts you in control. Customise exactly which events trigger a notification — so you only hear about what matters most to you.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: <MapPin size={15} />, title: 'Proximity Alerts', desc: '"Bus Near My Stop" fires based on real-time GPS, not just schedule.', color: '#2563eb' },
                { icon: <ShieldAlert size={15} />, title: 'Delay Notices', desc: 'Know immediately if the bus deviates or falls behind schedule.', color: '#ea580c' },
                { icon: <CheckCircle2 size={15} />, title: 'Trip Started', desc: 'Heads-up the moment the bus begins its journey toward you.', color: '#059669' },
                { icon: <Bell size={15} />, title: 'Custom Toggles', desc: 'Every alert is individually switchable — your preferences, always.', color: '#7c3aed' },
              ].map((f, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-3" style={{ background: `${f.color}12` }}>
                    <span style={{ color: f.color }}>{f.icon}</span>
                  </div>
                  <h6 className="font-700 font-satoshi text-slate-900 text-sm mb-1">{f.title}</h6>
                  <p className="text-slate-500 text-xs leading-relaxed m-0">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURE 3 — DRIVER APP
      ══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[92%] mx-auto border-t border-slate-100">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-24">
          {/* Text */}
          <div className="lg:w-1/2 text-left order-2 lg:order-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-semibold font-satoshi mb-4">
              <Bus size={12} /> Driver App
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-satoshi text-slate-900 tracking-tight leading-tight mb-4 mt-2">
              Empower drivers. Control the fleet.
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              No expensive hardware needed. The driver's own smartphone becomes a GPS broadcaster. One tap to start the trip — everything else is automatic.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: <Smartphone size={17} />, title: 'One-Tap Operation', desc: 'Drivers select their route and tap Start Trip. GPS broadcasting begins instantly.', color: '#ea580c' },
                { icon: <ShieldAlert size={17} />, title: 'Instant Admin Sync', desc: 'Administrators see live vehicle locations on the web dashboard within milliseconds.', color: '#2563eb' },
                { icon: <Activity size={17} />, title: 'Background Efficiency', desc: 'Optimised GPS runs in the background without draining battery excessively.', color: '#059669' },
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${f.color}12` }}>
                    <span style={{ color: f.color }}>{f.icon}</span>
                  </div>
                  <div>
                    <h6 className="font-700 font-satoshi text-slate-900 text-sm mb-0.5">{f.title}</h6>
                    <p className="text-slate-500 text-sm leading-relaxed m-0">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Device */}
          <div className="lg:w-1/2 flex justify-center relative order-1 lg:order-2">
            <div className="absolute -inset-8 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse,rgba(234,88,12,.35),transparent)' }} />

            <div className="relative">
              <div className="absolute -left-32 top-20 z-10 hidden lg:block">
                <InfoChip
                  icon={<Bus size={14} className="text-orange-500" />}
                  label="TS01AB1234"
                  sub="Route: srd-jkl"
                />
              </div>
              <div className="absolute -right-28 bottom-28 z-10 hidden lg:block">
                <InfoChip
                  icon={<Activity size={14} className="text-green-600" />}
                  label="Broadcasting"
                  sub="GPS Active"
                />
              </div>
              <img src={screenshotDriver} alt="Driver app" width="300" height="500" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURE 4 — ADMIN DASHBOARD
      ══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-[92%] mx-auto border-t border-slate-100">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-24">
          {/* Screenshot — left, wider */}
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="absolute -inset-8 rounded-full blur-3xl opacity-15 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse,rgba(5,150,105,.35),transparent)' }} />

            {/* Dashboard is web UI — show in a browser-style frame, not phone */}
            <div className="relative w-full max-w-[480px]">
              {/* Browser chrome */}
              <div className="rounded-t-2xl bg-slate-800 px-4 pt-3 pb-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="ml-3 flex-1 bg-slate-700 rounded-md px-3 py-1">
                  <p className="text-slate-400 text-xs font-mono">navixgo.in/dashboard</p>
                </div>
              </div>
              {/* Screen */}
              <div className="rounded-b-2xl overflow-hidden border border-slate-200 shadow-2xl">
                <img
                  src={screenshotDashboard}
                  alt="Admin dashboard"
                  className="w-full block"
                />
              </div>
            </div>
          </div>

          {/* Text — right */}
          <div className="lg:w-1/2 text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold font-satoshi mb-4">
              <BarChart3 size={12} /> Admin Dashboard
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-satoshi text-slate-900 tracking-tight leading-tight mb-4 mt-2">
              Full fleet visibility. Zero hardware.
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              Never get another panicked call from a parent asking where the bus is. Monitor every vehicle and trip in real time from a single web dashboard. Add buses, manage routes, and respond to incidents instantly.
            </p>

            <div className="space-y-5 mb-8">
              {[
                { icon: <BarChart3 size={17} />, title: 'Real-Time Fleet Map', desc: 'See every active vehicle on a live map with route overlay and stop markers.', color: '#059669' },
                { icon: <Users size={17} />, title: 'Passenger & Driver Management', desc: 'Manage stop assignments, driver accounts, and passenger records from one place.', color: '#2563eb' },
                { icon: <Zap size={17} />, title: 'Instant Fleet Alerts', desc: 'Get notified immediately when a bus deviates from route or goes offline.', color: '#ea580c' },
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${f.color}12` }}>
                    <span style={{ color: f.color }}>{f.icon}</span>
                  </div>
                  <div>
                    <h6 className="font-700 font-satoshi text-slate-900 text-sm mb-0.5">{f.title}</h6>
                    <p className="text-slate-500 text-sm leading-relaxed m-0">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BENEFITS ROW
      ══════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[92%] mx-auto border-t border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Smartphone size={22} />,
              title: 'Bring Your Own Device',
              desc: "Turn any driver's smartphone into a powerful tracking device. No dedicated hardware required.",
              color: '#2563eb',
              bg: 'bg-blue-50',
            },
            {
              icon: <Activity size={22} />,
              title: 'Real-Time Sync',
              desc: 'Sub-second latency via WebSockets ensures passengers always see the live location.',
              color: '#ea580c',
              bg: 'bg-orange-50',
            },
            {
              icon: <CheckCircle2 size={22} />,
              title: 'Rapid Deployment',
              desc: 'Set up your entire fleet in hours, not weeks. Scalable for colleges and transit agencies.',
              color: '#059669',
              bg: 'bg-emerald-50',
            },
          ].map((b, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col items-start text-left">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${b.bg}`}>
                <span style={{ color: b.color }}>{b.icon}</span>
              </div>
              <h4 className="font-bold font-satoshi text-slate-900 text-lg mb-2">{b.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed m-0">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ══════════════════════════════════════════
          SEO FAQ SECTION
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-slate-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-satoshi text-slate-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-lg">
            Everything you need to know about NavixGo's real-time bus tracking.
          </p>
        </div>
        <div className="space-y-6">
          {[
            {
              q: "What is NavixGo?",
              a: "NavixGo is a Real-Time Bus Tracking and Campus Mobility Platform that allows educational institutions and organizations to track their fleets without expensive GPS hardware."
            },
            {
              q: "How does the real-time bus tracking work?",
              a: "It transforms any driver's smartphone into a live GPS tracker. The driver app broadcasts the location, and students or employees can track the bus on a live Google Map via the passenger app."
            },
            {
              q: "Is dedicated GPS hardware required?",
              a: "No, NavixGo requires zero hardware installation. It operates entirely through the driver's smartphone, making it a highly cost-effective fleet management solution."
            },
            {
              q: "Who can use NavixGo?",
              a: "NavixGo is designed for colleges, universities, schools, corporate organizations, and shuttle services looking for reliable institutional transportation software."
            },
            {
              q: "Does NavixGo provide ETA for buses?",
              a: "Yes, our smart campus software provides live ETA countdowns to specific stops with 99.8% accuracy based on real-time traffic and GPS sync."
            }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h4 className="font-bold font-satoshi text-slate-900 text-lg mb-2">{faq.q}</h4>
              <p className="text-slate-500 text-sm leading-relaxed m-0">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════ */}
      <section id="contact" className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden shadow-[0_20px_45px_-10px_rgba(37,99,235,0.3)] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-xl text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-satoshi text-white mb-4 leading-tight">
              Be part of the future of<br />smart transit today.
            </h2>
            <p className="text-blue-100 text-sm sm:text-base mb-6 leading-relaxed max-w-sm">
              Try the application, improve transport transparency, and optimise fleet monitoring without hefty hardware costs.
            </p>
            <form
              onSubmit={handleGetAccess}
              className="flex flex-col sm:flex-row bg-white p-1.5 sm:p-1 rounded-2xl sm:rounded-full w-full max-w-sm shadow-md"
            >
              <input
                type="email"
                required
                placeholder="Drop your email address..."
                className="bg-transparent border-none outline-none px-4 py-2 sm:py-0 text-sm text-slate-700 w-full placeholder:text-slate-400 font-semibold font-satoshi"
              />
              <button
                type="submit"
                className="bg-black hover:bg-neutral-900 text-white px-6 py-2.5 rounded-xl sm:rounded-full active:scale-95 transition-all mt-2 sm:mt-0 whitespace-nowrap shrink-0 text-sm font-semibold"
              >
                Get early access
              </button>
            </form>
          </div>

          <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-end relative z-10">
            <img
              src={busesimg2}
              alt="Smart Transit Graphic"
              className="w-full max-w-[500px] h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
