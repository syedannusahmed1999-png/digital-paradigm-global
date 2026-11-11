import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle2, ArrowRight, Shield } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: string) => void;
  onOpenEstimator: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenEstimator }) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: 'App Development',
    budget: '$25,000 – $50,000',
    timeline: 'Standard (8–12 weeks)',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-slate-950 text-slate-100">
      
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase mb-4">
            <button onClick={() => onNavigate('/')} className="hover:text-slate-300">
              Home
            </button>
            <span aria-hidden="true">/</span>
            <span className="text-white">Contact Us</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let's Discuss Your Software, AI, or Growth Initiative
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Connect directly with our Austin technical solutions team. Whether you need a comprehensive RFP proposal, architectural consultation, or dedicated engineering squad, we reply within 1 business day.
            </p>
          </div>

        </div>
      </section>

      {/* Main Content Grid: Direct Details + Lead Form */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Direct Contact Information (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Direct Contact Channels</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  We maintain direct communication channels with zero layers of automated answering machines. Call our team or send us an email.
                </p>
              </div>

              <div className="space-y-6">
                
                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-800 bg-slate-900/50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Austin Headquarters</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Austin, Texas, United States<br />
                      Serving Clients Nationwide
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-800 bg-slate-900/50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Phone Support</h4>
                    <a
                      href="tel:5126175602"
                      className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors mt-1 block"
                    >
                      (512) 617-5602
                    </a>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Direct line to Austin Client Partnerships
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-800 bg-slate-900/50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Email Inquiries</h4>
                    <a
                      href="mailto:info@thedigitalparadigm.com"
                      className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors mt-1 block"
                    >
                      info@thedigitalparadigm.com
                    </a>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Monitored by Solutions Architects daily
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-800 bg-slate-900/50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Office Hours</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Monday – Friday: 8:00 AM – 6:00 PM CT<br />
                      24/7 SLA emergency support for active retainers
                    </p>
                  </div>
                </div>

              </div>

              <div className="p-5 rounded-xl border border-blue-500/20 bg-blue-950/20 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-blue-400 font-semibold">
                  <Shield className="h-4 w-4" />
                  <span>Confidentiality & Non-Disclosure</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  We are happy to sign your standard company Non-Disclosure Agreement (NDA) or execute our mutual NDA prior to receiving proprietary wireframes, specs, or datasets.
                </p>
              </div>

            </div>

            {/* Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 sm:p-10 shadow-2xl">
                
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-950 border border-emerald-600 text-emerald-400">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Proposal Request Received</h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting The Digital Paradigm, <span className="font-semibold text-white">{formData.name}</span>. We have assigned your request to our senior technical lead. We will review your requirements for <span className="text-blue-400 font-medium">{formData.serviceInterest}</span> and respond to <span className="text-white font-medium">{formData.email}</span> within 24 hours.
                    </p>
                    <div className="pt-4 flex items-center justify-center gap-4">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="rounded-lg bg-slate-800 px-5 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-700 transition-colors"
                      >
                        Send Another Note
                      </button>
                      <button
                        onClick={() => onNavigate('/')}
                        className="rounded-lg bg-blue-600 px-5 py-2 text-xs font-semibold text-white hover:bg-blue-500 transition-colors"
                      >
                        Return to Home
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    <div>
                      <h3 className="text-xl font-bold text-white">Request a Consultation</h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Fill out the details below to receive a personalized scope and timeline.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Alex Morgan"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="alex@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          placeholder="Horizon Systems Inc."
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="(512) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Service of Interest
                        </label>
                        <select
                          value={formData.serviceInterest}
                          onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                          <option value="App Development">App Development</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="E-commerce Web Development">E-commerce Development</option>
                          <option value="Design Services">Design Services (UI/UX)</option>
                          <option value="AI Development">AI Development</option>
                          <option value="AI Integration & Custom Software">Custom Software & Systems</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Estimated Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                          <option value="$10,000 – $25,000">$10,000 – $25,000</option>
                          <option value="$25,000 – $50,000">$25,000 – $50,000</option>
                          <option value="$50,000 – $100,000">$50,000 – $100,000</option>
                          <option value="$100,000+">$100,000+</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Target Timeline
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                          <option value="Urgent (4–6 weeks)">Urgent (4–6 weeks)</option>
                          <option value="Standard (8–12 weeks)">Standard (8–12 weeks)</option>
                          <option value="Flexible (3–6 months)">Flexible (3–6 months)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Tell us about your project *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Please share what you are building, existing platforms or repositories, technical requirements, and core success metrics..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <span className="text-[11px] text-slate-400">
                        Zero sales spam. Your details remain 100% confidential.
                      </span>
                      <button
                        type="submit"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-3 text-xs font-semibold text-white shadow-md hover:bg-blue-500 active:bg-blue-700 transition-colors"
                      >
                        <span>Send Proposal Request</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
