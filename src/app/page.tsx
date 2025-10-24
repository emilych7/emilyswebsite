import Welcome from "./components/Welcome";
import Experience from "./components/Experience";
import Education from "./components/Education";

export default function Home() {
  
  return (
    <div className="twinkling overflow-y-scroll no-scrollbar px-10">
      <section className="min-h-screen flex items-center justify-center snap-start py-16 md:py-24">
        <Welcome />
      </section>
      
      <section className="min-h-screen flex items-center justify-center snap-start py-16 md:py-24">
        <Education />
      </section>

      <section className="min-h-screen flex items-center justify-center snap-start py-16 md:py-24">
        <Experience />
      </section>
    </div>
  );
}