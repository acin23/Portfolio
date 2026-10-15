export const profileData = {
  name: "Gavra Tsany Atmaja",
  firstName: "Gavra",
  subtitle: "Computer Science Undergraduate",
  university: "BINUS University",
  gpa: "3.48 / 4.00",
  location: "Malang, Indonesia",
  focus: ["Software Engineering", "Full Stack Development", "Data Analytics"],
  bio: "Computer Science student at BINUS University with a strong academic record and a passion for Software Engineering, Full Stack, and Data Analytics. Experienced in research, teaching, and organizational leadership, currently serving as Vice Manager of Academic Event Commission at HIMTI @Malang and as a Teaching Assistant for multiple computing courses. Open-minded and communicative, enjoys collaborating, exchanging ideas, and learning from new experiences. Eager to learn new technologies, gain practical experience, and continuously develop technical, problem-solving, and communication skills.",
  valueStatement: "Translating complex challenges into seamless digital solutions through Full-Stack Engineering and Data Analytics.",
  email: "mailto:gavratsany1987@gmail.com",
  emailDisplay: "gavratsany1987@gmail.com",
  linkedin: "https://www.linkedin.com/in/gavra-tsany-atmaja-16b020311?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  github: "https://github.com/acin23",
  openTo: "Internship",
  resumePath: "/CV-GavraTsanyA.pdf",
  portraitPlaceholder: "/images/placeholders/portrait.jpg",
};

export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  description?: string;
  type: "leadership" | "teaching" | "event" | "sports";
};

export const experienceData: ExperienceItem[] = [
  {
    role: "Vice Manager, Academic Event Commission",
    organization: "HIMTI Malang",
    period: "Current",
    description: "Lead planning and coordination of academic events including seminars, workshops, and tech competitions for the Informatics Student Association.",
    type: "leadership",
  },
  {
    role: "Teaching Assistant",
    organization: "BINUS University",
    period: "Current",
    description: "Assist lecturers with multiple computing courses, guiding students through lab sessions, grading, and mentorship.",
    type: "teaching",
  },
  {
    role: "Freshmen Leader",
    organization: "BINUS University",
    period: "Past",
    description: "Mentored and guided incoming students through orientation and transition to university life.",
    type: "leadership",
  },
  {
    role: "Freshmen Partner",
    organization: "BINUS University",
    period: "Past",
    description: "Served as a peer mentor, helping new students adapt academically and socially.",
    type: "leadership",
  },
  {
    role: "Staff, Workforce Management",
    organization: "UKM Basket",
    period: "Past",
    description: "Managed team logistics, scheduling, and coordination for the university basketball club.",
    type: "sports",
  },
  {
    role: "Staff",
    organization: "Techno 2025, HIMTI Malang",
    period: "Past",
    description: "Contributed to organizing Techno 2025, a flagship technology event by HIMTI Malang.",
    type: "event",
  },
];

export const experienceSummary =
  "These roles in event management, workforce coordination, and student mentorship built a strong foundation in interpersonal communication and strategic execution — the soft skills needed to thrive in fast-paced, collaborative teams.";

export const snapshotData = [
  {
    title: "HIMTI Malang",
    subtitle: "Vice Manager, Academic Event",
    image: "/images/snapshots/himti.jpg",
  },
  {
    title: "Teaching Assistant",
    subtitle: "BINUS University",
    image: "/images/snapshots/ta.jpg",
  },
  {
    title: "Freshmen Leader",
    subtitle: "BINUS University Orientation",
    image: "/images/snapshots/fl.jpg",
  },
  {
    title: "Freshmen Partner",
    subtitle: "Academic Mentorship",
    image: "/images/snapshots/fp.jpg",
  },
  {
    title: "UKM Basket",
    subtitle: "Workforce Management",
    image: "/images/snapshots/basket.jpg",
  },
  {
    title: "Techno 2025",
    subtitle: "HIMTI Event Staff",
    image: "/images/snapshots/techno.jpg",
  },
];

export const skillsData: Record<string, string[]> = {
  Frontend: ["React.js", "Next.js", "Vue.js", "HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Java (Spring Boot)", "Laravel (PHP)", "Go", "Python"],
  Database: ["PostgreSQL", "SQLite", "MySQL"],
  Methodology: ["Agile Scrum", "OOP", "RESTful API", "Git"],
  "Soft Skills": ["Leadership", "Mentorship", "Communication", "Event Management", "Teamwork"],
};

export const quickFacts = [
  { label: "University", value: "BINUS University" },
  { label: "GPA", value: "3.48 / 4.00" },
  { label: "Focus", value: "Full Stack · Data Analytics" },
  { label: "Location", value: "Malang, Indonesia" },
];
