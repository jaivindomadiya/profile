
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Task Automation Platform",
      description: "Built a comprehensive automation platform using n8n, OpenAI API, and Python. Features intelligent workflow creation, natural language processing, and seamless integration with multiple APIs.",
      techStack: ["Python", "n8n", "OpenAI API", "MongoDB", "React"],
      image: "/placeholder.svg",
      github: "https://github.com/username/project1",
      live: "https://project1.demo.com"
    },
    {
      title: "Real-Time Chat Application",
      description: "Developed a scalable real-time messaging app with advanced features including file sharing, voice messages, and AI-powered message suggestions using WebSocket technology.",
      techStack: ["Node.js", "Socket.io", "React", "PostgreSQL", "Redis"],
      image: "/placeholder.svg",
      github: "https://github.com/username/project2",
      live: "https://project2.demo.com"
    },
    {
      title: "E-Commerce Analytics Dashboard",
      description: "Created an intelligent dashboard for e-commerce businesses with predictive analytics, real-time sales monitoring, and automated reporting features using machine learning algorithms.",
      techStack: ["React", "Python", "TensorFlow", "PostgreSQL", "Docker"],
      image: "/placeholder.svg",
      github: "https://github.com/username/project3",
      live: "https://project3.demo.com"
    },
    {
      title: "Smart Content Management System",
      description: "Engineered a headless CMS with AI-powered content optimization, automated SEO suggestions, and dynamic content personalization for improved user engagement.",
      techStack: ["TypeScript", "GraphQL", "MongoDB", "AWS", "Next.js"],
      image: "/placeholder.svg",
      github: "https://github.com/username/project4",
      live: "https://project4.demo.com"
    }
  ];

  return (
    <section id="projects" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-portfolio-highlight text-center mb-12">Projects</h2>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 lg:h-80 object-cover rounded-lg border-2 border-portfolio-highlight/30 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
              
              {/* Project Content */}
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold text-portfolio-highlight">{project.title}</h3>
                <p className="text-white text-lg leading-relaxed">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-portfolio-highlight/20 text-portfolio-highlight px-3 py-1 rounded-full text-sm border border-portfolio-highlight/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 bg-portfolio-highlight text-black px-4 py-2 rounded-lg font-semibold hover:bg-portfolio-accent transition-colors"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center gap-2 border-2 border-portfolio-highlight text-portfolio-highlight px-4 py-2 rounded-lg font-semibold hover:bg-portfolio-highlight hover:text-black transition-colors"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
