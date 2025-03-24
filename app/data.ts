export const projects = [
  {
    id: 1,
    name: "FinSync",
    technologies: ["NextJS", "Clerk", "Arcjet", "Firebase"],
    description: `FinSync is a modern personal finance tracker that helps users manage their income, expenses, and budgets effectively. With intuitive visualizations and real-time tracking, it empowers users to take control of their financial well-being.`,
    githubLink: "https://github.com/arunava-12/FinSync",
    liveAppLink: "https://fin-sync-delta.vercel.app/",
    imagePath: "/assets/projects/finsync.jpg",
  },
  {
    id: 2,
    name: "Brain Tumor Detection",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy"],
    description: `This project automates brain tumour identification and classification through a streamlined process. It organizes medical imaging data, splits it into training, validation, and test sets, and employs a Convolutional Neural Network (CNN) model for efficient feature extraction and classification.`,
    githubLink: "https://github.com/arunava-12/Cancer_Detection",
    imagePath: "/assets/projects/braintumour.jpeg",
  },
  {
    id: 3,
    name: "Crypto-Crafty",
    technologies: ["HTML", "CSS", "JavaScript", "Public Crypto APIs"],
    description: "Crypto-Crafty is a real-time cryptocurrency tracking web app that provides up-to-date information on crypto coins and NFTs. Using public APIs, it fetches live market prices, 24-hour volume, and interactive charts to help users stay informed about market trends.",
    githubLink: "https://github.com/arunava-12/Crypto-App",
    liveAppLink: "https://crypto-app-pi-gold.vercel.app/",
    imagePath: "/assets/projects/cryptocrafty.jpg",
  },
  {
    id: 4,
      name: "Snake Game (8086 Assembly)",
      technologies: ["8086 Assembly", "EMU8086", "BIOS Interrupts"],
      description: "A classic Snake game implemented in 8086 assembly language, running on the EMU8086 emulator. The game utilizes BIOS interrupts for display and input handling, offering a nostalgic retro gaming experience on low-level hardware.",
      githubLink: "https://github.com/arunava-12/Snake_in_8086",
    imagePath: "/assets/projects/snake.webp",
  },
];

export const experienceSectionText = `Over the past years, i've had the opportunity to work on a wide range of complex projects, collaborate with talented individuals and learn from some of the best in the college. Here are some of the highlights of my journey so far.`;

export type Experience = {
  id: number;
  companyName: string;
  duration: string;
  roles: string[];
  tags: string[];
  details?: {
    imagePaths?: string[];
    description: string;
    companyWebsite?: string;
  };
};

export const experiences: Experience[] = [
  {
    id: 1,
    companyName: "Quick IsCool",
    duration: "April 2023 - July 2024",
    roles: ["AI Research Intern"],
    tags: ["EasyOCR", "Machine Learning", "Frontend Development"],
    details: {
      description: `During my internship at Quick IsCool, I gained hands-on experience in industry operations and technology strategies. I contributed to two distinct projects, collaborating on problem-solving and development. A key achievement was developing an Optical Character Recognition (OCR) tool using EasyOCR and front-end frameworks, making document scanning and processing more efficient.`,
    },
  },
  {
    id: 2,
    companyName: "CINTEL's Next-Gen AI",
    duration: "December 2023",
    roles: ["Member"],
    tags: ["NLP", "Machine Learning", "Data Visualization"],
    details: {
      description: `At the Next-Gen AI CLub, I did a project on the development of a Natural Language Processing (NLP) sentiment analysis using Amazon Reviews. This involved text preprocessing, feature extraction, and implementing machine learning models to analyze sentiment in textual data. The final solution included data visualization using Matplotlib and CSV data persistence for further analysis.`,
    },
  },
  {
    id: 3,
    companyName: "Alexa Developer's SRM",
    duration: "December 2023",
    roles: [ "Member"],
    tags: [ "React","NextJs","Mongo DB", "Full Stack Developer" ],
    details: {
      description: `Played a key role in organizing two successful events, including a hackathon, ensuring smooth execution and engagement. Mentored new joiners by providing hands-on training in React and Git, helping them get up to speed with modern development practices. Assisted participants in building projects and troubleshooting issues, fostering a collaborative and learning-oriented environment.`,
    },
  },

];

// Education Section
export const education = [
  {
    id: 1,
    institution: "Hem Sheela Model School",
    degree: "CBSE",
    duration: "2007 - 2022",
    tags: ["X - 96%", "XII - 90%"],
  },
  {
    id: 2,
    institution: "S.R.M. Institute of Science and Technology",
    degree: "B.Tech in Computer Science",
    duration: "2023 - ",
    tags: ["CGPA - 8.5"],
  },
];


export const socials = {
  linkedin: "https://www.linkedin.com/in/arunava12/",
  github: "https://github.com/arunava-12",
};

export const educationSectionText = `My educational journey has equipped me with strong technical and analytical skills. I have pursued rigorous coursework, hands-on projects, and collaborative learning experiences that have shaped my expertise in software development and AI research.`;
