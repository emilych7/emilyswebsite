import Welcome from "./components/Welcome";
import Experience from "./components/Experience";
import Education from "./components/Education";

export default function Home() {
  
  return (
    <main className="twinkling overflow-y-scroll no-scrollbar snap-mandatory snap-y px-10">
      <section className="snap-center h-screen">
        <Welcome />
      </section>
      <section className="snap-center h-screen">
        <Experience />
      </section>
      <section className="snap-center h-screen">
        <Education />
      </section>
    </main>
  );
}