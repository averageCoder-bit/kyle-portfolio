export interface Project {
  title: string;
  description: string;
  role: string;
  story: string;
  technologies: string[];
  images: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "LeafTrade",

    description:
      "An ongoing full-stack customer-to-customer marketplace currently in development, designed to allow users to list, discover, and purchase products.",

    role: "Full-Stack Developer",

    story:
      "LeafTrade is an ongoing full-stack customer-to-customer marketplace that I designed and developed as a personal project. The project explores how a modern marketplace can bring together product listings, authentication, payments, and user management within a single platform. I work across the frontend and backend, building the application with React and TypeScript while developing the API with FastAPI and connecting it to a PostgreSQL database. As the project continues to evolve, I am also gaining hands-on experience with authentication, cloud services, database architecture, and deployment while continuously improving and expanding the platform.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Clerk",
      "Cloudflare",
    ],

    images: [
      "/projects/leaftrade/1.png",
      "/projects/leaftrade/2.png",
      "/projects/leaftrade/3.png",
    ],

    github: "https://github.com/averageCoder-bit/leaf-trade",
    demo: "https://leaf-trade.kyleeva53.workers.dev/",
    featured: true,
  },

  {
    title: "Commerciales Flores",

    description:
      "A two-semester team project developed for a family-owned rental business in Quezon City, designed to streamline property and rental-related operations.",

    role: "UI/UX & Full-Stack Developer",

    story:
      "Commerciales Flores is a rental management system developed as a two-semester school project for a family-owned local business in Quezon City. Our team worked with the clients to develop a practical system for managing property and rental-related operations. I initially designed the application's UI/UX in Figma, establishing the interface and overall design direction before moving into frontend development with React and TypeScript. As the project progressed, my responsibilities expanded into backend development and database integration using Supabase, allowing me to contribute across the full stack. I also handled parts of the project's deployment and development infrastructure, including Cloudflare, GitHub, and domain management through Porkbun. This project gave me experience translating client requirements into designs, collaborating within a development team, working with a real client, and taking responsibility across the design, development, and deployment stages of a software project.",

    technologies: ["React", "TypeScript", "Supabase", "Cloudflare", "Figma"],

    images: [
      "/projects/commerciales-flores/1.png",
      "/projects/commerciales-flores/2.png",
      "/projects/commerciales-flores/3.png",
    ],

    github: "https://github.com/Commerciales-Flores/Comerciales-Flores",
    demo: "https://commercialesflores.com/",
  },

  {
    title: "Siklab",

    description:
      "An AI-powered road-mapping application developed during a two-day hackathon, placing 6th out of 20 teams.",

    role: "Frontend Developer",

    story:
      "Siklab was an AI-powered road-mapping application developed during a two-day hackathon. I worked primarily as a frontend developer, building the user interface using React and TypeScript and integrating it with the project's Python backend. We used the Gemini API to provide the application's AI capabilities, as the limited two-day development period did not allow us enough time to develop and train our own model. Working under a strict time constraint gave me experience with rapid prototyping, API integration, team collaboration, and prioritizing features to deliver a functional product within a short timeframe. Our team ultimately placed 6th out of 20 teams in the hackathon.",

    technologies: ["React", "TypeScript", "AI", "Python"],

    images: [
      "/projects/siklab/1.png",
      "/projects/siklab/2.png",
      "/projects/siklab/3.png",
    ],

    github: "https://github.com/averageCoder-byte/Siklab",
    demo: "",
  },
];
