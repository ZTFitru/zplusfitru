import snackable from '@/public/images/snackableTh.png';
import harryPotter from '@/public/images/harryPotter.png';
import dang from '@/public/images/Dangol.png';
import chess from '@/public/images/chessWith.png';
import rockPaper from '@/public/images/RockPaper.png';
import lennon from '@/public/images/Lennon.png';
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";


export const projects = [
    {
        id : 1,
        title: "Snackable Thoughts",
        description: "Blog application with MongoDB.",
        projImg: snackable,
        alt: 'Snackable Thoughts',
        link: "https://snackable-thoughts.vercel.app/",
        techStack: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
        github: ''
    },
    {
        id : 2,
        title: "Harry Potter",
        description: "Harry Potter database.",
        projImg: harryPotter,
        alt: 'Harry Potter',
        link: "https://harrypotter-red.vercel.app/#",
        techStack: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
        github: ''
    },
    // {
    //     id : 3,
    //     title: "Popcorn Score",
    //     description: "An application that would allow the user to see all the movies when they visit the page.",
    //     projImg: {popCorn},
    //     link: "https://drif7er.github.io/popcorn-score/#/",
    //     techStack: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
    //     github: ''
    // },
    {
        id : 4,
        title : "Chess with Fren-EMIES",
        description : "Play chess with Fren-EMIES.",
        projImg : chess,
        alt: 'Chess with Fren-EMIES',
        link : "https://github.com/ZTFitru/users-fe-app",
        techStack: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
        github: ''
    },
    {
        id : 5,
        title: "Dangol-Weather",
        description: "Local weather along with an applicable Boomhauer quote.",
        projImg: dang,
        alt: 'Dangol-Weather',
        link: "https://dangol-weather.vercel.app/",
        techStack: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
        github: ''
    },
    {
        id : 6,
        title: "Rock-Paper-Scissors",
        description: "Rock, Paper and Scissors or a difficult version inspired by SpongeBob.",
        projImg: rockPaper,
        alt: 'Rock-Paper-Scissors',
        link: "https://ztfitru.github.io/Rock-Paper-Scissors/",
        techStack: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
        github: ''
    },
    {
        id : 7,
        title: "Lennon-Lawn",
        description: "A vibrant and user-friendly lawn service application",
        projImg: lennon,
        alt: 'Lennon-Lawn-Care',
        link: "https://lennon-lawn-care.vercel.app/",
        techStack: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
        github: ''
    }
]



export const techTools = [
    {
        name: "VS Code",
        icon: <BiLogoVisualStudio />
    },
    {
        name: "GitHub",
        icon: <FaGithub />
    },
    {
        name: "Postman",
        icon: <SiPostman />
    }
];

export const techStack = [
    {
            name: "HTML5",
            icon: <FaHtml5 />
        },
        {
            name: "CSS3",
            icon: <FaCss3Alt />
        },
        {
            name: "Tailwind",
            icon: <RiTailwindCssFill />
        },
        {
            name: "JS",
            icon: <IoLogoJavascript />
        },
        {
            name: "React",
            icon: <FaReact />
        },
        {
            name: "TS",
            icon: <SiTypescript />  
        },
        {
            name: "Next",
            icon: <RiNextjsFill />
        }
];

export const backend = [
    {
        name: "Node.js",
        icon: <FaNodeJs />
    },
    {
        name: "Express",
        icon: <SiExpress />
    },
    {
        name: "Mongo",
        icon: <DiMongodb />
    },
    {
        name: "Next.js",
        icon: <RiNextjsFill />
    }
];