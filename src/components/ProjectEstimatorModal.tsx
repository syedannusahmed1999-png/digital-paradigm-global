import React, { useState } from 'react';
import { X, CheckCircle2, Calculator, ArrowRight, ShieldCheck, Clock, Users, Sparkles } from 'lucide-react';

interface ProjectEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToContact: () => void;
}

export const ProjectEstimatorModal: React.FC<ProjectEstimatorModalProps> = ({
  isOpen,
  onClose,
  onNavigateToContact,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('app-dev');
  const [selectedScale, setSelectedScale] = useState<string>('growth');
  const [selectedTimeline, setSelectedTimeline] = useState<string>('standard');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    notes: '',
  });

  if (!isOpen) return null;

  const categories = [
    { id: 'app-dev', label: 'App Development', baseWeeks: 10, team: 'Lead Mobile Architect, 2 Sr Devs, UI/UX Designer, QA' },
    { id: 'ai-dev', label: 'AI & Autonomous Agents', baseWeeks: 8, team: 'AI/ML Architect, Full-Stack Engineer, Data Engineer' },
    { id: 'custom-software', label: 'Custom SaaS & Systems', baseWeeks: 12, team: 'Solutions Architect, 3 Full-Stack Devs, DevOps Engineer' },
    { id: 'ecommerce', label: 'E-commerce (Shopify/Custom)', baseWeeks: 6, team: 'Lead Commerce Dev, Frontend Specialist, CRO Designer' },
    { id: 'marketing', label: 'Digital Marketing & SEO', baseWeeks: 4, team: 'Growth Strategist, Technical SEO Lead, Paid Ads Specialist' },
    { id: 'design', label: 'UI/UX & Brand Design', baseWeeks: 5, team: 'Principal Product Designer, Design Systems Specialist' },
  ];

  const scales = [
    { id: 'mvp', label: 'MVP / Proof of Concept', multiplier: 0.8, desc: 'Targeted core feature set for rapid market validation' },
    { id: 'growth', label: 'Scale-Up / Production System', multiplier: 1.0, desc: 'Full-featured, scalable product built for high user concurrency' },
    { id: 'enterprise', label: 'Enterprise Infrastructure', multiplier: 1.4, desc: 'Complex integrations, strict compliance (SOC 2/HIPAA), SLAs' },
  ];

  const timelines = [
    { id: 'accelerated', label: 'Accelerated Sprint (4–8 wks)', desc: 'Dedicated dual-shift engineering squad for urgent launches' },
    { id: 'standard', label: 'Standard Delivery (8–14 wks)', desc: 'Balanced agile 2-week sprint cycles with staged milestones' },
    { id: 'phased', label: 'Multi-Phase Roadmap (16+ wks)', desc: 'Continuous multi-quarter evolutionary architecture' },
  ];

  const currentCat = categories.find((c) => c.id === selectedCategory) || categories[0];
  const currentScale = scales.find((s) => s.id === selectedScale) || scales[1];

  const estimatedWeeks = Math.round(currentCat.baseWeeks * currentScale.multiplier);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl p-6 sm:p-8 my-8 text-slate-100">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <Calculator className="h-4 w-4" />
              <span>Project Scope & Architecture Estimator</span>
            </div>
            <h3 className="mt-1 text-2xl font-bold tracking-tight text-white">
              Plan Your Digital Initiative
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              Configure your requirements to receive a realistic delivery scope, recommended squad structure, and formal proposal.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-950 border border-emerald-600 text-emerald-400">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h4 className="text-xl font-bold text-white">Proposal Request Received</h4>
            <p className="mx-auto max-w-md text-sm text-slate-400 leading-relaxed">
              Thank you, {formData.name || 'there'}. A senior technical architect from our Austin team will review your scope for <span className="text-white font-medium">{currentCat.label}</span> and follow up at <span className="text-blue-400">{formData.email}</span> within 1 business day.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="rounded-lg bg-blue-600 px-6 py-2.5 text-xs font-semibold text-white hover:bg-blue-500 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            
            {/* Step 1: Category */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                1. Select Primary Objective
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`rounded-lg p-3 text-left border text-xs font-medium transition-all ${
                      selectedCategory === cat.id
                        ? 'border-blue-500 bg-blue-600/15 text-white shadow-sm'
                        : 'border-slate-800 bg-slate-800/40 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: System Scale */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                2. Project Scale & Complexity
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {scales.map((scale) => (
                  <button
                    key={scale.id}
                    type="button"
                    onClick={() => setSelectedScale(scale.id)}
                    className={`rounded-lg p-3 text-left border text-xs transition-all ${
                      selectedScale === scale.id
                        ? 'border-blue-500 bg-blue-600/15 text-white'
                        : 'border-slate-800 bg-slate-800/40 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-semibold text-slate-100">{scale.label}</div>
                    <div className="text-[11px] text-slate-400 mt-1 leading-snug">{scale.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Timeline */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                3. Desired Deployment Timeline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {timelines.map((tl) => (
                  <button
                    key={tl.id}
                    type="button"
                    onClick={() => setSelectedTimeline(tl.id)}
                    className={`rounded-lg p-3 text-left border text-xs transition-all ${
                      selectedTimeline === tl.id
                        ? 'border-blue-500 bg-blue-600/15 text-white'
                        : 'border-slate-800 bg-slate-800/40 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-semibold text-slate-100">{tl.label}</div>
                    <div className="text-[11px] text-slate-400 mt-1 leading-snug">{tl.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Estimation Strip */}
            <div className="rounded-xl border border-blue-500/30 bg-blue-950/20 p-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-800 text-xs">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 text-[11px]">Estimated Velocity:</span>
                    <div className="font-bold text-white text-sm">~{estimatedWeeks} Weeks to Production</div>
                  </div>
                </div>
                <div className="pt-3 sm:pt-0 sm:pl-4 flex items-center gap-3">
                  <Users className="h-5 w-5 text-blue-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 text-[11px]">Recommended Squad:</span>
                    <div className="font-medium text-slate-200 text-[11px] line-clamp-1">{currentCat.team}</div>
                  </div>
                </div>
                <div className="pt-3 sm:pt-0 sm:pl-4 flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 text-[11px]">Standard SLA:</span>
                    <div className="font-bold text-white text-sm">100% IP Ownership & QA Guarantee</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details to receive Formal SOW */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                4. Where should we send your detailed technical blueprint?
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="email"
                  required
                  placeholder="Work Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <textarea
                rows={2}
                placeholder="Brief project details, existing stack, or specific goals (optional)..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Submission Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-800">
              <span className="text-[11px] text-slate-400">
                Mutual NDA included upon request · Fast 24-hour turnaround
              </span>
              <button
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-blue-500 active:bg-blue-700 transition-colors"
              >
                <span>Request Detailed Proposal & Timeline</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
