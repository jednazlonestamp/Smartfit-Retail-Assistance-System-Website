import { motion } from "framer-motion";
import { Code2, Brain, Rocket, Linkedin, Github, Twitter } from "lucide-react";

const skills = [
  { icon: Code2, label: "Full-Stack Development" },
  { icon: Brain, label: "AI/ML Engineering" },
  { icon: Rocket, label: "Product Strategy" },
];

const Team = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Team</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Meet the <span className="text-gradient">Founder</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-8 md:p-12 rounded-3xl border-gradient bg-card/50 text-center">
            {/* Avatar */}
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent p-1">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <img style={{borderRadius: '50%'}} className="team-profile" src="https://media.licdn.com/dms/image/v2/D4E03AQG3ktF1SlCoRA/profile-displayphoto-shrink_200_200/B4EZsC62KwGUAY-/0/1765280539711?e=1772064000&v=beta&t=FWrN4fIzAWC-SeIsWe21otmWsE1BeLyK3JoO07VYYvE" alt="" />
                  <span style={{display:'none'}} className="font-display text-4xl font-bold text-gradient">SF</span>
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                Solo Founder
              </div>
            </div>
            
            <h3 className="font-display text-2xl font-bold mb-2">Jednaz Lonestamp</h3>
            <p className="text-primary font-medium mb-6">Full-Stack AI Developer</p>
            
            {/* Vision Statement */}
            <blockquote className="text-lg text-muted-foreground italic mb-8 px-4">
              "Building the future of retail where technology serves humanity, making shopping experiences seamless, personalized, and delightful for everyone."
            </blockquote>
            
            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted"
                >
                  <skill.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{skill.label}</span>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/nissan-diezon-encabo-agripo-a525b5399/"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/LoneStamp"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/JednazL46745"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
