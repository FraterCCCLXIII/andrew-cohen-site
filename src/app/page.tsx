import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Teaching from "@/components/Teaching";
import Books from "@/components/Books";
import Quotes from "@/components/Quotes";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Teaching />
        <Books />
        <Quotes />
        <About />
      </main>
      <Footer />
    </>
  );
}
