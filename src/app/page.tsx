import Welcome from "./components/Welcome";
import Experience from "./components/Experience";
import Education from "./components/Education";

export default function Home() {
  
  return (
    <div className="twinkling overflow-y-scroll no-scrollbar snap-mandatory snap-y px-10">
      <section className="h-screen snap-center flex items-center justify-center">
        <Welcome />
      </section>
      
      <section className="h-screen snap-center flex items-center justify-center">
        <Education />
      </section>

      <section className="h-screen snap-center flex items-center justify-center">
        <Experience />
      </section>
    </div>
  );
}