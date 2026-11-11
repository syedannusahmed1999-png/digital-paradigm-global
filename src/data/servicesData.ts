import { ServiceCategory } from '../types';

export const SERVICES_DATA: Record<string, ServiceCategory> = {
  'app-development': {
    slug: 'app-development',
    title: 'App Development',
    tagline: 'High-Performance Mobile & Native Applications',
    summary: 'From native iOS and Android experiences to high-performance Flutter and React Native cross-platform apps, we build resilient mobile products engineered for scale.',
    heroHeadline: 'Custom Mobile & Cross-Platform App Development for High-Growth US Businesses',
    heroDescription: 'We design, engineer, and deploy mission-critical mobile applications that achieve top App Store ratings, sub-second response times, and frictionless user experiences.',
    image: '/src/assets/images/app_development_showcase_1793033405785.jpg',
    metrics: [
      { label: 'Avg App Store Rating', value: '4.85 ★' },
      { label: 'Production Releases', value: '120+' },
      { label: 'Crash-Free Session Rate', value: '99.94%' },
      { label: 'Time-to-MVP Velocity', value: '8–12 Wks' },
    ],
    subServices: [
      {
        id: 'mobile-app-dev',
        title: 'Mobile App Development',
        subtitle: 'End-to-End Smartphone & Tablet Solutions',
        description: 'Comprehensive mobile product development from technical scoping and architectural blueprinting through store deployment and ongoing lifecycle support.',
        deliverables: [
          'Full-lifecycle product strategy & roadmap',
          'Offline-first synchronization architecture',
          'Biometric security & encrypted local storage',
          'Seamless third-party API & backend integration'
        ],
        techStack: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'GraphQL', 'AWS Mobile'],
        keyBenefit: 'Guaranteed 99.9% crash-free sessions with optimized battery and memory footprints.'
      },
      {
        id: 'custom-app-dev',
        title: 'Custom App Development',
        subtitle: 'Bespoke Architectural Engineering',
        description: 'Tailored enterprise and consumer mobile applications designed around unique business workflows, proprietary algorithms, and bespoke device integrations.',
        deliverables: [
          'Domain-specific business logic modeling',
          'Microservice-connected client architectures',
          'Custom hardware / BLE device communication protocols',
          'Automated CI/CD deployment pipelines'
        ],
        techStack: ['TypeScript', 'Node.js', 'Go', 'Firebase', 'Fastlane', 'Docker'],
        keyBenefit: 'Zero boilerplate constraints—engineered precisely for your operational requirements.'
      },
      {
        id: 'flutter-app-dev',
        title: 'Flutter App Development',
        subtitle: 'High-Fidelity Multi-Platform Engineering',
        description: 'Single-codebase Flutter applications delivering pixel-perfect 60/120 FPS performance across iOS, Android, and web with native platform channels.',
        deliverables: [
          'Unified Dart codebase for iOS and Android',
          'Custom Skia / Impeller graphics rendering',
          'State management via Bloc or Riverpod',
          'Platform-specific native bridge integrations'
        ],
        techStack: ['Flutter 3.x', 'Dart', 'Bloc', 'Riverpod', 'Isar DB', 'Fastlane'],
        keyBenefit: 'Save up to 40% on engineering lifecycle costs while maintaining native fluidity.'
      },
      {
        id: 'ios-app-dev',
        title: 'iOS App Development',
        subtitle: 'Native Apple Ecosystem Experiences',
        description: 'Handcrafted native applications for iPhone, iPad, Apple Watch, and Apple Vision Pro adhering to Apple Human Interface Guidelines and Swift modern concurrency.',
        deliverables: [
          'Swift 6 & SwiftUI interface development',
          'Combine / Async-Await architectural flow',
          'Apple Pay, HealthKit, and StoreKit 2 integration',
          'App Store submission and review compliance'
        ],
        techStack: ['Swift', 'SwiftUI', 'CoreData', 'StoreKit', 'Combine', 'Xcode Cloud'],
        keyBenefit: 'Uncompromising performance with deep iOS native API and hardware integration.'
      },
      {
        id: 'android-app-dev',
        title: 'Android App Development',
        subtitle: 'Modern Kotlin & Jetpack Compose Solutions',
        description: 'Scalable Android applications engineered to run reliably across thousands of OEM device configurations, screen sizes, and OS versions.',
        deliverables: [
          'Kotlin First architecture with Jetpack Compose',
          'Clean Architecture & MVVM with Coroutines and Flow',
          'Google Play Billing and Push Notification pipelines',
          'Strict adherence to Google Play target SDK standards'
        ],
        techStack: ['Kotlin', 'Jetpack Compose', 'Room DB', 'Koin/Hilt', 'Firebase Cloud Messaging'],
        keyBenefit: 'Broad market reach with robust crash resilience across fragmented Android hardware.'
      },
      {
        id: 'react-native-dev',
        title: 'React Native App Development',
        subtitle: 'Native Feel with JavaScript Velocity',
        description: 'Cross-platform mobile apps powered by React Native and the New Architecture (Fabric & TurboModules) for maximum code reuse and native bridge performance.',
        deliverables: [
          'Modern React Native with TypeScript and Expo EAS',
          'Zero-bridge JSI (JavaScript Interface) modules',
          'Over-The-Air (OTA) critical hotfix deployment',
          'Shared UI design system between Web and Mobile'
        ],
        techStack: ['React Native', 'Expo EAS', 'Reanimated 3', 'Redux Toolkit / Zustand', 'TypeScript'],
        keyBenefit: 'Shared frontend knowledge and shared component logic between web and mobile.'
      }
    ],
    techStack: [
      { category: 'Frameworks', tools: ['SwiftUI', 'Jetpack Compose', 'Flutter', 'React Native', 'Expo'] },
      { category: 'Languages', tools: ['Swift', 'Kotlin', 'Dart', 'TypeScript'] },
      { category: 'Data & Storage', tools: ['Room DB', 'CoreData', 'SQLite', 'Realm', 'Isar'] },
      { category: 'DevOps & Tooling', tools: ['Fastlane', 'Bitrise', 'GitHub Actions', 'Firebase Test Lab'] }
    ],
    processSteps: [
      { step: '01', title: 'Technical Architecture & Scoping', description: 'We analyze your target user personas, offline sync needs, third-party integrations, and determine the optimal framework (Native vs Flutter vs React Native).' },
      { step: '02', title: 'Interactive Prototype & Ergonomics', description: 'We craft tap-through mobile wireframes and interactive prototypes tested for single-handed ergonomics and accessible touch targets.' },
      { step: '03', title: 'Sprint-Based Agile Engineering', description: 'Two-week sprints with continuous test builds delivered directly to TestFlight and Google Play Internal Testing tracks.' },
      { step: '04', title: 'Automated QA & Performance Audit', description: 'Testing across battery consumption, network throttling, memory leaks, security penetration, and device fragmentation.' },
      { step: '05', title: 'App Store Launch & Post-Launch SLAs', description: 'Guaranteed App Store approval management, rating optimization, and proactive maintenance retainers.' }
    ],
    faqs: [
      { question: 'Should we choose Native (iOS/Android) or Cross-Platform (Flutter/React Native)?', answer: 'For apps requiring heavy hardware interaction (ARKit, complex Bluetooth, specialized background geolocation), pure native Swift and Kotlin provide unmatched control. For high-growth SaaS extensions, e-commerce, and workflow apps, modern Flutter or React Native cuts development timelines by 35-40% without sacrificing user experience.' },
      { question: 'Who owns the intellectual property and source code?', answer: 'You own 100% of all intellectual property, design assets, and source code repositories upon completion. We provide full handover documentation and CI/CD pipelines.' },
      { question: 'How do you handle App Store submission and potential rejections?', answer: 'Our engineering leadership has successfully launched over 120 apps. We ensure strict adherence to Apple and Google developer guidelines from day one and manage the submission, metadata, and review communication end-to-end.' }
    ]
  },

  'digital-marketing': {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    tagline: 'Data-Driven Growth & Acquisition Engines',
    summary: 'Accelerate qualified pipeline and customer acquisition through precision SEO, ROI-led Paid Media, high-converting social campaigns, and authoritative content.',
    heroHeadline: 'Performance Digital Marketing & Organic Search Engines for US Enterprises',
    heroDescription: 'We eliminate vanity metrics and build scalable growth engines focused on customer acquisition cost (CAC) reduction, search authority, and verified pipeline revenue.',
    image: '/src/assets/images/hero_marketing_studio_reference.jpg', // Will fallback cleanly if needed
    metrics: [
      { label: 'Avg Inbound Lead Increase', value: '+142%' },
      { label: 'Managed Annual Ad Spend', value: '$18M+' },
      { label: 'Average ROAS across Accounts', value: '4.2x' },
      { label: 'Top-3 Keyword Rankings', value: '14,000+' }
    ],
    subServices: [
      {
        id: 'seo-services',
        title: 'Search Engine Optimization (SEO)',
        subtitle: 'Technical, On-Page & Semantic Authority',
        description: 'Comprehensive SEO strategies built for modern AI search engines and Google Search Generative Experience (SGE), driving sustainable organic dominance.',
        deliverables: [
          'Full technical Core Web Vitals & crawlability audit',
          'Keyword cluster and intent mapping strategy',
          'Schema.org structured data and entity optimization',
          'High-authority editorial backlink acquisition'
        ],
        techStack: ['Ahrefs', 'Semrush', 'Screaming Frog', 'Google Search Console', 'Schema Pro'],
        keyBenefit: 'Long-term organic traffic compounds monthly, slashing paid customer acquisition costs.'
      },
      {
        id: 'smm-services',
        title: 'Social Media Marketing (SMM)',
        subtitle: 'Brand Equity & Community Cultivation',
        description: 'Strategic social media storytelling, short-form video production, and community engagement campaigns across LinkedIn, X, Instagram, and TikTok.',
        deliverables: [
          'Channel strategy and brand voice development',
          'Monthly content calendar & visual asset creation',
          'Active community moderation and B2B engagement',
          'Executive thought leadership ghostwriting'
        ],
        techStack: ['Sprout Social', 'Canva Enterprise', 'Figma', 'Buffer', 'Brandwatch'],
        keyBenefit: 'Transforms dormant social channels into active referral and recruitment drivers.'
      },
      {
        id: 'ppc-management',
        title: 'PPC Management',
        subtitle: 'High-Intent Google Ads & Search Marketing',
        description: 'Meticulously structured search, shopping, and display pay-per-click campaigns that capture buyers at the precise moment of commercial intent.',
        deliverables: [
          'High-converting single-keyword ad groups (SKAG) and smart bidding setups',
          'Negative keyword pruning to eliminate wasted ad spend',
          'A/B tested ad copy variations and responsive search ads',
          'Direct offline conversion tracking and CRM attribution'
        ],
        techStack: ['Google Ads', 'Microsoft Advertising', 'Looker Studio', 'Supermetrics', 'HubSpot'],
        keyBenefit: 'Achieve positive ROAS within 60 days through rigorous negative keyword discipline.'
      },
      {
        id: 'meta-ads-management',
        title: 'Meta Ads Management',
        subtitle: 'Targeted Growth Across Facebook & Instagram',
        description: 'Creative-first paid social strategies utilizing custom audiences, Lookalike models, Conversions API (CAPI), and high-velocity ad testing frameworks.',
        deliverables: [
          'Server-Side Conversions API (CAPI) implementation',
          'Creative matrix testing (hooks, angles, visual formats)',
          'Full-funnel retargeting and retention campaigns',
          'Cross-device attribution and incrementality reporting'
        ],
        techStack: ['Meta Ads Manager', 'Elevar', 'Triple Whale', 'Motion App', 'Northbeam'],
        keyBenefit: 'Overcomes iOS privacy limitations with robust server-side attribution modeling.'
      },
      {
        id: 'content-writing',
        title: 'Content Writing',
        subtitle: 'Conversion-Focused & Thought Leadership Editorial',
        description: 'Authoritative, research-backed copywriting and technical articles created by US industry specialists that educate buyers and rank for competitive keywords.',
        deliverables: [
          'SEO pillar guides, whitepapers, and case studies',
          'Conversion-focused website and landing page copy',
          'Email drip sequences and nurture campaigns',
          'Product spec sheets and comparison battlecards'
        ],
        techStack: ['Clearscope', 'SurferSEO', 'Grammarly Business', 'Hemingway'],
        keyBenefit: 'Establishes clear category leadership and improves organic conversion rates by 2.4x.'
      }
    ],
    techStack: [
      { category: 'Search & Analytics', tools: ['Google Search Console', 'Ahrefs', 'Screaming Frog', 'GA4', 'Semrush'] },
      { category: 'Paid Advertising', tools: ['Google Ads', 'Meta Business Suite', 'LinkedIn Campaign Manager', 'TikTok Ads'] },
      { category: 'Attribution & Tracking', tools: ['Triple Whale', 'Segment', 'Google Tag Manager', 'Looker Studio'] },
      { category: 'Content Intelligence', tools: ['Clearscope', 'SurferSEO', 'HubSpot CRM'] }
    ],
    processSteps: [
      { step: '01', title: 'Comprehensive Acquisition Audit', description: 'Deep-dive into your analytics tracking, historical ad performance, domain backlink profile, and competitor keyword positioning.' },
      { step: '02', title: 'Full-Funnel Growth Blueprint', description: 'Establish clear CAC and ROAS targets, define high-intent audience segments, and architect tracking with Google Tag Manager and Server-Side CAPI.' },
      { step: '03', title: 'Creative & Campaign Deployment', description: 'Launch coordinated search, social, and content initiatives backed by rigorous A/B creative testing protocols.' },
      { step: '04', title: 'Continuous Algorithmic Optimization', description: 'Weekly bid adjustments, negative keyword hygiene, creative fatigue refreshes, and conversion rate optimization (CRO).' },
      { step: '05', title: 'Transparent Executive Reporting', description: 'Real-time Looker Studio dashboards connecting ad impressions directly to Closed-Won revenue in your CRM.' }
    ],
    faqs: [
      { question: 'How quickly can we expect to see results from Digital Marketing?', answer: 'PPC and Meta advertising campaigns begin driving qualified traffic and conversions within the first 7–14 days as algorithms calibrate. Organic SEO and content marketing typically achieve compounding returns within 3 to 6 months as domain authority scales.' },
      { question: 'How do you handle tracking in the post-cookie / iOS 14.5+ landscape?', answer: 'We implement server-side tracking via Google Cloud Tag Manager and Meta Conversions API (CAPI), combined with blended ROAS analytics (Triple Whale/Northbeam) to ensure 100% data fidelity.' },
      { question: 'What is the minimum recommended ad budget to work with your team?', answer: 'We typically recommend a minimum monthly media spend of $5,000 for Paid Search/Social to ensure sufficient statistical data for rapid creative and algorithmic optimization.' }
    ]
  },

  'ecommerce-development': {
    slug: 'ecommerce-development',
    title: 'E-commerce Web Development',
    tagline: 'High-Converting Stores Engineered for Revenue Scale',
    summary: 'Build, optimize, and scale DTC and B2B digital commerce stores on Shopify Plus, BigCommerce, WooCommerce, and headless bespoke architectures.',
    heroHeadline: 'High-Converting E-Commerce Stores & Scalable Merchant Architectures',
    heroDescription: 'From high-growth Shopify Plus flagships to complex multi-currency custom commerce engines, we deliver lightning-fast checkout experiences that maximize Average Order Value (AOV).',
    image: '/src/assets/images/ecommerce_retail_dashboard_1793033406114.jpg',
    metrics: [
      { label: 'Client Annual GMV Processed', value: '$85M+' },
      { label: 'Avg Mobile Checkout Uplift', value: '+34%' },
      { label: 'Page Load Speed', value: '< 1.4s' },
      { label: 'Store Migration Uptime', value: '100%' }
    ],
    subServices: [
      {
        id: 'shopify-development',
        title: 'Shopify Store Design & Development',
        subtitle: 'Shopify Plus & 2.0 Custom Theme Engineering',
        description: 'Bespoke Shopify Online Store 2.0 themes and headless Hydrogen setups engineered for extreme speed, custom app functionality, and brand storytelling.',
        deliverables: [
          'Custom Liquid / Hydrogen storefront architecture',
          'Mobile-first conversion-optimized PDP and cart drawer',
          'Checkout Extensibility & custom upsell integrations',
          'ERP, 3PL inventory, and Klaviyo data synchronization'
        ],
        techStack: ['Shopify Plus', 'Liquid', 'Hydrogen', 'GraphQL Admin API', 'Tailwind CSS'],
        keyBenefit: 'Sub-second mobile loading speeds that directly boost checkout completion rates.'
      },
      {
        id: 'ecommerce-management',
        title: 'E-commerce Store Management',
        subtitle: 'Ongoing Technical Maintenance & Merchandising',
        description: 'Full-service technical oversight, security patch management, app stack optimization, catalog syndication, and continuous CRO testing.',
        deliverables: [
          'Weekly speed, script, and app weight audits',
          'Promotional campaign and sale launch staging',
          'Inventory syncing and multi-warehouse troubleshooting',
          'Conversion Rate Optimization (CRO) A/B testing'
        ],
        techStack: ['Shopify Admin', 'Intelligems', 'Klaviyo', 'Gorgias', 'ShipBob API'],
        keyBenefit: 'Hands-off technical peace of mind allowing you to focus on sourcing and marketing.'
      },
      {
        id: 'bigcommerce-development',
        title: 'BigCommerce Development',
        subtitle: 'Enterprise B2B & Complex Wholesale Commerce',
        description: 'Robust BigCommerce implementations featuring tiered wholesale customer pricing, punchout catalogs, custom ERP integrations, and multi-storefront setups.',
        deliverables: [
          'BigCommerce Multi-Storefront (MSF) configuration',
          'Custom B2B quotation and credit payment workflows',
          'ERP syncing with NetSuite, SAP, or Acumatica',
          'Custom Stencil theme engineering'
        ],
        techStack: ['BigCommerce B2B Edition', 'Stencil CLI', 'GraphQL', 'Node.js middleware'],
        keyBenefit: 'Effortlessly manage complex wholesale credit terms and retail pricing in one engine.'
      },
      {
        id: 'woocommerce-development',
        title: 'WooCommerce Development',
        subtitle: 'Customized & Scalable WordPress Commerce',
        description: 'High-performance WooCommerce stores decoupled or tuned to handle large SKU volumes, subscription billing, and complex product configurators.',
        deliverables: [
          'Database indexing and Redis object caching for high catalog scale',
          'Custom checkout flow with Stripe Elements & Apple Pay',
          'Automated subscription recurring revenue workflows',
          'Seamless CRM and marketing automation integration'
        ],
        techStack: ['WordPress', 'WooCommerce', 'PHP 8.3', 'Redis', 'Stripe API'],
        keyBenefit: 'Total ownership of your commerce database with zero platform GMV tax or licensing fees.'
      },
      {
        id: 'custom-ecommerce-development',
        title: 'Custom E-commerce Development',
        subtitle: 'Headless, Composable & API-First Commerce',
        description: 'Decoupled headless storefronts powered by Next.js, Medusa, or commercetools, delivering unlimited design freedom and omnichannel flexibility.',
        deliverables: [
          'API-driven microservices architecture',
          'Global Edge CDN deployment with instantaneous page transitions',
          'Custom pricing engines, bundle builders, and 3D product visualizers',
          'Omnichannel POS and custom marketplace synchronization'
        ],
        techStack: ['Next.js', 'Medusa.js', 'commercetools', 'Stripe Custom', 'Algolia Search'],
        keyBenefit: 'Zero platform limitations—designed specifically for innovative product configurators.'
      }
    ],
    techStack: [
      { category: 'Platforms', tools: ['Shopify Plus', 'BigCommerce', 'WooCommerce', 'Medusa.js', 'Magento'] },
      { category: 'Frontend', tools: ['Next.js', 'Liquid', 'Hydrogen', 'Tailwind CSS', 'Vue / React'] },
      { category: 'Payments & Checkout', tools: ['Stripe', 'Shop Pay', 'PayPal Enterprise', 'Klarna', 'Recharge'] },
      { category: 'Integrations & ERP', tools: ['NetSuite', 'Klaviyo', 'Gorgias', 'ShipStation', 'Algolia'] }
    ],
    processSteps: [
      { step: '01', title: 'Commerce Architecture & Catalog Audit', description: 'Review SKU hierarchies, multi-currency needs, tax/fulfillment integrations, and choose between Shopify Plus, BigCommerce, or Headless.' },
      { step: '02', title: 'UX Wireframing & Checkout Flow', description: 'Design high-converting mobile product detail pages (PDPs), sticky add-to-cart bars, and friction-free 1-page checkout flows.' },
      { step: '03', title: 'Theme & Custom App Engineering', description: 'Build responsive custom themes adhering to zero-bloat code standards, integrating third-party APIs with asynchronous loading.' },
      { step: '04', title: 'Data Migration & Pre-Launch Validation', description: 'Zero-downtime migration of customer accounts, historical orders, and product data with 301 redirect mapping.' },
      { step: '05', title: 'Go-Live & Post-Launch CRO Sprint', description: 'Seamless DNS switchover, real-time transaction monitoring, and immediate continuous split-testing.' }
    ],
    faqs: [
      { question: 'Can you migrate our store from Magento or WooCommerce to Shopify Plus without losing SEO?', answer: 'Yes. We have executed over 40 complex platform migrations. We implement comprehensive 1-to-1 URL redirect mapping, structured metadata mirroring, and customer password migration to ensure zero SEO ranking drops or customer disruption.' },
      { question: 'What is Headless Commerce, and do we need it?', answer: 'Headless commerce separates the frontend presentation layer (e.g. Next.js) from the backend commerce engine (e.g. Shopify or BigCommerce). It is ideal for brands requiring sub-second international loading, bespoke 3D customizers, or unified experiences across web, native mobile, and IoT.' },
      { question: 'Do you offer ongoing retainer support after our store launches?', answer: 'Yes, we provide ongoing retainer packages that include 24/7 technical monitoring, security updates, conversion rate optimization, new landing page rollouts, and app integration maintenance.' }
    ]
  },

  'design-services': {
    slug: 'design-services',
    title: 'Design Services',
    tagline: 'Brand Identity & Intuitive User Experiences',
    summary: 'Craft memorable brand identities, high-converting design systems, and intuitive UI/UX for web, mobile, and digital products.',
    heroHeadline: 'User-Centered UI/UX, Brand Systems & Conversion-Driven Digital Design',
    heroDescription: 'Great design is measurable. We combine human psychology, rigorous user research, and world-class visual aesthetics to turn complex products into intuitive digital experiences.',
    image: '/src/assets/images/hero_digital_paradigm_agency_1793033404813.jpg',
    metrics: [
      { label: 'UX Usability Test Score', value: '94/100' },
      { label: 'Design Systems Built', value: '80+' },
      { label: 'Figma Component Libraries', value: '100% Tokenized' },
      { label: 'Avg Conversion Uplift', value: '+41%' }
    ],
    subServices: [
      {
        id: 'ecommerce-web-design',
        title: 'E-commerce Web Design',
        subtitle: 'Conversion-Focused Visual Merchandising',
        description: 'Immersive online shopping experiences designed to showcase product craftsmanship, eliminate buying hesitation, and maximize Average Order Value.',
        deliverables: [
          'High-converting mobile and desktop storefront layouts',
          'Interactive product visualizers and zoom galleries',
          'Sticky cart drawer and upsell design flows',
          'WCAG 2.1 AA accessibility compliance audit'
        ],
        techStack: ['Figma', 'FigJam', 'Principle', 'Adobe Creative Cloud', 'Maze'],
        keyBenefit: 'Proven UX architecture designed specifically to reduce abandoned cart rates.'
      },
      {
        id: 'ui-ux-design',
        title: 'UI/UX Design',
        subtitle: 'Comprehensive User Research & Interface Craft',
        description: 'End-to-end user experience design grounded in qualitative customer interviews, heuristic audits, information architecture, and high-fidelity prototypes.',
        deliverables: [
          'User journey maps and persona development',
          'Low-fidelity wireframing and user flow diagrams',
          'Interactive clickable prototypes for user testing',
          'Comprehensive design system with Figma variables and tokens'
        ],
        techStack: ['Figma', 'Miro', 'Hotjar', 'UserTesting', 'Zeroheight'],
        keyBenefit: 'Eliminates product friction before writing a single line of frontend code.'
      },
      {
        id: 'mobile-app-design',
        title: 'Mobile App Design',
        subtitle: 'iOS & Android Native Design Systems',
        description: 'Ergonomic mobile interface design following Apple Human Interface Guidelines and Google Material You 3 standards for natural tactile engagement.',
        deliverables: [
          'Thumb-friendly navigation hierarchy and gestures',
          'Dark and light mode color token variations',
          'Micro-interaction and haptic feedback specifications',
          'Pixel-perfect developer handoff specs and assets'
        ],
        techStack: ['Figma', 'Protopie', 'Lottie', 'Jitter', 'Zeplin'],
        keyBenefit: 'Natural, native feel that feels at home on modern iOS and Android operating systems.'
      },
      {
        id: 'logo-design',
        title: 'Logo Design & Visual Identity',
        subtitle: 'Distinctive Corporate & Product Branding',
        description: 'Memorable brand marks, typographic systems, color palettes, and comprehensive brand guidelines engineered to stand out in crowded digital markets.',
        deliverables: [
          'Primary, secondary, and responsive responsive icon marks',
          'Vector master files (SVG, EPS, PDF, PNG)',
          'Comprehensive brand style guideline manual (PDF)',
          'Social media kit and stationery collateral assets'
        ],
        techStack: ['Adobe Illustrator', 'Figma', 'Glyphs', 'Photoshop'],
        keyBenefit: 'Timeless visual identity that commands premium pricing and builds enterprise trust.'
      },
      {
        id: 'web-app-design',
        title: 'Web App Design',
        subtitle: 'Complex SaaS & Enterprise Workspaces',
        description: 'Dense information architecture, responsive multi-column layouts, data tables, and intuitive configuration controls for modern cloud applications.',
        deliverables: [
          'Information architecture and hierarchy mapping',
          'Data visualization dashboards and chart specifications',
          'Empty, loading, error, and partial system states',
          'Keyboard shortcut and productivity interaction flows'
        ],
        techStack: ['Figma', 'Storybook', 'Tailwind Design Tokens', 'Lucide Icons'],
        keyBenefit: 'Transforms complex enterprise workflows into simple, delightful SaaS experiences.'
      },
      {
        id: 'custom-web-design',
        title: 'Custom Web Design',
        subtitle: 'Bespoke Brand Marketing & Corporate Sites',
        description: 'One-of-a-kind web design free from templated constraints, featuring intentional typography, subtle animations, and distinctive narrative layout rhythms.',
        deliverables: [
          'Unique creative concepting aligned with company positioning',
          'Responsive grid layouts across 320px to 1920px viewports',
          'Custom iconography, vector graphics, and asset styling',
          'Scroll animation and micro-interaction specs'
        ],
        techStack: ['Figma', 'Spline 3D', 'Adobe Suite', 'Framer'],
        keyBenefit: 'Separates your company from competitors with an undeniable standard of craft.'
      },
      {
        id: 'landing-page-design',
        title: 'Landing Page Design',
        subtitle: 'Direct-Response & Paid Campaign Funnels',
        description: 'Precision-engineered landing pages built around single clear value propositions, persuasive proof hierarchy, and conversion-focused CTAs.',
        deliverables: [
          'Hero section messaging and focal visual arrangement',
          'Adjacent social proof and metric validation blocks',
          'Objection handling FAQ and interactive calculators',
          'A/B test variant wireframes for rapid experimentation'
        ],
        techStack: ['Figma', 'Unbounce', 'VWO', 'Hotjar'],
        keyBenefit: 'Directly lowers cost per lead on Google and Meta ad campaigns.'
      }
    ],
    techStack: [
      { category: 'Design & Prototyping', tools: ['Figma', 'FigJam', 'Principle', 'Protopie'] },
      { category: 'Branding & Graphics', tools: ['Adobe Illustrator', 'Photoshop', 'After Effects'] },
      { category: 'Handoff & Systems', tools: ['Storybook', 'Zeroheight', 'Figma Tokens', 'GitHub'] },
      { category: 'User Research', tools: ['Maze', 'UserTesting', 'Hotjar', 'FullStory'] }
    ],
    processSteps: [
      { step: '01', title: 'Discovery & Heuristic Research', description: 'Analyze existing user pain points, audit competitor interfaces, and define quantitative UX success metrics.' },
      { step: '02', title: 'Information Architecture & Wireframes', description: 'Establish clear user journeys, screen flows, and low-fidelity structural layouts focused on friction-free navigation.' },
      { step: '03', title: 'Design System & Component Tokenization', description: 'Construct scalable design tokens (colors, typography, spacing, radius) and reusable atomic component libraries.' },
      { step: '04', title: 'High-Fidelity Visual Design & Motion', description: 'Apply world-class aesthetics, subtle transitions, responsive states, and WCAG AA accessibility compliance.' },
      { step: '05', title: 'Developer Handoff & QA Governance', description: 'Provide precise CSS specifications, exported vector assets, and conduct pixel-level design QA during frontend builds.' }
    ],
    faqs: [
      { question: 'What deliverables do we receive at the conclusion of a design project?', answer: 'You receive an organized Figma master file with complete component libraries, auto-layout tokens, responsive mobile/tablet/desktop artboards, clickable prototypes, and an interactive developer handoff guide.' },
      { question: 'How do you ensure designs are practical for developers to build?', answer: 'Our designers work directly alongside senior full-stack engineers every day. Every component we create adheres to CSS grid/flexbox constraints and modern component architectures (React/Tailwind), ensuring zero friction during implementation.' },
      { question: 'Do you offer user testing before development begins?', answer: 'Yes. We run unmoderated and moderated usability testing sessions using clickable Figma and Maze prototypes, identifying friction points before committing engineering hours.' }
    ]
  },

  'ai-development': {
    slug: 'ai-development',
    title: 'AI Development',
    tagline: 'Autonomous Agents, LLMs & Intelligent Systems',
    summary: 'Deploy custom generative AI models, autonomous multi-agent systems, intelligent RAG pipelines, and automated business workflows that reduce operational overhead.',
    heroHeadline: 'Custom AI Engineering, Autonomous Agents & Enterprise Generative Models',
    heroDescription: 'Move beyond shallow wrappers. We engineer production-ready AI architectures featuring retrieval-augmented generation (RAG), autonomous tool-calling agents, and fine-tuned private models.',
    image: '/src/assets/images/ai_software_architecture_1793033405798.jpg',
    metrics: [
      { label: 'Model Latency (p95)', value: '< 420ms' },
      { label: 'Hallucination Mitigation', value: '99.4% Verified' },
      { label: 'Hours Saved Monthly', value: '18,500+' },
      { label: 'Enterprise Security', value: 'SOC 2 & HIPAA Ready' }
    ],
    subServices: [
      {
        id: 'custom-ai-dev',
        title: 'Custom AI Development',
        subtitle: 'Domain-Trained Models & Neural Architectures',
        description: 'Bespoke machine learning and deep learning solutions engineered on your proprietary company data, strictly respecting data privacy and air-gapped hosting requirements.',
        deliverables: [
          'Proprietary data preparation, sanitization, and embedding pipelines',
          'Domain-specific LoRA / QLoRA model fine-tuning',
          'Self-hosted inference servers with vLLM or Ollama',
          'Continuous evaluation metrics and drift detection monitors'
        ],
        techStack: ['PyTorch', 'Hugging Face', 'vLLM', 'Ray', 'CUDA', 'Python'],
        keyBenefit: 'Retain 100% data sovereignty without training public models on your trade secrets.'
      },
      {
        id: 'generative-ai-dev',
        title: 'Generative AI Development',
        subtitle: 'Multimodal Text, Audio, Vision & Code Engines',
        description: 'Harness state-of-the-art foundation models (Gemini, Claude, GPT-4o, Llama 3) to automate complex creative, analytical, and multimodal workflows.',
        deliverables: [
          'Multimodal document parsing (PDFs, invoices, blueprints)',
          'Advanced RAG with hybrid dense-sparse vector search',
          'Structured JSON output validation with Pydantic / Zod',
          'Deterministic guardrails preventing hallucinated outputs'
        ],
        techStack: ['Gemini API', 'OpenAI', 'Anthropic Claude', 'Pinecone', 'Qdrant', 'LangChain'],
        keyBenefit: 'Extract structured intelligence from unstructured enterprise data in real-time.'
      },
      {
        id: 'ai-chatbot-dev',
        title: 'AI Chatbot Development',
        subtitle: 'Enterprise-Grade Conversational Intelligence',
        description: 'Customer support, internal helpdesk, and sales qualification assistants with conversational memory, multi-turn context retention, and human-in-the-loop escalation.',
        deliverables: [
          'Real-time streaming conversational interface',
          'Company knowledge-base synchronization and citations',
          'Automated sentiment detection and CRM ticket creation',
          'Human-in-the-loop escalation protocols'
        ],
        techStack: ['React', 'WebSockets', 'LangGraph', 'FastAPI', 'Redis', 'Zendesk API'],
        keyBenefit: 'Resolves 70%+ of tier-1 support inquiries instantly with zero human intervention.'
      },
      {
        id: 'ai-agent-dev',
        title: 'AI Agent Development',
        subtitle: 'Autonomous Task-Executing Multi-Agent Swarms',
        description: 'Autonomous goal-driven agents capable of multi-step reasoning, external tool-calling, database querying, web browsing, and multi-agent consensus validation.',
        deliverables: [
          'Goal-oriented planner and replanner agent architectures',
          'Secure sandbox execution environments for tool calling',
          'Multi-agent role specialization (Researcher, Coder, Reviewer)',
          'Fail-safe rollback mechanisms and audit logging'
        ],
        techStack: ['LangGraph', 'CrewAI', 'AutoGen', 'Docker Sandboxes', 'Python 3.12'],
        keyBenefit: 'Performs complex multi-hour operational workflows autonomously in minutes.'
      },
      {
        id: 'ai-automation-services',
        title: 'AI Automation Services',
        subtitle: 'End-to-End Intelligent Business Workflows',
        description: 'Connecting your existing ERP, CRM, and cloud platforms with automated cognitive routines that eliminate tedious manual data entry and classification.',
        deliverables: [
          'Automated invoice ingestion and reconciliation',
          'Intelligent email classification and automated drafting',
          'Real-time lead enrichment and scoring pipelines',
          'Scheduled data summarization and executive digests'
        ],
        techStack: ['n8n Enterprise', 'Temporal.io', 'Make', 'Kafka', 'Zapier Enterprise'],
        keyBenefit: 'Saves hundreds of employee hours every week on repetitive operational tasks.'
      },
      {
        id: 'ai-integration-services',
        title: 'AI Integration Services',
        subtitle: 'Embedding AI into Existing Software Stacks',
        description: 'Retrofitting your legacy applications or SaaS products with modern AI capabilities through clean REST and GraphQL microservice proxies.',
        deliverables: [
          'Secure API gateway layer protecting model credentials',
          'Token usage rate-limiting, metering, and cost tracking',
          'Semantic caching with Redis to cut inference costs by 60%',
          'Streaming UI components with zero latency lag'
        ],
        techStack: ['Express / FastAPI', 'Redis Semantic Cache', 'PostgreSQL pgvector', 'Docker'],
        keyBenefit: 'Rapidly adds competitive AI differentiators to legacy software products.'
      }
    ],
    techStack: [
      { category: 'Foundation Models', tools: ['Gemini 2.5 / 3', 'Claude 3.5 Sonnet', 'GPT-4o', 'Llama 3.3', 'Mistral'] },
      { category: 'Frameworks & Agents', tools: ['LangGraph', 'CrewAI', 'LlamaIndex', 'FastAPI', 'Pydantic'] },
      { category: 'Vector Databases', tools: ['Pinecone', 'Qdrant', 'pgvector', 'Weaviate', 'Chroma'] },
      { category: 'Infrastructure & MLOps', tools: ['vLLM', 'Triton Server', 'Ollama', 'AWS Bedrock', 'Docker'] }
    ],
    processSteps: [
      { step: '01', title: 'Data Readiness & Feasibility Scoping', description: 'Assess proprietary data quality, vectorization feasibility, privacy constraints, and choose between hosted vs self-hosted model architectures.' },
      { step: '02', title: 'RAG Architecture & Benchmark Setup', description: 'Build semantic chunking pipelines, evaluate vector retrieval accuracy against domain query test sets, and construct guardrails.' },
      { step: '03', title: 'Agent Tooling & Workflow Engineering', description: 'Develop specialized tools, database query interfaces, and multi-agent coordination loops with deterministic error fallbacks.' },
      { step: '04', title: 'Security, Latency & Hallucination Hardening', description: 'Conduct red-teaming for prompt injections, implement semantic caching, and enforce strict Pydantic output validation schemas.' },
      { step: '05', title: 'Enterprise Deployment & Observability', description: 'Deploy with LangSmith / Phoenix tracing, automated cost controls, and continuous user feedback fine-tuning.' }
    ],
    faqs: [
      { question: 'Will our proprietary business data be used to train public AI models?', answer: 'Never. We engineer zero-data-retention pipelines utilizing enterprise API tiers (such as Google Cloud Vertex AI, Azure OpenAI, or AWS Bedrock) or deploy fully self-hosted open-weights models (Llama 3, Mistral) within your private VPC.' },
      { question: 'How do you prevent AI hallucinations in production?', answer: 'We employ strict Retrieval-Augmented Generation (RAG) with source groundings, hybrid BM25 + dense semantic vector search, deterministic JSON schema enforcement (Zod/Pydantic), and secondary validator LLM passes before returning answers to users.' },
      { question: 'What is the difference between an AI Chatbot and an AI Agent?', answer: 'A chatbot responds conversationally to prompts based on retrieval. An autonomous AI agent actively formulates a plan, executes multi-step actions across external APIs, queries internal databases, runs code in sandboxes, and verifies its own work to achieve a goal.' }
    ]
  },

  'custom-software': {
    slug: 'custom-software',
    title: 'AI Integration & Custom Software',
    tagline: 'Enterprise Software, Scalable Web Applications & Core Systems',
    summary: 'Engineer mission-critical web applications, high-concurrency SaaS platforms, custom CMS architectures, and executive dashboards designed for operational resilience.',
    heroHeadline: 'Custom Software Development, Scalable Web Applications & Business Systems',
    heroDescription: 'We build the mission-critical software that powers ambitious US companies. From high-throughput SaaS backends to custom internal dashboards and integrations, we deliver robust engineering without technical debt.',
    image: '/src/assets/images/hero_digital_paradigm_agency_1793033404813.jpg',
    metrics: [
      { label: 'Backend Availability SLA', value: '99.99%' },
      { label: 'SaaS Platforms Architected', value: '65+' },
      { label: 'Database Queries (p99)', value: '< 25ms' },
      { label: 'SOC 2 Compliant Blueprints', value: '100%' }
    ],
    subServices: [
      {
        id: 'custom-web-apps',
        title: 'Custom Web Application Development',
        subtitle: 'Bespoke Business Engines & Portals',
        description: 'Robust, secure, and responsive web applications built to automate complex operations, vendor portals, and customer-facing service workflows.',
        deliverables: [
          'Modern React / Next.js / TypeScript frontend architecture',
          'Resilient RESTful and GraphQL backend microservices',
          'Role-Based Access Control (RBAC) and enterprise SSO (SAML/Okta)',
          'Automated audit logging and compliance reporting'
        ],
        techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
        keyBenefit: 'Replaces fractured spreadsheets and legacy software with a unified web system.'
      },
      {
        id: 'full-stack-web-dev',
        title: 'Full-Stack Web Development',
        subtitle: 'End-to-End Modern Engineering',
        description: 'Cohesive engineering from database schema design and distributed queue architectures up to fluid, responsive browser user interfaces.',
        deliverables: [
          'Relational and document database modeling and indexing',
          'Asynchronous background job processing with Redis and BullMQ',
          'Server-side rendering (SSR) and edge-cached static distribution',
          'Comprehensive end-to-end and unit testing suites'
        ],
        techStack: ['TypeScript', 'Express', 'Prisma / Drizzle', 'Redis', 'PostgreSQL', 'Tailwind'],
        keyBenefit: 'Single accountability across both backend reliability and frontend polish.'
      },
      {
        id: 'custom-cms-dev',
        title: 'Custom CMS Development',
        subtitle: 'Tailored Editorial & Headless Content Engines',
        description: 'High-speed headless CMS implementations and custom publishing engines tailored specifically to your content team’s publishing workflow.',
        deliverables: [
          'Headless CMS setups (Strapi, Payload, Sanity, or custom)',
          'Custom content models, relations, and multilingual fields',
          'Real-time preview and instant static webhooks',
          'Asset optimization and global media CDN delivery'
        ],
        techStack: ['Payload CMS', 'Strapi', 'Sanity', 'Next.js', 'AWS S3 / CloudFront'],
        keyBenefit: 'Gives marketing teams total publishing agility with zero developer bottlenecks.'
      },
      {
        id: 'saas-platform-dev',
        title: 'SaaS Platform Development',
        subtitle: 'Multi-Tenant Cloud Architectures',
        description: 'Building commercial SaaS products from scratch with multi-tenant data isolation, Stripe billing tiers, usage metering, and team management.',
        deliverables: [
          'Multi-tenant architecture with tenant database partitioning',
          'Stripe Billing, usage-based metering, and tiered subscriptions',
          'Self-serve onboarding flows and team member invitations',
          'Comprehensive developer documentation and public API keys'
        ],
        techStack: ['Node.js', 'Go', 'PostgreSQL', 'Stripe Billing', 'Redis', 'Kubernetes'],
        keyBenefit: 'Launch your SaaS in months with enterprise-grade multi-tenancy and billing.'
      },
      {
        id: 'custom-dashboard-dev',
        title: 'Custom Dashboard Development',
        subtitle: 'Real-Time Telemetry & Operations Analytics',
        description: 'High-performance interactive management dashboards featuring live WebSocket streaming, custom metrics aggregations, and exportable business intelligence.',
        deliverables: [
          'Real-time streaming charts and telemetry monitors',
          'Multi-dimensional filtering and CSV/PDF report generation',
          'Role-tailored metric views (Executive, Financial, Operations)',
          'Optimized time-series database queries (Timescale / ClickHouse)'
        ],
        techStack: ['React', 'Apache ECharts', 'TanStack Table', 'ClickHouse', 'PostgreSQL'],
        keyBenefit: 'Unifies fragmented company data into actionable real-time decision consoles.'
      }
    ],
    techStack: [
      { category: 'Frontend', tools: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Vite'] },
      { category: 'Backend & APIs', tools: ['Node.js', 'Go', 'Express', 'FastAPI', 'GraphQL', 'gRPC'] },
      { category: 'Databases & Cache', tools: ['PostgreSQL', 'Redis', 'ClickHouse', 'MongoDB', 'Supabase'] },
      { category: 'Cloud & DevOps', tools: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Datadog'] }
    ],
    processSteps: [
      { step: '01', title: 'System Blueprinting & Entity Modeling', description: 'Design database schemas, API contracts, state transitions, security boundaries, and scaling models before writing code.' },
      { step: '02', title: 'Modular Architecture & DevOps Pipeline', description: 'Establish CI/CD pipelines, automated linting, containerized local dev environments, and infrastructure as code.' },
      { step: '03', title: 'Iterative Sprint Implementation', description: 'Deliver working software every 14 days with continuous review access on isolated staging environments.' },
      { step: '04', title: 'Load Testing & Security Hardening', description: 'Simulate high concurrency surges, run automated dependency vulnerability scans, and implement rigorous input sanitization.' },
      { step: '05', title: 'Cloud Launch & Managed SLA Support', description: 'Blue-green zero-downtime deployment, APM monitoring (Datadog), and 99.99% uptime guarantees.' }
    ],
    faqs: [
      { question: 'How do you ensure data security and regulatory compliance?', answer: 'We implement SOC 2 and HIPAA-ready architectural patterns, including AES-256 encryption at rest, TLS 1.3 in transit, automated audit trails, strict Role-Based Access Controls (RBAC), and automated vulnerability scans.' },
      { question: 'Can you integrate our new software with our legacy ERP and databases?', answer: 'Yes. We specialize in building secure API integration layers, change data capture (CDC) pipelines, and bidirectional syncing services that modernize operations without disrupting existing back-office systems.' },
      { question: 'How do you handle technical debt during development?', answer: 'We enforce automated TypeScript linting, mandatory peer code reviews, continuous integration test suites, and strict separation of business logic from infrastructure, ensuring long-term code health.' }
    ]
  }
};
