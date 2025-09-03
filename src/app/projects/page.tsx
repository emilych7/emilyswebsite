"use client";
import React from 'react';
import ProjectOverview from "../components/ProjectOverview";
import ProjectOverviewSingleImage from "../components/ProjectOverviewSingleImage";
import ValtImageOne from "../../../public/OnBoardingView.svg";
import WebImageOne from "../../../public/WebsiteDemo.gif";
import ValtImageTwo from "../../../public/LaunchDark.svg";
import ValtImageThree from "../../../public/HomeView.svg";
import ValtImageFour from "../../../public/PromptsView.svg";
import ValtImageFive from "../../../public/Launch.svg";
import ValtImageSix from "../../../public/ProfileView.svg";

export default function Projects() {

  return (
    <main className="overflow-y-scroll no-scrollbar snap-mandatory snap-y px-10 h-screen">
      <section className="snap-center h-screen flex items-center justify-center">
        <ProjectOverview
          title="Valt: A Safe Space for Your Deepest Thoughts"
          description="Valt is your private, digital vault. It's a space to write without fear. No leaks. No judgement. Just you and your thoughts. Create meaningful notes in Home. After a few drafts, Valt's AI will generate custom prompts that help you dive even deeper. Only you can access your Valt. Notes stay encrypted and out of sight. Want extra privacy? AI doesn't need to see it either."
          GitHub="https://github.com/emilych7/Valt"
          Figma="https://www.figma.com/design/FGI0SCTzRy14UYWoKWPDGY/Valt?node-id=0-1&t=mrbxGlCgih8taODd-1"
          ImageOne={ValtImageOne}
          ImageTwo={ValtImageTwo}
          ImageThree={ValtImageThree}
          ImageFour={ValtImageFour}
          ImageFive={ValtImageFive}
          ImageSix={ValtImageSix}/>
      </section>
      <section className="snap-center h-screen flex items-center justify-center">
        <ProjectOverviewSingleImage
          title="emilychrisann.com"
          description="This is my personal website that I use as an avenue to share information on my professional background and programming projects. This platform allows others to reach me via a contact form, GitHub, or LinkedIn."
          GitHub="https://github.com/emilych7/emilyswebsite"
          ImageOne={WebImageOne}/>
      </section>
    </main>
  )
}
