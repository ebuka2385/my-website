const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Python", level: 90, experience: "3+ years" },
        { name: "JavaScript", level: 85, experience: "2+ years" },
        { name: "TypeScript", level: 80, experience: "1+ years" },
        { name: "Java", level: 75, experience: "2+ years" },
        { name: "C++", level: 70, experience: "1+ years" },
        { name: "SQL", level: 85, experience: "2+ years" }
      ]
    },
    {
      title: "Frontend Technologies",
      icon: "🎨",
      skills: [
        { name: "React", level: 85, experience: "2+ years" },
        { name: "HTML/CSS", level: 90, experience: "3+ years" },
        { name: "Tailwind CSS", level: 80, experience: "1+ years" },
        { name: "Bootstrap", level: 75, experience: "2+ years" },
        { name: "Vue.js", level: 65, experience: "6 months" }
      ]
    },
    {
      title: "Backend & Database",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 80, experience: "1+ years" },
        { name: "Express.js", level: 75, experience: "1+ years" },
        { name: "MongoDB", level: 70, experience: "1+ years" },
        { name: "PostgreSQL", level: 75, experience: "1+ years" },
        { name: "Firebase", level: 70, experience: "6 months" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 85, experience: "2+ years" },
        { name: "Docker", level: 70, experience: "1+ years" },
        { name: "AWS", level: 65, experience: "6 months" },
        { name: "Tableau", level: 80, experience: "1+ years" },
        { name: "Linux", level: 75, experience: "2+ years" }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 80) return "bg-primary";
    if (level >= 70) return "bg-primary-glow";
    return "bg-primary/60";
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and languages I work with to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="glass p-8 rounded-xl hover-lift"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-2xl font-bold font-space text-primary">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.experience}
                        </span>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ease-out ${getSkillColor(skill.level)}`}
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                            }}
                          />
                        </div>
                        
                        {/* Skill Level Indicator */}
                        <div
                          className="absolute -top-8 bg-primary text-primary-foreground text-xs px-2 py-1 rounded transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ left: `${skill.level}%` }}
                        >
                          {skill.level}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold font-space mb-8 text-primary">
              Other Technologies & Concepts
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Agile Development", "REST APIs", "GraphQL", "Testing (Jest)", 
                "CI/CD", "Microservices", "Cloud Computing", "Data Structures",
                "Algorithms", "System Design", "Version Control", "Debugging"
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 glass rounded-full text-sm font-medium hover-lift cursor-default"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;