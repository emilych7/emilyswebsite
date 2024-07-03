import React from "react";
import Resume from "./Resume";

export default function Bio() {
    return (
            <div className="text-secondary flex h-screen flex-row">
                <div className="text-center w-2/5 flex flex-col justify-center">
                    <h4 className="text-md pb-6">I am</h4>
                    <h1 className="animate-pulse text-6xl font-bold">Emily Chrisann Hernandez</h1>
                    <img src="../SelfieandCode.png"/>
                </div>
                <div className="w-3/5 px-6 py-20">
                    <Resume />
                </div>
            </div>
    )
}