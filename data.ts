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
  desciption: string;
  technologies?: string;
  responsibilities?: string;
  date: string;
  header: string;
  images?: StaticImageData[];
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
      subtitle: "Frontend Developer & Designer",
      desciption:
        "I am an independent web developer and designer focusing on interaction and motion design. I specialize in creating unique and performant web experiences that set my clients apart.",
      date: "2023",
      header: "Portfolio",
      website: "mailto:hello@noelcserepy.com?subject=Hi Noël, let's work together",
      buttonText: "Let's Talk",
      github: "https://github.com/noelcserepy/"
    },
    {
      title: "Stake.New",
      subtitle: "Staking Platform",
      desciption:
      "Stake.New is an interactive web-based platform that simplifies staking on the Aptos blockchain. Powered by Nuxt and Vue.js, the application seamlessly connects users with leading Validators on the Aptos network, providing a comprehensive solution to stake with all their favourite Aptos wallets.",
      technologies: "Nuxt.js, Vue.js, TypeScript, TailwindCSS, Aptos SDK, Web3.js",
      responsibilities: "UI/UX Design, Frontend Development, Wallet Integrations, Blockchain Interfacing, State Management",
      date: "2023",
      header: "Project 1",
      images: stakenewImages,
      github: "",
      website: "https://stake.new/",
      buttonText: "View Project",
    },
    {
      title: "Nakarin",
      subtitle: "Photography Portfolio",
      desciption:
        "Nakarin is a captivating portfolio website designed and developed exclusively for the professional photographer Nakarin Saisorn. Created with a clear focus on visual artistry and aesthetic appeal, Nakarin exhibits a balance between showcasing film and photography projects.",
      technologies: "Next.js, TypeScript, TailwindCSS, Framer Motion",
      responsibilities: "UI/UX Design, Frontend Development, Responsive Design, SEO",
      date: "2023",
      header: "Project 2",
      images: nakarinImages,
      github: "https://github.com/noelcserepy/nakarin",
      website: "https://nakarin.vercel.app/",
      buttonText: "View Project",
    },
    {
      title: "Blog",
      subtitle: "Personal Blog",
      desciption:
        "A place where I share my thoughts on animation, web development, design. ",
      date: "2022",
      header: "Blog",
      website: "https://blog.noelcserepy.com/",
      buttonText: "View Blog",
    },
  ],
};

export default data;