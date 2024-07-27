import React from "react";

export default function Education() {

    return (
        <div className="flex flex-col xl:flex-row-reverse size-full py-12 justify-center items-center text-white space-x-5">
            <div className="flex w-full xl:w-1/5 justify-center">
                <h1 className="text-secondary text-3xl xl:text-5xl font-bold border-white size-full text-center border-b-4 p-3">Education</h1></div>
            <div className="flex flex-col w-full xl:w-3/5 h-4/6 xl:h-5/6 2xl:justify-center overflow-y-scroll no-scrollbar px-3 xl:p-11">
                <div className="py-3 sm:py-2">
                    <div className="flex flex-col p-4 rounded-xl text-left transition ease-in-out delay-50 duration-200 text-white hover:scale-105 hover:bg-white hover:text-black">
                        <h2 className="font-bold text-2xl xl:text-3xl">Master of Science in Computer Science</h2>
                        <h4 className="font-semi-bold text-lg py-1">Georgia Institute of Technology</h4>
                        <p className="text-sm">Specialization in Interactive Intelligence</p>
                        <div className="flex flex-wrap sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-3">
                            <div className="flex flex-row font-semi-bold text-sm justify-center space-x-2 bg-success rounded-full shadow-md px-4 py-1 text-white">
                                <h2>Fall 2024 - Spring 2026</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-3 sm:py-2 ">
                    <div className="flex flex-col p-4 rounded-xl text-left text-white transition ease-in-out delay-50 duration-200 hover:scale-105 hover:bg-white hover:text-black">
                        <h2 className="font-bold text-2xl xl:text-3xl">Bachelor of Arts in Psychology</h2>
                        <h4 className="font-semi-bold text-lg py-1">University of California, Davis</h4>
                        <p className="text-sm">Relevant coursework in Calculus, Research Methods, Developmental Psychobiology, Cognitive Neuroscience</p>
                        <div className="flex flex-row space-x-4 pt-3">
                            <div className="flex flex-row text-sm justify-center space-x-1 bg-success rounded-full shadow-md px-4 py-1 text-white">
                                <h2>Fall 2019 - Spring 2022</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-3 sm:py-2">
                    <div className="flex flex-col p-4 rounded-xl text-left text-white transition ease-in-out delay-50 duration-200 hover:scale-105 hover:bg-white hover:text-black">
                        <h2 className="font-bold text-2xl xl:text-3xl">Supplemental Coursework</h2>
                        <h4 className="font-semi-bold text-lg py-1">Merced College</h4>
                        <p className="text-sm">Computer Info Systems, Programming Concepts (Python), App Development and Programming (Python), Advanced C++ Programming, Linear Algebra, Statistics</p>
                        <div className="flex flex-row space-x-4 pt-3">
                            <div className="flex flex-row text-sm justify-center space-x-1 bg-success rounded-full shadow-md px-4 py-1 text-white">
                                <h2>Fall 2021 - Fall 2023</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}