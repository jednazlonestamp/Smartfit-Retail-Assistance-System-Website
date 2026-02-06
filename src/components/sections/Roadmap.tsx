import { motion } from "framer-motion";
import { Rocket, Users, Cpu, Network } from "lucide-react";

const phases = [
  {
    icon: Rocket,
    phase: "MVP",
    title: "Core AI",
    timeline: "Q1 2025",
    features: ["Body scanning", "Size matching", "Basic navigation", "Demo ready"],
    status: "current",
  },
  {
    icon: Users,
    phase: "Beta",
    title: "Multi-Store",
    timeline: "Q2 2025",
    features: ["Multiple locations", "User accounts", "Analytics v1", "Feedback system"],
    status: "upcoming",
  },
  {
    icon: Cpu,
    phase: "v1.0",
    title: "Hardware Integration",
    timeline: "Q3 2025",
    features: ["Physical sensors", "IoT connectivity", "Real-time sync", "Staff dashboard"],
    status: "planned",
  },
  {
    icon: Network,
    phase: "v2.0",
    title: "Fleet Management",
    timeline: "Q4 2025",
    features: ["Multi-robot support", "AI optimization", "Predictive analytics", "Enterprise API"],
    status: "planned",
  },
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Roadmap</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Our <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From MVP to enterprise-ready platform, here's our planned evolution.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary/50 -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="hidden lg:flex absolute -top-12 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-background bg-primary items-center justify-center">
                  {phase.status === "current" && (
                    <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
                  )}
                </div>
                
                <div className={`h-full p-6 rounded-2xl border transition-all ${
                  phase.status === "current"
                    ? "border-primary bg-primary/5 glow-primary"
                    : "border-border card-gradient hover:border-primary/30"
                }`}>
                  {/* Phase badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      phase.status === "current" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}>
                      <phase.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground">{phase.timeline}</span>
                      <h3 className="font-display text-lg font-semibold">{phase.phase}</h3>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-xl mb-4">{phase.title}</h4>
                  
                  <ul className="space-y-2">
                    {phase.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          phase.status === "current" ? "bg-primary" : "bg-muted-foreground"
                        }`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {phase.status === "current" && (
                    <div className="mt-4 pt-4 border-t border-primary/20">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">Currently in Progress</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
