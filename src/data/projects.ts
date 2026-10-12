export type ProjectGalleryItem = {
  src: string;
  title: string;
  tag: string;
  description: string;
  aspect?: "wide" | "portrait" | "standard";
};

export type ProjectHighlight = {
  label: string;
  value: string;
  description?: string;
};

export type ProjectArchitecture = {
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  role: string;
  summary: string;
  tech: string[];
  problem: string;
  solution: string;
  impact: string;
  keyLearning: string;
  image?: string;
  imagePlaceholder: string;
  imageGradient: string; // CSS gradient for placeholder card background
  screenshots: string[];
  gallery?: ProjectGalleryItem[];
  highlights?: ProjectHighlight[];
  architecture?: ProjectArchitecture[];
  liveUrl?: string;
  repoUrl?: string;
};

export const projectsData: Project[] = [
  {
    slug: "scholarpath-ai",
    title: "ScholarPath AI",
    role: "Frontend Developer (Website)",
    summary:
      "AI-powered platform matching students with scholarships and competitions based on their skills.",
    tech: ["Vue.js", "Laravel", "Go", "Python", "PostgreSQL", "SQLite"],
    problem:
      "Scholarship and academic-competition information is fragmented and often exclusive. Selection and dissemination often rely on subjective institutional validation, disadvantaging high-potential students from low-income or rural backgrounds. Students face information overload without personalized filtering, causing missed funding and skill-development opportunities.",
    solution:
      "A personalized recommendation website. Users select their field and strengths (e.g. Software Development, Visual Arts & UX, Research & Analysis, Leadership & Communication) or add custom tags. The platform returns ranked scholarship and competition recommendations, each with a match percentage, an AI insight explaining why it fits, reward information, and an Apply action. A dashboard lets users review their AI profile and refresh recommendations after editing it. I built the frontend interfaces: the multi-step skill selection flow, the results view with Scholarships/Competitions tabs, and the recommendation dashboard.",
    impact:
      "Helps students find relevant opportunities in one place instead of searching across scattered sources, and makes the match transparent through ranking and explanations.",
    keyLearning:
      "Designing multi-step, state-driven flows in Vue.js; presenting AI output clearly (ranking, match score, short reasoning) so users trust it; and collaborating with backend/AI teammates working in Laravel, Go, and Python through shared API contracts.",
    image: "/images/projects/scholarpath/landing-page.png",
    imagePlaceholder: "/images/projects/scholarpath/landing-page.png",
    imageGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    screenshots: [
      "Public Landing Page & Discovery Portal",
      "AI Profile Review & Recommendation Dashboard",
      "Interactive Skill & Interest Selection Flow",
      "AI Match Ranking & Opportunity Insights",
      "BINUS University Development Team"
    ],
    highlights: [
      { label: "Core AI Engine", value: "Skill Matching Algorithm", description: "Personalized relevance scoring" },
      { label: "Architecture", value: "Decoupled Microservices", description: "Vue.js + Laravel, Go, Python" },
      { label: "Target Audience", value: "Underrepresented Students", description: "Equal opportunity discovery" },
      { label: "Role", value: "Frontend Developer", description: "Interactive multi-step user journey" },
    ],
    architecture: [
      {
        title: "Multi-Step Skill Selection Flow",
        description: "State-driven frontend funnel guiding students through competency mapping, strength profiling, and custom keyword tagging."
      },
      {
        title: "Transparent AI Recommendation Engine",
        description: "Clear visualization of algorithmic rankings, match percentages, and structured rationale so candidates understand why opportunities fit."
      },
      {
        title: "Cross-Stack Polyglot Integration",
        description: "Clean REST contract consumption connecting a reactive Vue.js interface with Go, Python, and Laravel backend microservices."
      }
    ],
    gallery: [
      {
        src: "/images/projects/scholarpath/landing-page.png",
        title: "Public Landing Page & Discovery Portal",
        tag: "Web Interface",
        description: "Official web landing page introducing ScholarPath's AI-driven matching ecosystem, verified scholarship partnerships (200+ institutions), guidance resources, and accessible onboarding calls-to-action for high school and vocational students.",
        aspect: "wide"
      },
      {
        src: "/images/projects/scholarpath/ai-dashboard.png",
        title: "AI Profile Review & Personalized Matching Hub",
        tag: "Web Interface",
        description: "Centralized student dashboard showing a 5-step guided recommendation workflow, active competency selections, custom tag management, and algorithmically ranked scholarship cards with precise match percentages.",
        aspect: "wide"
      },
      {
        src: "/images/projects/scholarpath/mobile-skills.jpg",
        title: "Mobile Skill & Interest Mapping Journey",
        tag: "Mobile Interface",
        description: "Frictionless mobile user experience guiding students through competency mapping across Software Development, Visual Arts & UX, Research, and Leadership with custom keyword tags.",
        aspect: "portrait"
      },
      {
        src: "/images/projects/scholarpath/mobile-recommendations.png",
        title: "Mobile Match Results & AI Insights",
        tag: "Mobile Interface",
        description: "Mobile results view featuring categorized tabs (Scholarships vs Competitions), match ranking (#1, 89% Match), prize/reward details, and transparent AI reasoning explaining why opportunities fit the candidate's profile.",
        aspect: "portrait"
      },
      {
        src: "/images/projects/scholarpath/team.jpg",
        title: "ScholarPath Engineering Team at BINUS University",
        tag: "Team & Collaboration",
        description: "BINUS University software engineering student team responsible for architecting and delivering ScholarPath, bridging Vue.js frontend interfaces with Go, Python, and Laravel microservices.",
        aspect: "portrait"
      }
    ]
  },
  {
    slug: "healthybuddy",
    title: "HealthyBuddy",
    role: "Frontend Developer (Website)",
    summary:
      "Web platform for basic health self-screening, dynamic vital signs tracking, and early warning diagnostics.",
    tech: ["HTML5", "CSS3", "JavaScript", "Java (Spring Boot)", "REST API", "JPA / Hibernate"],
    problem:
      "Low public awareness of basic health indicators (weight, blood pressure, blood glucose). Over 60% of adults in Indonesia have never had a fundamental health screening, significantly elevating risks for undetected hypertension and diabetes. The lack of approachable digital tools creates unnecessary hesitation for routine self-assessments without hospital visits.",
    solution:
      "A centralized web-based basic health screening and monitoring platform powered by Java Spring Boot and relational persistence. Users can independently calculate BMI, evaluate systolic/diastolic blood pressure trends, and interpret blood glucose levels with age-adjusted recommendations. It features secure profile authentication, chronological history logs, and interactive comparison charts.",
    impact:
      "Empowers individuals to independently track vital health parameters and identify early warning indicators before clinical complications arise. Promotes regular preventive health habits by consolidating self-assessment, session history, and comparative analytics into one accessible platform.",
    keyLearning:
      "Hands-on OOP and Java enterprise architecture using Spring Boot; relational entity mapping with JPA/Hibernate for authentication and health screening history; and bridging backend REST controllers with responsive frontend interfaces and dynamic chart visualizations.",
    image: "/images/projects/healthybuddy/dashboard.png",
    imagePlaceholder: "/images/projects/healthybuddy/dashboard.png",
    imageGradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    screenshots: [
      "User Onboarding & Dashboard",
      "Interactive BMI Health Trend",
      "Screening Delta & Metrics Summary",
      "BINUS University Development Team"
    ],
    highlights: [
      { label: "Institution", value: "BINUS University", description: "Academic SE Showcase" },
      { label: "Domain", value: "Preventive Healthcare", description: "Accessible vital self-screening" },
      { label: "Backend Core", value: "Java Spring Boot", description: "Enterprise REST architecture" },
      { label: "Data Persistence", value: "JPA / Hibernate", description: "Chronological medical records" },
    ],
    architecture: [
      {
        title: "Frictionless Self-Screening UI",
        description: "Engineered responsive HTML5, CSS3, and JavaScript interfaces prioritizing simplicity and clarity for users of all digital literacy levels without intimidating medical jargon."
      },
      {
        title: "Java Spring Boot REST Services",
        description: "Robust enterprise backend handling authenticated sessions, profile management, and RESTful routing for screening transactions and calculations."
      },
      {
        title: "Relational Health History Engine",
        description: "Normalized database schema with JPA/Hibernate entities, maintaining chronological screening records and enabling instant differential metric analysis between visits."
      },
      {
        title: "Interactive Trend Visualizations",
        description: "Dynamic client-side charting mapping patient BMI curves across time with clinically safe threshold bands (underweight, normal, at-risk) for immediate visual feedback."
      }
    ],
    gallery: [
      {
        src: "/images/projects/healthybuddy/dashboard.png",
        title: "User Onboarding & Health Setup Hub",
        tag: "Web Interface",
        description: "A friendly, friction-free onboarding dashboard featuring a 4-step progress tracker (Complete Profile, Start Health Check, Save to History, Review Insights) to ease first-time screening anxiety.",
        aspect: "wide"
      },
      {
        src: "/images/projects/healthybuddy/chart.png",
        title: "Interactive Health Trend & Vital Signs Chart",
        tag: "Data Analytics",
        description: "Interactive data visualization plotting patient vital metrics over time (such as Glucose levels and BMI) against clinical threshold zones for proactive wellness tracking.",
        aspect: "wide"
      },
      {
        src: "/images/projects/healthybuddy/comparison.png",
        title: "Screening Metrics & Delta Variance Summary",
        tag: "Diagnostic Feedback",
        description: "Automated differential metrics displaying real-time numerical shifts in blood glucose (+10 mg/dL), blood pressure (+0/+20 mmHg), and BMI (+15.4) between sequential medical checkups.",
        aspect: "wide"
      },
      {
        src: "/images/projects/healthybuddy/team.jpg",
        title: "Development Team & Academic Showcase at BINUS",
        tag: "Team & Collaboration",
        description: "Authentic academic collaboration with peer engineers at BINUS University under academic integrity standards. Gavra spearheaded frontend architecture and connected UI states to Java Spring Boot REST APIs.",
        aspect: "portrait"
      }
    ]
  },
  {
    slug: "embun-management-system",
    title: "Embun Management System",
    role: "Frontend Developer (Website)",
    summary:
      "Cafe operations platform unifying POS, inventory, reservations, and financial reports.",
    tech: ["React.js", "Laravel (PHP)", "MySQL", "Agile Scrum"],
    problem:
      "A cafe suffered operational inefficiency from manual, fragmented processes: inventory disconnected from the POS (data inconsistency and human error), orders and reservations handled manually via WhatsApp (delays, disorganized data), and unintegrated sales/financial reporting requiring manual recapitulation.",
    solution:
      "Centralized web-based operations platform built with Agile Scrum. Role-Based Access Control with four roles (Owner, Admin, Employee, Customer). Features: real-time inventory deduction on transaction, digital table reservation, online ordering portal, automated financial report generation.",
    impact:
      "Streamlined daily operations and removed manual bottlenecks in bookings and orders; gave the owner real-time automated financial and sales analytics, reducing admin workload; improved customer experience with a self-service menu and reservation platform.",
    keyLearning:
      "Practical Agile Scrum in a real Food & Beverage context; decoupled architecture with a React.js frontend and a RESTful Laravel backend; normalized MySQL design supporting RBAC, transactional triggers, and dynamic reports.",
    image: "/images/projects/embun/online-order.jpg",
    imagePlaceholder: "/images/projects/embun/online-order.jpg",
    imageGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    screenshots: ["Table Reservation Portal", "Admin & Owner Dashboard", "Online Order POS"],
    highlights: [
      { label: "Methodology", value: "Agile Scrum", description: "Iterative sprints & user stories" },
      { label: "Security & Access", value: "RBAC (4 Roles)", description: "Owner, Admin, Staff, Customer" },
      { label: "Core Automation", value: "Real-Time Inventory", description: "Automatic deduction per POS order" },
      { label: "Role", value: "Frontend Developer", description: "Modular React.js architecture" },
    ],
    architecture: [
      {
        title: "Decoupled Single Page Architecture",
        description: "Modular React.js frontend architecture delivering instant responsiveness for POS cashier operations and digital table reservations."
      },
      {
        title: "Role-Based Access Control (RBAC)",
        description: "Granular authorization separating administrative financial insights, employee order queues, and customer self-service menus."
      },
      {
        title: "Transactional Inventory Engine",
        description: "Relational database triggers synchronizing stock consumption directly with POS transactions to prevent overselling."
      }
    ],
    gallery: [
      {
        src: "/images/projects/embun/online-order.jpg",
        title: "Online Order & Digital Menu Catalog",
        tag: "Customer Experience",
        description: "Self-service digital menu catalog allowing customers to explore beverage and food categories, customize quantities, review their real-time cart breakdown (subtotal, service fees, total), and proceed to checkout without waiting in line.",
        aspect: "wide"
      },
      {
        src: "/images/projects/embun/reservation.jpg",
        title: "Digital Table Reservation Portal",
        tag: "Booking & Operations",
        description: "Integrated table booking workflow where guests select dates, preferred dining times, party sizes (1 to 6+ guests), and special seating preferences—eliminating manual WhatsApp reservation bottlenecks and booking conflicts.",
        aspect: "wide"
      }
    ]
  },
];
