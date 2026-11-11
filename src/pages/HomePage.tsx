import React, { useState } from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, Shield, Zap, Layers, Sparkles, ShoppingBag, Palette, Cpu, Terminal, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { CASE_STUDIES } from '../data/caseStudiesData';
import heroImage from '../assets/images/hero_digital_paradigm_agency_1793033404813.jpg';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenEstimator: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenEstimator }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeCaseStudyFilter, setActiveCaseStudyFilter] = useState<string>('all');

  const agencyFaqs = [
    {
      q: 'How does The Digital Paradigm structure client engagements?',
      a: 'We offer three flexible engagement models tailored to your stage and goals: Dedicated Engineering Squads (cross-functional senior team embedded with your leadership), Fixed-Scope Milestone Delivery (ideal for defined MVPs, brand redesigns, or store launches), and Strategic Advisory & Staff Augmentation (senior architects and specialists bolstering your in-house team).'
    },
    {
      q: 'Where is your engineering and design team located?',
      a: 'The Digital Paradigm is headquartered in Austin, Texas. Our senior solution architects, product managers, and lead engineers operate across US time zones, ensuring real-time daily communication, synchronous agile standups, and rapid delivery velocity without offshore communication delays.'
    },
    {
      q: 'How do you ensure zero technical debt and production durability?',
      a: 'Every software release passes automated static analysis, strict TypeScript validation, containerized integration test suites, and peer architecture reviews. We adhere to domain-driven design principles and establish complete CI/CD pipelines so your codebase remains maintainable for years to come.'
    },
    {
      q: 'What is your typical project kickoff timeline?',
      a: 'Following our initial technical discovery call and mutual NDA, we can mobilize a specialized team within 7 to 10 business days. We provide immediate access to shared Slack/Teams channels, Jira/Linear sprint boards, and staging environments from day one.'
    },
    {
      q: 'Who retains intellectual property rights to custom code and designs?',
      a: 'You retain 100% full, unencumbered ownership of all intellectual property, source code, Figma design systems, database schemas, and documentation from the moment of final milestone delivery.'
    }
  ];

  const filteredCaseStudies = activeCaseStudyFilter === 'all'
    ? CASE_STUDIES.slice(0, 4)
    : CASE_STUDIES.filter((cs) => cs.serviceCategory === activeCaseStudyFilter);

  return (
    <div className="w-full bg-slate-950 text-slate-100">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Proposition */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Quiet editorial text kicker */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase">
                <span>The Digital Paradigm</span>
                <span aria-hidden="true">·</span>
                <span>US Digital Agency</span>
              </div>

              {/* Strict Type Scale Headline without orphan trailing words */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-2xl">
                Turning Complex Challenges Into Seamless Digital Solutions
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                We design and engineer bespoke software platforms, native mobile applications, high-converting e-commerce stores, and autonomous AI systems for ambitious US businesses.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={onOpenEstimator}
                  className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500 active:scale-98 transition-all whitespace-nowrap"
                >
                  <span>Schedule Discovery Call</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => onNavigate('/services/custom-software')}
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-6 py-3.5 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-white transition-colors whitespace-nowrap"
                >
                  <span>Explore Capabilities</span>
                </button>
              </div>

              {/* US Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-400" />
                  <span>Austin, TX Headquarters</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-blue-400" />
                  <span>Bi-Weekly Agile Sprints</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-400" />
                  <span>100% IP Ownership</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
                <img
                  src={heroImage}
                  alt="The Digital Paradigm Austin Engineering and Design Studio"
                  referrerPolicy="no-referrer"
                  className="w-full h-[380px] sm:h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800/80 backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <span className="font-semibold text-white block">Engineering & Design Center</span>
                      <span className="text-slate-400 text-[11px]">Senior Architects & Cross-Functional Squads</span>
                    </div>
                    <button
                      onClick={() => onNavigate('/about')}
                      className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1"
                    >
                      <span>About Us</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quantitative Trust Bar in full-width row below hero split */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-800/80">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight tabular-nums">
                $120M+
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">
                Client Gross Revenue Generated
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight tabular-nums">
                99.94%
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">
                Production Crash-Free & Uptime SLA
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight tabular-nums">
                120+
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">
                Mobile & Web Platforms Deployed
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight tabular-nums">
                4.85 ★
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">
                Average App Store & Client Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Capabilities: The Six Categories */}
      <section className="py-20 lg:py-28 border-b border-slate-800/80 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              End-to-End Digital Solutions Tailored for Growth
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We specialize across six interconnected technology disciplines, providing complete strategic alignment from initial UX architecture to post-launch revenue scaling.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. App Development */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/70 p-7 hover:border-blue-500/50 transition-all group">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 group-hover:scale-105 transition-transform">
                  <Layers className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    App Development
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    Native iOS, Android, Flutter, and React Native mobile applications engineered for sub-second fluidity and 99.9% crash-free reliability.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-300">
                  <div className="font-semibold text-slate-400 text-[11px] uppercase tracking-wider">Sub-Services Include:</div>
                  <div className="flex flex-wrap gap-1.5 text-slate-400">
                    <span>iOS & Swift</span> · <span>Android Kotlin</span> · <span>Flutter</span> · <span>React Native</span> · <span>Custom Apps</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onNavigate('/services/app-development')}
                  className="flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Explore App Development</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* 2. Digital Marketing */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/70 p-7 hover:border-blue-500/50 transition-all group">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-600/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-105 transition-transform">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    Digital Marketing
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    Eliminate wasted ad spend with technical SEO, Server-Side Meta Ads (CAPI), high-intent Google PPC, and conversion-focused copywriting.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-300">
                  <div className="font-semibold text-slate-400 text-[11px] uppercase tracking-wider">Sub-Services Include:</div>
                  <div className="flex flex-wrap gap-1.5 text-slate-400">
                    <span>Technical SEO</span> · <span>Google PPC</span> · <span>Meta Ads</span> · <span>Social Media (SMM)</span> · <span>Content Writing</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onNavigate('/services/digital-marketing')}
                  className="flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Explore Digital Marketing</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* 3. E-commerce Web Development */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/70 p-7 hover:border-blue-500/50 transition-all group">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-105 transition-transform">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    E-commerce Web Development
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    High-volume digital retail engines built on Shopify Plus, BigCommerce, WooCommerce, and custom headless Hydrogen architectures.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-300">
                  <div className="font-semibold text-slate-400 text-[11px] uppercase tracking-wider">Sub-Services Include:</div>
                  <div className="flex flex-wrap gap-1.5 text-slate-400">
                    <span>Shopify Plus</span> · <span>Store Management</span> · <span>BigCommerce</span> · <span>WooCommerce</span> · <span>Headless Commerce</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onNavigate('/services/ecommerce-development')}
                  className="flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Explore E-commerce</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* 4. Design Services */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/70 p-7 hover:border-blue-500/50 transition-all group">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 group-hover:scale-105 transition-transform">
                  <Palette className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    Design Services
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    Elevate brand prestige with research-backed UI/UX design, tokenized design systems, mobile ergonomics, and high-converting landing pages.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-300">
                  <div className="font-semibold text-slate-400 text-[11px] uppercase tracking-wider">Sub-Services Include:</div>
                  <div className="flex flex-wrap gap-1.5 text-slate-400">
                    <span>UI/UX Design</span> · <span>Mobile App Design</span> · <span>Logo & Brand</span> · <span>Web App Design</span> · <span>Landing Pages</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onNavigate('/services/design-services')}
                  className="flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <span>Explore Design Services</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* 5. AI Development */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/70 p-7 hover:border-blue-500/50 transition-all group">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600/10 border border-purple-500/20 text-purple-400 group-hover:scale-105 transition-transform">
                  <Cpu className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    AI Development
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    Deploy autonomous multi-agent systems, multimodal generative models, enterprise RAG pipelines, and automated intelligence swarms.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-300">
                  <div className="font-semibold text-slate-400 text-[11px] uppercase tracking-wider">Sub-Services Include:</div>
                  <div className="flex flex-wrap gap-1.5 text-slate-400">
                    <span>Custom AI Models</span> · <span>Generative AI</span> · <span>AI Agents</span> · <span>Intelligent Chatbots</span> · <span>Automation</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onNavigate('/services/ai-development')}
                  className="flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span>Explore AI Development</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* 6. AI Integration & Custom Software */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/70 p-7 hover:border-blue-500/50 transition-all group">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-600/10 border border-amber-500/20 text-amber-400 group-hover:scale-105 transition-transform">
                  <Terminal className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    AI Integration & Custom Software
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    Scalable full-stack web applications, multi-tenant SaaS platforms, custom CMS workflows, and real-time operational telemetry consoles.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-300">
                  <div className="font-semibold text-slate-400 text-[11px] uppercase tracking-wider">Sub-Services Include:</div>
                  <div className="flex flex-wrap gap-1.5 text-slate-400">
                    <span>Custom Web Apps</span> · <span>Full-Stack Engineering</span> · <span>Custom CMS</span> · <span>SaaS Platforms</span> · <span>Dashboards</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onNavigate('/services/custom-software')}
                  className="flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Explore Custom Software</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Featured Projects & Proof Showcase */}
      <section className="py-20 lg:py-28 border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
                Proven Track Record
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">
                Featured Case Studies
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Concrete outcomes, measured metrics, and durable architectural deployments.
              </p>
            </div>

            {/* Filter buttons as functional controls */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg text-xs">
              <button
                onClick={() => setActiveCaseStudyFilter('all')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  activeCaseStudyFilter === 'all'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setActiveCaseStudyFilter('app-development')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  activeCaseStudyFilter === 'app-development'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Mobile Apps
              </button>
              <button
                onClick={() => setActiveCaseStudyFilter('ecommerce-development')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  activeCaseStudyFilter === 'ecommerce-development'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                E-Commerce
              </button>
              <button
                onClick={() => setActiveCaseStudyFilter('ai-development')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  activeCaseStudyFilter === 'ai-development'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                AI & Agents
              </button>
              <button
                onClick={() => setActiveCaseStudyFilter('custom-software')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  activeCaseStudyFilter === 'custom-software'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Custom SaaS
              </button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCaseStudies.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 hover:border-slate-700 transition-all"
              >
                <div className="space-y-4">
                  {/* Clean unboxed metadata with separators */}
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="text-blue-400 font-semibold">{item.clientIndustry}</span>
                    <span aria-hidden="true">·</span>
                    <span>Production Deployment</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    {item.title}
                  </h3>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p><strong className="text-white">Challenge:</strong> {item.challenge}</p>
                    <p><strong className="text-white">Solution:</strong> {item.solution}</p>
                    <p><strong className="text-emerald-400">Impact:</strong> {item.outcome}</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800/80">
                  {/* Metrics with tabular numbers */}
                  <div className="grid grid-cols-3 gap-3">
                    {item.metrics.map((metric, idx) => (
                      <div key={idx}>
                        <div className="text-lg sm:text-xl font-bold text-white font-mono tabular-nums">
                          {metric.value}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Clean unboxed tags */}
                  <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    {item.tags.map((tag, tIdx) => (
                      <React.Fragment key={tIdx}>
                        <span>{tag}</span>
                        {tIdx < item.tags.length - 1 && <span aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose The Digital Paradigm */}
      <section className="py-20 lg:py-28 border-b border-slate-800/80 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
                The Paradigm Standard
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Why Industry Leaders Choose Our Engineering Teams
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                We bridge the gap between high-level management consulting and hands-on, high-velocity software engineering. We don’t pass projects to junior developers or offshore contractors.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenEstimator}
                  className="rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-blue-500 transition-colors"
                >
                  Schedule an Architecture Audit
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/60 space-y-2">
                <div className="text-sm font-bold text-white">100% US-Based Core Architecture</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Direct synchronous communication in your time zone. No 12-hour response delays or lost requirements in offshore translation.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/60 space-y-2">
                <div className="text-sm font-bold text-white">Senior-Only Squad Leadership</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every project is spearheaded by lead architects with at least 8+ years of production experience in scalable distributed systems.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/60 space-y-2">
                <div className="text-sm font-bold text-white">Zero Technical Debt Guarantee</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We write clean, strictly-typed, modular codebases with automated CI/CD pipelines and comprehensive unit and integration coverage.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/60 space-y-2">
                <div className="text-sm font-bold text-white">Transparent Bi-Weekly Sprints</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Continuous staging deployments every 14 days. You can test working software, review burndown charts, and steer priorities in real-time.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. 5-Step Delivery Lifecycle */}
      <section className="py-20 lg:py-28 border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
              Proven Delivery Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              From Strategy to Production in Weeks
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Our systematic 5-phase delivery model ensures predictable milestones, zero surprise costs, and enterprise-grade reliability.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-4">
            
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 space-y-3">
              <span className="text-xs font-mono font-bold text-blue-400">01. Discovery</span>
              <h4 className="text-sm font-bold text-white">Technical Scoping & Architecture</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Deep-dive into requirements, API contracts, entity schemas, and user journeys to construct an actionable technical roadmap.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 space-y-3">
              <span className="text-xs font-mono font-bold text-blue-400">02. Design</span>
              <h4 className="text-sm font-bold text-white">Interactive Prototypes & Ergonomics</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Clickable Figma prototypes, tokenized design systems, and usability testing to validate user flows prior to engineering.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 space-y-3">
              <span className="text-xs font-mono font-bold text-blue-400">03. Build</span>
              <h4 className="text-sm font-bold text-white">High-Velocity Agile Engineering</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Two-week sprints with automated test runners and continuous delivery to preview staging environments.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 space-y-3">
              <span className="text-xs font-mono font-bold text-blue-400">04. Quality</span>
              <h4 className="text-sm font-bold text-white">QA, Security & Load Testing</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rigorous vulnerability scans, memory profiling, accessibility validation, and high-concurrency stress benchmarks.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 space-y-3">
              <span className="text-xs font-mono font-bold text-blue-400">05. Launch</span>
              <h4 className="text-sm font-bold text-white">Zero-Downtime Launch & Growth</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Blue-green cloud rollout, APM observability, and ongoing SLA retainers to ensure continuous feature acceleration.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Interactive Estimator Banner */}
      <section className="py-16 border-b border-slate-800/80 bg-blue-950/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl border border-blue-500/30 bg-slate-900/90 p-8 sm:p-10">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                Interactive Planning
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Ready to Calculate Your Project Timeline & Squad?
              </h3>
              <p className="text-sm text-slate-300">
                Use our interactive project estimator to configure your target platform, complexity tier, and get a realistic sprint schedule.
              </p>
            </div>
            <button
              onClick={onOpenEstimator}
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-xs font-bold text-white hover:bg-blue-500 shadow-lg shadow-blue-600/30 active:scale-98 transition-all whitespace-nowrap shrink-0"
            >
              <span>Launch Scope Estimator</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. Frequently Asked Questions */}
      <section className="py-20 lg:py-28 border-b border-slate-800/80">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
              Clarity & Transparency
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-400">
              Straightforward answers about our engineering process, pricing models, and client partnerships.
            </p>
          </div>

          <div className="space-y-3">
            {agencyFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-800 bg-slate-900/40 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-white focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-400' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. Final Conversion CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
            Let's Build Together
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto">
            Ready to Turn Your Digital Challenge Into a Strategic Advantage?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Connect with our Austin solutions team today to schedule an initial discovery call, discuss your architecture, or receive a formal proposal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 active:scale-98 transition-all"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="tel:5126175602"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-8 py-3.5 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <span>Call (512) 617-5602</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
