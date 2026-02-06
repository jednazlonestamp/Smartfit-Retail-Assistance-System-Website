import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Monitor, Box, Joystick } from "lucide-react";

const demoFeatures = [
  {
    icon: Monitor,
    title: "Browser Demo",
    description: "Full interactive experience in your browser",
  },
  {
    icon: Box,
    title: "Simulation View",
    description: "See the 3D digital twin in action",
  },
  {
    icon: Joystick,
    title: "Robot Movement",
    description: "Watch robotic guidance in real-time",
  },
];

const Demo = () => {
  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Live Demo</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            See It In <span className="text-gradient">Action</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience SmartFit's capabilities through our interactive demonstration.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-video rounded-2xl border-gradient overflow-hidden bg-card group cursor-pointer">
              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-background/50 group-hover:bg-background/30 transition-colors">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full bg-primary flex items-center justify-center glow-primary"
                >
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </motion.div>
              </div>
              
              {/* Grid background */}
              <div className="absolute inset-0 bg-grid opacity-30" />
              
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-destructive/80 text-destructive-foreground text-xs font-medium flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-destructive-foreground animate-pulse" />
                LIVE
              </div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl -z-10" />
          </motion.div>

          {/* Demo Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl font-semibold mb-6">
              Experience the Future of Retail
            </h3>
            
            {demoFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="glow-primary gap-2">
                <Play className="w-5 h-5" />
                Launch Demo
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <ExternalLink className="w-5 h-5" />
                Watch Video
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
