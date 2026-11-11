import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronDown, Shield, Code, Cpu, Terminal, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { CASE_STUDIES } from '../data/caseStudiesData';

interface ServicePageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenEstimator: () => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({ slug, onNavigate, onOpenEstimator }) => {
  const service = SERVICES_DATA[slug] || SERVICES_DATA['app-development'];
  const [activeSubService, setActiveSubService] = useState<string>(service.subServices[0]?.id || '');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  // Dedicated Consultation Request State
  const [consultSubmitted, setConsultSubmitted] = useState<boolean>(false);
  const [consultForm, setConsultForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '$25,000 – $50,000',
    notes: '',
  });

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultSubmitted(true);
  };

  const selectedSub = service.subServices.find((s) => s.id === activeSubService) || service.subServices[0];
  const relatedCaseStudy = CASE_STUDIES.find((cs) => cs.serviceCategory === service.slug) || CASE_STUDIES[0];

  return (
    <div className="w-full bg-slate-950 text-slate-100">
      
      {/* 1. Service Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase mb-4">
            <button onClick={() => onNavigate('/')} className="hover:text-slate-300">
              Home
            </button>
            <span aria-hidden="true">/</span>
            <button onClick={() => onNavigate('/')} className="hover:text-slate-300">
              Services
            </button>
            <span aria-hidden="true">/</span>
            <span className="text-white">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15] max-w-2xl">
                {service.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                {service.heroDescription}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#consultation-form"
                  className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500 active:scale-98 transition-all"
                >
                  <span>Request Technical Scoping</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <button
                  onClick={onOpenEstimator}
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-6 py-3.5 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-white transition-colors"
                >
                  <span>Estimate Timeline</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-400" />
                  <span>Direct Senior Team Contact</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Transparent Fixed or Sprint Billing</span>
                </div>
              </div>
            </div>

            {/* Visual Hero Image Container with resilient fallback */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                  onError={(e) => {
                    // Fallback to agency studio image
                    (e.target as HTMLImageElement).src = '/src/assets/images/hero_digital_paradigm_agency_1793033404813.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800/80 backdrop-blur-md">
                  <span className="text-xs font-semibold text-white block">{service.title} Excellence</span>
                  <span className="text-slate-400 text-[11px]">Production-grade US architecture & deployment</span>
                </div>
              </div>
            </div>

          </div>

          {/* Metric KPIs Strip */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-800/80">
            {service.metrics.map((metric, idx) => (
              <div key={idx}>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight tabular-nums">
                  {metric.value}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Sub-Services Deep Dive */}
      <section className="py-20 lg:py-28 border-b border-slate-800/80 bg-slate-900/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="max-w-2xl space-y-3 mb-12">
            <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
              Specialized Sub-Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Comprehensive Service Breakdown
            </h2>
            <p className="text-sm text-slate-300">
              Each discipline is executed by dedicated specialists adhering to strict performance, security, and usability benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sub-Service Tab Buttons (Functional Button Controls) */}
            <div className="lg:col-span-4 space-y-2">
              {service.subServices.map((sub) => {
                const isActive = sub.id === (selectedSub?.id || service.subServices[0].id);
                return (
                  <button
                    key={sub.id}
                    onClick={() => setActiveSubService(sub.id)}
                    className={`w-full text-left p-4 rounded-xl border text-sm transition-all ${
                      isActive
                        ? 'border-blue-500 bg-blue-600/15 text-white shadow-md'
                        : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <div className="font-bold">{sub.title}</div>
                    <div className="text-xs text-slate-400 mt-0.5 line-clamp-1">{sub.subtitle}</div>
                  </button>
                );
              })}
            </div>

            {/* Active Sub-Service Detail Card */}
            {selectedSub && (
              <div className="lg:col-span-8 rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-10 space-y-6">
                <div>
                  <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">
                    {selectedSub.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    {selectedSub.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                    {selectedSub.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-4 border-t border-slate-800/80 space-y-3">
                  <h4 className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                    Key Deliverables & Specifications
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedSub.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack for this sub-service */}
                {selectedSub.techStack && (
                  <div className="pt-4 border-t border-slate-800/80">
                    <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase block mb-2">
                      Target Technologies
                    </span>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                      {selectedSub.techStack.map((tech, tIdx) => (
                        <React.Fragment key={tIdx}>
                          <span className="text-slate-200 font-medium">{tech}</span>
                          {tIdx < selectedSub.techStack!.length - 1 && <span aria-hidden="true" className="text-slate-600">·</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Business Benefit Callout */}
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-4 text-xs text-emerald-200 leading-relaxed">
                  <strong className="text-emerald-400 block mb-0.5">Measurable Business Outcome:</strong>
                  {selectedSub.keyBenefit}
                </div>

              </div>
            )}

          </div>

        </div>
      </section>

      {/* 3. Tech Stack Matrix */}
      <section className="py-20 lg:py-28 border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="max-w-2xl space-y-3 mb-12">
            <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
              Tooling & Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Battle-Tested Technology Stack
            </h2>
            <p className="text-sm text-slate-300">
              We leverage modern, industry-standard frameworks backed by mature enterprise ecosystems and long-term support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.techStack.map((group, idx) => (
              <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  {group.category}
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {group.tools.map((tool, tIdx) => (
                    <li key={tIdx} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-slate-500" />
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Service Delivery Roadmap */}
      <section className="py-20 lg:py-28 border-b border-slate-800/80 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="max-w-2xl space-y-3 mb-12">
            <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
              Execution Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              How We Deliver {service.title}
            </h2>
            <p className="text-sm text-slate-300">
              A structured, sprint-based approach from technical discovery to production monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {service.processSteps.map((step, idx) => (
              <div key={idx} className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 space-y-3">
                <span className="text-xs font-mono font-bold text-blue-400">{step.step}</span>
                <h4 className="text-sm font-bold text-white">{step.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Adjacent Proof / Case Study */}
      {relatedCaseStudy && (
        <section className="py-20 border-b border-slate-800/80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 sm:p-12">
              <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold uppercase tracking-wider mb-2">
                <span>Featured Client Success</span>
                <span aria-hidden="true">·</span>
                <span>{relatedCaseStudy.clientIndustry}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {relatedCaseStudy.title}
              </h3>
              <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <div>
                  <strong className="text-white block mb-1">Challenge:</strong>
                  {relatedCaseStudy.challenge}
                </div>
                <div>
                  <strong className="text-white block mb-1">Architecture Solution:</strong>
                  {relatedCaseStudy.solution}
                </div>
                <div>
                  <strong className="text-emerald-400 block mb-1">Production Impact:</strong>
                  {relatedCaseStudy.outcome}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-3 gap-4">
                {relatedCaseStudy.metrics.map((m, mIdx) => (
                  <div key={mIdx}>
                    <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Service FAQs */}
      <section className="py-20 lg:py-24 border-b border-slate-800/80">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
              Common Inquiries
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              {service.title} FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/40">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-white focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-400' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Dedicated Technical Consultation & RFP Form */}
      <section id="consultation-form" className="py-20 lg:py-28 bg-slate-900/40">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 sm:p-12 shadow-2xl">
            
            <div className="text-center space-y-2 mb-8">
              <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
                Direct Engineering Scoping
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Request a Detailed Scope for {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
                Connect directly with our Austin technical solutions architects to review your technical requirements and receive an engineering proposal.
              </p>
            </div>

            {consultSubmitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-950 border border-emerald-600 text-emerald-400">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h4 className="text-xl font-bold text-white">Inquiry Received</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, {consultForm.name}. Our lead architect for {service.title} will review your notes and reach out to {consultForm.email} within 24 business hours.
                </p>
                <button
                  onClick={() => setConsultSubmitted(false)}
                  className="rounded-lg bg-slate-800 px-5 py-2 text-xs font-medium text-slate-200 hover:bg-slate-700 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleConsultSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={consultForm.name}
                      onChange={(e) => setConsultForm({ ...consultForm, name: e.target.value })}
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
                      placeholder="jane@company.com"
                      value={consultForm.email}
                      onChange={(e) => setConsultForm({ ...consultForm, email: e.target.value })}
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Health Inc."
                      value={consultForm.company}
                      onChange={(e) => setConsultForm({ ...consultForm, company: e.target.value })}
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={consultForm.phone}
                      onChange={(e) => setConsultForm({ ...consultForm, phone: e.target.value })}
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Estimated Project Budget
                  </label>
                  <select
                    value={consultForm.budget}
                    onChange={(e) => setConsultForm({ ...consultForm, budget: e.target.value })}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="$10,000 – $25,000">$10,000 – $25,000 (Targeted MVP / Sprint)</option>
                    <option value="$25,000 – $50,000">$25,000 – $50,000 (Growth Production System)</option>
                    <option value="$50,000 – $100,000">$50,000 – $100,000 (Full-Scale Platform / App)</option>
                    <option value="$100,000+">$100,000+ (Enterprise Multi-Squad Roadmap)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Project Scope & Objectives *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe your current tech stack, target timeline, key integrations, and primary goals..."
                    value={consultForm.notes}
                    onChange={(e) => setConsultForm({ ...consultForm, notes: e.target.value })}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[11px] text-slate-400">
                    Mutual NDA executed prior to code or data review upon request.
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-7 py-3 text-xs font-semibold text-white shadow-md hover:bg-blue-500 active:bg-blue-700 transition-colors"
                  >
                    <span>Submit Scoping Request</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
};
