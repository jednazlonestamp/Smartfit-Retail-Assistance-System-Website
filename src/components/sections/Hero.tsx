import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Github, Bot, Sparkles } from "lucide-react";

const handleDemoClick = () => {
  window.open("#demo", "_self"); // or real demo URL
};

const handleGithubClick = () => {
  window.open(
    "https://github.com/LoneStamp/Smartfit-Retail-Assistance-System.git",
    "_blank"
  );
};


const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-radial" />
      
      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">AI-Powered Retail Innovation</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          >
            <span className="text-foreground">SmartFit Retail</span>
            <br />
            <span className="text-gradient">Assistance Robotics System</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            AI-powered retail assistant using computer vision and simulated robotics to help customers find perfectly fitting clothing and navigate stores.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="glow-primary gap-2 px-8 h-14 text-lg font-semibold" onClick={handleDemoClick}>
              <Play className="w-5 h-5"/>
              View Demo
            </Button>
            <Button size="lg" variant="outline" className="gap-2 px-8 h-14 text-lg border-border hover:bg-secondary" onClick={handleGithubClick}>
              <Github className="w-5 h-5" />
              GitHub
            </Button>
          </motion.div>

          {/* Robot illustration placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 relative"
          >
            <div className="relative mx-auto w-full max-w-4xl aspect-video rounded-2xl border-gradient overflow-hidden bg-card/50 backdrop-blur">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary">
                    <Bot className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <p className="text-muted-foreground">Interactive Demo Preview</p>
                </motion.div>
              </div>
              {/* Grid overlay */}
              <div className="absolute inset-0 bg-grid opacity-20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
