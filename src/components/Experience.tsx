import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Experience = () => {
  const experiences = [
    {
      company: "Parker Hannifin Corporation",
      role: "Software Engineering Intern",
      duration: "Summer 2023",
      location: "Cleveland, OH",
      description: "Developed and optimized software solutions for industrial automation systems. Collaborated with cross-functional teams to implement new features and improve existing codebase.",
      highlights: [
        "Built responsive web applications using modern frameworks",
        "Implemented data visualization dashboards for system monitoring",
        "Optimized database queries resulting in 40% performance improvement",
        "Participated in agile development processes and code reviews"
      ],
      technologies: ["React", "Python", "SQL", "JavaScript"]
    },
    {
      company: "Concepta Innovation Services",
      role: "Data Analyst",
      duration: "2022 - 2023",
      location: "Remote",
      description: "Analyzed large datasets to extract meaningful insights and support business decision-making. Created comprehensive reports and data visualizations for stakeholders.",
      highlights: [
        "Processed and analyzed datasets containing 100K+ records",
        "Created automated reporting systems using Python and Excel",
        "Developed data visualization dashboards using Tableau",
        "Identified key trends that improved business efficiency by 25%"
      ],
      technologies: ["Python", "Tableau", "SQL", "Excel"]
    },
    {
      company: "Temegs Engineering",
      role: "IT Consultant",
      duration: "2021 - 2022",
      location: "Lagos, Nigeria",
      description: "Provided IT consulting services to help businesses optimize their technology infrastructure and implement digital solutions.",
      highlights: [
        "Consulted with 15+ clients on technology strategy and implementation",
        "Designed and implemented network security solutions",
        "Automated business processes reducing manual work by 60%",
        "Provided technical training to staff members"
      ],
      technologies: ["Network Security", "System Administration", "Automation", "Training"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A journey through my professional growth and contributions
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-primary to-transparent z-0" />
                )}
                
                {/* Timeline Dot */}
                <div className="absolute left-4 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 group-hover:scale-125 transition-transform duration-300 pulse-glow" />
                
                {/* Experience Card */}
                <div className="ml-16 glass p-8 rounded-xl hover-lift transition-all duration-300 group-hover:glow-purple">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-primary font-space">
                        {exp.role}
                      </h3>
                      <h4 className="text-xl font-semibold text-foreground">
                        {exp.company}
                      </h4>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground mt-4 lg:mt-0">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <h5 className="font-semibold text-primary">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h5 className="font-semibold text-primary">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Button variant="glass" size="lg" className="group">
              <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-45 transition-transform" />
              View Full Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;