// Profile and career facts are based on Gaurav_Jain.pdf and the owner's updates.
export const profile = {
  name: 'Gaurav Jain',
  title: 'Full-Stack Developer',
  experienceYears: '2.5',
  location: 'Jaipur, Rajasthan',
  email: 'jaingau01@gmail.com',
  phone: '+91 6376806029',
  phoneHref: 'tel:+916376806029',
  github: 'https://github.com/gaurav-jain01',
  linkedin: 'https://www.linkedin.com/in/gaurav-jain-a61a21203/',
};

export const projects = [
  {
    id: 'tasktic', number: '01', title: 'Tasktic', category: 'Web & AI', type: 'Personal project',
    description: 'A MERN project and task management platform with team roles, task assignments, status tracking, and real-time chat.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
    github: 'https://github.com/gaurav-jain01/taskTic-backend',
    caseStudy: [
      { title: 'The problem', text: 'Teams need a shared place to organize projects, assign tasks, track progress, and discuss their work.' },
      { title: 'My contribution', text: 'Built the MERN platform with Admin, Manager, and Member roles, team management, task assignment, and status tracking.' },
      { title: 'Technical implementation', text: 'React provides the interface, with Node.js and Express services backed by MongoDB. Socket.IO supports real-time team chat.' },
      { title: 'Delivered', text: 'Role-based team workflows, task ownership, status updates, and real-time communication in one application.' },
    ],
  },
  {
    id: 'repoguardian', number: '02', title: 'RepoGuardian AI', category: 'Web & AI', type: 'Personal project',
    description: 'An automated pull-request review system combining AI feedback with code-quality checks, automated fixes, and GitHub status checks.',
    tech: ['Next.js', 'Node.js', 'Groq', 'Octokit', 'Redis'],
    github: 'https://github.com/gaurav-jain01/repoguardian-ai',
    caseStudy: [
      { title: 'The problem', text: 'Pull-request review involves both contextual feedback and repeatable checks for code quality and formatting.' },
      { title: 'My contribution', text: 'Built the review tool using Node.js, Next.js, Groq, and Octokit, with automated fixes and GitHub status checks.' },
      { title: 'AI and static analysis', text: 'Groq powers AI-assisted review. ESLint checks code quality and Prettier checks formatting. Octokit integrates with GitHub, while Redis provides caching.' },
      { title: 'Delivered', text: 'A pull-request workflow that brings AI feedback, static checks, automated fixes, and review status together.' },
    ],
  },
  {
    id: 'cye', number: '03', title: 'Code Your Electronics', category: 'Web & AI', type: 'Professional work',
    description: 'The company’s MERN website, bringing product catalogs, service listings, payments, authentication, and community features together.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS'],
    live: 'https://codeyourelectronics.com/',
    caseStudy: [
      { title: 'The problem', text: 'An electronics and STEM business needs a connected experience for discovering products, exploring services, and making purchases.' },
      { title: 'My contribution', text: 'Built the company’s MERN website with e-commerce features, product catalogs, service listings, payments, authentication, and community functionality.' },
      { title: 'Technical implementation', text: 'Connected the React frontend to Node.js, Express, and MongoDB services, and managed AWS deployment and hosting for the company’s web applications.' },
      { title: 'Delivered', text: 'A company website supporting product discovery, commerce, services, and community features.' },
    ],
  },
  {
    id: 'aladdin', number: '04', title: 'Aladdin', category: 'Web & AI', type: 'Professional work',
    description: 'Backend services and a React admin dashboard for a service platform spanning User, Vendor, and Admin applications.',
    tech: ['React', 'REST APIs', 'JWT', 'RBAC', 'AWS'],
    caseStudy: [
      { title: 'The problem', text: 'A service platform needs consistent workflows across customers, vendors, and administrators, with controlled access to each role’s actions.' },
      { title: 'My contribution', text: 'Developed database schemas, REST APIs, and service workflows for Aladdin’s User, Vendor, and Admin applications at Hope Web Solution.' },
      { title: 'Authentication and administration', text: 'Built the React admin dashboard with JWT authentication, role-based access control, token versioning, and global session logout.' },
      { title: 'Delivered', text: 'Backend service workflows and an admin interface with role-based access and session management.' },
    ],
  },
  {
    id: 'arduino', number: '05', title: 'CYE Compiler', category: 'Desktop', type: 'Professional work',
    description: 'Electron desktop software for robotics and STEM products, with code editing, compilation, microcontroller uploads, and an AI coding assistant.',
    tech: ['Electron.js', 'Arduino CLI', 'Groq'],
    caseStudy: [
      { title: 'The problem', text: 'Robotics and STEM learners need a practical workflow to write code, compile it, and upload it to microcontrollers.' },
      { title: 'My contribution', text: 'Developed Electron.js desktop software at Code Your Electronics, using Arduino CLI for code editing, compilation, and uploads.' },
      { title: 'AI assistance', text: 'Integrated a Groq-powered assistant to support coding, code review, debugging, and suggested corrections.' },
      { title: 'Delivered', text: 'A desktop coding workflow connecting software development to robotics and STEM hardware.' },
    ],
  },
];

export const skillGroups = [
  { number: '01', title: 'Interfaces across web and mobile.', label: 'Frontend', skills: ['JavaScript (ES6+)', 'React.js', 'Next.js', 'React Native', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { number: '02', title: 'APIs, access, and real-time systems.', label: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets', 'Socket.IO', 'JWT', 'RBAC'] },
  { number: '03', title: 'Store it. Query it. Cache it.', label: 'Databases & caching', skills: ['MongoDB', 'MySQL', 'SQL', 'Redis', 'Firebase'] },
  { number: '04', title: 'From development to deployment.', label: 'Cloud, DevOps & hosting', skills: ['AWS EC2', 'AWS S3', 'Docker', 'Nginx', 'GitHub Actions', 'CI/CD', 'Linux', 'Vercel', 'Netlify'] },
  { number: '05', title: 'Tools for practical products.', label: 'Desktop & workflow', skills: ['Electron.js', 'Arduino CLI', 'Git', 'GitHub', 'Postman', 'Figma', 'Razorpay'] },
  { number: '06', title: 'AI that supports a real workflow.', label: 'AI integration', skills: ['Groq API', 'OpenAI API', 'Gemini API', 'Prompt Engineering'] },
];

export const experience = [
  {
    company: 'Code Your Electronics', role: 'Full Stack Developer', period: 'May 2025 – Present', location: 'Onsite',
    highlights: [
      'Built the company’s MERN website with e-commerce, product catalogs, service listings, payments, authentication, and community features.',
      'Developed Electron.js desktop software with Arduino CLI for code editing, compilation, and microcontroller uploads.',
      'Integrated a Groq-powered coding assistant for code review, debugging, and suggested corrections.',
      'Managed AWS deployment and hosting for the company’s web applications.',
    ],
  },
  {
    company: 'Hope Web Solution', role: 'MERN Stack Developer', period: 'Sep 2025 – May 2026', location: 'Onsite',
    highlights: [
      'Developed Aladdin’s database schemas, REST APIs, and service workflows for User, Vendor, and Admin applications.',
      'Built a React admin dashboard with JWT authentication, role-based access, token versioning, and global session logout.',
      'Contributed to development and maintenance of Experts4U, an AI-enabled online salon service application.',
      'Deployed applications on AWS EC2 with S3 media storage, Redis caching, and WebSocket-based real-time communication.',
    ],
  },
  {
    company: 'LearningBix', role: 'Full Stack Developer', period: 'Feb 2024 – May 2025', location: 'Onsite',
    highlights: [
      'Added an AI extension to BixCode, a Scratch-based programming platform, and developed its mobile-responsive React interface.',
      'Developed Node.js, Express.js, and MongoDB APIs for LMS courses, student progress, assessments, and user management.',
      'Implemented JWT authentication, role-based access control, and database query optimization for the LMS.',
    ],
  },
];

export const services = [
  { number: '01', title: 'React interfaces & dashboards', description: 'Responsive websites and admin tools with clear navigation, forms, and role-based workflows.', tags: 'React · Next.js · Tailwind CSS' },
  { number: '02', title: 'Full-stack applications', description: 'Connected products with frontend interfaces, backend services, and databases built around the way your business works.', tags: 'MERN · E-commerce · LMS' },
  { number: '03', title: 'APIs & integrations', description: 'REST APIs, authentication, payment integrations, and real-time communication for new and existing products.', tags: 'Node.js · JWT · Socket.IO' },
  { number: '04', title: 'Debugging & deployment', description: 'Help resolving application issues, improving database queries, and deploying web applications on AWS.', tags: 'AWS · MongoDB · Redis' },
];

export const education = [
  { year: '2024', period: 'Aug 2022 – Aug 2024', degree: 'Master of Computer Applications', school: 'JECRC University, Jaipur', detail: 'Master of Computer Applications (MCA) · CGPA: 8.0/10.' },
  { year: '2021', period: 'Sep 2018 – May 2021', degree: 'Bachelor of Computer Applications', school: 'MIMT, Kota', detail: 'Bachelor of Computer Applications (BCA) · 70%.' },
];
