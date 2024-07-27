import React from "react";
import Link from "next/link";

export default function Welcome() {

    return (
        <div className="flex flex-col sm:flex-row size-full py-8 xl:py-11 items-center justify-center text-white">
            <div className="text-center h-full w-full p-1 md:p-10 xl:p-12 lg:w-1/2 xl:w-2/5 justify-center items-center flex flex-col space-y-4">
                <h1 className="text-center text-xl sm:text-2xl font-semi-bold text-left">Hi, I am </h1>
                <p className="animate-pulse text-secondary font-bold text-5xl md:text-6xl xl:text-7xl 2xl:text-7xl"> Emily Chrisann Hernandez</p>
                <p className="text-center text-lg sm:text-xl pb-3">and welcome to my digital diary written as a full-stack software developer. I enjoy crafting seamless user experiences on web and mobile environments.</p>
                <div className="justify-center flex w-full flex-row space-x-6">
                    <Link href="/projects" className="btn w-1/2 md:w-1/3 border-none bg-accent text-white shadow-sm transition ease-in-out delay-50 hover:bg-neutral hover:-translate-y-2 hover:scale-110 duration-200 ...">My Projects</Link>
                    <Link href="/contact"className="btn w-1/2 md:w-1/3 border-none bg-accent text-white shadow-sm transition ease-in-out delay-50 hover:bg-neutral hover:-translate-y-2 hover:scale-110 duration-200 ...">Contact Me</Link>
                </div>
            </div>
            <div className="show-on-desktop h-full w-2/5 xl:w-1/4 items-center flex justify-center"> 
                <img className="bg-accent border border-white" src="./Emily.png"/>
            </div>
        </div>
    )
}