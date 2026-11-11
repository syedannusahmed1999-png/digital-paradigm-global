import { CaseStudy } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-novus-fintech',
    clientIndustry: 'Fintech & Wealth Management',
    title: 'Cross-Platform Mobile Trading & Biometric Portfolio System',
    challenge: 'A high-growth Austin wealth management firm needed to replace legacy desktop portals with a secure, sub-second native mobile experience supporting real-time market data and biometric authentication.',
    solution: 'Engineered a unified Flutter mobile application with custom Impeller rendering, WebSockets streaming for live asset prices, and zero-trust biometric encryption compliant with FINRA standards.',
    outcome: 'Delivered an App Store 4.9-star rating, slashed customer trade latency from 2.4s to 180ms, and increased mobile daily active users by 210% in the first quarter.',
    metrics: [
      { label: 'Trade Execution Latency', value: '< 180ms' },
      { label: 'Mobile DAU Growth', value: '+210%' },
      { label: 'Crash-Free Rate', value: '99.98%' }
    ],
    tags: ['Flutter', 'iOS & Android', 'WebSockets', 'Fintech Security'],
    serviceCategory: 'app-development'
  },
  {
    id: 'case-aurelia-luxury',
    clientIndustry: 'Luxury Apparel & DTC Retail',
    title: 'Headless Commerce Architecture & Global Checkout Optimization',
    challenge: 'An 8-figure luxury fashion brand struggled with severe page bloat (4.2s load time), poor mobile checkout conversion (1.6%), and inventory syncing failures across multiple US fulfillment centers.',
    solution: 'Designed and deployed a custom Shopify Plus Online Store 2.0 theme integrated with Hydrogen edge routing, Algolia visual search, and custom 1-page Checkout Extensibility.',
    outcome: 'Cut Largest Contentful Paint to 1.1s, boosted mobile checkout conversions by 38%, and scaled transaction throughput to handle $2.4M in sales during Cyber Week without downtime.',
    metrics: [
      { label: 'Mobile Checkout Conversion', value: '+38%' },
      { label: 'LCP Load Time', value: '1.1s' },
      { label: 'Cyber Week GMV', value: '$2.4M' }
    ],
    tags: ['Shopify Plus', 'Liquid', 'Hydrogen', 'Checkout Extensibility'],
    serviceCategory: 'ecommerce-development'
  },
  {
    id: 'case-synapse-ai-ops',
    clientIndustry: 'Enterprise Supply Chain & Logistics',
    title: 'Autonomous Multi-Agent Freight Reconciliation Engine',
    challenge: 'A nationwide supply chain logistics provider was expending 1,200 human analyst hours per week manually auditing multi-format freight bills of lading, paper manifests, and discrepancy claims.',
    solution: 'Engineered a multi-agent autonomous system utilizing multimodal document parsing, private self-hosted vector indexing, and deterministic Zod validation rules with automated ERP reconciliation.',
    outcome: 'Automated 84% of freight document reconciliation, reduced claim processing turnaround from 5 days to 4 minutes, and achieved verified ROI in under 4 months.',
    metrics: [
      { label: 'Audit Processing Time', value: '-84%' },
      { label: 'Document Accuracy', value: '99.4%' },
      { label: 'Monthly Hours Saved', value: '4,800 hrs' }
    ],
    tags: ['Autonomous Agents', 'LangGraph', 'Enterprise RAG', 'Python'],
    serviceCategory: 'ai-development'
  },
  {
    id: 'case-helix-cloud-saas',
    clientIndustry: 'Healthcare & Clinical Trials',
    title: 'Multi-Tenant Clinical Trial Operations SaaS Platform',
    challenge: 'A clinical research organization required a HIPAA-compliant SaaS platform capable of tracking distributed patient cohorts, complex consent chains, and regulatory audit compliance.',
    solution: 'Architected a distributed full-stack web application with React 19, TypeScript, PostgreSQL database partitioning, role-based access control (RBAC), and automated immutable audit logging.',
    outcome: 'Accelerated study onboarding by 65%, maintained 99.99% system availability through audits, and enabled the client to secure Series B expansion funding.',
    metrics: [
      { label: 'Study Onboarding Speed', value: '+65%' },
      { label: 'System Availability SLA', value: '99.99%' },
      { label: 'Audit Compliance', value: '100% HIPAA' }
    ],
    tags: ['React', 'TypeScript', 'PostgreSQL', 'HIPAA Ready'],
    serviceCategory: 'custom-software'
  },
  {
    id: 'case-vanguard-growth',
    clientIndustry: 'B2B Industrial Equipment',
    title: 'High-Intent Search Authority & Server-Side Paid Acquisition',
    challenge: 'A US heavy machinery distributor had stagnant inbound lead flow, an unranked technical catalog, and an inefficient $40,000 monthly Google Ads campaign with negative ROAS.',
    solution: 'Executed a complete technical SEO restructuring, generated authoritative product spec content pillars, and overhauled Google Ads with single-intent bidding and Server-Side Conversions API.',
    outcome: 'Increased qualified inbound RFP submissions by 148%, captured #1 positions for 380+ high-intent commercial keywords, and dropped cost-per-lead by 42%.',
    metrics: [
      { label: 'Qualified Inbound RFPs', value: '+148%' },
      { label: 'Cost Per Acquisition (CPA)', value: '-42%' },
      { label: 'Top-3 Keyword Placements', value: '380+' }
    ],
    tags: ['Technical SEO', 'Google Ads', 'Server-Side CAPI', 'B2B Growth'],
    serviceCategory: 'digital-marketing'
  },
  {
    id: 'case-strata-brand-system',
    clientIndustry: 'Commercial Architecture & Construction',
    title: 'Comprehensive Brand Identity & Interactive Digital Portfolio',
    challenge: 'A premier architectural firm needed to rebrand and build a flagship web presence to showcase multimillion-dollar commercial projects to institutional developers.',
    solution: 'Designed a timeless typographic identity system, tokenized Figma component library, and an interactive digital showcase featuring fluid micro-interactions and immersive project walkthroughs.',
    outcome: 'Ranked top in sector design benchmarks, increased prospective RFP client dwell time by 3.2x, and directly supported $38M in closed commercial development bids.',
    metrics: [
      { label: 'Average Session Dwell Time', value: '3.2x' },
      { label: 'Design Usability Score', value: '96/100' },
      { label: 'Commercial Bids Won', value: '$38M+' }
    ],
    tags: ['UI/UX Design', 'Brand Identity', 'Design System', 'Figma'],
    serviceCategory: 'design-services'
  }
];
