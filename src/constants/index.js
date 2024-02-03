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
  tesla,
  shopify,
  tripguide,
  threejs,
  techshop,
  cryptowallet,
  hb,
  ulm,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native & Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "3d Modeller",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    iconBg: "#383E56",
    date: "March 2023 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "React Native & Flutter Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Specializing in the creation and maintenance of cutting-edge mobile applications through proficient use of React Native and Flutter technologies.",
      "Working seamlessly within cross-functional teams, encompassing designers, product managers, and fellow developers, to deliver top-notch mobile solutions that meet and exceed client expectations.",
      "Expertly implementing responsive design principles to ensure optimal user experiences across various devices, while also prioritizing cross-platform compatibility for a seamless application performance."
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Specializing in the development and upkeep of dynamic web applications by leveraging the power of React.js and associated technologies.",
      "Collaborating seamlessly with cross-functional teams, such as designers, product managers, and fellow developers, to deliver top-tier, user-centric products.",
      "Proficiently implementing responsive design principles to guarantee an optimal user experience across a variety of devices, and ensuring cross-browser compatibility for a consistent performance."
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Proficient full-stack developer adept at crafting and maintaining robust web applications using a diverse range of technologies, with a core focus on React.js and related frameworks.",
      "Collaborating seamlessly within cross-functional teams, engaging with designers, product managers, and fellow developers to deliver high-quality, feature-rich products that align with client needs and industry standards.",
      "Specializing in the implementation of responsive design strategies to ensure a seamless and enjoyable user experience across various devices, coupled with a strong commitment to cross-browser compatibility for widespread accessibility."
    ],
  },
];


const projects = [
  {
    name: "HackBox Website",
    description:
    "Empower your cybersecurity journey with HackBox, featuring a sleek, animated UI design on our revamped platform tailored for security and service-based solutions.",
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
    "Elevate your online retail experience with Ultra-Lightweight Microservices (ULM) architecture for seamless, scalable, and high-performance ecommerce solutions.",
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
    source_code_link: "https://lokesh-port.netlify.app/",
  },
  {
    name: "EduConnect",
    description:
    "EduConnect: Bridging education seamlessly through a comprehensive mobile app and web development platform, fostering connectivity for your college community.",
    tags: [
      {
        name: "Flutter",
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
    image: tripguide,
    source_code_link: "https://lokesh-port.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
