import stakenew1 from "/public/stakenew/stakenew1.png"
import stakenew2 from "/public/stakenew/stakenew2.png"
import stakenew3 from "/public/stakenew/stakenew3.png"
import stakenew4 from "/public/stakenew/stakenew4.png"
import stakenew5 from "/public/stakenew/stakenew5.png"
import stakenew6 from "/public/stakenew/stakenew6.png"
import stakenew7 from "/public/stakenew/stakenew7.png"
import stakenew8 from "/public/stakenew/stakenew8.png"

import nakarin1 from "/public/nakarin/nakarin1.png"
import nakarin2 from "/public/nakarin/nakarin2.png"
import nakarin3 from "/public/nakarin/nakarin3.png"
import nakarin4 from "/public/nakarin/nakarin4.png"
import nakarin5 from "/public/nakarin/nakarin5.png"
import nakarin6 from "/public/nakarin/nakarin6.png"
import { type StaticImageData } from "next/image"

export type Page = {
  title: string;
  subtitle: string;
  description: string;
  technologies?: string;
  responsibilities?: string;
  date: string;
  header: string;
  images?: StaticImageData[];
  linkedin?: string;
  github?: string;
  website?: string;
  buttonText?: string;
};

const stakenewImages = [
  stakenew1,
  stakenew2,
  stakenew3,
  stakenew4,
  stakenew5,
  stakenew6,
  stakenew7,
  stakenew8,
]

const nakarinImages = [
  nakarin1,
  nakarin2,
  nakarin3,
  nakarin4,
  nakarin5,
  nakarin6,
]


const data = {
  pages: [
    {
      title: "Noël Cserépy",
      subtitle: "Fullstack Software Engineer",
      description:
        "From YC-backed companies and Silicon Valley startups to local photographers, I build software solutions for a diverse range of clients. No matter the tech stack or project size, I dive in and get things done.",
      date: "2024",
      header: "Portfolio",
      website: "mailto:hello@noelcserepy.com?subject=Hi Noël, let's work together",
      buttonText: "Let's Talk",
      github: "https://github.com/noelcserepy/",
      linkedin: "https://www.linkedin.com/in/noelcserepy/"
    },
    {
      title: "Stake.New",
      subtitle: "Staking Platform",
      description:
      "Stake.New simplifies liquid staking on the Aptos blockchain. Powered by Nuxt and Vue.js, the application seamlessly connects users with leading Validators on the Aptos network, providing a comprehensive solution to stake with all top Aptos wallets.",
      technologies: "Nuxt.js, Vue.js, TypeScript, Tailwind, Aptos SDK, Web3.js",
      responsibilities: "Design, Development, Wallet Integrations, Blockchain Interfacing", 
      date: "2023",
      header: "Client Showcase 1",
      images: stakenewImages,
      github: "",
      website: "https://stake.new/",
      buttonText: "View Project",
    },
    {
      title: "Nakarin",
      subtitle: "Photography Portfolio",
      description:
        "Nakarin is a portfolio website crafted just for professional photographer Nakarin Saisorn. Designed for aesthetics it balances the display of both film and photography projects.",
      technologies: "Next.js, TypeScript, Tailwind, Framer Motion",
      responsibilities: "Design, Development, SEO",
      date: "2023",
      header: "Client Showcase 2",
      images: nakarinImages,
      github: "https://github.com/noelcserepy/nakarin",
      website: "https://nakarin.vercel.app/",
      buttonText: "View Project",
    },
    {
      title: "Blog",
      subtitle: "Personal Blog",
      description:
        "A place where I share my thoughts on animation, web development, design. ",
      date: "2022",
      header: "Blog",
      website: "https://blog.noelcserepy.com/",
      buttonText: "View Blog",
    },
  ],
};

export default data;