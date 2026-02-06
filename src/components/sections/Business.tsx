import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Building2 } from "lucide-react";

const metrics = [
  { icon: TrendingUp, label: "Market Size", value: "$5.5B", description: "RetailTech AI Market 2025" },
  { icon: Users, label: "Target Users", value: "50K+", description: "Retail stores globally" },
  { icon: DollarSign, label: "Avg. ROI", value: "340%", description: "Customer return on investment" },
  { icon: Building2, label: "Enterprise Ready", value: "100%", description: "Scalable infrastructure" },
];

const revenueStreams = [
  { title: "SaaS License", description: "Monthly subscription per store location", percentage: "60%" },
  { title: "Analytics Upsell", description: "Premium insights and reporting dashboards", percentage: "25%" },
  { title: "Enterprise Custom", description: "White-label solutions for major retailers", percentage: "15%" },
];

const Business = () => {
  return (
    <section id="business" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-background" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Business Value</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Built for <span className="text-gradient">Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A sustainable business model designed to capture significant market share in the growing RetailTech space.
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl card-gradient border border-border text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <metric.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-3xl font-bold text-gradient">{metric.value}</span>
              <h4 className="font-semibold mt-2">{metric.label}</h4>
              <p className="text-muted-foreground text-sm mt-1">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Revenue Streams */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl border-gradient bg-card/50"
        >
          <h3 className="font-display text-2xl font-semibold mb-8 text-center">Revenue Model</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {revenueStreams.map((stream, index) => (
              <motion.div
                key={stream.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative p-6 rounded-xl bg-card border border-border"
              >
                <div className="absolute top-4 right-4 text-3xl font-bold text-primary/20">
                  {stream.percentage}
                </div>
                <h4 className="font-display text-xl font-semibold mb-2">{stream.title}</h4>
                <p className="text-muted-foreground text-sm">{stream.description}</p>
                
                {/* Progress bar */}
                <div className="mt-4 h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: stream.percentage }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Business;
