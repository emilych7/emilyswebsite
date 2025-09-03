import Welcome from "./components/Welcome";
import Experience from "./components/Experience";
import Education from "./components/Education";

export default function Home() {
  
  return (
    <main className="twinkling overflow-y-scroll no-scrollbar snap-y px-5">
      <section className="h-screen">
        <Welcome />
      </section>
      <section className="h-screen px-5">
        <Experience />
      </section>
      <section className="h-screen px-5">
        <Education />
      </section>
    </main>
  );
}