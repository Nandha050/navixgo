import { Scale, Info, Layers, UserCheck, ShieldAlert, BadgeInfo, AlertOctagon, HelpCircle, Eye, Hammer, Clock, Mail } from 'lucide-react';
import SEO from '../components/SEO';

const TermsOfService = () => {
  return (
    <div className="w-full bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 select-none">
      <SEO 
        title="Terms of Service | NavixGo"
        description="Read NavixGo's Terms of Service governing your use of our real-time bus tracking and campus mobility software."
        url="https://navixgo.in/terms-of-service"
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
              <Scale size={16} />
              <span>Legal Guidelines</span>
            </div>
            <h1 className="text-3xl text-white sm:text-4xl lg:text-5xl font-700 font-satoshi mb-4 tracking-tight leading-tight\">
              Terms of Service
            </h1>
            <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
              <Clock size={16} />
              <span>Last Updated: May 28, 2026</span>
            </div>
          </div>
        </div>

        {/* Terms Content */}
        <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-slate-100 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.05)] text-left space-y-12">

          <div className="prose max-w-none">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              Welcome to NavixGo. These Terms of Service govern your access to and use of the NavixGo platform, website, mobile application, and related smart transit telemetry services.
            </p>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium mt-4">
              By accessing or using NavixGo, you agree to comply with these Terms. If you do not agree, please do not use our services.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section 1: Services Provided */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-600 font-satoshi text-slate-900 flex items-center gap-3">
              <span className="p-2 rounded-xl bg-blue-50 text-[#0056b3]"><Layers size={20} /></span>
              <span>Services Provided</span>
            </h2>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-600 mb-4">
                NavixGo provides transportation and fleet management solutions, including:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-600 font-semibold text-sm">
                <li className="flex items-center gap-2">✓ Real-time bus tracking</li>
                <li className="flex items-center gap-2">✓ Driver location monitoring</li>
                <li className="flex items-center gap-2">✓ Route and transport management</li>
                <li className="flex items-center gap-2">✓ Notifications and live updates</li>
                <li className="flex items-center gap-2">✓ Subscription-based transport services</li>
              </ul>
            </div>
          </div>

          {/* Section 2: User Responsibilities */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-600 font-satoshi text-slate-900 flex items-center gap-3">
              <span className="p-2 rounded-xl bg-green-50 text-green-600"><UserCheck size={20} /></span>
              <span>User Responsibilities</span>
            </h2>
            <div className="space-y-3">
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-semibold">
                Users explicitly agree to:
              </p>
              <ul className="text-slate-600 text-sm font-semibold space-y-2 list-disc pl-5">
                <li>Provide accurate, complete, and updated information during registration.</li>
                <li>Maintain the absolute confidentiality of account credentials and login sessions.</li>
                <li>Use the platform solely for lawful, authorized transportation management purposes.</li>
                <li>Avoid misuse, unauthorized access, or disruption of platform operations and APIs.</li>
              </ul>
              <p className="text-slate-400 text-xs sm:text-sm  bg-amber-50 text-amber-800 p-3 rounded-lg border border-amber-100">
                ⚠️ Notice: Users are solely responsible for all activities and transactions performed through their accounts.
              </p>
            </div>
          </div>

          {/* Section 3: Subscription & Payments */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-600 font-satoshi text-slate-900 flex items-center gap-3">
              <span className="p-2 rounded-xl bg-orange-50 text-[#ea580c]"><Info size={20} /></span>
              <span>Subscription & Payments</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-semibold">
              Certain premium features of NavixGo require active paid subscriptions. By purchasing a subscription:
            </p>
            <ul className="text-slate-600 text-sm font-semibold space-y-2 list-disc pl-5">
              <li>Users agree to pay all applicable recurring fees and telemetry charges.</li>
              <li>Subscription limits, bus fleet metrics, and advanced controls are bound by the selected tier.</li>
              <li>All payments are processed securely through certified, trusted third-party providers.</li>
            </ul>
            <p className="text-slate-500 text-sm leading-relaxed font-semibold">
              Failure to complete timely subscription renewals may result in restricted access or suspension of tracking services.
            </p>
          </div>

          {/* Section 4: Service Availability */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-600 font-satoshi text-slate-900 flex items-center gap-3">
              <span className="p-2 rounded-xl bg-purple-50 text-[#7c3aed]"><Hammer size={20} /></span>
              <span>Service Availability</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-semibold">
              We strive to maintain reliable and uninterrupted platform access. However, NavixGo does not warrant or guarantee continuous availability and reserves the right to temporarily suspend systems for scheduled upgrades, maintenance updates, or emergency server mitigation.
            </p>
          </div>

          {/* Section 5: Data & Privacy */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-600 font-satoshi text-slate-900 flex items-center gap-3">
              <span className="p-2 rounded-xl bg-teal-50 text-teal-600"><Eye size={20} /></span>
              <span>Data & Privacy</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-semibold">
              Your security and privacy are of utmost importance. User data is handled strictly according to our global Privacy Policy. By using NavixGo, you consent to the processing of real-time geolocation and vehicle coordinates essential to provide active route tracking.
            </p>
          </div>

          {/* Section 6: Prohibited Activities */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-600 font-satoshi text-slate-900 flex items-center gap-3">
              <span className="p-2 rounded-xl bg-red-50 text-red-500"><AlertOctagon size={20} /></span>
              <span>Prohibited Activities</span>
            </h2>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <p className="text-slate-500 text-sm font-semibold mb-3">Users must absolutely never:</p>
              <ul className="space-y-2 text-slate-600 font-semibold text-sm">
                <li className="flex items-start gap-2">✗ Attempt unauthorized access to admin dashboards or backend systems.</li>
                <li className="flex items-start gap-2">✗ Interfere with telemetry systems, WebSocket channels, or server performance.</li>
                <li className="flex items-start gap-2">✗ Deploy the application or tracking platform for illegal or unsanctioned tracking.</li>
                <li className="flex items-start gap-2">✗ Copy, reverse-engineer, distribute, or misuse proprietary software codes or visual features.</li>
              </ul>
            </div>
          </div>

          {/* Section 7: Intellectual Property */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-600 font-satoshi text-slate-900 flex items-center gap-3">
              <span className="p-2 rounded-xl bg-cyan-50 text-cyan-600"><BadgeInfo size={20} /></span>
              <span>Intellectual Property</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-semibold">
              All platform contents, proprietary branding, software assets, custom logos, designs, and dashboard elements are the exclusive property of NavixGo and are protected by international intellectual property laws. Users do not acquire ownership rights by accessing platform services.
            </p>
          </div>

          {/* Section 8: Limitation of Liability */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-600 font-satoshi text-slate-900 flex items-center gap-3">
              <span className="p-2 rounded-xl bg-orange-100 text-orange-700"><ShieldAlert size={20} /></span>
              <span>Limitation of Liability</span>
            </h2>
            <div className="bg-orange-50/50 p-5 rounded-2xl border border-orange-100 space-y-2 text-slate-600 text-xs sm:text-sm font-semibold">
              <p>NavixGo is not liable under any circumstances for:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Temporary cellular network dropouts or GPS accuracy drift.</li>
                <li>Tracking delays caused by third-party cloud infrastructure or maps API interruptions.</li>
                <li>Any direct, indirect, or consequential damages resulting from fleet delays or school scheduling.</li>
              </ul>
            </div>
          </div>

          {/* Section 9: Termination */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-600 font-satoshi text-slate-900 flex items-center gap-3">
              <span className="p-2 rounded-xl bg-slate-100 text-slate-700"><HelpCircle size={20} /></span>
              <span>Termination & Policy Changes</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-600 font-satoshi text-slate-900 mb-2">Account Termination</h4>
                <p className="text-slate-500 text-sm font-semibold leading-relaxed">
                  NavixGo reserves the right to suspend or terminate customer accounts or driver credentials that violate these legal guidelines or misuse tracking channels.
                </p>
              </div>
              <div>
                <h4 className="font-600 font-satoshi text-slate-900 mb-2">Changes to Terms</h4>
                <p className="text-slate-500 text-sm font-semibold leading-relaxed">
                  We may periodically revise these Terms. Continued use of the platform and companion driver applications constitutes explicit consent to the updated clauses.
                </p>
              </div>
            </div>
          </div>

          {/* Legal Contact Section */}
          <div className="bg-[#eff6ff] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-left">
              <h3 className="font-600 font-satoshi text-slate-900 text-lg">Legal Queries?</h3>
              <p className="text-slate-500 text-sm font-semibold mt-1">Contact our legal compliance office for questions.</p>
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

export default TermsOfService;


