import React from "react";

export default function Bio() {
    return (
        <div className="text-secondary text-center sm:text-left h-full pt-10 flex flex-col sm:flex-row justify-center sm:items-center">
            <h1 className="animate-pulse sm:w-1/2 text-5xl sm:pt-5 md:text-7xl sm:text-8xl font-bold">Emily Chrisann Hernandez</h1>
            <img className="pt-7 h-1/2 sm:h-4/6" src="../emily.chrisann.svg"/>
        </div>
    )
}