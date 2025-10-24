import React from "react";
import Link from "next/link";
import Image from "next/image";
import Emily from "../../../public/Emily.png";

export default function Welcome() {

    return (
            <div className="flex flex-col lg:flex-row size-fit items-center justify-center text-white bg-black border border-1 border-secondary rounded-xl">
            <div className="max-w-xl flex flex-col items-center text-center justify-center pt-10 px-10 lg:p-10 ">
                <div className="flex flex-col space-y-5">
                <h1 className="text-md">Hi, I am </h1>
                <p className="animate-pulse text-secondary font-bold text-5xl xl:text-6xl"> Emily Chrisann Hernandez</p>
                <p className="text-md pb-5">and welcome to my digital portfolio. I enjoy building and improving user interfaces, leading with the user experience in mind, and learning something new every day.</p>
                </div>
                <div className="justify-center flex w-full flex-row space-x-5 px-5">
                    <Link href="/projects" className="btn w-1/2 border-none bg-accent text-white text-md shadow-sm transition ease-in-out delay-50 hover:bg-secondary hover:scale-110 duration-200 ...">Projects</Link>
                    <Link href="/contact"className="btn w-1/2  border-none bg-accent text-white text-md shadow-sm transition ease-in-out delay-50 hover:bg-secondary  hover:scale-110 duration-200 ...">Contact Me</Link>
                </div>
            </div>
            <div className="flex items-center justify-center"> 
                <Image 
                    height={400}
                    width={400}
                    src={Emily}
                    alt="selfie">
                </Image>
            </div>
            </div>
    )
}