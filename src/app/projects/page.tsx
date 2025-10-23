"use client";
import React from 'react';
import ValtProjectOverview from "../components/ValtProjectOverview";
import UCMProjectOverview from "../components/UCMProjectOverview";
import FigmaOverView from "../components/FigmaOverView";
import WebsiteProjectOverview from "../components/WebsiteProjectOverview";
import WebImageOne from "../../../public/WebsiteDemo.gif";
import ComputerLabsImageOne from "../../../public/ComputerLabs.png";
import ValtImageOne from "../../../public/OnBoardingView.svg";
import ValtImageTwo from "../../../public/LaunchDark.svg";
import ValtImageThree from "../../../public/HomeView.svg";
import ValtImageFour from "../../../public/PromptsView.svg";
import ValtImageFive from "../../../public/Launch.svg";
import ValtImageSix from "../../../public/ProfileView.svg";

export default function Projects() {

  return (
    <main className="overflow-y-scroll no-scrollbar snap-mandatory snap-y px-10  twinkling">
      <section className="snap-center h-screen flex items-center justify-center">
        <ValtProjectOverview
          title="Valt: A Safe Space for Your Deepest Thoughts"
          description="Valt is your private, digital vault. It's a space to write without fear. No leaks. No judgement. Just you and your thoughts. Create meaningful notes in Home. After a few drafts, Valt's AI will generate custom prompts that help you dive even deeper."
          GitHub="https://github.com/emilych7/Valt"
          Figma="https://www.figma.com/design/FGI0SCTzRy14UYWoKWPDGY/Valt?node-id=0-1&t=mrbxGlCgih8taODd-1"
          ImageOne={ValtImageOne}
          ImageTwo={ValtImageTwo}
          ImageThree={ValtImageThree}
          ImageFour={ValtImageFour}
          ImageFive={ValtImageFive}
          ImageSix={ValtImageSix}
          tools="*created with Swift for iOS and iPadOS"/>
      </section>
      <section className="snap-center h-screen flex items-center justify-center">
        <UCMProjectOverview
          title="it.ucmerced.edu"
          description="These university web pages were redesigned to present the most up-to-date information on computer labs with greater clarity and accessibility. The update introduced new UI components and a more thoughtful flow between pages to improve usability and public transparency."
          Figma="https://www.figma.com/design/vSeZ96gaOk0LRR9oRAWsW0/ComputerLabs?node-id=0-1&t=enQRvHqWqeNeC046-1"
          webpage1="https://it.ucmerced.edu/computer_labs"
          webpage2="https://it.ucmerced.edu/remotelab"
          webpage3="https://it.ucmerced.edu/request-lab-software"
          ImageOne={ComputerLabsImageOne}
          tools="*created using HTML, CSS, and JavaScript on Drupal"/>
      </section>
      <section className="snap-center h-screen flex items-center justify-center">
        <FigmaOverView
          title="Figma Prototype"
          description="I created a high-fidelity Figma prototype for a habit-tracking application. The design was refined throughout the semester through needfinding and evaluation methods to improve user understanding and interaction flow. This deliverable received an A and represented my full design and research process from concept to final prototype."
          Figma="https://www.figma.com/design/gdCeg0bDbQAt08JPQwAdfL/FinalPrototype?node-id=0-1&t=B4vWS4d7tQ2hIXVC-1"
          tools="*Figma only"/>
      </section>
      <section className="snap-center h-screen flex items-center justify-center">
        <WebsiteProjectOverview
          title="emilychrisann.com"
          description="This is my personal website that I use as an avenue to share information on my professional background and programming projects. This platform allows others to reach me via a contact form, GitHub, or LinkedIn."
          GitHub="https://github.com/emilych7/emilyswebsite"
          ImageOne={WebImageOne}
          tools="*created with React, Tailwind CSS, and DaisyUI for mobile/desktop web environments"/>
      </section>
    </main>
  )
}
