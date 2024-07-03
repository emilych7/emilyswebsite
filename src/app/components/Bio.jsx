import React from "react";
import Resume from "./Resume";

export default function Bio() {
    return (
            <div className="text-secondary flex h-screen flex-col py-10 sm:flex-row">
                <div className="text-center w-full sm:w-2/5 sm:p-0 flex flex-col items-center justify-center">
                    <h4 className="text-md pt-10 sm:pt-1 pb-3 sm:pb-6">I am</h4>
                    <h1 className="animate-pulse text-5xl sm:text-6xl font-bold">Emily Chrisann Hernandez</h1>
                    <img className=" w-5/6"src="../SelfieandCode.png"/>
                </div>
                <div className="w-full h-1/2 sm:h-screen sm:w-3/5 sm:px-6 pt-8 sm:py-8">
                    <Resume />
                </div>
            </div>
    )
}