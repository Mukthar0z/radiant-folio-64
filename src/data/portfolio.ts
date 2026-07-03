// Edit this file to update portfolio content (add links, images, projects, etc.)

export const profile = {
  name: "Abdulraheem Mukthar",
  roles: [
    "Computer Science Graduate",
    "Front-End Developer",
    "AI & Machine Learning Enthusiast",
    "IT Support Specialist",
  ],
  intro:
    "I enjoy building modern web applications and AI-powered solutions that solve real-world problems. My interests include front-end development, machine learning, and creating software that delivers practical value.",
  email: "abdulraheemmuktar5@gmail.com",
  phone: "08108045100",
  location: "Ilorin, Kwara State, Nigeria",
  github: "https://github.com/Mukthar0z",
  githubUser: "Mukthar0z",
  linkedin: "", // add your LinkedIn URL here
  resumeUrl: "/Abdulraheem_Mukhtar_Resume.docx",
};

export const timeline = [
  { year: "2021", text: "Started studying Computer Science at Summit University." },
  { year: "·", text: "Learned Python, Linux, and software development fundamentals." },
  { year: "·", text: "Developed an interest in Artificial Intelligence and Machine Learning." },
  { year: "·", text: "Completed Industrial Training at the Ministry of Science and Technology, Alausa, Lagos, gaining practical IT support experience." },
  { year: "·", text: "Built multiple academic and personal software projects." },
  { year: "2025", text: "Graduated with a B.Sc. in Computer Science in December 2025." },
];

export const skills = [
  { category: "Programming", items: ["Python", "SQL"] },
  { category: "Web Development", items: ["HTML5", "CSS3", "Responsive Web Design"] },
  { category: "Machine Learning", items: ["TensorFlow", "Keras", "Transfer Learning"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Google Colab", "Linux"] },
  { category: "IT Support", items: ["System Troubleshooting", "Software Installation", "Basic Networking", "Technical Support"] },
];

export const featuredProject = {
  title: "Crop Disease Detection Using Transfer Learning",
  description:
    "An AI-powered crop disease detection system that identifies diseases from plant leaf images using a MobileNetV2 transfer learning model. Trained with TensorFlow and Keras, deployed with Flask for quick and accurate diagnosis.",
  tech: ["Python", "TensorFlow", "Keras", "MobileNetV2", "Flask", "OpenCV"],
  timeline: [
    { phase: "Research", text: "Studied plant disease datasets and transfer learning architectures." },
    { phase: "Training", text: "Fine-tuned MobileNetV2 on leaf image dataset using Keras." },
    { phase: "Evaluation", text: "Achieved high validation accuracy across multiple crop classes." },
    { phase: "Deployment", text: "Built Flask web app for real-time image inference." },
  ],
  github: "https://drive.google.com/drive/folders/1Q9EjpuU0-V0lozS-wr_h8Rj7hP9AoAlI?usp=drive_link",
  demo: "https://drive.google.com/drive/folders/1Q9EjpuU0-V0lozS-wr_h8Rj7hP9AoAlI?usp=drive_link",
};

export const projects = [
  {
    title: "StudyGenie AI",
    description:
      "AI-powered study assistant. Upload notes, PDFs, or images and auto-generate summaries, flashcards, quizzes, study tips, and personalized revision plans.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Gemini API", "OCR"],
    github: "",
    demo: "https://study-genie-ai-platform.lovable.app",
  },
  {
    title: "HustleSpark Generator",
    description:
      "AI-powered content idea generator for creators — generates ideas, writing inspiration, and topic discovery.",
    tech: ["React", "AI", "TypeScript"],
    github: "",
    demo: "https://spark-your-sidekick.lovable.app/",
  },
  {
    title: "Project Atlas",
    description:
      "Skill path finder that helps learners map out personalized learning journeys toward their target careers.",
    tech: ["React", "TypeScript", "AI"],
    github: "",
    demo: "https://skill-path-finder-69.lovable.app",
  },
  {
    title: "Password Strength Checker",
    description:
      "Python application that evaluates password strength and demonstrates encryption / decryption concepts.",
    tech: ["Python", "Cryptography"],
    github: "",
    demo: "",
  },
  {
    title: "Network Security Assessment Lab",
    description:
      "Cybersecurity learning project demonstrating network discovery, service detection, and vulnerability assessment using Kali Linux and Nmap.",
    tech: ["Kali Linux", "Nmap", "Security"],
    github: "",
    demo: "",
  },
];

export const experience = {
  role: "Information Technology Intern",
  org: "Ministry of Science and Technology",
  location: "Alausa, Lagos",
  bullets: [
    "Provided technical support to staff across departments.",
    "Assisted in software installation and configuration.",
    "Performed computer troubleshooting and hardware diagnostics.",
    "Supported basic networking tasks.",
    "Worked with technical staff to resolve user issues.",
  ],
};

export const education = {
  degree: "Bachelor of Science (B.Sc.) — Computer Science",
  school: "Summit University",
  graduated: "December 2025",
  cgpa: "3.20 / 5.00",
};

export const lookingFor = [
  "Front-End Development",
  "Software Development",
  "IT Support",
  "Graduate Trainee Programs",
  "Artificial Intelligence",
  "Machine Learning",
];
