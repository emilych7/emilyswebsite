"use client";
import React from 'react';
import ProjectOverview from "../components/ProjectOverview";
import Carousel from "../components/Carousel";
import ComingSoon from '../components/ComingSoon';

export default function Projects() {

  return (
    <main className="overflow-y-scroll no-scrollbar snap-mandatory snap-y px-10 h-screen">
      <section className="snap-center h-screen">
        <ProjectOverview />
      </section>
      <section className="snap-center h-screen">
        <ComingSoon/>
      </section>
    </main>
  )
}
