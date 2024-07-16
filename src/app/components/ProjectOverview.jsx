import React from "react";

export default function ProjectOverview() {

    return (
        <div className="h-screen w-full justify-center items-center flex text-secondary">
            <div className="w-2/3 space-y-8 p-3">
                <h1 className="font-semi-bold text-5xl sm:text-7xl">Projects</h1>
                <p className="text-center sm:text-left">Take a look on this site for a general overview of each project or<a className="font-bold" target="_blank" href="https://github.com/emilych7"> visit my GitHub</a> to check out the code :)</p>
                <p className="pt-10 sm:pt-10 sm:text-right text-center animate-bounce text-7xl">👇🏻</p>
            </div>
        </div>
    )
}