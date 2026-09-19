// Edit this file with your real information — everything on the site is sourced from here.

export const profile = {
  name: "Vanshika Jain",
  role: "AI Full-Stack Developer",
  tagline:
    "I build AI-powered platforms and deep learning systems — from real-time fintech applications to medical-imaging pipelines with production-grade accuracy.",
  location: "Santa Cruz, CA",
  email: "vnjain03@gmail.com",
  phone: "831-212-2294",
  resumeUrl: "#", // TODO: link to a hosted copy of your resume PDF
  availableForWork: false,
  statusLabel: "Open to new opportunities",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/Vnjain03", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vanshika-jain0822", icon: "linkedin" },
  { label: "Email", href: "mailto:vnjain03@gmail.com", icon: "mail" },
] as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// Contextual CTA copy — deliberately different per placement rather than one repeated button.
export const ctas = {
  navCta: "Get in Touch",
  heroPrimary: "Get in Touch",
  heroSecondary: "View My Work",
  projectsHeading: "Let's Connect",
  projectsBody:
    "I'm always happy to talk about AI/ML roles, research collaborations, or interesting full-stack and deep learning problems.",
  projectsCta: "Get in Touch",
  contactCta: "Send a Message",
};

export const about = {
  heading: "About Me",
  paragraphs: [
    "I'm an MS student in Computer Science and Engineering at UC Santa Cruz, where I also work as a Teaching Assistant and Reader for Analysis of Algorithms and a Group Tutor for Data Structures & Algorithms. Alongside my studies, I'm an AI Full Stack Intern at Simni Bullion LLP, building real-time bullion trading platforms with AI-powered market intelligence.",
    "I hold a B.Tech in Information & Communication Technology from Pandit Deendayal Energy University (9.4/10 GPA), and my research spans deep learning for medical imaging, adversarial robustness in GANs, and reinforcement learning for edge-cloud resource allocation — work that's led to two published papers.",
  ],
  credentials: [
    "MS, Computer Science and Engineering — UC Santa Cruz, GPA 3.7/4",
    "B.Tech, Information & Communication Technology — GPA 9.4/10",
    "2 Published Research Papers",
  ],
  stats: [
    { label: "Years of experience", value: "2+" },
    { label: "Projects shipped", value: "5+" },
  ],
};

export type Service = {
  icon: "sparkles" | "layers" | "cloud" | "terminal";
  title: string;
  problem: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: "sparkles",
    title: "AI-Powered Products",
    problem: "Most AI features are a chatbot bolted on for the sake of it, not built to solve a real problem.",
    description:
      "I design and build LLM-powered features with real utility: market intelligence, personalized recommendations, and trading insights — like the AI-driven bullion trading platform I've shipped.",
  },
  {
    icon: "layers",
    title: "Full-Stack Web & Mobile Apps",
    problem: "Real-time apps live or die on how well they handle live data, concurrency, and edge cases.",
    description:
      "End-to-end builds on React, React Native, Node/Express, and PostgreSQL — covering real-time data feeds, JWT-secured APIs, and polished UI, not just the happy path.",
  },
  {
    icon: "cloud",
    title: "Deep Learning & Computer Vision",
    problem: "Imaging and detection pipelines need research-grade accuracy, not a prototype that only works in a notebook.",
    description:
      "Deep learning pipelines built with PyTorch, TensorFlow, and OpenCV — from SRCNN/SRGAN/U-Net medical imaging (SSIM 0.984) to real-time YOLOv8 object detection at ~20 FPS.",
  },
  {
    icon: "terminal",
    title: "Cloud-Native Deployment & DevOps",
    problem: "A model or app that only runs on your machine isn't shipped.",
    description:
      "Dockerized, multi-service platforms with CI/CD pipelines, health checks, and monitoring — like a 6-service FastAPI–React platform deployed on Render with <200ms API latency under load.",
  },
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Simni Bullion LLP",
    role: "AI Full Stack Intern",
    period: "Feb 2025 — Present",
    location: "Ahmedabad, Gujarat (Hybrid)",
    highlights: [
      "Built a full-stack bullion trading platform using React Native, Node/Express, and PostgreSQL.",
      "Delivered real-time MCX gold/silver price feeds via WebSockets with JWT-secured APIs.",
      "Developed AI-powered market intelligence using LLMs for trading insights and personalized recommendations.",
    ],
  },
  {
    company: "University of California Santa Cruz",
    role: "Teaching Assistant, Reader & Group Tutor",
    period: "Sept 2025 — June 2026",
    location: "Santa Cruz, California",
    highlights: [
      "Evaluated algorithm assignments with high grading accuracy for CSE102: Analysis of Algorithms, and supported students through weekly office hours.",
      "Taught DSA topics (trees, heaps, graphs) as Group Tutor for CSE101, guiding 170+ students through examples and debug sessions.",
    ],
  },
  {
    company: "Pandit Deendayal Energy University",
    role: "Research Assistant",
    period: "Jan 2025 — May 2025",
    location: "Gandhinagar, Gujarat (On-site)",
    highlights: [
      "Architected a deep learning pipeline (SRCNN → SRGAN → U-Net) for CT enhancement and lung nodule detection.",
      "Preprocessed and curated the LUNA16 dataset using residual learning and perceptual (VGG19) loss.",
      "Achieved SSIM 0.984 and Dice 0.95, surpassing traditional image quality and segmentation methods.",
    ],
  },
  {
    company: "Indian Institute of Technology, Indore",
    role: "Research Assistant",
    period: "May 2024 — July 2024",
    location: "Remote",
    highlights: [
      "Researched edge-cloud resource sharing using deep reinforcement learning, achieving 93.95% anomaly detection precision.",
      "Designed and applied reinforcement learning algorithms to optimize resource allocation and network performance.",
    ],
  },
];

export const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "R", "SQL", "C++", "JavaScript", "TypeScript"],
  },
  {
    category: "ML & AI",
    skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "OpenCV"],
  },
  {
    category: "Frontend",
    skills: ["React", "React Native", "Material UI"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Cloud & Tools",
    skills: ["AWS", "Docker", "Kubernetes", "Render", "Git"],
  },
];

// Full literal class strings so Tailwind's scanner picks them up statically.
export const categoryStyles = {
  primary: "bg-primary/12 text-primary border-primary/30",
  secondary: "bg-secondary/12 text-secondary border-secondary/30",
  rose: "bg-tag-rose/12 text-tag-rose border-tag-rose/30",
} as const;

export type CategoryColor = keyof typeof categoryStyles;

export type CaseStudy = {
  problem: string;
  solution: string;
  contribution: string;
  features: string[];
  impact?: { value: string; label: string };
};

export type Project = {
  title: string;
  category: string;
  categoryColor: CategoryColor;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  demoUrl?: string;
  npmUrl?: string;
  featured?: boolean;
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    title: "Smart Retail Alert and Monitoring Platform",
    category: "Business Platform",
    categoryColor: "rose",
    description:
      "A Dockerized 6-service FastAPI–React platform for real-time retail analytics, with JWT auth and sub-200ms API latency under load.",
    tech: ["Docker", "FastAPI", "React", "PostgreSQL", "Render", "JWT", "Material UI"],
    repoUrl: "https://github.com/Vnjain03/Smart-Retail-Alert-Monitoring-Platform",
    featured: true,
    caseStudy: {
      problem:
        "Retailers need real-time visibility into store activity and alerts, but stitching together reliable, low-latency services at scale is hard to get right.",
      solution:
        "Built a Dockerized 6-service FastAPI–React platform with JWT auth, real-time analytics pipelines, and multi-service CI/CD deployed on Render with health checks and routing.",
      contribution:
        "Designed the service architecture and analytics pipeline, implemented JWT-secured APIs, and set up the CI/CD deployment on Render.",
      features: [
        "6-service Dockerized architecture",
        "JWT-secured authentication",
        "Real-time analytics pipeline (10k+ events/min)",
        "Multi-service CI/CD on Render with health checks",
        "Material UI dashboard",
      ],
      impact: { value: "<200ms", label: "API latency under load, ~70% faster dashboard loads" },
    },
  },
  {
    title: "Investigating Effects of Poisoning on GANs Performance",
    category: "AI Research",
    categoryColor: "primary",
    description:
      "A research study engineering adversarial poisoning attacks on GANs to evaluate and inform robust generative model defenses.",
    tech: ["Python", "PyTorch", "TensorFlow", "Keras", "NumPy", "OpenCV"],
    repoUrl: "https://github.com/Vnjain03/Investigating-Effects-of-Poisoning-on-GANs-Performance",
    featured: true,
    caseStudy: {
      problem:
        "Generative adversarial networks are vulnerable to data poisoning, but the extent of that vulnerability across attack types and datasets wasn't well characterized.",
      solution:
        "Engineered adversarial poisoning attacks — label flipping, outlier injection, and Gaussian noise — and trained/tested GANs on MNIST, CIFAR-10, CIFAR-100, and CelebA to measure degradation.",
      contribution:
        "Designed the poisoning attack pipeline, ran experiments across four datasets, and authored the resulting publication with insights for robust GAN defenses.",
      features: [
        "Label-flipping, outlier-injection & Gaussian-noise attacks",
        "Evaluated across MNIST, CIFAR-10, CIFAR-100, CelebA",
        "Quantified accuracy & image-quality degradation",
        "Published defense recommendations",
      ],
      impact: { value: "70%", label: "degradation in accuracy & image quality under attack" },
    },
  },
  {
    title: "Automatic Number Plate Recognition",
    category: "Computer Vision",
    categoryColor: "secondary",
    description:
      "A real-time license plate recognition system combining YOLOv8 detection with EasyOCR text extraction on live video streams.",
    tech: ["Python", "PyTorch", "YOLOv8", "EasyOCR", "OpenCV", "NumPy", "Matplotlib"],
    repoUrl: "https://github.com/Vnjain03/license_plate_recognition",
    featured: true,
    caseStudy: {
      problem:
        "Reliable license plate recognition needs to run on live video in real time while staying accurate under varying lighting and image conditions.",
      solution:
        "Combined YOLOv8 for plate detection with EasyOCR for text extraction, applying OpenCV-based preprocessing to improve OCR readability under varying conditions.",
      contribution:
        "Built the full detection-to-recognition pipeline and optimized it to process live video streams in real time.",
      features: [
        "YOLOv8-based real-time plate detection",
        "EasyOCR text extraction",
        "OpenCV preprocessing for readability",
        "Live video stream processing",
      ],
      impact: { value: "~20 FPS", label: "real-time processing with accurate recognition" },
    },
  },
];

export const contact = {
  heading: "Let's Connect",
  body: "Reach out about AI/ML roles, research collaborations, or anything else you'd like to build. I reply within a day.",
  process: [
    {
      title: "Say Hello",
      description: "Reach out by email or LinkedIn — about a role, a project, or just to connect.",
    },
    {
      title: "Quick Response",
      description: "I typically reply within a day, and I'm happy to hop on a call.",
    },
    {
      title: "Let's Build",
      description: "Whether it's a role, a collaboration, or a research idea — let's talk it through.",
    },
  ],
};
