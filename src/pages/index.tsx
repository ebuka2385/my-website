import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Page-wide ambient colour so the glass surfaces have something to refract */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="aurora-blob animate-drift-slow left-[-10%] top-[20%] h-[34rem] w-[34rem] bg-white/[0.04]" />
        <div className="aurora-blob animate-drift right-[-8%] top-[55%] h-[38rem] w-[38rem] bg-white/[0.03]" />
      </div>

      <div className="relative z-10">
      <Navigation />
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      </div>
    </div>
  );
};

export default Index;
