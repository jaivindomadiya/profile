
const About = () => {
  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-portfolio-highlight text-center mb-12">About Me</h2>
        <div className="bg-[hsl(0,0%,10%)]/30 rounded-lg p-8 backdrop-blur-sm border border-portfolio-highlight/20">
          <p className="text-white text-lg leading-relaxed text-center">
            I'm a passionate software engineer and AI developer who thrives on transforming innovative ideas into powerful digital solutions. 
            With expertise spanning web development, artificial intelligence, and automation technologies, I specialize in building scalable applications 
            that solve real-world problems. My journey combines technical excellence with creative problem-solving, always staying at the forefront 
            of emerging technologies. I believe in the power of code to create meaningful impact, whether it's through intelligent automation, 
            seamless user experiences, or cutting-edge AI implementations that push the boundaries of what's possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
