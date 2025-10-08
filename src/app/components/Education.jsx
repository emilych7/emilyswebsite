import React from "react";

export default function Education() {

    return (
        <div className="flex flex-col xl:flex-row-reverse h-fit p-1 justify-center text-white space-x-5">
            <div className="flex w-full xl:w-1/5 justify-start px-2">
            <div className="h-fit w-full border-b border-white">
                <h1 className="text-secondary size-full text-3xl font-bold border-white border-b-4 pt-12 p-3">Education</h1>
                </div>
                </div>
            <div className="flex flex-col max-w-5xl overflow-y-scroll no-scrollbar py-10 px-5s">
                <div className="w-full pb-2">
                    <div className="flex flex-col p-4 rounded-xl text-left transition ease-in-out duration-150 text-white hover:bg-white hover:text-black">
                        <h2 className="font-bold text-xl xl:text-2xl">Master of Science in Computer Science</h2>
                        <h4 className="font-semi-bold text-lg py-1">Georgia Institute of Technology</h4>
                        <p className="text-sm py-2">Specialization in Human-Computer Interaction</p>
                        <div className="flex flex-col xs:flex-row place-content-between">
                            <div className="grid justify-items-center rounded-xl border-secondary border-2 border-dotted py-1 px-3">
                            <h5 className="font-semi-bold text-md">Fall 2024 to Present</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full pb-2">
                    <div className="flex flex-col p-4 rounded-xl text-left transition ease-in-out duration-150 text-white hover:bg-white hover:text-black">
                        <h2 className="font-bold text-xl xl:text-2xl">Bachelor of Arts in Psychology</h2>
                        <h4 className="font-semi-bold text-lg py-1">University of California, Davis</h4>
                        <p className="text-sm py-2">Relevant coursework in Calculus, Research Methods, Developmental Psychobiology, Cognitive Neuroscience</p>
                        <div className="flex flex-col xs:flex-row place-content-between">
                            <div className="grid justify-items-center rounded-xl border-secondary border-2 border-solid py-1 px-3">
                            <h5 className="font-semi-bold text-md">Fall 2019 to Spring 2022</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full pb-2">
                    <div className="flex flex-col p-4 rounded-xl text-left transition ease-in-out duration-150 text-white hover:bg-white hover:text-black">
                        <h2 className="font-bold text-xl xl:text-2xl">Supplemental Coursework</h2>
                        <h4 className="font-semi-bold text-lg py-1">Merced Community College</h4>
                        <p className="text-sm py-2">Computer Info Systems, Programming Concepts (Python), App Development and Programming (Python), Advanced C++ Programming, Linear Algebra, Statistics</p>
                        <div className="flex flex-col xs:flex-row place-content-between">
                            <div className="grid justify-items-center rounded-xl border-secondary border-2 border-solid py-1 px-3">
                            <h5 className="font-semi-bold text-md">Fall 2021 to Fall 2023</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}