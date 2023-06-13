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
  date: string;
  header: string;
  images?: StaticImageData[];
  github?: string;
  website?: string;
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
        "I design visually striking, unique web experiences. I portray my client's vision in the best light using performant web pages.",
      date: "2023",
      header: "Portfolio",
      imageFolder: "/public/noel",
    },
    {
      title: "Stake.New",
      subtitle: "Staking Platform",
      desciption:
        "I design visually striking, unique web experiences. I portray my client's vision in the best light using performant web pages.",
      date: "2023",
      header: "Project 1",
      images: stakenewImages,
      github: "",
      website: "",
    },
    {
      title: "Nakarin",
      subtitle: "Photography Portfolio",
      desciption:
        "I design visually striking, unique web experiences. I portray my client's vision in the best light using performant web pages.",
      date: "2023",
      header: "Project 2",
      images: nakarinImages,
      github: "https://github.com/noelcserepy/nakarin",
      website: "https://nakarin.vercel.app/",
    },
  ],
};

export default data;