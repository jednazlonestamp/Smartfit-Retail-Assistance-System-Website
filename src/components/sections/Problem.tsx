import { motion } from "framer-motion";
import { ShoppingBag, Users, TrendingDown, Frown } from "lucide-react";

const problems = [
  {
    icon: ShoppingBag,
    title: "Hard to Find Sizes",
    description: "Customers struggle to locate the right size in large stores, leading to frustration and abandoned purchases.",
    stat: "67%",
    statLabel: "leave without finding their size",
  },
  {
    icon: Users,
    title: "Staff Overload",
    description: "Retail staff are overwhelmed handling customer inquiries, reducing service quality.",
    stat: "45%",
    statLabel: "of staff time on basic queries",
  },
  {
    icon: TrendingDown,
    title: "Lost Sales",
    description: "Poor fitting experience leads to high return rates and lost revenue opportunities.",
    stat: "$642B",
    statLabel: "lost annually to returns",
  },
  {
    icon: Frown,
    title: "Poor Customer UX",
    description: "Outdated shopping experience fails to meet modern customer expectations.",
    stat: "73%",
    statLabel: "want tech-enhanced shopping",
  },
];

const Problem = () => {
  return (
    <section id="problem" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">The Problem</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Retail is <span className="text-gradient">Broken</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Traditional retail experiences fail to meet modern customer expectations, leading to lost sales and poor satisfaction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-2">{problem.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{problem.description}</p>
                
                <div className="pt-4 border-t border-border">
                  <span className="text-3xl font-bold text-destructive">{problem.stat}</span>
                  <p className="text-xs text-muted-foreground mt-1">{problem.statLabel}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
