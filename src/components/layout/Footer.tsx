import { Bot, Github, Linkedin, Twitter, Mail } from "lucide-react";
const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"> {/*bg-gradient-to-br from-primary to-accent*/}
              {/*<Bot className="w-6 h-6 text-primary-foreground" />*/}
              <img style={{width: '40px', height: '40px'}} src="/icon.png"/>
            </div>
            <div>
              <span className="font-display text-lg font-bold">SmartFit Robotics</span>
              <p className="text-sm text-muted-foreground">AI-Powered Retail Innovation</p>
            </div>
          </div>
          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#demo" className="hover:text-foreground transition-colors">Demo</a>
            <a href="#technology" className="hover:text-foreground transition-colors">Technology</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/LoneStamp"
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/nissan-diezon-encabo-agripo-a525b5399/"
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/JednazL46745"
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="mailto:jednazlonestamp9@gmail.com"
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 SmartFit Assistance Robotics. Built for lablab.ai Hackathon.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;