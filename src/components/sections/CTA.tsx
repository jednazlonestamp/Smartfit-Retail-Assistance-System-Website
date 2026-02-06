import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Github, Mail, ArrowRight } from "lucide-react";

const handleDemoClick = () => {
  window.open("#demo", "_self"); // or real demo URL
};

const handleGithubClick = () => {
  window.open(
    "https://github.com/LoneStamp/Smartfit-Retail-Assistance-System.git",
    "_blank"
  );
};

const handleContactClick = () => {
  window.open("mailto:jednazlonestamp9@gmail.com", "_blank");
};

const CTA = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-primary font-medium">Support SmartFit</span>
          </motion.div>

          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform
            <br />
            <span className="text-gradient">Retail Shopping?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Join us in revolutionizing the retail experience with AI-powered assistance and robotics.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="glow-primary gap-2 px-8 h-14 text-lg font-semibold group" onClick={handleDemoClick}>
              <Play className="w-5 h-5" />
              View Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 px-8 h-14 text-lg border-border hover:bg-secondary" onClick={handleGithubClick}>
              <Github className="w-5 h-5" />
              GitHub Repo
            </Button>
            <Button size="lg" variant="outline" className="gap-2 px-8 h-14 text-lg border-border hover:bg-secondary" onClick={handleContactClick}>
              <Mail className="w-5 h-5" />
              Contact Founder
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <span className="text-4xl font-bold text-gradient">AI</span>
              <p className="text-muted-foreground text-sm mt-1">Powered</p>
            </div>
            <div>
              <span className="text-4xl font-bold text-gradient">3D</span>
              <p className="text-muted-foreground text-sm mt-1">Digital Twin</p>
            </div>
            <div>
              <span className="text-4xl font-bold text-gradient">24/7</span>
              <p className="text-muted-foreground text-sm mt-1">Assistance</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
