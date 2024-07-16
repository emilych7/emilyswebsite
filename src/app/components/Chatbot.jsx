import React from "react";

export default function ChatBot() {

    return (
        <div className="bg-error flex flex-row justify-center items-center h-screen w-full text-secondary" >
            <div className="w-3/4 bg-white space-y-8">
                <h1 className="font-semi-bold text-5xl sm:text-7xl">ChatBot Component</h1>
                <p>The goal of this project was to create a button to summon a customer service chatbot. This chatbot uses OpenAI's API and ChatGPT-3.5-Turbo model.</p>
            </div>
            <div>
                <img className="h-1/2"/>
            </div>
        </div>
    )
}