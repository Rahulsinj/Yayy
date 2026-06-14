export const portfolioData = {
  profile: {
    name: 'Deeptanshu',
    role: 'Developer / Systems-minded Builder',
    location: 'India · Remote-ready',
    email: 'hello@deeptanshu.dev',
    tagline: 'Formal, fast, and carefully engineered digital systems.',
    intro: 'I build minimal interfaces, practical software, and resilient workflows with a focus on clarity, performance, and maintainable architecture.',
    availability: 'Available for selected collaborations',
    socials: [
      { label: 'GitHub', href: 'https://github.com/' },
      { label: 'LinkedIn', href: 'https://linkedin.com/' },
      { label: 'Email', href: 'mailto:hello@deeptanshu.dev' }
    ]
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ],
  languages: [
    { name: 'C', note: 'memory-first fundamentals' },
    { name: 'C#', note: 'typed application logic' },
    { name: 'Java', note: 'object-oriented systems' },
    { name: 'Python', note: 'automation and tooling' },
    { name: 'HTML', note: 'semantic web foundations' }
  ],
  highlights: [
    { metric: '05', label: 'Core languages', detail: 'A compact stack for durable foundations.' },
    { metric: '24/7', label: 'Always editable', detail: 'All portfolio content lives in one data file.' },
    { metric: '1px', label: 'Grid discipline', detail: 'Bento sections with strict visual hierarchy.' }
  ],
  services: [
    { title: 'Interface Engineering', description: 'High-contrast responsive UI systems built with reusable React components.' },
    { title: 'Project Architecture', description: 'Data-driven layouts that let new case studies appear without redesigning pages.' },
    { title: 'Automation Logic', description: 'Python-backed scripts, workflows, and clean developer tooling.' },
    { title: 'Learning Velocity', description: 'Structured technical growth across language fundamentals and applied builds.' }
  ],
  projects: [
    { title: 'Command Desk', year: '2026', tags: ['React','UI','Dashboard'], description: 'A monochrome productivity dashboard concept with metric cards, logs, and command-style navigation.', imageLabel: 'OPS / 001', caseStudy: '/projects#command-desk' },
    { title: 'Python File Automator', year: '2026', tags: ['Python','Automation'], description: 'Template project for sorting files, renaming assets, and generating structured reports from local directories.', imageLabel: 'AUTO / 002', caseStudy: '/projects#python-file-automator' },
    { title: 'Java Library System', year: '2025', tags: ['Java','OOP'], description: 'Object-oriented academic management system with member records, borrowing states, and searchable inventory.', imageLabel: 'JAVA / 003', caseStudy: '/projects#java-library-system' },
    { title: 'C Algorithms Lab', year: '2025', tags: ['C','Algorithms'], description: 'A curated collection of C fundamentals, data structures, and algorithmic exercises documented for revision.', imageLabel: 'CORE / 004', caseStudy: '/projects#c-algorithms-lab' },
    { title: 'C# Inventory Console', year: '2025', tags: ['C#','CLI'], description: 'Typed console application template for product records, validation, and simple reporting workflows.', imageLabel: 'C# / 005', caseStudy: '/projects#csharp-inventory-console' },
    { title: 'Semantic HTML Portfolio', year: '2025', tags: ['HTML','Web'], description: 'Accessible HTML-first personal site prototype focused on document structure and clean content hierarchy.', imageLabel: 'WEB / 006', caseStudy: '/projects#semantic-html-portfolio' }
  ],
  timeline: [
    { period: 'Now', title: 'Portfolio System', description: 'Maintaining an editable project archive with reusable templates for future work.' },
    { period: '2026', title: 'Applied Development', description: 'Building small but complete apps across React, Python, Java, C#, C, and HTML.' },
    { period: 'Foundation', title: 'Computer Science Practice', description: 'Strengthening syntax, data structures, systems thinking, and production habits.' }
  ],
  projectIntake: {
    title: 'No-code project update flow',
    prompts: ['What is the project title?', 'What problem does it solve?', 'Which technologies/tags should appear?', 'What should the case study link be?', 'Which mock label or image should represent it?'],
    instruction: 'Add one object to portfolioData.projects using the same fields: title, year, tags, description, imageLabel, and caseStudy.'
  }
};
