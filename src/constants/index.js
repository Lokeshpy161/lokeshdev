import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  tailwind,
  mongodb,
  meta,
  metaverse,
  gfg,
  lokesh,
  tesla,
  shopify,
  tripguide,
  threejs,
  techshop,
  cryptowallet,
  django,
  website,
  hb,
  Node,
  chamber,
  saiaksharaiyafoods,
  aims,
  demand,
  yoghan,
  educonnect,
  ulm,
  raghu,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Desigs",
    icon: web,
  },
  {
    title: "Web Application",
    icon: mobile,
  },
  {
    title: "Api Development",
    icon: backend,
  },
  {
    title: "Mobile Application (React Native, Flutter)",
    icon: creator,
  },
  {
    title: "Customized Softwares",
    icon: backend,
  },
  {
    title: "3d Models & Animations",
    icon: creator,
  },{
    title: "AI & ML Solutions",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: Node,
  },
  {
    name: "MongoDB",
    icon: django,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "metaverse",
    icon: metaverse,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using a range of technologies including React.js, Django, and Flask.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Conducting research in Artificial Intelligence with a focus on healthcare applications and Generative Adversarial Networks (GANs).",
    ],
  },
  {
    title: "Head",
    company_name: "Greeks for Greeks",
    icon: gfg,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - present",
    points: [
      "Organized and managed events aimed at providing students with extensive knowledge and seamless experiences.",
      "Coordinated with various stakeholders to ensure smooth event execution.",
      "Conducting workshops on various technologies including React.js, Django, and Flask.",
    ],
  },
  {
    title: "Project Developer",
    company_name: "Freelance",
    icon: lokesh,
    iconBg: "#383E56",
    date: "Various",
    points: [
      "Developed a website for Karpagam Consultancy.",
      "Built a website for HACKBOX Startup.",
      "Created over 6 portfolio websites as a freelancer.",
      "Developed a membership website for the Indian Chamber of Commerce and Industries.",
      "Built an Enterprise AIMS Software for Signal and Telecommunications - Southern Railways.",
      "Created a learning portal for Karpagam Academy of Higher Education.",
      "Developed a website for Sai Aksharaiya Foods.",
      "Built a website for IT Company (FortRise).",
    ],
  },
];



const projects = [
  {
    name: "HackBox Website",
    description:
    "Developed a website for HackBox featuring a sleek, animated UI design tailored for security and service-based solutions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hb,
    source_code_link: "https://hackbox.in",
  },
  {
    name: "Ecommerce with ULM",
    description:
    "Created an e-commerce platform using Multi Level Marketing (MLM) architecture for scalable and high-performance solutions.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Postgressql",
        color: "pink-text-gradient",
      },
    ],
    image: ulm,
    source_code_link: "http://streetmall.com/",
  },
  {
    name: "EduConnect",
    description:
    "Developed EduConnect, a comprehensive platform to bridge education through mobile app and web development, fostering connectivity for college communities.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
      {
        name: "Postgressql",
        color: "pink-text-gradient",
      },
    ],
    image: educonnect,
    source_code_link: "https://github.com/MrLokesh161/edu_app/",
  },
  {
    name: "Membership & Analysis Software - Indian Chamber",
    description:
    "Built a membership and analysis software for the Indian Chamber of Commerce and Industries, featuring an advanced UI and comprehensive data analysis tools.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Postgressql",
        color: "pink-text-gradient",
      },
    ],
    image: chamber,
    source_code_link: "https://chambermemberships.lokeshdev.co/",
  },
  {
    name: "AIMS Software - S&T, Indian Railways",
    description:
    "Developed AIMS software for Signal and Telecommunications at Indian Railways, enhancing operational efficiency with a robust backend and user-friendly interface.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Postgressql",
        color: "pink-text-gradient",
      },
    ],
    image: aims,
    source_code_link: "https://aimsportal.netlify.app/",
  },
  {
    name: "Demand Register Website - S&T, Indian Railways",
    description:
    "Created a demand register website for Signal and Telecommunications at Indian Railways to streamline demand tracking and management.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
      {
        name: "Postgressql",
        color: "pink-text-gradient",
      },
    ],
    image: demand,
    source_code_link: "https://demandregister.netlify.app/",
  },
  {
    name: "Sai Aksharaiya Foods",
    description:
    "Developed a website for Sai Aksharaiya Foods with an emphasis on user-friendly navigation and detailed product information.",
    tags: [
      {
        name: "HTML CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JS JQuery",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Postgressql",
        color: "pink-text-gradient",
      },
    ],
    image: saiaksharaiyafoods,
    source_code_link: "https://saiaksharaiyafoods.com/",
  },
  {
    name: "Yoghan Enterprises",
    description:
    "Built a website for Yoghan Enterprises using HTML, CSS, and JQuery to enhance the online presence and user engagement.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JQuery",
        color: "pink-text-gradient",
      },
    ],
    image: yoghan,
    source_code_link: "https://yoghan.netlify.app/",
  },
  {
    name: "Portfolio - Hackbox",
    description:
    "Created a professional portfolio website for showcasing projects and expertise, using HTML and CSS for clean and responsive design.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: raghu,
    source_code_link: "https://raghuyashwanth.in/",
  },
];


export { services, technologies, experiences, projects };
