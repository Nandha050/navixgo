import { Shield, Key, MapPin, Eye, Lock, RefreshCw, Mail, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="w-full bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 select-none">
      <SEO 
        title="Privacy Policy | NavixGo"
        description="Read NavixGo's Privacy Policy to understand how we collect, use, and protect your data on our campus mobility platform."
        url="https://navixgo.in/privacy-policy"
      />
      <div className="max-w-5xl mx-auto w-full">

        {/* Page Hero */}
        <div className="bg-[#0b101e] rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 text-white relative overflow-hidden border border-slate-800 shadow-2xl mb-12">
          {/* Decorative Grid */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 0 L100 100 M0 100 L100 0" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="relative z-10 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-xs sm:text-sm  mb-4 border border-blue-500/20">
              <Shield size={16} />
              <span>Data Protection</span>
            </div>
            <h1 className="text-3xl sm:text-4xl  text-white lg:text-5xl font-700 font-satoshi mb-4 tracking-tight leading-tight">
              Privacy Policy
            </h1>
            <div className="flex items-center gap-2 text-slate-400 text-sm font-medium font-inter">
              <Clock size={16} />
              <span>Last Updated: May 28, 2026</span>
            </div>
          </div>
        </div>

        {/* Policy Content */}
        <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-slate-100 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.05)] text-left space-y-12">

          <div className="prose max-w-none">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium font-inter">
              Welcome to NavixGo. Your privacy is extremely important to us. This Privacy Policy explains how we collect, use, store, and protect your information when you use our platform and transit services.
            </p>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mt-4">
              By using NavixGo, you agree to the practices described in this policy.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-600 font-satoshi text-slate-900 flex items-center gap-3">
              <span className="p-2 rounded-xl bg-blue-50 text-[#0056b3]"><Eye size={20} /></span>
              <span>Information We Collect</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <h6 className="font-bold font-satoshi text-slate-900 mb-2">Personal Info</h6>
                <ul className="text-slate-500 text-sm font-600 space-y-1.5 list-disc pl-4">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Institution details</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <h6 className="font-bold font-satoshi text-slate-900 mb-2">Location Info</h6>
                <p className="text-slate-500 text-sm font-600 leading-relaxed">
                  Real-time location data is collected from vehicles and drivers to provide dynamic tracking.
                </p>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <h6 className="font-bold font-satoshi text-slate-900 mb-2">Usage Data</h6>
                <ul className="text-slate-500 text-sm font-600 space-y-1.5 list-disc pl-4">
                  <li>Device type</li>
                  <li>IP address</li>
                  <li>Usage metrics</li>
                  <li>Diagnostics</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-600 font-satoshi text-slate-900 flex items-center gap-3">
              <span className="p-2 rounded-xl bg-orange-50 text-[#ea580c]"><Key size={20} /></span>
              <span>How We Use Information</span>
            </h2>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-600 font-600 text-sm">
                <li className="flex items-center gap-2">✓ Provide real-time tracking services</li>
                <li className="flex items-center gap-2">✓ Improve transport management</li>
                <li className="flex items-center gap-2">✓ Enhance platform performance & security</li>
                <li className="flex items-center gap-2">✓ Send notifications & service updates</li>
                <li className="flex items-center gap-2">✓ Support customer requests</li>
                <li className="flex items-center gap-2">✓ Resolve technical issues</li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-600 font-satoshi text-slate-900 flex items-center gap-3">
              <span className="p-2 rounded-xl bg-green-50 text-green-600"><Lock size={20} /></span>
              <span>Data Security</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-600">
              We implement industry-grade security measures to protect user data from unauthorized access, misuse, or disclosure. However, no digital platform can guarantee complete security, and users should also take standard precautions to protect their accounts.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-600 font-satoshi text-slate-900 flex items-center gap-3">
              <span className="p-2 rounded-xl bg-purple-50 text-[#7c3aed]"><Shield size={20} /></span>
              <span>Data Sharing</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-600">
              NavixGo does not sell personal information to third parties. Information may be shared only to provide necessary platform services, when explicitly required by law, or with trusted service providers supporting our cloud infrastructure and telemetry processes.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-600 font-satoshi text-slate-900 flex items-center gap-3">
              <span className="p-2 rounded-xl bg-red-50 text-red-500"><MapPin size={20} /></span>
              <span>Location Tracking</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-600">
              Location tracking is enabled only for transportation-related functionality and is used to provide accurate live tracking and route monitoring services. Users may manage location permissions through device settings.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-600 font-satoshi text-slate-900 flex items-center gap-3">
              <span className="p-2 rounded-xl bg-slate-100 text-slate-700"><Clock size={20} /></span>
              <span>Data Retention & Third Parties</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h6 className=" text-slate-900 mb-2">Retention Policy</h6>
                <p className="text-slate-500 text-sm font-600 leading-relaxed">
                  We retain information only for as long as necessary to provide services, comply with legal obligations, and improve platform functionality.
                </p>
              </div>
              <div>
                <h6 className=" text-slate-900 mb-2">Third-Party Services</h6>
                <p className="text-slate-500 text-sm font-600 leading-relaxed">
                  Analytics, maps, and cloud infrastructure providers process information according to their own privacy policies.
                </p>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-600 font-satoshi text-slate-900 flex items-center gap-3">
              <span className="p-2 rounded-xl bg-teal-50 text-teal-600"><RefreshCw size={20} /></span>
              <span>Changes to This Policy</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-600">
              We may update this Privacy Policy periodically. Updated versions will be posted on this page with the revised date.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-[#eff6ff] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-left">
              <h3 className=" text-slate-900 text-lg">Have questions?</h3>
              <p className="text-slate-500 text-sm font-600 mt-1">Contact our privacy team for inquiries.</p>
            </div>
            <a
              href="mailto:navixgosupport@gmail.com"
              className="inline-flex items-center gap-2 bg-[#0056b3] text-white px-5 py-3 rounded-full  hover:bg-[#004494] transition-all transform hover:scale-105 active:scale-95 text-sm"
            >
              <Mail size={16} />
              <span>navixgosupport@gmail.com</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;

