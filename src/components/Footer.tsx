
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-portfolio-highlight/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-center md:text-left">
            © 2025 Your Name. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a 
              href="https://linkedin.com/in/yourprofile"
              className="text-white hover:text-portfolio-highlight transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/yourusername"
              className="text-white hover:text-portfolio-highlight transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="text-white hover:text-portfolio-highlight transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
