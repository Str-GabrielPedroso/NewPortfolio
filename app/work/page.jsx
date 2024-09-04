"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { BsArrowUpRightCircleFill, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

//Components
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "front end",
        title: "Feed Project",
        description: "Static Feed Project - This project is a static feed built with React, designed to practice components and their accessories. The feed displays a post with user information, timestamps, and content, showing the use of reusable components and state management to create a responsive and interactive user interface.",
        stack: [
            { icon: <FaReact /> },
            { icon: <FaJs /> },
            { icon: <FaCss3 /> },
        ],
        image: "/assets/thumb01.png",
        live: "hhttps://feed-project-six.vercel.app",
        github: "https://github.com/Str-GabrielPedroso/Feed-Project",
    },
    {
        num: "02",
        category: "full stack",
        title: "Poke API",
        description: "Pokédex Project - This project offers a user-friendly interface to view data such as types and evolutions of each Pokémon. Developed using the PokeAPI, it integrates both front-end and back-end technologies with optimized loading performance.",
        stack: [
            { icon: <FaHtml5 /> },
            { icon: <FaCss3 /> },
            { icon: <FaJs /> },
        ],
        image: "/assets/thumb02.png",
        live: "https://str-gabrielpedroso.github.io/PokeAPI/",
        github: "https://github.com/Str-GabrielPedroso/PokeAPI",
    },
    {
        num: "03",
        category: "full stack",
        title: "Portfolio",
        description: "New Portfolio Project - This updated portfolio is built using React, Next.js, and Tailwind CSS, featuring a clean and responsive design. It provides a seamless user experience across different devices, showcasing my latest projects and skills in a modern and interactive way. The intuitive layout and fast loading times highlight my proficiency in front-end development and my commitment to creating user-friendly web applications.",
        stack: [
            { icon: <SiTailwindcss /> },
            { icon: <SiNextdotjs /> },
            { icon: <FaReact /> },
        ],
        image: "/assets/thumb03.png",
        live: "https://new-portfolio-nine-lyart.vercel.app",
        github: "https://github.com/Str-GabrielPedroso/NewPortfolio",
    },
    {
        num: "04",
        category: "front end",
        title: "My First Portfolio",
        description: "First Portfolio Project - This was my initial attempt at creating a personal portfolio. Built using basic HTML, CSS, and JavaScript, it showcased my early projects and skills. Although not responsive, this project served as a valuable learning experience, helping me understand the fundamentals of web development and layout design.",
        stack: [
            { icon: <FaHtml5 /> },
            { icon: <FaCss3 /> },
            { icon: <FaJs /> },
        ],
        image: "/assets/thumb04.png",
        live: "https://str-gabrielpedroso.github.io/SitePortfolio/",
        github: "https://github.com/Str-GabrielPedroso/SitePortfolio",
    },
    {
        num: "05",
        category: "back end",
        title: "Tic Tac Toe",
        description: "Tic Tac Toe Project - This classic Tic Tac Toe game is built using JavaScript, along with basic HTML and CSS. It was developed to practice logic and DOM manipulation in JavaScript. The game allows players to enter their names, features CSS effects to highlight the winner or a tie, and provides an interactive gameplay experience. Although not responsive.",
        stack: [
            { icon: <FaHtml5 /> },
            { icon: <FaCss3 /> },
            { icon: <FaJs /> },
        ],
        image: "/assets/thumb05.png",
        live: "https://str-gabrielpedroso.github.io/TIC-TAC-TOE/",
        github: "https://github.com/Str-GabrielPedroso/TIC-TAC-TOE",
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        //get current slide index
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[75vh] flex flex-col justify-center py-5 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div
                        className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none"
                    >
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div
                                className=" text-7xl leading-none font-extrabold text-accent"
                            >
                                {project.num}
                            </div>
                            <h2
                                className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize"
                            >
                                {project.category} project
                            </h2>
                            <p>{project.description}</p>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-3xl text-accent transition-all duration-300">
                                            {item.icon}
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex flex-row gap-4 items-center pb-6">
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRightCircleFill className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="h-[250px] xl:h-[420px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide
                                        key={index}
                                        className="w-full"
                                    >
                                        <div className="h-[250px] xl:h-[420px] relative group flex justify-start items-start bg-pink-50/20">
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            <div className="relative w-full h-full">
                                                <Image src={project.image} fill className="object-cover" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 xl:right-3 bottom-3 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] xl:w-[44px] xl:h-[44px] w-[32px] h-[32px] flex justify-center items-center transition-all rounded-full"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Work