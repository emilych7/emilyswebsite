import React from "react";
import Link from "next/link";

export default function Welcome() {

    return (
        <div className="flex flex-col sm:flex-row space-x-5 size-full py-11 sm:p-12 items-center justify-center text-white">
            <div className="h-full w-full w-1/2 xl:w-2/5 justify-center flex flex-col space-y-4">
                <h1 className="text-xl sm:text-2xl font-semi-bold text-left">Hi, I am </h1>
                <p className="animate-pulse text-secondary transition hover:scale-110 hover:translate-x-6 font-bold text-5xl md:text-6xl xl:text-7xl 2xl:text-7xl  duration-200"> Emily Chrisann Hernandez</p>
                <p className="sm:w-4/5 text-lg sm:text-xl text-left sm:pb-4">Welcome to my digital diary written as a full-stack software developer. I enjoy crafting seamless user experiences on web and mobile environments.</p>
                <div className="flex justify-left flex-col space-y-5 xl:flex-row xl:space-y-0 xl:space-x-6 pb-10">
                    <Link href="/projects" className="btn sm:w-3/4 xl:w-52 border-none bg-accent text-white shadow-sm transition ease-in-out delay-50 hover:bg-neutral hover:-translate-y-2 hover:scale-110 duration-200 ...">See My Projects</Link>
                    <Link href="/contact"className="btn sm:w-3/4 xl:w-52 border-none bg-accent text-white shadow-sm transition ease-in-out delay-50 hover:bg-neutral hover:-translate-y-2 hover:scale-110 duration-200 ...">Contact Me</Link>
                </div>
            </div>
            <div className="show-on-desktop h-full w-2/3 xl:w-1/5 items-center flex justify-center"> 
                <img className="bg-accent border border-white" src="./Emily.png"/>
            </div>
        </div>
    )
}