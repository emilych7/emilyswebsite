"use client";
import Image from "next/image";
import Figma from "../../../public/figma.svg";

export default function ProjectOverview(props) {

    return (
        <div className="flex flex-col sm:flex-row size-fit items-center justify-center text-white space-x-2 space-y-5 bg-black border border-1 border-secondary rounded-xl">
            <div className="max-w-xl flex flex-col items-center justify-center space-y-5 p-4 sm:p-7 lg:p-10">
                <div className="text-left w-full text-3xl xl:text-5xl font-bold">
                    {props.title}
                </div>
                <div className="text-left xl:pt-3 text-md">
                    {props.description}
                </div>
                <div className="w-full flex sm:flex-row space-x-3">
                    <div className=" flex w-full flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5">
                    <a className="btn border-none bg-accent text-white text-md shadow-sm transition ease-in-out delay-50 hover:bg-secondary hover:scale-105 duration-200 ..." href={props.GitHub} target="_blank">
                        <p className=" ">View on GitHub</p>
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    viewBox="-4 -4 24 24"
                                    className="fill-current">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                    </a>
                    <a className="btn border-none bg-accent text-white text-md shadow-sm transition ease-in-out delay-50 hover:bg-secondary hover:scale-105 duration-200 ..."  href={props.Figma} target="_blank">
                        <p className=" ">View on Figma</p>
                            <Image
                                    src={Figma}
                                    width="40"
                                    height="40">
                            </Image>
                    </a>
                    </div>
                </div>
                <div className="w-full"><p style={{ fontStyle: 'italic' }}>*created with Swift for iOS and iPadOS</p></div>
            </div>
            <div className="flex max-w-3xl show-on-desktop p-3">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 px-10 py-5 place-content-center">
                <div class="grid gap-4">
                    <div>
                        <Image className="h-auto max-w-full rounded-lg " src={props.ImageOne} alt="Image One"/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src={props.ImageTwo} alt="Image Two"/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src={props.ImageThree} alt="Image Three"/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src={props.ImageFour} alt="Image Four"/>
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src={props.ImageFive} alt="Image Five"/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src={props.ImageSix} alt="Image Six"/>
                    </div>
                </div>
            </div>

                {/*
                    <Image 
                        className="first" 
                        alt="Valt Launchscreen" 
                        src={imageOne}
                        height="200"
                        width="200">
                    </Image>
                */}
            </div>
        </div>
    )
}