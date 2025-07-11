
const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      duration: "2022 - 2024",
      description: "Specialized in Artificial Intelligence and Machine Learning",
      image: "/placeholder.svg"
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "University of California, Berkeley",
      duration: "2018 - 2022",
      description: "Magna Cum Laude, Focus on Full-Stack Development",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="education" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-portfolio-highlight text-center mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-center gap-8 bg-[hsl(0,0%,10%)]/30 rounded-lg p-8 border border-portfolio-highlight/20 hover:border-portfolio-highlight/40 transition-all duration-300"
            >
              <div className="w-32 h-32 rounded-lg overflow-hidden border-2 border-portfolio-highlight/30 flex-shrink-0">
                <img 
                  src={edu.image} 
                  alt={edu.school}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-portfolio-highlight mb-2">{edu.degree}</h3>
                <p className="text-white text-lg font-semibold mb-2">{edu.school}</p>
                <p className="text-portfolio-highlight mb-2">{edu.duration}</p>
                <p className="text-white">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
