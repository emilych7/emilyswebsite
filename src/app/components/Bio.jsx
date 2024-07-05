import React from "react";

export default function Bio() {
    return (
        <div className="text-secondary sm:text-left h-full flex flex-col-reverse lg:flex-row justify-center sm:items-center">
            <h1 className="text-center lg:text-left animate-pulse sm:w-1/2 text-6xl pt-10 sm:pt-5 md:text-7xl sm:text-6xl font-bold">Emily Chrisann Hernandez</h1>
            <img className="h-2/5 sm:h-3/6" src="../emily.chrisann.svg"/>
        </div>
    )
}