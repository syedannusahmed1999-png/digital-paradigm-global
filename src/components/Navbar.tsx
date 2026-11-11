import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Sparkles, Layers, ShoppingBag, Palette, Cpu, Terminal } from 'lucide-react';
import logo from '../assets/brand-logo.webp';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenEstimator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenEstimator }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceLinks = [
    {
      title: 'App Development',
      path: '/services/app-development',
      desc: 'Native iOS & Android, Flutter, React Native, and custom mobile systems.',
      icon: Layers,
    },
    {
      title: 'Digital Marketing',
      path: '/services/digital-marketing',
      desc: 'Technical SEO, Meta Ads, high-intent PPC campaigns, and content engines.',
      icon: Sparkles,
    },
    {
      title: 'E-commerce Web Development',
      path: '/services/ecommerce-development',
      desc: 'Shopify Plus, BigCommerce, WooCommerce, and headless commerce architectures.',
      icon: ShoppingBag,
    },
    {
      title: 'Design Services',
      path: '/services/design-services',
      desc: 'UI/UX research, enterprise design systems, brand identities, and conversion design.',
      icon: Palette,
    },
    {
      title: 'AI Development',
      path: '/services/ai-development',
      desc: 'Autonomous multi-agent systems, RAG, custom LLMs, and enterprise automation.',
      icon: Cpu,
    },
    {
      title: 'AI Integration & Custom Software',
      path: '/services/custom-software',
      desc: 'Scalable SaaS platforms, custom dashboards, CMS, and full-stack web applications.',
      icon: Terminal,
    },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setServicesOpen(false);
    setMobileMenuOpen(false);
  };

  const isServicesActive = currentPath.startsWith('/services');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-8 px-6 lg:px-8">
        
        {/* Zone 1: Brand logo */}
        <button
          onClick={() => handleNavClick('/')}
          aria-label="The Digital Paradigm home"
          className="group flex shrink-0 items-center transition-transform hover:scale-[1.02] focus:outline-none"
        >
          <img src={logo} alt="The Digital Paradigm" className="h-12 w-[200px] object-contain" />
        </button>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav className="hidden items-center gap-8 md:flex">
          {/* Services dropdown link */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-white whitespace-nowrap shrink-0 ${
                isServicesActive ? 'text-blue-400' : 'text-slate-300'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  servicesOpen ? 'rotate-180 text-blue-400' : 'text-slate-400'
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 mt-3 w-[620px] -translate-x-1/2 rounded-xl border border-slate-800 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-xl">
                <div className="mb-2.5 border-b border-slate-800/80 px-3 pb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                    Our Core Capabilities
                  </span>
                  <button
                    onClick={() => {
                      onOpenEstimator();
                      setServicesOpen(false);
                    }}
                    className="text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Estimate Project Scope →
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {serviceLinks.map((item) => {
                    const Icon = item.icon;
                    const isSelected = currentPath === item.path;
                    return (
                      <button
                        key={item.path}
                        onClick={() => handleNavClick(item.path)}
                        className={`flex items-start gap-3 rounded-lg p-3 text-left transition-colors ${
                          isSelected
                            ? 'bg-blue-600/15 border border-blue-500/30 text-white'
                            : 'hover:bg-slate-800/60 text-slate-200'
                        }`}
                      >
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-800 text-blue-400 border border-slate-700/60">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-100">
                            {item.title}
                          </div>
                          <div className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                            {item.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('/about')}
            className={`text-sm font-medium transition-colors hover:text-white whitespace-nowrap shrink-0 ${
              currentPath === '/about' ? 'text-blue-400' : 'text-slate-300'
            }`}
          >
            About Us
          </button>

          <button
            onClick={() => handleNavClick('/blog')}
            className={`text-sm font-medium transition-colors hover:text-white whitespace-nowrap shrink-0 ${
              currentPath.startsWith('/blog') ? 'text-blue-400' : 'text-slate-300'
            }`}
          >
            Insights & Blog
          </button>

          <button
            onClick={() => handleNavClick('/contact')}
            className={`text-sm font-medium transition-colors hover:text-white whitespace-nowrap shrink-0 ${
              currentPath === '/contact' ? 'text-blue-400' : 'text-slate-300'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden items-center gap-4 md:flex shrink-0">
          <button
            onClick={onOpenEstimator}
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-semibold tracking-wide text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20 active:scale-98 whitespace-nowrap shrink-0"
          >
            Get a Proposal
          </button>
        </div>

        {/* Mobile menu hamburger toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-800 bg-slate-950 px-6 py-6 md:hidden">
          <div className="space-y-4">
            <button
              onClick={() => handleNavClick('/')}
              className={`block w-full text-left text-base font-semibold ${
                currentPath === '/' ? 'text-blue-400' : 'text-slate-200'
              }`}
            >
              Home
            </button>

            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Services
              </span>
              <div className="mt-2 space-y-2 pl-2">
                {serviceLinks.map((service) => (
                  <button
                    key={service.path}
                    onClick={() => handleNavClick(service.path)}
                    className={`block w-full text-left text-sm py-1 ${
                      currentPath === service.path ? 'text-blue-400 font-medium' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleNavClick('/about')}
              className={`block w-full text-left text-base font-semibold ${
                currentPath === '/about' ? 'text-blue-400' : 'text-slate-200'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => handleNavClick('/blog')}
              className={`block w-full text-left text-base font-semibold ${
                currentPath.startsWith('/blog') ? 'text-blue-400' : 'text-slate-200'
              }`}
            >
              Insights & Blog
            </button>

            <button
              onClick={() => handleNavClick('/contact')}
              className={`block w-full text-left text-base font-semibold ${
                currentPath === '/contact' ? 'text-blue-400' : 'text-slate-200'
              }`}
            >
              Contact Us
            </button>

            <div className="pt-4 border-t border-slate-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md active:bg-blue-700"
              >
                <span>Get a Proposal</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
