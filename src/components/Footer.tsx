import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import logo from '../assets/brand-logo.webp';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          
          {/* Brand & Mission column */}
          <div className="lg:col-span-2 space-y-6">
            <button
              onClick={() => onNavigate('/')}
              aria-label="The Digital Paradigm home"
              className="flex w-fit items-center transition-transform hover:scale-[1.02] focus:outline-none"
            >
              <img src={logo} alt="The Digital Paradigm" className="h-12 w-[200px] object-contain" />
            </button>

            <p className="max-w-md text-sm text-slate-400 leading-relaxed">
              Turning complex challenges into seamless digital solutions. A premier US digital agency specializing in custom software, native mobile apps, performance digital marketing, and enterprise AI systems.
            </p>

            <div className="space-y-3 pt-2 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-blue-400 shrink-0" />
                <span>Austin, Texas · Serving Clients Nationwide</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-400 shrink-0" />
                <a href="tel:5126175602" className="hover:text-white transition-colors">
                  (512) 617-5602
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-400 shrink-0" />
                <a href="mailto:info@thedigitalparadigm.com" className="hover:text-white transition-colors">
                  info@thedigitalparadigm.com
                </a>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-slate-200 uppercase">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/services/app-development')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  App Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/digital-marketing')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Digital Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/ecommerce-development')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  E-commerce Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/design-services')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Design Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/ai-development')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  AI Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/custom-software')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Custom Software & Systems
                </button>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-slate-200 uppercase">
              Company & Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/blog')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Insights & Articles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Contact & Inquiries
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/terms')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/privacy')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter / Briefing */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-slate-200 uppercase">
              Technology Briefing
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Quarterly executive insights on software engineering, autonomous AI models, and scalable digital architectures.
            </p>

            {newsletterSubscribed ? (
              <div className="flex items-center gap-2 rounded-lg bg-emerald-950/60 border border-emerald-800/80 p-3 text-xs text-emerald-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>You are subscribed to our quarterly briefing.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-1.5">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter business email"
                    className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex shrink-0 items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-white hover:bg-blue-500 transition-colors"
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
                <span className="text-[11px] text-slate-500">
                  No promotional spam. Unsubscribe at any time.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} The Digital Paradigm. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('/privacy')} className="hover:text-slate-400 transition-colors">
              Privacy
            </button>
            <span aria-hidden="true">·</span>
            <button onClick={() => onNavigate('/terms')} className="hover:text-slate-400 transition-colors">
              Terms of Service
            </button>
            <span aria-hidden="true">·</span>
            <span>Austin, Texas, United States</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
