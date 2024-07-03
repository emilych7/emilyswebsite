"use client";
import React from 'react';
import Carousel from "../components/Carousel";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = React.useState(1);

    function nextSlide() {
        setCurrentSlide(prevSlide => prevSlide + 1)
    }

    function previousSlide() {
        if (currentSlide == 1) {
            setCurrentSlide(prevSlide => 3)
        } else {
        setCurrentSlide(prevSlide => prevSlide - 1)
        }
    }

  return (
    <main className="h-screen p-10">
      <div className="flex flex-row-reverse">
        <div className='flex flex-col text-center p-10 space-y-8'>
          <h1 className="text-6xl font-bold">My Projects </h1>
          <p className="text-1xl">I build UI's that are thoughtful of the user experience. It is important to me that the work I produce is not only aesthetically pleasing, it is also fully functional for a multitude of users. This encompasses creating screen-accessible components all the way to mobile environments.
          <br></br>
          </p>
        </div>
        <div className='w-2/4'>
          <div className="z-10 relative flex top-1/2 -translate-y-1/2 justify-between">
              <a href={"#slide" + currentSlide} className="relative -left-5 btn btn-circle" onClick={previousSlide}>❮</a>
              <a href={"#slide" + currentSlide} className="relative -right-5 btn btn-circle" onClick={nextSlide}>❯</a>
          </div>
          <Carousel />
        </div>
      </div>
    </main>
  )
}
