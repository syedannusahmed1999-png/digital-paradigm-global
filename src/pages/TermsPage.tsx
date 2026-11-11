import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
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
            <span>Legal Documentation</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Terms & Conditions of Service
          </h1>
          <p className="mt-2 text-xs text-slate-400">
            Last Updated: October 26, 2026 · The Digital Paradigm, Austin, Texas
          </p>
        </div>
      </section>

      {/* Legal Prose Content */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Master Services Overview</h2>
            <p>
              These Terms & Conditions ("Terms", "Agreement") govern all software engineering, mobile application development, digital marketing, UI/UX design, e-commerce, and artificial intelligence integration services provided by The Digital Paradigm ("Company", "we", "us", or "our") to clients, organizations, or individuals ("Client", "you").
            </p>
            <p>
              By executing a Statement of Work ("SOW"), engaging our development squad, or remitting payment for services, the Client acknowledges and agrees to be legally bound by these terms.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Statements of Work & Scope Governance</h2>
            <p>
              All specific deliverables, timelines, technical architectures, and compensation schedules shall be detailed in mutually agreed Statements of Work (SOWs) or Agile Sprint Agreements. Any material modification to functional requirements, third-party API dependencies, or sprint backlog deliverables shall be documented through a formal written Change Request prior to implementation.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Intellectual Property Rights & Code Ownership</h2>
            <p>
              <strong>3.1 Client Ownership:</strong> Upon receipt of full and final payment for the designated milestone or sprint cycle, the Client shall retain 100% full, exclusive, and unencumbered intellectual property rights and title to all custom source code, design systems, database schemas, and documentation created specifically for the Client under the applicable SOW.
            </p>
            <p>
              <strong>3.2 Pre-Existing IP & Open-Source Modules:</strong> Company retains rights to pre-existing general libraries, internal developer toolchains, or open-source frameworks (e.g., React, Flutter, Swift, Tailwind) integrated into the solution, granting Client a perpetual, royalty-free, worldwide, non-exclusive license to use, modify, and distribute such components as embedded in the deliverable.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Confidentiality & Non-Disclosure</h2>
            <p>
              Each party agrees that all business, technical, algorithmic, and financial information disclosed during the engagement constitutes Confidential Information. Neither party shall disclose Confidential Information to any third party without prior written authorization, except as required by law.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Client Cooperation & Third-Party Services</h2>
            <p>
              Client agrees to furnish necessary API credentials, third-party software accounts (e.g., Apple Developer, Google Play Console, AWS, Shopify Plus, Meta Business Manager), and feedback within commercially reasonable timeframes. The Company is not liable for project delays resulting from unfulfilled third-party verification, API deprecation, or external vendor outages.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">6. Warranty, Bug Fixes & Service Level Guarantees</h2>
            <p>
              Company warrants that custom software deliverables will perform materially in accordance with agreed specifications upon launch. We provide a complimentary thirty (30) day warranty period following final acceptance to remediate any reproducible defects or bugs reported in writing. Ongoing maintenance, OS updates, and feature changes after the warranty period are governed by active SLA retainers.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, neither party shall be liable for indirect, incidental, punitive, or consequential damages (including loss of profits, data, or business interruption). In all circumstances, Company's total aggregate liability arising under this Agreement shall not exceed the total fees paid by Client under the applicable Statement of Work during the preceding three (3) month period.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">8. Governing Law & Dispute Resolution</h2>
            <p>
              This Agreement shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law principles. Any legal suit, action, or proceeding arising out of or related to this Agreement shall be instituted exclusively in the federal or state courts located in Travis County, Austin, Texas.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h2 className="text-lg font-bold text-white">9. Legal Contact Information</h2>
            <p>
              For legal inquiries, notices, or clarification regarding these Terms, contact:<br />
              <strong className="text-white">The Digital Paradigm</strong><br />
              Legal & Compliance Department<br />
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
