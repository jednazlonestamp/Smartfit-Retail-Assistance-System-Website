import { motion } from "framer-motion";

const technologies = [
  { icon: "https://cdn-icons-png.freepik.com/256/3459/3459528.png?uid=R224914971&ga=GA1.1.304407073.1764758472&semt=ais_white_label", name: "React", category: "Frontend", color: "primary" },
  { icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/vite.svg", name: "Vite", category: "Build Tool", color: "accent" },
  { icon: "https://icon.icepanel.io/Technology/png-shadow-512/Three.js.png", name: "Three.js", category: "3D Graphics", color: "primary" },
  { icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjMDBkNmZmIiBzdHlsZT0ib3BhY2l0eToxOyI+PHBhdGggIGQ9Ik0yLjE4MiAwYTIuMTggMi4xOCAwIDAgMC0yLjE4IDIuMTE0TDAgMi4xODJ2Ni41NDVhMi4xODIgMi4xODIgMCAwIDAgNC4zNjQgMFYyLjE4MkEyLjE4IDIuMTggMCAwIDAgMi4xODIgMG02LjU0NSAwYTIuMTggMi4xOCAwIDAgMC0yLjE4IDIuMTE0bC0uMDAyLjA2OHYxMy4wOWEyLjE4MiAyLjE4MiAwIDAgMCA0LjM2NCAwVjIuMTgzQTIuMTggMi4xOCAwIDAgMCA4LjcyNyAwbTYuNTQ2IDBhMi4xOCAyLjE4IDAgMCAwLTIuMTgyIDIuMTgyYTIuMTggMi4xOCAwIDAgMCAyLjE4MiAyLjE4MmEyLjE4IDIuMTggMCAwIDAgMi4xODItMi4xODJBMi4xOCAyLjE4IDAgMCAwIDE1LjI3MyAwbTYuNTQ1IDBhMi4xOCAyLjE4IDAgMCAwLTIuMTggMi4xMTRsLS4wMDIuMDY4djE5LjYzNmEyLjE4MiAyLjE4MiAwIDAgMCA0LjM2NCAwVjIuMTgyQTIuMTggMi4xOCAwIDAgMCAyMS44MTggMG0tNi41NDUgNi41NDVjLTEuMTgzIDAtMi4xNDUuOTQtMi4xODEgMi4xMTRsLS4wMDEuMDY4djEzLjA5MWEyLjE4MiAyLjE4MiAwIDAgMCA0LjM2NCAwVjguNzI4YTIuMTggMi4xOCAwIDAgMC0yLjE4Mi0yLjE4M00yLjE4MiAxMy4wOTFhMi4xOCAyLjE4IDAgMCAwLTIuMTggMi4xMTRMMCAxNS4yNzN2Ni41NDVhMi4xODIgMi4xODIgMCAwIDAgNC4zNjQgMHYtNi41NDVhMi4xOCAyLjE4IDAgMCAwLTIuMTgyLTIuMTgybTYuNTQ1IDYuNTQ1YTIuMTggMi4xOCAwIDAgMC0yLjE4MiAyLjE4MkEyLjE4IDIuMTggMCAwIDAgOC43MjcgMjRhMi4xOCAyLjE4IDAgMCAwIDIuMTgyLTIuMTgyYTIuMTggMi4xOCAwIDAgMC0yLjE4Mi0yLjE4MiIvPjwvc3ZnPg==", name: "MediaPipe", category: "Computer Vision", color: "accent" },
  { icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/fastapi-icon-72blnc5ihz9c30ltfruvm.png/fastapi-icon-sv7hsd0o3donlq26es2lr.png?_a=DATAiZAAZAA0", name: "FastAPI", category: "Backend", color: "primary" },
  { icon: "https://assets.streamlinehq.com/image/private/w_34,h_34,ar_1/f_auto/v1/icons/2/python-po4azchn31kosiru27eiq.png/python-ac501tf6xzjdkig0nu8xbr.png?_a=DATAiZAAZAA0", name: "Python", category: "ML/AI", color: "accent" },
  { icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-tensorflow-icon.png", name: "TensorFlow", category: "Deep Learning", color: "primary" },
  { icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postgresql-icon.svg", name: "PostgreSQL", category: "Database", color: "accent" },
];

const TechStack = () => {
  return (
    <section id="technology" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Technology</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Powered by <span className="text-gradient">Modern Tech</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built with cutting-edge technologies for performance, scalability, and reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all text-center group"
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4`}> {/*${tech.color === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}*/}
              <img src={tech.icon}/>
                <span style={{display: "none"}} className="font-display text-2xl font-bold">{tech.name[0]}</span>
              </div>
              <h3 className="font-display text-lg font-semibold mb-1">{tech.name}</h3>
              <p className="text-muted-foreground text-sm">{tech.category}</p>
            </motion.div>
          ))}
        </div>

        {/* Architecture Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-8 rounded-2xl border-gradient bg-card/50"
        >
          <h3 className="font-display text-2xl font-semibold mb-6 text-center">System Architecture</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend Layer */}
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <h4 className="font-semibold text-primary mb-4">Frontend Layer</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• React + TypeScript UI</li>
                <li>• Three.js 3D Rendering</li>
                <li>• MediaPipe Body Tracking</li>
                <li>• Real-time WebSocket</li>
              </ul>
            </div>
            
            {/* Backend Layer */}
            <div className="p-6 rounded-xl bg-accent/5 border border-accent/20">
              <h4 className="font-semibold text-accent mb-4">Backend Layer</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• FastAPI REST API</li>
                <li>• TensorFlow ML Models</li>
                <li>• Inventory Management</li>
                <li>• Analytics Pipeline</li>
              </ul>
            </div>
            
            {/* Data Layer */}
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <h4 className="font-semibold text-primary mb-4">Data Layer</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• PostgreSQL Database</li>
                <li>• Vector Embeddings</li>
                <li>• Real-time Sync</li>
                <li>• Secure Storage</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
