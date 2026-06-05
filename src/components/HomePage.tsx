import Hero from "@/components/Hero";
import Memoriam from "@/components/Memoriam";
import Teaching from "@/components/Teaching";
import Books from "@/components/Books";
import Quotes from "@/components/Quotes";
import About from "@/components/About";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Memoriam />
      <Teaching />
      <Books />
      <Quotes />
      <About />
    </>
  );
}
