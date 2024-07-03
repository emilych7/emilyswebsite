import Welcome from "./components/Welcome";
import Bio from "./components/Bio";


export default function Home() {
  
  return (
    <main className="overflow-y-scroll no-scrollbar snap-mandatory snap-y h-screen px-10">
      <section className="snap-center h-screen">
        <Welcome />
      </section>
      <section className="snap-center h-screen">
        <Bio />
      </section>
    </main>
  );
}