import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Briefcase, GraduationCap, Award, ChevronDown, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    languages: ['C', 'C++', 'JavaScript'],
    frameworks: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS'],
    databases: ['MongoDB', 'MySQL'],
    tools: ['Git', 'GitHub', 'Postman', 'JWT', 'API Integration', 'OCR']
  };

  const projects = [
    {
      title: 'SkillShare',
      subtitle: 'Peer-to-Peer Microlearning Platform',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      description: 'A comprehensive collaborative learning platform with real-time chat and video conferencing for knowledge exchange.',
      link: 'https://skillshare-app.vercel.app',
      highlights: [
        'Sophisticated skill matching algorithms',
        'Real-time chat & video conferencing',
        'Session scheduling for microlearning'
      ]
    },
    {
      title: 'Cohabit',
      subtitle: 'Roommate Expense & Chores Tracker',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      description: 'Household coordination system with automated expense splitting and secure authentication.',
      link: 'https://cohabit-one.vercel.app/',
      highlights: [
        'Automated expense splitting',
        'Secure JWT authentication',
        'Real-time dashboard updates'
      ]
    }
  ];

  const experience = [
    {
      role: 'Web Development Trainee',
      company: 'Upskills',
      period: 'Jul 2025 – Present',
      type: 'Remote',
      achievements: [
        'Developed responsive interfaces with React.js and Tailwind CSS',
        'Built comprehensive REST APIs with Node.js and Express.js',
        'Implemented Git workflows and collaboration strategies'
      ]
    },
    {
      role: 'Web Developer Intern',
      company: 'Cantilever',
      period: 'Jul 2024 – Aug 2024',
      type: 'Internship',
      achievements: [
        'Created engaging UIs with modern web technologies',
        'Built dynamic React.js components with state management',
        'Ensured seamless frontend-backend API communication'
      ]
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-1/3 right-0 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl bottom-0 left-1/3 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            AK
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg">
            {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-6 py-3 hover:bg-slate-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-block px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 mb-4">
            <span className="text-cyan-400">● </span>Available for opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">Anshu Kumari</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Full Stack Developer | MERN Stack Specialist
          </p>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
            Crafting seamless digital experiences with modern web technologies. 
            Passionate about building scalable applications that make a difference.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg hover:scale-105 transition-transform duration-300 font-semibold">
              Get In Touch
            </a>
            <a href="#projects" className="px-8 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:bg-slate-700 transition-colors duration-300 font-semibold">
              View Projects
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <a href="https://www.linkedin.com/in/anshu-kumari-2109292a2/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg hover:bg-slate-700 hover:scale-110 transition-all duration-300 border border-slate-700">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Anshu-Kumari30" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg hover:bg-slate-700 hover:scale-110 transition-all duration-300 border border-slate-700">
              <Github size={24} />
            </a>
            <a href="mailto:anshukumari4049@gmail.com" className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg hover:bg-slate-700 hover:scale-110 transition-all duration-300 border border-slate-700">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-cyan-400" />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all duration-300">
              <GraduationCap size={40} className="text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <p className="text-slate-300 mb-2 font-semibold">B.Tech in Information Technology</p>
              <p className="text-slate-400 mb-2">Dr. Akhilesh Das Gupta Institute of Professional Studies</p>
              <p className="text-slate-400 mb-2">2022 – 2026 | Delhi, India</p>
              <p className="text-cyan-400 font-semibold">79% Aggregate</p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300">
              <Award size={40} className="text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Certification</h3>
              <p className="text-slate-300 mb-2 font-semibold">IBM Data Science & Visualization</p>
              <p className="text-slate-400 mb-2">Machine Learning with Python – Level 1</p>
              <p className="text-slate-400 mb-4">Issued: July 31, 2024</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-cyan-400">Python</span>
                <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-cyan-400">ML</span>
                <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-cyan-400">KNN</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Code className="text-purple-400" />
              Technical Arsenal
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="text-cyan-400 font-semibold mb-3">Languages</h4>
                <div className="space-y-2">
                  {skills.languages.map((skill) => (
                    <div key={skill} className="bg-slate-800/50 px-3 py-2 rounded-lg">{skill}</div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold mb-3">Frameworks</h4>
                <div className="space-y-2">
                  {skills.frameworks.map((skill) => (
                    <div key={skill} className="bg-slate-800/50 px-3 py-2 rounded-lg text-sm">{skill}</div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold mb-3">Databases</h4>
                <div className="space-y-2">
                  {skills.databases.map((skill) => (
                    <div key={skill} className="bg-slate-800/50 px-3 py-2 rounded-lg">{skill}</div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold mb-3">Tools</h4>
                <div className="space-y-2">
                  {skills.tools.map((skill) => (
                    <div key={skill} className="bg-slate-800/50 px-3 py-2 rounded-lg text-sm">{skill}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-900/30 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                      <p className="text-slate-400 text-sm">{project.subtitle}</p>
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-cyan-500 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  <p className="text-slate-300 mb-4">{project.description}</p>

                  <div className="space-y-2 mb-4">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span className="text-slate-400 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-slate-800 rounded-full text-sm text-purple-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Professional Journey
          </h2>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                      <Briefcase className="text-cyan-400" size={24} />
                      {exp.role}
                    </h3>
                    <p className="text-slate-300 text-lg">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <span className="px-4 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">{exp.type}</span>
                    <p className="text-slate-400 mt-2">{exp.period}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span className="text-slate-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-900/30 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <p className="text-slate-300 text-lg mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities and collaborations. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <a href="mailto:anshukumari4049@gmail.com" className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <Mail size={32} className="text-cyan-400 mx-auto mb-3" />
              <p className="text-slate-400 text-sm mb-2">Email</p>
              <p className="text-slate-200 break-all">anshukumari4049@gmail.com</p>
            </a>

            <a href="tel:+918178411197" className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <Phone size={32} className="text-purple-400 mx-auto mb-3" />
              <p className="text-slate-400 text-sm mb-2">Phone</p>
              <p className="text-slate-200">+91 8178411197</p>
            </a>

            <a href="https://www.linkedin.com/in/anshu-kumari-2109292a2/" target="_blank" rel="noopener noreferrer" className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <Linkedin size={32} className="text-cyan-400 mx-auto mb-3" />
              <p className="text-slate-400 text-sm mb-2">LinkedIn</p>
              <p className="text-slate-200">Connect with me</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800 text-center text-slate-400">
        <p className="mb-2">Designed & Built by Anshu Kumari</p>
        <p className="text-sm">© 2025 All rights reserved</p>
      </footer>
    </div>
  );
}