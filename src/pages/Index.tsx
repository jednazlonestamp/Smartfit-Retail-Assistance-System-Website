import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import HowItWorks from "@/components/sections/HowItWorks";
import Demo from "@/components/sections/Demo";
import TechStack from "@/components/sections/TechStack";
import Business from "@/components/sections/Business";
import Team from "@/components/sections/Team";
import Roadmap from "@/components/sections/Roadmap";
import CTA from "@/components/sections/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Demo />
        <TechStack />
        <Business />
        <Team />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
