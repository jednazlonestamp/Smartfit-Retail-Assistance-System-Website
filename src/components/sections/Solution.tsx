import { motion } from "framer-motion";
import { ScanLine, Brain, Store, Bot, BarChart3 } from "lucide-react";

const features = [
  {
    icon: ScanLine,
    title: "AI Body Scan",
    description: "Non-invasive computer vision scanning captures precise body measurements in seconds.",
    color: "primary",
  },
  {
    icon: Brain,
    title: "Smart Matching",
    description: "ML algorithms match measurements to inventory, finding perfect fits across brands.",
    color: "accent",
  },
  {
    icon: Store,
    title: "Virtual Store",
    description: "Digital twin technology creates immersive 3D store navigation experiences.",
    color: "primary",
  },
  {
    icon: Bot,
    title: "Robot Guide",
    description: "Simulated robotic assistants guide customers to products in real-time.",
    color: "accent",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Comprehensive insights on customer behavior, inventory, and sales patterns.",
    color: "primary",
  },
];

const Solution = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">The Solution</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Introducing <span className="text-gradient">SmartFit</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive AI-powered platform that transforms how customers shop and how retailers serve them.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative p-8 rounded-2xl border-gradient bg-card hover:scale-[1.02] transition-transform duration-300 ${
                index === 4 ? "lg:col-start-2" : ""
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                feature.color === "primary" 
                  ? "bg-primary/10 text-primary" 
                  : "bg-accent/10 text-accent"
              }`}>
                <feature.icon className="w-7 h-7" />
              </div>
              
              <h3 className="font-display text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              
              {/* Decorative gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity ${
                feature.color === "primary" ? "bg-primary" : "bg-accent"
              }`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
