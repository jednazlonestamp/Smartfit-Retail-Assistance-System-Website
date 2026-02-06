import { motion } from "framer-motion";
import { Scan, Cpu, Shirt, Navigation, HandHelping } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Scan,
    title: "Scan",
    description: "Customer stands in front of camera for non-invasive body measurement scan.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Analyze",
    description: "AI processes measurements and cross-references with store inventory database.",
  },
  {
    number: "03",
    icon: Shirt,
    title: "Recommend",
    description: "System suggests perfectly fitting items based on size, style, and availability.",
  },
  {
    number: "04",
    icon: Navigation,
    title: "Navigate",
    description: "Digital twin shows optimal route to recommended items in the store.",
  },
  {
    number: "05",
    icon: HandHelping,
    title: "Assist",
    description: "Virtual robot guide provides real-time assistance throughout the journey.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Simple <span className="text-gradient">5-Step</span> Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From scan to assist, our seamless pipeline delivers personalized shopping experiences.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Card */}
                <div className="relative p-6 rounded-2xl card-gradient border border-border text-center group hover:border-primary/50 transition-colors">
                  {/* Step number */}
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                    {step.number}
                  </span>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
                
                {/* Arrow connector for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-accent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
