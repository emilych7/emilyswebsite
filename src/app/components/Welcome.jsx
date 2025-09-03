import React from "react";
import Link from "next/link";
import Image from "next/image";
import Emily from "../../../public/Emily.jpeg";

export default function Welcome() {

    return (
        <div className="flex size-full p-5 items-center justify-center text-white">
            <div className="flex flex-col md:flex-row justify-center items-center p-10 space-x-0 sm:space-x-5 space-y-4">
            <div className="text-center h-full max-w-lg justify-center items-center flex flex-col space-y-1">
                <h1 className="text-center pt-10 text-md font-semi-bold">Hi, I am </h1>
                <p className="animate-pulse text-secondary font-bold text-5xl xl:text-6xl"> Emily Chrisann Hernandez</p>
                <p className="text-center text-md pb-3">and welcome to my digital diary written as a full-stack software developer. I enjoy improving user experiences on web and mobile environments.</p>
                <div className="justify-center flex w-full flex-row space-x-5 px-10">
                    <Link href="/projects" className="btn w-1/2 md:w-1/3 border-none bg-accent text-white text-md shadow-sm transition ease-in-out delay-50 hover:bg-secondary hover:scale-110 duration-200 ...">Projects</Link>
                    <Link href="/contact"className="btn w-1/2 md:w-1/3 border-none bg-accent text-white text-md shadow-sm transition ease-in-out delay-50 hover:bg-secondary  hover:scale-110 duration-200 ...">Contact Me</Link>
                </div>
            </div>
            <div className="bg-center items-center flex justify-center bg-neutral"> 
                <Image 
                    className="rounded-xl border border-1 border-secondary"
                    height={250}
                    width={250} 
                    src={Emily}
                    alt="selfie">
                </Image>
            </div>
            </div>
        </div>
    )
}