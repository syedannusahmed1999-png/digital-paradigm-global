import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-slate-950 text-slate-100">
      
      {/* Header */}
      <section className="relative overflow-hidden pt-12 pb-14 lg:pt-16 lg:pb-16 border-b border-slate-800/80">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-blue-400 transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return Home</span>
          </button>
          
          <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold tracking-wider uppercase mb-2">
            <Shield className="h-4 w-4" />
            <span>Privacy & Data Protection</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-slate-400">
            Last Updated: October 26, 2026 · The Digital Paradigm, Austin, Texas
          </p>
        </div>
      </section>

      {/* Privacy Prose Content */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Introduction & Scope</h2>
            <p>
              The Digital Paradigm ("we", "us", "our") values the privacy of visitors and clients ("you"). This Privacy Policy outlines how we collect, store, safeguard, and process personal and corporate information when you access <a href="https://www.thedigitalparadigm.com" className="text-blue-400">www.thedigitalparadigm.com</a>, submit project inquiries, or engage our custom software, AI development, and digital marketing services.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Information We Collect</h2>
            <p>
              <strong>2.1 Inquiries & Contact Submissions:</strong> When requesting a proposal, technical estimate, or scheduling a discovery call, we collect information you voluntarily provide, including your name, business email, phone number, company name, project budget, and technical requirements.
            </p>
            <p>
              <strong>2.2 Automated Usage Data:</strong> We collect non-personally identifiable diagnostic information such as browser type, operating system, IP address, referral sources, and page interactions to maintain site security and optimize user experience.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. How We Use Collected Information</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>To evaluate your technical requirements and formulate comprehensive proposals and Statements of Work.</li>
              <li>To coordinate synchronous discovery sessions with our Austin software architecture team.</li>
              <li>To deliver agreed agile engineering sprints, QA reviews, and client portal access.</li>
              <li>To distribute requested quarterly engineering briefings and technology insights (which you may opt out of at any time).</li>
              <li>To prevent fraudulent inquiries and maintain platform cybersecurity.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Client Project Data & AI Governance Policy</h2>
            <p>
              We enforce a strict Zero-Data-Contamination policy regarding proprietary client data, datasets, and intellectual property. When building AI systems, autonomous agents, or fine-tuning models:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Client source code and proprietary databases are <strong>never</strong> used to train public foundation models.</li>
              <li>All training or fine-tuning is executed within isolated, enterprise-tier VPC cloud environments (e.g., AWS Bedrock, Google Cloud Vertex AI, Azure OpenAI) or self-hosted private models.</li>
              <li>All persistent data is encrypted using industry-standard AES-256 encryption at rest and TLS 1.3 in transit.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Cookies and Web Analytics</h2>
            <p>
              We use functional and analytical cookies to understand how visitors engage with our case studies and service documentation. You may disable cookies in your browser settings at any time without degrading essential website readability.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">6. CCPA / CPRA & State Privacy Compliance</h2>
            <p>
              In accordance with the California Consumer Privacy Act (CCPA/CPRA) and related US state data privacy regulations:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>We <strong>do not sell</strong> or share personal information with third-party data brokers.</li>
              <li>You have the right to request access to the personal data we maintain about you.</li>
              <li>You have the right to request the deletion or correction of your personal data at any time.</li>
            </ul>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h2 className="text-lg font-bold text-white">7. Privacy Officer Contact</h2>
            <p>
              To exercise your privacy rights or ask questions regarding this policy, contact our Data Protection Officer at:<br />
              <strong className="text-white">The Digital Paradigm</strong><br />
              Attn: Data Privacy & Compliance<br />
              Austin, Texas, United States<br />
              Email: <a href="mailto:info@thedigitalparadigm.com" className="text-blue-400 hover:underline">info@thedigitalparadigm.com</a><br />
              Phone: (512) 617-5602
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
