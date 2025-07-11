
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 px-4 bg-[hsl(0,0%,10%)]/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-portfolio-highlight text-center mb-12">Let's Connect</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-portfolio-highlight mb-6">Get In Touch</h3>
            
            <div className="space-y-4">
              <a 
                href="mailto:your.email@example.com"
                className="flex items-center gap-4 text-white hover:text-portfolio-highlight transition-colors group"
              >
                <div className="bg-portfolio-highlight/20 p-3 rounded-lg group-hover:bg-portfolio-highlight/30 transition-colors">
                  <Mail size={24} />
                </div>
                <span className="text-lg">your.email@example.com</span>
              </a>
              
              <a 
                href="tel:+1234567890"
                className="flex items-center gap-4 text-white hover:text-portfolio-highlight transition-colors group"
              >
                <div className="bg-portfolio-highlight/20 p-3 rounded-lg group-hover:bg-portfolio-highlight/30 transition-colors">
                  <Phone size={24} />
                </div>
                <span className="text-lg">+1 (234) 567-8900</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/yourprofile"
                className="flex items-center gap-4 text-white hover:text-portfolio-highlight transition-colors group"
              >
                <div className="bg-portfolio-highlight/20 p-3 rounded-lg group-hover:bg-portfolio-highlight/30 transition-colors">
                  <Linkedin size={24} />
                </div>
                <span className="text-lg">LinkedIn Profile</span>
              </a>
              
              <a 
                href="https://github.com/yourusername"
                className="flex items-center gap-4 text-white hover:text-portfolio-highlight transition-colors group"
              >
                <div className="bg-portfolio-highlight/20 p-3 rounded-lg group-hover:bg-portfolio-highlight/30 transition-colors">
                  <Github size={24} />
                </div>
                <span className="text-lg">GitHub Profile</span>
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-portfolio-highlight mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-[hsl(0,0%,10%)]/30 border border-portfolio-highlight/30 rounded-lg text-white placeholder-gray-300 focus:border-portfolio-highlight focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-[hsl(0,0%,10%)]/30 border border-portfolio-highlight/30 rounded-lg text-white placeholder-gray-300 focus:border-portfolio-highlight focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-4 bg-[hsl(0,0%,10%)]/30 border border-portfolio-highlight/30 rounded-lg text-white placeholder-gray-300 focus:border-portfolio-highlight focus:outline-none transition-colors resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-portfolio-highlight text-black px-6 py-4 rounded-lg font-semibold hover:bg-portfolio-accent transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
