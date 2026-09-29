export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  period: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  highlights: string[];
  architecture: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skillsLearned: string[];
  link?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreType: 'CGPA' | 'Percentage';
  details: string;
  coursework?: string[];
}

export interface SkillCategory {
  category: 'Technical' | 'Personal';
  subCategory?: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export const PERSONAL_INFO = {
  name: 'Ramanth Shetty',
  role: 'Computer Science Engineering Student | Full Stack Developer',
  tagline: 'I build clean, robust, and scalable full-stack web applications with Java, Spring Boot, and React.',
  bioParagraphs: [
    "I am a Computer Science Engineering student at Alva's Institute of Engineering and Technology (AIET) with an academic CGPA of 9.2. My engineering journey is driven by a deep curiosity for how distributed systems operate and how clean code translates into resilient user experiences.",
    "I have hands-on experience developing end-to-end applications using Java, Spring Boot, and React. Whether it is architecting modular RESTful micro-services, implementing relational schemas in MySQL, or styling sleek responsive user interfaces with Tailwind CSS, I enjoy tackling challenges across the entire stack.",
    "Currently, I am actively seeking an internship or entry-level Full Stack Developer role where I can contribute to high-impact software, collaborate with engineering teams, and continue pushing my technical limits."
  ],
  email: 'ramanthshetty022@gmail.com',
  phone: '+91 7411928266',
  github: 'https://github.com/ramanth-shetty',
  githubDisplay: 'github.com/ramanth-shetty',
  linkedin: 'https://linkedin.com/in/ramanth-shetty',
  linkedinDisplay: 'linkedin.com/in/ramanth-shetty',
  location: 'Karnataka, India',
  status: 'Open to Opportunities',
};

export const SKILLS_DATA = {
  technical: [
    { name: 'Java', group: 'Backend & Core', isPrimary: true },
    { name: 'Spring Boot', group: 'Backend & Core', isPrimary: true },
    { name: 'RESTful APIs', group: 'Backend & Core', isPrimary: true },
    { name: 'React', group: 'Frontend', isPrimary: true },
    { name: 'JavaScript ES6', group: 'Frontend', isPrimary: true },
    { name: 'Tailwind CSS', group: 'Frontend', isPrimary: true },
    { name: 'HTML5', group: 'Frontend', isPrimary: false },
    { name: 'CSS3', group: 'Frontend', isPrimary: false },
    { name: 'MySQL', group: 'Database & Tools', isPrimary: true },
    { name: 'Git', group: 'Database & Tools', isPrimary: true },
    { name: 'GitHub', group: 'Database & Tools', isPrimary: true },
    { name: 'IntelliJ IDEA', group: 'Database & Tools', isPrimary: false },
    { name: 'Postman', group: 'Database & Tools', isPrimary: false },
  ],
  personal: [
    { name: 'Hardworking', description: 'Tenacious commitment to producing solid results through dedicated practice.' },
    { name: 'Patience', description: 'Methodical persistence when debugging complex systems and refactoring legacy code.' },
    { name: 'Analytical Thinking', description: 'Deconstructing architectural requirements into modular and testable components.' },
    { name: 'Continuous Learning', description: 'Quickly absorbing modern framework conventions and software engineering standards.' },
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'hostel-management',
    title: 'Hostel Management System',
    shortDesc: 'A full-stack enterprise web application with REST APIs to manage student boarding records, room quotas, and administrative allocations with security checks.',
    fullDesc: 'Developed a comprehensive hostel operations platform designed to eliminate manual paper registers. The backend delivers secure RESTful endpoints for room availability tracking, resident profile management, grievance logging, and fee status. The frontend provides a responsive administrative console.',
    period: '2026',
    tags: ['Java', 'Spring Boot', 'HTML5', 'Tailwind CSS', 'JavaScript', 'MySQL', 'REST APIs'],
    githubUrl: 'https://github.com/ramanth-shetty/hostel-management-system',
    demoUrl: 'https://github.com/ramanth-shetty/hostel-management-system#readme',
    highlights: [
      'Engineered multi-tier REST APIs with Spring Boot validating room vacancy & student quotas.',
      'Designed relational schema in MySQL with indexed foreign keys for zero conflict allocations.',
      'Implemented responsive warden dashboard utilizing Tailwind CSS and modular JavaScript.',
      'Built automated status notifications and audit history for resident check-ins/check-outs.'
    ],
    architecture: [
      'Spring Boot REST Controller Layer with DTO validation',
      'Service Layer with Spring Data JPA & transactional integrity',
      'MySQL Database with normalized 3NF schema',
      'Modern responsive UI with Tailwind utility styles and client-side validation'
    ]
  },
  {
    id: 'codevault-leetcode',
    title: 'CodeVault - LeetCode Tracker',
    shortDesc: 'An offline-first progressive web application (PWA) to track LeetCode problem-solving progress, storing data locally on the device with structured revision categories.',
    fullDesc: 'Designed and built CodeVault for competitive programmers to log, categorize, and schedule spaced repetition for algorithmic challenges. Built with offline-first PWA standards so users can organize problem notes, review time complexity analysis, and track daily solve streaks even without an active internet connection.',
    period: '2026',
    tags: ['React', 'Tailwind CSS', 'PWA', 'JavaScript ES6', 'IndexedDB / LocalStorage'],
    githubUrl: 'https://github.com/ramanth-shetty/codevault-leetcode-tracker',
    demoUrl: 'https://github.com/ramanth-shetty/codevault-leetcode-tracker#readme',
    highlights: [
      'Constructed offline-first PWA caching core application shells and dynamic problem datasets.',
      'Structured custom tags for Data Structures (Graphs, DP, Trees) and difficulty indicators.',
      'Integrated real-time analytics displaying solve ratios, time complexity notes, and streak counters.',
      'Delivered instantaneous UI responsiveness with React state hooks and zero network latency.'
    ],
    architecture: [
      'React SPA with componentized problem table, filters, and note editor',
      'Service Worker lifecycle management for offline caching & instant launch',
      'Browser local persistence ensuring zero external telemetry or cloud dependency',
      'Tailwind CSS design system styled for high-density developer ergonomics'
    ]
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'cert-1',
    title: 'Full-Stack Java Developer with Spring & Spring Boot Specialization',
    issuer: 'Board Infinity',
    date: 'Aug 2026',
    skillsLearned: ['Java Core & OOP', 'Spring Boot 3', 'RESTful API Architecture', 'Hibernate / JPA', 'Full-Stack Integration'],
    link: 'https://www.boardinfinity.com'
  },
  {
    id: 'cert-2',
    title: 'The Bits and Bytes of Computer Networking',
    issuer: 'Google',
    date: 'Aug 2026',
    skillsLearned: ['TCP/IP Protocol Suite', 'DNS & DHCP', 'Subnetting & Routing', 'Network Troubleshooting', 'OSI 7-Layer Model'],
    link: 'https://grow.google/certificates'
  },
  {
    id: 'cert-3',
    title: 'Computer Networks and Network Security',
    issuer: 'IBM',
    date: 'Jul 2026',
    skillsLearned: ['Network Cryptography', 'Firewalls & IDS/IPS', 'Secure Protocol Implementation', 'Vulnerability Assessment'],
    link: 'https://www.ibm.com/training'
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-btech',
    degree: 'Bachelor of Computer Science & Engineering (B.E.)',
    institution: "Alva's Institute of Engineering and Technology (AIET)",
    period: 'Aug 2024 — Present',
    score: '9.2 CGPA',
    scoreType: 'CGPA',
    details: 'Focusing on core computer science foundations, distributed system design, relational databases, and modern software engineering paradigms. Maintaining a top-tier academic record.',
    coursework: ['Data Structures & Algorithms', 'Database Management Systems', 'Object Oriented Programming with Java', 'Computer Networks', 'Operating Systems', 'Software Engineering']
  },
  {
    id: 'edu-puc',
    degree: 'Pre-University Course (PUC) — Science (PCMC)',
    institution: "Bunts' Sangha R.N.S. Vidyaniketan and Composite College",
    period: 'Completed 2024',
    score: '94.60%',
    scoreType: 'Percentage',
    details: 'Completed senior secondary education with high distinction in Physics, Chemistry, Mathematics, and Computer Science.',
    coursework: ['Advanced Mathematics', 'Computer Science & Boolean Logic', 'Physics', 'Chemistry']
  },
  {
    id: 'edu-sslc',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Carmel Public School',
    period: 'Completed 2022',
    score: '98.88%',
    scoreType: 'Percentage',
    details: 'Graduated with exceptional academic distinction, placing in the top percentile of candidates with exemplary performance across science and mathematics.',
    coursework: ['General Science', 'Mathematics', 'English & Regional Languages', 'Social Sciences']
  }
];
