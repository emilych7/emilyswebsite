import Welcome from "./components/Welcome";
import Experience from "./components/Experience";
import Education from "./components/Education";

export default function Home() {
  
  return (
    <div className="twinkling overflow-y-scroll no-scrollbar snap-mandatory snap-y">
      <section className="snap-center snap-normal h-screen">
        <Welcome />
      </section>
      
      <section className="snap-center snap-normal h-screen px-5">
        <Education />
      </section>

      <section className="snap-center snap-normal h-fit px-5">
        <Experience />
      </section>
    </div>
  );
}