
const Experience = () => {
  const experiences = [
    {
      role: "AI Software Engineer",
      company: "TechFlow Innovations",
      duration: "2023 - Present",
      type: "Full-Time",
      responsibilities: [
        "Lead development of AI-powered automation solutions using Python, LangChain, and OpenAI API",
        "Architect and implement scalable microservices handling 10M+ API requests monthly",
        "Collaborate with cross-functional teams to deliver enterprise-grade software solutions",
        "Mentor junior developers and establish best practices for AI/ML development workflows"
      ]
    },
    {
      role: "Software Development Intern",
      company: "Digital Solutions Hub",
      duration: "Summer 2022",
      type: "Internship",
      responsibilities: [
        "Developed responsive web applications using React, Node.js, and MongoDB",
        "Implemented automated testing procedures, improving code coverage by 40%",
        "Assisted in migrating legacy systems to modern cloud infrastructure on AWS",
        "Contributed to open-source projects and participated in code review processes"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 px-4 bg-[hsl(0,0%,10%)]/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-portfolio-highlight text-center mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-[hsl(0,0%,10%)]/30 rounded-lg p-8 border border-portfolio-highlight/20 hover:border-portfolio-highlight/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-portfolio-highlight">{exp.role}</h3>
                  <p className="text-white text-lg font-semibold">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <span className="bg-portfolio-highlight/20 text-portfolio-highlight px-3 py-1 rounded-full text-sm border border-portfolio-highlight/30">
                    {exp.type}
                  </span>
                  <p className="text-white mt-1">{exp.duration}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="text-white flex items-start">
                    <span className="text-portfolio-highlight mr-2 mt-1">•</span>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
