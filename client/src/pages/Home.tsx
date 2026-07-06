import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Work from "@/components/Work";
import SocialVideos from "@/components/SocialVideos";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Contact from "@/components/Contact";
import CursorDot from "@/components/CursorDot";

export default function Home() {
  return (
    <div className="min-h-screen">
      <CursorDot />
      <Navbar />
      <Hero />
      <Brands />
      <Work />
      <SocialVideos />
      <Skills />
      <TechStack />
      <About />
      <Contact />
    </div>
  );
}
