
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Photo Section */}
          <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-portfolio-highlight shadow-2xl">
            <img 
              src="/placeholder.svg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-portfolio-highlight mb-6 leading-tight">
              Software Engineer & AI Developer
            </h1>
            <blockquote className="text-2xl lg:text-3xl font-bold text-white mb-8 italic leading-relaxed">
              "Turning vision into code, one project at a time."
            </blockquote>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#contact" className="bg-portfolio-highlight text-black px-6 py-3 rounded-lg font-semibold hover:bg-portfolio-accent transition-colors">
                Get In Touch
              </a>
              <a href="#projects" className="border-2 border-portfolio-highlight text-portfolio-highlight px-6 py-3 rounded-lg font-semibold hover:bg-portfolio-highlight hover:text-black transition-colors">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
