export interface SubService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  techStack?: string[];
  keyBenefit: string;
}

export interface ServiceCategory {
  slug: string; // e.g. "app-development"
  title: string;
  tagline: string;
  summary: string;
  heroHeadline: string;
  heroDescription: string;
  image: string;
  metrics: { label: string; value: string }[];
  subServices: SubService[];
  techStack: { category: string; tools: string[] }[];
  processSteps: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatarInitials: string;
  };
  publishedAt: string;
  readTime: string;
  content: {
    sectionTitle?: string;
    paragraphs: string[];
    callout?: string;
    list?: string[];
  }[];
}

export interface CaseStudy {
  id: string;
  clientIndustry: string;
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  serviceCategory: string;
}

export interface NavItem {
  label: string;
  path: string;
  children?: { label: string; path: string; description: string }[];
}
