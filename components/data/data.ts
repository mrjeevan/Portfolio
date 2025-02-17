export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 ",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-center ",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building a Glassmorphism UI Kit",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Kli-M8 - A Fast & Responsive Weather App",
    des: "Kli-M8 is a modern weather app built with Vite, React, Tailwind CSS, and RTK Query, using the OpenWeather API for real-time updates. It lets users search cities, view weather details, save favorites, and switch between dark/light mode. Fully responsive and deployed on Vercel, it delivers a smooth and fast experience.",
    img: "/projects/Kli-M8.png",
    iconLists: [
      "/technologies/VueJs.svg",
      "/technologies/TailwindCss.svg",
      "/technologies/TypeScript.svg",
      "/technologies/Redux.svg",
      "/technologies/Vercel.svg",
    ],
    link: "https://kli-m8.vercel.app",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const skills = [
  { title: "React" },
  { title: "Next.js" },
  { title: "Redux Toolkit" },
  { title: "MongoDb" },
  { title: "Node" },
  { title: "Strapi" },
  { title: "React Router" },
  { title: "ThreeJs" },
  { title: "Material-UI" },
  { title: "Shadcn/ui" },
  { title: "Bootstrap" },
  { title: "Tailwind CSS" },
  { title: "Styled Components" },
  { title: "JavaScript" },
  { title: "TypeScript" },
  { title: "Python" },
  { title: "HTML" },
  { title: "SCSS" },
  { title: "CSS" },
  { title: "SEO" },
  { title: "SSG (Static Site Generation)" },
  { title: "SSR (Server-Side Rendering)" },
  { title: "CSR (Client-Side Rendering)" },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer",
    desc: "Developing responsive and high-performance UIs with Next.js, React, Redux, and AntD, focusing on optimization, refactoring legacy code, and building flexible components. Contributing to Adaptive KYC development and custom UI libraries, including Redux integration to enhance maintainability and scalability.",
    date: "Aug 2022 - Present",
    company: "ThoughtClan Technologies Pvt Ltd, Bangalore",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 2,
    title: "Software Engineer (Intern)",
    desc: "Built proofs-of-concept with Next.js while exploring Material-UI, Strapi CMS, and API integrations. Experimented with building drag-and-drop dashboards and various charting libraries like Highcharts, D3, and AMCharts, leading to involvement in larger projects.",
    date: "Apr 2022 - May 2024",
    company: "ThoughtClan Technologies Pvt Ltd, Bangalore",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Full-stack Developer (Intern)",
    desc: "Crafted engaging user interfaces using React, Material-UI, and Styled Components while exploring new tools. Gained hands-on experience in full-stack development, working on features like file uploads for back-office systems. Collaborated with senior engineers to understand the MERN stack and integrations with webhooks effectively.",
    date: "Apr 2021 - Aug 2021",
    company: "Settyl, Remote",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },

  // {
  //   id: 4,
  //   title: "",
  //   desc: "",
  //   date:'',
  //   company: "",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp3.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/links/Github.svg",
    link: "https://github.com/mrjeevan",
    alt: "github",
  },
  {
    id: 2,
    img: "/links/Twitter.svg",
    link: "https://x.com/m_r_jeevan",
    alt: "twitter",
  },
  {
    id: 3,
    img: "/links/LinkedIn.svg",
    link: "https://www.linkedin.com/in/mrjeevan/",
    alt: "linkedin",
  },
];
