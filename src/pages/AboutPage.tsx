import React from 'react';
import { Shield, Users, Code, Award, CheckCircle2, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenEstimator: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenEstimator }) => {
  return (
    <div className="w-full bg-slate-950 text-slate-100">
      
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase mb-4">
            <button onClick={() => onNavigate('/')} className="hover:text-slate-300">
              Home
            </button>
            <span aria-hidden="true">/</span>
            <span className="text-white">About Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15] max-w-2xl">
                Engineering Software & Digital Growth for Ambitious US Enterprises
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                The Digital Paradigm was founded on a simple premise: companies deserve direct access to elite senior engineers, world-class UI/UX designers, and data-driven growth strategists without the layers of bureaucracy, junior hand-offs, or offshore communication friction.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={onOpenEstimator}
                  className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500 active:scale-98 transition-all"
                >
                  <span>Work With Us</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-6 py-3.5 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-white transition-colors"
                >
                  <span>Contact Our Austin Office</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
                <img
                  src="/src/assets/images/hero_digital_paradigm_agency_1793033404813.jpg"
                  alt="The Digital Paradigm Headquarters Studio"
                  referrerPolicy="no-referrer"
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800/80 backdrop-blur-md">
                  <span className="text-xs font-semibold text-white block">Austin, Texas Engineering Hub</span>
                  <span className="text-slate-400 text-[11px]">Senior software engineers, designers, and growth architects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quantitative Trust Strip */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-800/80">
            <div>
              <div className="text-3xl font-extrabold text-white font-mono tabular-nums">Austin, TX</div>
              <div className="text-xs text-slate-400 mt-1">Headquarters & Engineering Base</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white font-mono tabular-nums">8+ Years</div>
              <div className="text-xs text-slate-400 mt-1">Avg Senior Architect Experience</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white font-mono tabular-nums">120+</div>
              <div className="text-xs text-slate-400 mt-1">Successful Deployments</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white font-mono tabular-nums">100%</div>
              <div className="text-xs text-slate-400 mt-1">Client IP & Code Ownership</div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 lg:py-28 border-b border-slate-800/80 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="max-w-2xl space-y-3 mb-14">
            <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
              Our Core Ethos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              The Principles That Guide Every Sprint
            </h2>
            <p className="text-sm text-slate-300">
              We operate with disciplined transparency, ruthless focus on code quality, and deep commercial alignment with our clients’ bottom line.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-xl border border-slate-800 bg-slate-900/60 space-y-3">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Radical Code Transparency</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                You have direct daily access to our Git repositories, Jira sprint backlogs, and staging servers. No black-box development; you see continuous progress as it is committed.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-slate-800 bg-slate-900/60 space-y-3">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400">
                <Code className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Durability Over Shortcuts</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We reject messy hacky workarounds that create crippling technical debt. Every architecture is engineered with modular microservices, clean TypeScript contracts, and automated test coverage.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-slate-800 bg-slate-900/60 space-y-3">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Commercial Outcome Alignment</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Software exists to create business value. Whether reducing user drop-off, automating multi-hour administrative tasks, or scaling checkout transactions, we measure success in revenue metrics.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Flexible Engagement Models */}
      <section className="py-20 lg:py-28 border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="max-w-2xl space-y-3 mb-14">
            <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
              How We Partner
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Flexible Partnership Models
            </h2>
            <p className="text-sm text-slate-300">
              Engage with our engineering and growth squads in the structure that best fits your organizational velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="flex flex-col justify-between p-8 rounded-2xl border border-slate-800 bg-slate-900/40">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-blue-400">Model 01</span>
                <h3 className="text-xl font-bold text-white">Dedicated Engineering Squads</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  A complete, cross-functional team (Technical Architect, 2–4 Senior Engineers, UI/UX Designer, and QA Specialist) dedicated 100% to your roadmap in synchronized bi-weekly sprints.
                </p>
                <div className="pt-2 border-t border-slate-800/80 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                    <span>Synchronous US Standups</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                    <span>Full sprint capacity flexibility</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                    <span>Continuous CI/CD releases</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <button
                  onClick={onOpenEstimator}
                  className="w-full rounded-lg bg-blue-600/15 border border-blue-500/30 py-2.5 text-xs font-semibold text-blue-300 hover:bg-blue-600 hover:text-white transition-all text-center"
                >
                  Configure Dedicated Squad
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-between p-8 rounded-2xl border border-blue-500/40 bg-slate-900/70 shadow-xl relative">
              <div className="absolute top-4 right-4 text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 border border-blue-500/30 px-2 py-0.5 rounded">
                Popular
              </div>
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-blue-400">Model 02</span>
                <h3 className="text-xl font-bold text-white">Fixed-Scope Milestone Delivery</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Ideal for well-defined MVPs, platform migrations, complete store redesigns, or autonomous AI tool integrations with predictable fixed budgets and guaranteed milestone dates.
                </p>
                <div className="pt-2 border-t border-slate-800/80 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                    <span>Predictable fixed budget</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                    <span>Detailed Statement of Work (SOW)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                    <span>Guaranteed post-launch SLA period</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <button
                  onClick={onOpenEstimator}
                  className="w-full rounded-lg bg-blue-600 py-2.5 text-xs font-semibold text-white hover:bg-blue-500 transition-all text-center shadow-md shadow-blue-600/20"
                >
                  Request Fixed SOW Proposal
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-between p-8 rounded-2xl border border-slate-800 bg-slate-900/40">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-blue-400">Model 03</span>
                <h3 className="text-xl font-bold text-white">Advisory & Staff Augmentation</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Embed specialized senior talent—such as a Principal AI Architect, Staff React Native Engineer, or Headless Shopify specialist—directly into your existing in-house team.
                </p>
                <div className="pt-2 border-t border-slate-800/80 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                    <span>Rapid onboarding within 7 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                    <span>Seamless integration into your Jira/Slack</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                    <span>Senior-level expertise on demand</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onNavigate('/contact')}
                  className="w-full rounded-lg bg-slate-800 py-2.5 text-xs font-semibold text-slate-200 hover:bg-slate-700 transition-all text-center"
                >
                  Inquire About Augmentation
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Office & Contact Callout */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
            Visit or Contact Us
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Headquartered in Austin, Serving Clients Nationwide
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you are a Series A venture scaling customer acquisition or an established enterprise modernizing critical software, our team is ready to assist.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-400" />
              <span>Austin, TX</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-400" />
              <a href="tel:5126175602" className="hover:text-white transition-colors">
                (512) 617-5602
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-400" />
              <a href="mailto:info@thedigitalparadigm.com" className="hover:text-white transition-colors">
                info@thedigitalparadigm.com
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
