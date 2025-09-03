import Welcome from "./components/Welcome";
import Experience from "./components/Experience";
import Education from "./components/Education";

export default function Home() {
  
  return (
    <div className="twinkling overflow-y-scroll no-scrollbar">
      <section className="h-screen">
        <Welcome />
      </section>
      
      <section className="h-screen px-5">
        <Education />
      </section>

      <section className="h-fit px-5">
        <Experience />
      </section>
    </div>
  );
}