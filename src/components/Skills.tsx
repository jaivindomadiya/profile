
const Skills = () => {
  const skills = [
    "JavaScript", "Python", "React", "Node.js", "TypeScript",
    "n8n", "LangChain", "OpenAI API", "MongoDB", "PostgreSQL",
    "Docker", "AWS", "Git", "REST APIs", "GraphQL",
    "Machine Learning", "Data Analysis", "Automation", "CI/CD", "Tailwind CSS"
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-green-800/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 text-center hover:bg-yellow-400/20 transition-all duration-300 hover:scale-105"
            >
              <span className="text-white font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
