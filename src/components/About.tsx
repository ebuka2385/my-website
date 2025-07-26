const About = () => {
  const facts = [
    {
      emoji: "💻",
      title: "Code Enthusiast",
      description: "I love solving complex problems and building efficient solutions"
    },
    {
      emoji: "🚀",
      title: "Innovation Driven",
      description: "Always exploring new technologies and pushing boundaries"
    },
    {
      emoji: "🤝",
      title: "Team Player",
      description: "Collaborative mindset with strong communication skills"
    },
    {
      emoji: "🎯",
      title: "Detail Oriented",
      description: "Focused on quality and precision in every project"
    },
    {
      emoji: "📚",
      title: "Continuous Learner",
      description: "Constantly expanding my knowledge and skill set"
    },
    {
      emoji: "⚡",
      title: "Fast Adapter",
      description: "Quick to learn new technologies and adapt to change"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get to know me better through these key aspects of who I am
            </p>
          </div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Bio */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold font-space text-primary">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate Computer Science student at Case Western Reserve University, 
                  currently pursuing my degree while gaining real-world experience through 
                  internships and projects. My journey in technology started with curiosity 
                  and has evolved into a deep commitment to creating innovative solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through my experiences at companies like Parker Hannifin Corporation, 
                  Concepta Innovation Services, and Temegs Engineering, I've developed 
                  a strong foundation in software engineering, data analysis, and IT consulting.
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-primary">What I Value</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Quality code and clean architecture
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Collaborative problem-solving
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Continuous learning and growth
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    User-centered design thinking
                  </li>
                </ul>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-6 rounded-xl hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
              <div className="glass p-6 rounded-xl hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="glass p-6 rounded-xl hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Technologies Mastered</div>
              </div>
              <div className="glass p-6 rounded-xl hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">CWRU</div>
                <div className="text-sm text-muted-foreground">University</div>
              </div>
            </div>
          </div>

          {/* Fun Facts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl hover-lift transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {fact.emoji}
                </div>
                <h4 className="font-semibold text-primary mb-2 font-space">
                  {fact.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {fact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;