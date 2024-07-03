import Work0 from "../../assets/Posters/shebo2.png"
import Work2 from "../../assets/Posters/blog4.webp"
import Work3 from "../../assets/Posters/moaz3.png"
import Work4 from "../../assets/Posters/cairo1.svg"
import Work5 from "../../assets/Posters/blog7.png"
import Work6 from "../../assets/Posters/Jin2.png"
import Work7 from "../../assets/Posters/qaa3a.png"
import Work8 from "../../assets/Posters/eagle.png"
import Work9 from "../../assets/Posters/reve.png"
import Work10 from "../../assets/Posters/kemet.png"
import Work11 from "../../assets/Posters/cairostudio.png"
import ShebooMainImg from "../../assets/ProjectDetails/Sheboo/Shehab__mainPage.png"
import ShebooVideo from "../../assets/ProjectDetails/Sheboo/Shehab__video.mp4"
import ShebooCollective from "../../assets/ProjectDetails/Sheboo/Shehab__collective.png"
import CairoCollective from "../../assets/ProjectDetails/Cairo/Cairo__collective.png"
import CairoMainImg from "../../assets/ProjectDetails/Cairo/Cairo__mainPage.png"
import CairoVideo from "../../assets/ProjectDetails/Cairo/Cairo__video.mp4"
import BlogMainPage from "../../assets/ProjectDetails/Blog/blog_mainPage.png"
import BlogVideo from "../../assets/ProjectDetails/Blog/Blog_video.mp4"
import BlogCollective from "../../assets/ProjectDetails/Blog/Blog__collective.png"
 
import RollDiceMainPage from "../../assets/ProjectDetails/RollDice/RollDice__mainPage.png"
import JingMainPage from "../../assets/ProjectDetails/Jing/Jin__mainPage.png"
import JingVideo from "../../assets/ProjectDetails/Jing/Jinghui Ma.mp4"
import JingCollective from "../../assets/ProjectDetails/Jing/collective.png"
import MoaazMainPage from "../../assets/ProjectDetails/Moaaz/Moaaz__mainPage.png"
import MoaazVideo from "../../assets/ProjectDetails/Moaaz/Moaaz_video.mp4"
import MoaazColelctive from "../../assets/ProjectDetails/Moaaz/collective.png"

import EagleMainImg from "../../assets/ProjectDetails/Eagle/Eagle__mainPage.png"
import EagleCollective from "../../assets/ProjectDetails/Eagle/Eagle__collective.png"

import ReveMainImg from "../../assets/ProjectDetails/Reve/ilReve__mainPage.webp"
import ReveVideo from "../../assets/ProjectDetails/Reve/video.mp4"
import KemetMainImg from "../../assets/ProjectDetails/Kemet/Kemet__mainPage.png"

const projectsData = [
  {
    id: 1,
    image: Work0,
    title: " lorem",
    category: ["Branding", "UI/UX Design", "Web Design"],
    website: "#",
    link: "#",
    date: "March, 2023",
    class: "shehab",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    mainTitle: "Main Page",
    mainTitleImg: ShebooMainImg,
    video: ShebooVideo,
    overView: "Overview",
    collective: ShebooCollective,
    workingOnIt: false,
    newProject: false,
    backgroundColor: "#63b7b777",
    backgroundColor_mobile: "#63b7b777",
  },
  {
    id: 13,
    image: Work11,
    title: "Lorem",
    category: ["Web Application", "UI/UX Design", "Web Design"],
    website: "#",
    link: "",
    date: "August, 2023",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    mission: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    class: "cairo-studio",
    mainTitle: "Main Page",
    mainTitleImg: CairoMainImg,
    video: CairoVideo,
    overView: "Overview",
    collective: CairoCollective,
    workingOnIt: false,
    newProject: true,
    backgroundColor: "#4D2CF19a",
    backgroundColor_mobile: "#4D2CF19a",
  },
  {
    id: 8,
    image: Work6,
    title: "Lorem",
    category: ["Branding", "Web Design", "UI/UX Design"],
    website: "Lorem",
    link: "#",
    date: "2023, July",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    mission: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    mainTitle: "Main Page",
    mainTitleImg: JingMainPage,
    video: JingVideo,
    overView: "Overview",
    collective: JingCollective,
    class: "jing",
    workingOnIt: false,
    newProject: false,
    backgroundColor: "#ed293999",
    backgroundColor_mobile: "#ed293969",
  },
  {
    id: 2,
    image: Work9,
    title: "Lorem",
    category: ["Web Application", "UI/UX Design"],
    website: "#",
    mission: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    link: "",
    date: "August, 2023",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    class: "le-reve",
    mainTitle: "Main Page",
    mainTitleImg: ReveMainImg,
    video: ReveVideo,
    workingOnIt: false,
    newProject: true,
    backgroundColor: "#E9A7A1",
    backgroundColor_mobile: "#E9A7A1",
  },
  {
    id: 4,
    image: Work8,
    title: "Lorem",
    category: ["UI/UX Design", "Web Design", "Branding"],
    website: "#",
    link: "",
    date: "August, 2023",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    mission: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    class: "eagle",
    mainTitle: "Main Page",
    mainTitleImg: EagleMainImg,
    
    overView: "Overview",
    collective: EagleCollective,
    workingOnIt: false,
    newProject: false,
    backgroundColor: "#9736367b",
    backgroundColor_mobile: "#9736367b",
  },
  {
    id: 3,
    image: Work2,
    title: "lorem",
    category: ["Blog-Application", "Web Design", "UI/UX Design"],
    website: "#",
    link: "#",
    classProject: "blog__class",
    date: "December, 2022",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    mission: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    mainTitle: "Main Page",
    mainTitleImg: BlogMainPage,
    overView: "Overview",
    collective: BlogCollective,
    video: BlogVideo,
     
    class: "blog",
    workingOnIt: false,
    newProject: false,
    backgroundColor: "#f9e5bf9a",
    backgroundColor_mobile: "#f9e5bf9a",
  },
  {
    id: 5,
    image: Work3,
    title: "Lorem",
    category: ["Branding", "Web Design", "UI/UX Design"],
    website: "#",
    link:" #",
    date: "2023, July",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    mission: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    class: "moaaz",
    workingOnIt: false,
    newProject: true,
    backgroundColor: "#006F469a",
    backgroundColor_mobile: "#006F469a",
    mainTitle: "Main Page",
    mainTitleImg: MoaazMainPage,
    video: MoaazVideo,
    overView: "Overview",
    collective: MoaazColelctive,
    
  },
  {
    id: 7,
    image: Work5,
    title: " lorem",
    category: ["Game", "Web Application"],
    website: " #",
    link: "#",
    date: "June, 2023",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    mainTitle: "Main Page",
    mainTitleImg: RollDiceMainPage,
    workingOnIt: false,
    newProject: false,
    backgroundColor: "#4D2CF19a",
    backgroundColor_mobile: "#4D2CF19a",
  },
  {
    id: 9,
    image: Work4,
    title: "Lorem",
    category: ["E-commerce", "Web Application", "UI/UX Design"],
    website: "#",
    link: "#",
    date: "June, 2023",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    class: "cairo",
    workingOnIt: true,
    newProject: false,
    backgroundColor: "#E19C007b",
    backgroundColor_mobile: "#E19C007b",
  },
  {
    id: 10,
    image: Work7,
    title: "Lorem",
    category: ["Web Application", "UI/UX Design"],
    website: "#",
    link: "",
    date: "June, 2023",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in. ",
    class: "Venues",
    workingOnIt: true,
    newProject: false,
    backgroundColor: "#DF8F9B99",
    backgroundColor_mobile: "#DF8F9B99",
  },
  {
    id: 11,
    image: Work10,
    title: "Lorem",
    category: ["Web Application", "UI/UX Design", "Web Design"],
    website: " #",
    link: "",
    date: "August, 2023",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula leo ut dui interdum, eget tincidunt ligula dictum. Vivamus commodo ipsum in enim fermentum, nec cursus justo gravida. Nam et arcu non justo blandit dapibus. Curabitur tincidunt quam ac dolor venenatis ultricies. Proin ut purus felis. Sed a ligula vel lacus interdum venenatis vel eu sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer malesuada orci in.",
    class: "kemet",
    mainTitle: "Main Page",
    mainTitleImg: KemetMainImg,
    workingOnIt: true,
    newProject: false,
    backgroundColor: "#E19C007b",
    backgroundColor_mobile: "#E19C007b",
  },

]

export default projectsData;