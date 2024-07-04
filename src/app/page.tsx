import Welcome from "./components/Welcome";
import Bio from "./components/Bio";
import Resume from "./components/Resume";

export default function Home() {
  
  return (
    <main className="overflow-y-scroll no-scrollbar snap-mandatory snap-y h-screen px-10">
      <section className="snap-center h-screen">
        <Welcome />
      </section>
      <section className="snap-center h-screen">
        <Bio />
      </section>
      <section className="snap-center flex flex-col justify-center h-screen pt-12">
        <div className="pt-5"></div>
        <Resume />
      </section>
    </main>
  );
}