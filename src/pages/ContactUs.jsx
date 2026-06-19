import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, HelpCircle, Send, CheckCircle2 } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const payload = {
        data: {
          fullName: formData.fullName,
          email: formData.email,
          organization: formData.organization,
          subject: formData.subject,
          message: formData.message,
          submittedAt: new Date().toISOString(),
          source: "NavixGo Website",
          status: "New",
        },
      };

      const response = await fetch(
        "https://sheetdb.io/api/v1/yztgq2hdx7y9m",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();

      console.log("Form Submitted:", result);

      setIsSubmitted(true);

      setFormData({
        fullName: "",
        email: "",
        organization: "",
        subject: "",
        message: "",
      });

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    } catch (error) {
      console.error("Contact Form Error:", error);

      alert(
        "Something went wrong. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const whyContactReasons = [
    { title: 'Product demonstrations and onboarding', desc: 'Get a personalized tour of our platform features.' },
    { title: 'Technical support and assistance', desc: 'Get help with system setup, driver apps, or diagnostics.' },
    { title: 'Subscription and pricing inquiries', desc: 'Find the perfect plan tailormade for your campus fleet size.' },
    { title: 'Partnership and collaboration opportunities', desc: 'Explore synergies with our smart transit infrastructure.' },
    { title: 'Feedback and feature requests', desc: 'Help us shape the future of real-time transit telemetry.' },
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 select-none">
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
              <HelpCircle size={16} />
              <span>We're Here For You</span>
            </div>
            <h1 className="text-3xl text-white sm:text-4xl lg:text-5xl font-700 font-satoshi mb-4 tracking-tight leading-tight">
              Contact Us
            </h1>
            <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl font-medium leading-relaxed">
              We’d love to hear from you. Whether you have questions, feedback, partnership inquiries, or need support, the NavixGo team is here to help.
            </p>
          </div>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Info & Details */}
          <div className="lg:col-span-5 space-y-6 text-left">

            {/* Contact Info Card */}
            <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-slate-100 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.05)]">
              <h2 className="text-xl sm:text-2xl font-600 font-satoshi text-slate-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-blue-50 text-[#0056b3] shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">Email</p>
                    <a href="mailto:navixgosupport@gmail.com" className="text-slate-700 hover:text-[#ea580c]  text-sm sm:text-base mt-0.5 block transition-colors">
                      navixgosupport@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-orange-50 text-[#ea580c] shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">Phone</p>
                    <p className="text-slate-700  text-sm sm:text-base mt-0.5">
                      +91 9949445524, 9381837737
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-green-50 text-green-600 shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">Location</p>
                    <p className="text-slate-700  text-sm sm:text-base mt-0.5 leading-relaxed">
                      Sangareddy, Telangana, 502001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Hours Card */}
            <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-slate-100 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.05)] flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-purple-50 text-[#7c3aed] shrink-0">
                <Clock size={22} />
              </div>
              <div>
                <h3 className="text-lg font-600 font-satoshi text-slate-900 mb-1">Support Hours</h3>
                <p className="text-slate-600  text-sm sm:text-base">
                  Monday – Saturday
                </p>
                <p className="text-[#7c3aed] font-extrabold text-xs sm:text-sm mt-0.5 uppercase tracking-wider">
                  9:00 AM – 6:00 PM IST
                </p>
              </div>
            </div>

            {/* Why Contact Us Accordion/List */}
            <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-slate-100 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.05)]">
              <h2 className="text-xl sm:text-2xl font-600 font-satoshi text-slate-900 mb-6">
                Why Contact NavixGo?
              </h2>
              <ul className="space-y-4">
                {whyContactReasons.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600  text-xs flex items-center justify-center shrink-0 mt-0.5 select-none">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="text-slate-800 font-600 font-satoshi text-sm">{item.title}</h4>
                      <p className="text-slate-400 text-xs font-600 mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us Card */}
            <div className="bg-[#eff6ff] rounded-[2rem] p-6 border border-blue-100 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="font-700 font-satoshi text-slate-900 text-lg">Follow Us</h3>
                <p className="text-slate-500 text-xs font-600 mt-1">Stay updated with our latest releases.</p>
              </div>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-sm"
                  aria-label="Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/navixgo?igsh=MXN5YWhiZXpyMmJpdQ=="
                  className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center text-white hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-sm"
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
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-sm"
                  aria-label="LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 text-left">
            <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-slate-100 shadow-[0_15px_45px_-15px_rgba(0,0,0,0.06)] relative overflow-hidden">

              {/* Form title */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-3xl font-700 font-satoshi text-slate-900">
                  Send Us a Message
                </h2>
                <p className="text-slate-400 font-600 text-sm mt-1">
                  Fill out the contact form with your details and our team will get back to you as soon as possible.
                </p>
              </div>

              {isSubmitted ? (
                /* Success State with beautiful animations */
                <div className="py-16 text-center">
                  <div className="mx-auto w-24 h-24 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mb-6">
                    <CheckCircle2
                      size={48}
                      className="text-green-600"
                    />
                  </div>

                  <h3 className="text-3xl font-700 font-satoshi text-slate-900 mb-3">
                    Message Received
                  </h3>

                  <p className="text-slate-500 max-w-md mx-auto leading-relaxed">
                    Thank you for contacting NavixGo.
                    <br />
                    Our team has successfully received your enquiry and will reach out to you shortly.
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>

                    <span className="text-sm font-semibold text-slate-700">
                      Expected response time: Within 24 Hours
                    </span>
                  </div>
                </div>
              ) : (
                /* Form State */
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name & Email Group */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-xs uppercase font-extrabold text-slate-400 tracking-wider mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#ea580c] focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none font-semibold transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs uppercase font-extrabold text-slate-400 tracking-wider mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#ea580c] focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none font-semibold transition-all"
                      />
                    </div>
                  </div>

                  {/* Organization & Subject Group */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="organization" className="block text-xs uppercase font-extrabold text-slate-400 tracking-wider mb-2">
                        Organization Name
                      </label>
                      <input
                        type="text"
                        name="organization"
                        id="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="e.g. Navix Academy"
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#ea580c] focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none font-semibold transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs uppercase font-extrabold text-slate-400 tracking-wider mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#ea580c] focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none font-semibold transition-all"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs uppercase font-extrabold text-slate-400 tracking-wider mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message details here..."
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#ea580c] focus:bg-white rounded-2xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none font-semibold transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-b from-[#0056b3] to-[#004494] text-white font-extrabold py-4 px-6 rounded-xl hover:shadow-[0_8px_20px_rgba(0,86,179,0.3)] hover:scale-[1.02] hover:-translate-y-0.5 active:scale-95 disabled:scale-100 disabled:opacity-50 disabled:translate-y-0 transition-all shadow-[0_4px_10px_rgba(0,86,179,0.2)] flex items-center justify-center gap-2 select-none"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactUs;
