import { Portfolio, ProjectLang } from './portfolio.model';

const TYPESCRIPT: ProjectLang = { label: 'TypeScript', dot: 'typescript' };
const AWS: ProjectLang = { label: 'AWS', dot: 'aws' };
const STRIPE: ProjectLang = { label: 'Stripe', dot: 'stripe' };

export const PORTFOLIO_DATA: Portfolio = {
  about: {
    name: 'Krzysztof Szkudlarek',
    bio:
      'Front-end Developer with 4+ years of experience building scalable web applications using ' +
      'Angular, TypeScript, and AWS. Strong focus on performance, modular architecture, and user experience.'
  },
  experience: [
    {
      id: 'lot-developer',
      role: 'Front-end Developer',
      company: 'Polskie Linie Lotnicze „LOT" S.A.',
      period: 'Jul 2022 - Present · Full-time',
      badgeVariant: 'default',
      employmentType: 'Full-time',
      dateRange: 'Jul 2022 - Present',
      dateDotColor: '#dd0031',
      project: 'Project: Next-Gen Internet Booking Engine (IBE) & LOT Shop&More (E-commerce)',
      cardDescription:
        'Polskie Linie Lotnicze „LOT" S.A. — Building the next-generation Internet Booking Engine (IBE) ' +
        'for lot.com with complex multi-step flows, reactive state, and i18n. Technical owner of the A/B ' +
        'testing process and one of a few engineers trusted to prepare release packages for AEM and the Frontend.',
      responsibilities: [
        'Building the next-generation Internet Booking Engine (IBE) for lot.com with Angular 20 — complex multi-step booking flows, reactive state management, and i18n support optimized for large result sets.',
        'Technical owner of the A/B testing process, defining experiment setup, instrumentation, and rollout to validate UX and conversion improvements.',
        'One of only a few engineers trusted to prepare release packages for both AEM and the Frontend, bundling changes across the content and application layers for the deployment team.',
        'Implemented a Nx/Monorepo strategy to unify digital services, increasing code reuse across teams.',
        'Integrated Adobe Experience Manager (AEM) and Adobe Commerce (Magento) to deliver dynamic, personalized user experiences at scale.',
        'Optimized Core Web Vitals and ensured WCAG compliance for global accessibility across all device types.',
        'Work with the latest Angular reactivity — Signals for fine-grained state alongside RxJS and NgRx for complex reactive data flows.'
      ],
      tech: [
        'Angular 20', 'Signals', 'RxJS', 'NgRx', 'TypeScript', 'AEM', 'Adobe Commerce',
        'A/B Testing', 'i18n', 'REST APIs', 'Monorepo (Nx)', 'WCAG'
      ]
    },
    {
      id: 'lincoms-engineer',
      role: 'Front-end Engineer',
      company: 'Lincoms SP. Z O.O.',
      period: 'Nov 2023 - Present · Part-time',
      badgeVariant: 'default',
      employmentType: 'Part-time',
      dateRange: 'Nov 2023 - Present',
      dateDotColor: '#FF9900',
      project: 'Project: Serverless E-commerce Order Management System (OMS)',
      cardDescription:
        'Lincoms SP. Z O.O. — Led development of a serverless e-commerce Order Management System dashboard ' +
        'using Angular 20 and PrimeNG. Built the UI to consume real-time data from AWS Lambda and DynamoDB. ' +
        'Defined RESTful API contracts and Webhook structures. Implemented secure identity management and RBAC using AWS Cognito.',
      responsibilities: [
        'Led the development of a cloud-native serverless Order Management System dashboard using Angular 20 and PrimeNG.',
        'Built the UI to consume real-time data from AWS Lambda and DynamoDB, managing complex state for logistics tracking.',
        'Defined RESTful API contracts and Webhook structures to ensure efficient data flow between the UI and back-end services.',
        'Implemented secure identity management and RBAC using AWS Cognito.',
        'Worked with CloudFormation and Amplify for infrastructure-as-code deployments.',
        'Kept the project on the latest Angular versions and libraries, running framework migrations and dependency upgrades to stay current and secure.'
      ],
      tech: [
        'Angular 20', 'PrimeNG', 'TypeScript', 'Python', 'AWS Lambda', 'DynamoDB', 'Cognito', 'Amplify', 'REST APIs'
      ]
    }
  ],
  projects: {
    work: [
    {
        id: 'lot-booking-engine',
        title: 'LOT.com Booking Engine',
        subtitle: 'Next-generation flight booking system for LOT Polish Airlines',
        status: { label: 'In Progress', variant: 'progress' },
        description:
          'A next-generation booking engine powering lot.com flight reservations. Focused on performance, ' +
          'accessibility, and seamless user experience for multi-step booking flows across all device types.',
        cardDescription:
          'Next-gen flight booking system. Multi-step forms, reactive state, i18n, performance-optimized for large result sets.',
        features: [
          'Angular 20 with complex multi-step form architecture',
          'Reactive state management for flight search, seat selection, and payment flows',
          'Performance-optimized rendering for large flight result sets',
          'Integrated with backend booking APIs and payment gateways',
          'Internationalization (i18n) for multi-language support',
          'WCAG 2.1 AA accessibility compliance',
          'Monorepo shared with Shop&More for code reuse'
        ],
        webLink: 'https://www.lot.com/pl/en',
        tech: ['Angular 20', 'TypeScript', 'RxJS', 'NgRx', 'Nx', 'AEM', 'REST APIs', 'i18n', 'Jest', 'WCAG'],
        langs: [TYPESCRIPT],
        primaryStack: 'Angular 20'
      },
      {
        id: 'lot-shop-more',
        title: 'LOT Shop&More',
        subtitle: 'E-commerce platform for LOT Polish Airlines',
        status: { label: 'Finished', variant: 'done' },
        description:
          "A high-performance e-commerce platform serving millions of customers for LOT Polish Airlines. " +
          "Built with a monorepo architecture using Nx, integrated with Adobe's ecosystem for personalized " +
          'content delivery and commerce capabilities.',
        cardDescription:
          'E-commerce platform for LOT Polish Airlines. Angular 20, Nx monorepo, AEM, Adobe Commerce. Full WCAG compliance.',
        features: [
          'Angular 20 with modular architecture and lazy-loaded feature modules',
          'Nx monorepo for shared libraries and unified CI/CD pipelines',
          'Adobe Experience Manager integration for dynamic content',
          'Adobe Commerce (Magento) for product catalog and checkout',
          'RxJS and NgRx for reactive state management',
          'Core Web Vitals optimization achieving 90+ Lighthouse scores',
          'Full WCAG 2.1 AA compliance across all device types',
          'BEM methodology for maintainable CSS architecture'
        ],
        webLink: 'https://www.lot.com/pl/en/shop-and-more',
        tech: ['Angular 20', 'TypeScript', 'RxJS', 'NgRx', 'Nx', 'AEM', 'Magento', 'REST APIs', 'i18n', 'Jest', 'WCAG'],
        langs: [TYPESCRIPT],
        primaryStack: 'Angular 20'
      },
      {
        id: 'serverless-oms',
        title: 'Serverless OMS',
        subtitle: 'Cloud-Native Order Management System',
        status: { label: 'In Progress', variant: 'progress' },
        description:
          'A serverless e-commerce Order Management System built entirely on AWS infrastructure. ' +
          'Features real-time order tracking, logistics state management, and secure multi-tenant access control.',
        cardDescription:
          'Cloud-native Order Management System. Angular 20, PrimeNG, AWS Lambda, DynamoDB, Cognito. Real-time logistics tracking.',
        features: [
          'Angular 20 dashboard with PrimeNG component library',
          'AWS Lambda for serverless compute with Python handlers',
          'DynamoDB for high-throughput NoSQL data storage',
          'Real-time data consumption with WebSocket and polling strategies',
          'Complex logistics state tracking with visual pipeline views',
          'AWS Cognito for identity management and RBAC',
          'RESTful API contracts with OpenAPI specifications',
          'Webhook integrations for third-party service notifications',
          'CloudFormation and Amplify for IaC deployments'
        ],
        webLink: 'https://synapse-oms.pl',
        tech: ['Angular 20', 'PrimeNG', 'TypeScript', 'Python', 'AWS Lambda', 'DynamoDB', 'Cognito', 'Amplify', 'CloudFormation'],
        langs: [AWS, TYPESCRIPT],
        primaryStack: 'Angular 20'
      }
    ],
    personal: [
      {
        id: 'portfolio-2026',
        title: 'Portfolio 2026',
        subtitle: 'This website — GitHub-inspired developer portfolio',
        status: { label: 'Finished', variant: 'done' },
        description:
          "A personal portfolio website inspired by GitHub's admin panel design. Built with Angular, " +
          'featuring a dark theme, modular component architecture, and responsive layout.',
        cardDescription:
          'This website — GitHub-inspired developer portfolio built with Angular, dark theme, modular components, and responsive layout.',
        features: [
          'Angular standalone components with modular architecture',
          'GitHub-inspired dark UI with custom SCSS variables and mixins',
          'Responsive design with mobile-first approach',
          'Multi-page routing with dedicated experience and project pages',
          'CloudFront + S3 for hosting and delivery'
        ],
        webLink: 'https://www.krzszk.pl',
        tech: ['Angular', 'TypeScript', 'SCSS', 'S3', 'CloudFront', 'CloudFormation'],
        langs: [AWS, TYPESCRIPT],
        primaryStack: 'Angular 21'
      },
      {
        id: 'canva-shop',
        title: 'Canva Templates Shop',
        subtitle: 'Online store selling Canva templates with Stripe payments',
        status: { label: 'In Progress', variant: 'progress' },
        description:
          'An e-commerce platform for selling Canva design templates. Built with Angular 21 and powered by ' +
          'AWS serverless infrastructure with Stripe payment integration for secure checkout flows.',
        cardDescription:
          'Online store selling Canva templates. Angular 21, AWS serverless backend, Stripe payment integration, automated digital delivery.',
        features: [
          'Angular 21 frontend with responsive UI',
          'Stripe integration for secure payment processing',
          'AWS Lambda and DynamoDB for serverless backend',
          'CloudFront + S3 for hosting and delivery'
        ],
        webLink: null,
        tech: ['Angular 21', 'TypeScript', 'Stripe', 'AWS Lambda', 'DynamoDB', 'S3', 'CloudFront', 'CloudFormation'],
        langs: [AWS, TYPESCRIPT, STRIPE],
        primaryStack: 'Angular 21'
      },
      {
        id: 'job-hunting-stats',
        title: 'Job Tracker',
        subtitle: 'SaaS tool for job seekers — one-time payment model',
        status: { label: 'In Progress', variant: 'progress' },
        description:
          'A productivity SaaS tool for job seekers. One-time Stripe payment unlocks full access. ' +
          'Built with Angular 21 and AWS serverless infrastructure.',
        cardDescription:
          'SaaS tool for job seekers. Angular 21, AWS serverless, Stripe one-time payment model.',
        features: [
          'Angular 21 frontend with responsive UI',
          'Stripe one-time payment integration',
          'AWS Lambda and DynamoDB for serverless backend',
          'AWS Cognito for user authentication',
          'CloudFront + S3 for hosting and delivery'
        ],
        webLink: null,
        tech: ['Angular 21', 'TypeScript', 'Stripe', 'AWS Lambda', 'DynamoDB', 'Cognito', 'S3', 'CloudFront', 'CloudFormation'],
        langs: [AWS, TYPESCRIPT, STRIPE],
        primaryStack: 'Angular 21'
      }
    ]
  }
};
