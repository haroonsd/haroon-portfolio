/*
 * DESIGN: Bold Kinetic Modernism
 * Main page: Assembles all portfolio sections
 * Dark hero → Light about → Light-gray experience → Dark clients → Light work → Light-gray impact → Dark skills → Light contact → Dark footer
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Clients from "@/components/Clients";
import Work from "@/components/Work";
import Impact from "@/components/Impact";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Clients />
      <Work />
      <Impact />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
