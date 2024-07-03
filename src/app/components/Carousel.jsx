"use client";
import React from "react";
import Card from "./Card";

export default function Carousel(props) {

    return (
        <div className="carousel rounded-box shadow-xl w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <Card 
                    cardTitle="ChatBot Component"
                    cardText="This project is powered by OpenAI's GPT-3.5-Turbo model."
                    imageName="ChatBot.svg"
                    link="https://github.com/Operating-Owls/Chatbot-Component"/>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <Card
                    cardTitle="Ocean Gardens"
                    cardText="This project was created for NASA's Space Apps Challenge."/>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <Card
                    cardTitle="Social Media Bot" 
                    cardText="This project is a platform for the everyday user to upload content to multiple media avenues at once. "/>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <Card
                    cardTitle="Discord Clone"
                    cardText="This project mimicks Discord with a UI for messaging across different servers."/>
            </div>
        </div>
    )
}