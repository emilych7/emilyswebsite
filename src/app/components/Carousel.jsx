"use client";
import React, { useState } from "react";
import imageOne from "../../../public/ChatBot.svg";
import imageTwo from "../../../public/NASASpaceApps.svg";
import imageThree from "../../../public/PersonalWebsite.svg";
import Image from "next/image";
import previousDisabled from "../../../public/previousDisabled.svg";
import previousEnabled from "../../../public/previousEnabled.svg"
import nextEnabled from "../../../public/nextEnabled.svg";
import nextDisabled from "../../../public/nextDisabled.svg";
import { motion } from "framer-motion";

export default function Carousel() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [transitionDirection, setTransitionDirection] = useState("next");

    const handleNext = () => {
        setTransitionDirection("next");
        setActiveIndex((prevIndex) => 
            prevIndex === 2 ? prevIndex : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setTransitionDirection("previous");
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? prevIndex : prevIndex - 1
        );
    };

    const texts = [
        {
            title: "Customer Service ChatBot using OpenAI",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut "
        },
        {
            title: "My Website",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            title: "NASA Space Apps",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
    ];

    const textVariants = {
        hidden: {
            opacity: 0,
            x: transitionDirection === "next" ? 100 : -100,
            transition: {duration: 0.5, ease: "easeInOut"},
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
        }
    };

    const textContainerVariant = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.1 },
        },
    };

    return (
        <div className="carouselContainer flex flex-row h-full w-full xl:w-3/4">
            <motion.div 
                className="contentContainer w-full xl:w-1/2 flex flex-col items-center justify-center"
                key={activeIndex} 
                variants={textContainerVariant} 
                initial="hidden"
                animate="visible">
                <div className="py-8 text-left w-full text-3xl font-bold md:text-4xl xl:text-5xl">
                    <motion.h1 variants={textVariants}>{texts[activeIndex].title}</motion.h1>
                </div>
                <div className="text-left xl:pt-3 text-md">
                    <motion.p variants={textVariants}>{texts[activeIndex].description}</motion.p>
                </div>
                <div className="controls w-full flex flex-row space-x-3">
                    <button 
                        className={activeIndex === 0 ? "disabled" : "previousContainer rounded-3xl"}
                        onClick={handlePrevious}>
                        <Image
                            alt="previous button"
                            src={activeIndex === 0 ? previousDisabled : previousEnabled}>
                        </Image>
                    </button>
                    <div className="w-36 flex justify-center items-center">
                        <button className="btn w-32 bg-accent border-none text-white shadow-sm transition ease-in-out delay-50 hover:bg-neutral hover:-translate-y-2 hover:scale-110 duration-200 ...">View Assets</button>
                    </div>
                    <button 
                        className={activeIndex === 2 ? "disabled" : "nextContainer rounded-3xl"}
                        onClick={handleNext}>
                        <Image
                            alt="next button"
                            src={activeIndex === 2 ? nextDisabled : nextEnabled}>
                        </Image>
                    </button>
                </div>
            </motion.div>
            <div className="imagesContainer flex w-1/2">
                <motion.div 
                    className="firstContainer"
                    animate={{
                        opacity: activeIndex === 0 ? 1 : activeIndex === 1 ? 0 : 0,
                        x: 
                            activeIndex === 0 
                            ? "0px" 
                            : activeIndex === 1 
                            ? "96px" 
                            : "96px",
                            scale: 
                                activeIndex === 0 
                                ? 1 
                                : activeIndex === 1 
                                ? 1.2 
                                : 1.2,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0,
                        ease: "easeInOut",
                }}>
                    <Image 
                        className="first" 
                        alt="first image" 
                        src={imageOne}
                        height="300"
                        width="300">
                    </Image>
                </motion.div>
                <motion.div 
                    className="secondContainer"
                    animate={{
                        opacity: activeIndex === 0 ? 0.66 : activeIndex === 1 ? 1 : 0,
                        x: 
                            activeIndex === 0 
                            ? "-96px" 
                            : activeIndex === 1 
                            ? "0px" 
                            : "96px",
                            scale: 
                                activeIndex === 0 
                                ? 0.8 
                                : activeIndex === 1 
                                ? 1 
                                : 1.2,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0,
                        ease: "easeInOut",
                }}>
                    <Image
                        className="second" 
                        alt="second image" 
                        src={imageTwo}
                        height="200"
                        width="200">
                    </Image>
                </motion.div>
                <motion.div 
                    className="thirdContainer"
                    animate={{
                        opacity: activeIndex === 0 ? 0.33 : activeIndex === 1 ? 0.66 : 1,
                        x: 
                            activeIndex === 0 
                            ? "-192px" 
                            : activeIndex === 1 
                            ? "-96px" 
                            : "0px",
                            scale: 
                                activeIndex === 0 
                                ? 0.6 
                                : activeIndex === 1 
                                ? 0.8
                                : 1,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0,
                        ease: "easeInOut",
                }}>
                    <Image 
                        className="third" 
                        alt="third image" 
                        src={imageThree}
                        height="200"
                        width="200">
                    </Image>
                </motion.div>
            </div>
        </div>
    )
}