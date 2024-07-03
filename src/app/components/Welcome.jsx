import React from "react";
import Link from "next/link";

export default function Welcome() {

    return (
        <div className="flex flex-col h-screen w-full sm:w-2/3 sm:px-10 justify-center text-secondary pt-10">
            <h1 className="transition hover:scale-110 hover:translate-x-7 text-7xl font-semi-bold py-10 text-left duration-200">Hello! 🌷</h1>
            <p className="text-lg text-left pb-10">Welcome to my digital diary written as a full-stack software developer. I enjoy crafting seamless user experiences on web and mobile environments. Take a look to learn more about me and what I can do for you.</p>
            <div className="flex sm:justify-left flex-col sm:flex-row space-y-7 sm:space-y-0 sm:space-x-6 pb-10">
                <Link href="/projects" className="btn btn-circle w-full sm:w-60 border-none bg-success text-white shadow-sm transition ease-in-out delay-50 hover:bg-neutral hover:-translate-y-2 hover:scale-110 duration-200 ...">See My Projects</Link>
                <Link href="/contact"className="btn btn-circle w-full sm:w-60 border-none bg-success text-white shadow-sm transition ease-in-out delay-50 hover:bg-neutral hover:-translate-y-2 hover:scale-110 duration-200 ...">Contact Me</Link>
            </div>
        </div>
    )
}