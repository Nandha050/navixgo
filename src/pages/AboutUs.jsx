import { Users, BookOpen, Compass, Target, Award, Mail, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Maruthi',
      role: 'Founder & Lead Developer',
      bio: 'Visionary technologist driving the architecture, core real-time tracking, and platform infrastructure of NavixGo.',
      socials: {
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
        twitter: 'https://x.com',
      },
    },
    {
      name: 'Nanda Kishor',
      role: 'Co-founder & Product Specialist',
      bio: 'Innovative strategist directing product growth, telemetry optimization, and user-centric experience layers.',
      socials: {
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
        twitter: 'https://x.com',
      },
    },
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 select-none">
      <SEO 
        title="About NavixGo | Our Mission for Smarter Campus Mobility"
        description="Learn about the team behind NavixGo, our mission, and why we built our real-time bus tracking software for colleges and organizations."
        url="https://navixgo.in/about-us"
        keywords="About NavixGo, Campus Mobility Team, Bus Tracking Software Founders, Institutional Transportation"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "NavixGo",
          "url": "https://navixgo.in",
          "logo": "https://navixgo.in/favicon-512x512.png",
          "description": "Real-Time Bus Tracking for Smarter Campus Mobility",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Sangareddy",
            "addressRegion": "Telangana",
            "postalCode": "502001",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "navixgosupport@gmail.com",
            "contactType": "customer support"
          }
        }}
      />
      <div className="max-w-6xl mx-auto w-full">

        {/* Page Hero */}
        <div className="bg-[#0b101e] rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 text-white relative overflow-hidden border border-slate-800 shadow-2xl mb-12">
          {/* Decorative Grid */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 0 L100 100 M0 100 L100 0" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="relative z-10 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 text-xs sm:text-sm  mb-4 border border-orange-500/20">
              <Users size={16} />
              <span>Our Journey</span>
            </div>
            <h1 className="text-3xl text-white sm:text-4xl lg:text-5xl font-700 font-satoshi mb-4 tracking-tight leading-tight">
              Driving Smarter Transportation
            </h1>
            <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-3xl font-medium leading-relaxed">
              NavixGo was founded with a simple vision — to make transportation smarter, safer, and more connected through real-time technology.
            </p>
          </div>
        </div>

        {/* Page Content */}
        <div className="space-y-12">

          {/* Introduction Card */}
          <div className="bg-white rounded-[2rem] p-6 sm:p-10 border border-slate-100 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.05)] text-left">
            <div className="prose max-w-none text-slate-600 font-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                What started as an idea to solve everyday transport management challenges has now evolved into a modern platform designed for schools, colleges, universities, and organizations that want a better way to manage their fleets and provide live tracking experiences.
              </p>
              <p>
                At NavixGo, we believe transportation should not feel uncertain. Parents should know where buses are, management should have complete visibility, and drivers should have tools that simplify operations instead of making them complicated.
              </p>
            </div>
          </div>

          {/* Two-Column: Our Story & Why NavixGo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Our Story */}
            <div className="lg:col-span-7 bg-white rounded-[2rem] p-6 sm:p-8 border border-slate-100 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.05)] text-left flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-600 font-satoshi text-slate-900 flex items-center gap-3">
                  <span className="p-2 rounded-xl bg-orange-50 text-[#ea580c]"><BookOpen size={20} /></span>
                  <span>Our Story</span>
                </h2>
                <div className="text-slate-500 font-600 text-xs sm:text-sm leading-relaxed space-y-4">
                  <p>
                    NavixGo was built by a passionate team of developers and innovators focused on solving real-world problems using technology.
                  </p>
                  <p>
                    As students and technology enthusiasts, we observed the lack of efficient tracking systems in educational transportation. Delayed communication, lack of visibility, and outdated transport management processes inspired us to create a platform that brings transparency, reliability, and convenience into one ecosystem.
                  </p>
                  <p>
                    Today, NavixGo continues to grow with the goal of transforming transportation management into a seamless digital experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Why NavixGo Checklist */}
            <div className="lg:col-span-5 bg-white rounded-[2rem] p-6 sm:p-8 border border-slate-100 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.05)] text-left">
              <h2 className="text-xl sm:text-2xl font-600 font-satoshi text-slate-900 mb-6 flex items-center gap-3">
                <span className="p-2 rounded-xl bg-blue-50 text-blue-600"><Award size={20} /></span>
                <span>Why NavixGo?</span>
              </h2>
              <ul className="space-y-4 text-slate-700 font-600 text-xs sm:text-sm">
                <li className="flex gap-3">
                  <span className="text-[#ea580c] text-base shrink-0">✓</span>
                  <span>Accuracy and reliability</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ea580c] text-base shrink-0">✓</span>
                  <span>Easy-to-use technology</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ea580c] text-base shrink-0">✓</span>
                  <span>Simplify transport operations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ea580c] text-base shrink-0">✓</span>
                  <span>Scalable solutions for institutions of all sizes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ea580c] text-base shrink-0">✓</span>
                  <span>Secure data handling and privacy</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mission & Vision Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-[#f8fafc] rounded-[2rem] p-6 sm:p-8 border border-slate-200/50">
              <div className="p-3 rounded-2xl bg-orange-100 text-[#ea580c] w-fit mb-4">
                <Target size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-600 font-satoshi text-slate-900 mb-2">Our Mission</h3>
              <p className="text-slate-500 font-semibold text-xs sm:text-sm leading-relaxed">
                To empower institutions and organizations with smart transportation solutions that improve safety, communication, and operational efficiency.
              </p>
            </div>

            <div className="bg-[#f8fafc] rounded-[2rem] p-6 sm:p-8 border border-slate-200/50">
              <div className="p-3 rounded-2xl bg-blue-100 text-blue-600 w-fit mb-4">
                <Compass size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-600 font-satoshi text-slate-900 mb-2">Our Vision</h3>
              <p className="text-slate-500 font-semibold text-xs sm:text-sm leading-relaxed">
                To become a trusted technology platform for modern transportation systems by combining innovation, reliability, and user-focused experiences.
              </p>
            </div>
          </div>

          {/* Meet The Team Section */}
          <div className="bg-white rounded-[2rem] p-6 sm:p-10 border border-slate-100 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.05)] text-left">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-700 font-satoshi text-slate-900 mb-2">Meet the Team</h2>
              <p className="text-slate-400  text-xs sm:text-sm">
                NavixGo is led by a team passionate about building scalable and impactful technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="bg-slate-50 rounded-[2rem] p-6 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center space-y-4">
                    {/* User Avatar Placeholder */}
                    <div className="w-20 h-20 bg-gradient-to-br from-[#0b101e] to-slate-800 text-white rounded-full flex items-center justify-center mx-auto border-2 border-slate-200 font-extrabold text-xl shadow-md select-none">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-600 font-satoshi text-slate-900">{member.name}</h3>
                      <p className="text-[#ea580c] font-extrabold text-xs sm:text-sm uppercase tracking-wider mt-0.5">{member.role}</p>
                    </div>
                    <p className="text-slate-500 font-semibold text-xs sm:text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Social links */}
                  <div className="flex gap-4 justify-center mt-6 pt-4 border-t border-slate-200">
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-[#0A66C2] transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-[#bc1888] transition-colors"
                      aria-label="Instagram"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-black transition-colors"
                      aria-label="X (Twitter)"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Innovation with Purpose */}
          <div className="bg-[#0b101e] rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 text-white text-left relative overflow-hidden border border-slate-800 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-600 font-satoshi mb-3 flex items-center gap-3 text-white">
              <span>Innovation with Purpose</span>
            </h3>
            <p className="text-slate-300 font-semibold text-xs sm:text-sm sm:leading-relaxed leading-relaxed max-w-4xl">
              Our team continuously works on improving the platform with advanced features, better performance, stronger security, and intelligent automation to meet the evolving needs of modern transportation. At NavixGo, every feature is built with one goal in mind — creating a smarter and more connected transportation experience for everyone.
            </p>
          </div>

          {/* Office Contact Info Section */}
          <div className="bg-[#eff6ff] rounded-[2rem] p-6 sm:p-8 border border-blue-100 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-left">
            <div>
              <h3 className="font-700 font-satoshi text-slate-900 text-lg sm:text-xl">Headquarters</h3>
              <p className="text-slate-500 text-xs sm:text-sm font-semibold mt-1">Get in touch directly with our leadership team.</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white text-[#0056b3] shadow-sm shrink-0">
                  <Mail size={18} />
                </div>
                <a href="mailto:navixgosupport@gmail.com" className="text-slate-700 hover:text-[#ea580c]  text-sm sm:text-base transition-colors">
                  navixgosupport@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white text-green-600 shadow-sm shrink-0">
                  <MapPin size={18} />
                </div>
                <span className="text-slate-700  text-sm sm:text-base">
                  Sangareddy, Telangana, 502001
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutUs;
