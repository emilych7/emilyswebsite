"use client";
import React from 'react';
import ProjectOverview from "../components/ProjectOverview";
import ChatBot from "../components/Chatbot";
import ComingSoon from '../components/ComingSoon';

export default function Projects() {

  return (
    <main className="overflow-y-scroll no-scrollbar snap-mandatory snap-y h-screen px-10">
      <section className="snap-center h-screen">
        <ProjectOverview />
      </section>
      {/*
      <section className="snap-center h-screen">
        <ChatBot />
      </section>
      */}
      <section className="snap-center h-screen">
        <ComingSoon/>
      </section>
    </main>
  )
}
