import { Github, ExternalLink, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "LvlUp Fitness Tracker",
      description: "A competitive fitness web application that gamifies workout tracking. Users can compete with friends and level up their fitness journey with unique social features.",
      features: [
        "Real-time competition tracking",
        "Social fitness challenges",
        "Progress visualization",
        "Achievement system"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      githubUrl: "https://github.com/chiebukaonyejesi/lvlup",
      liveUrl: "https://lvlup-fitness.vercel.app",
      status: "Completed",
      highlight: true
    },
    {
      title: "2048 Game Enhanced",
      description: "A modern twist on the classic 2048 game featuring diagonal tile merging mechanics, making gameplay more dynamic and challenging.",
      features: [
        "Diagonal merging capability",
        "Smooth animations",
        "High score tracking",
        "Responsive design"
      ],
      technologies: ["JavaScript", "CSS3", "HTML5", "LocalStorage"],
      githubUrl: "https://github.com/chiebukaonyejesi/2048-enhanced",
      liveUrl: "https://2048-enhanced.vercel.app",
      status: "Completed",
      highlight: false
    },
    {
      title: "Portfolio Website",
      description: "A sleek, modern personal portfolio website built with React and featuring dark theme with purple highlights, smooth animations, and responsive design.",
      features: [
        "Modern dark theme design",
        "Smooth animations",
        "Responsive layout",
        "Interactive components"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/chiebukaonyejesi/portfolio",
      liveUrl: "https://chiebukaonyejesi.com",
      status: "In Progress",
      highlight: false
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical skills and creative problem-solving abilities
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative ${
                  project.highlight ? 'lg:scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Highlight Badge */}
                {project.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="glass px-4 py-2 rounded-full border border-primary/30 glow-purple">
                      <div className="flex items-center text-sm font-medium text-primary">
                        <Zap className="w-4 h-4 mr-2" />
                        Featured Project
                      </div>
                    </div>
                  </div>
                )}

                <div className={`glass p-8 rounded-xl hover-lift transition-all duration-500 ${
                  project.highlight ? 'border-primary/30 glow-purple' : ''
                } group-hover:glow-purple`}>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Project Info */}
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-bold font-space text-primary">
                            {project.title}
                          </h3>
                          <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                            project.status === 'Completed' 
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                              : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-primary">Key Features:</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-center text-muted-foreground text-sm">
                              <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-primary">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, tIndex) => (
                            <span
                              key={tIndex}
                              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 pt-4">
                        <Button variant="glow" size="sm" className="group">
                          <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                          View Code
                        </Button>
                        <Button variant="glass" size="sm" className="group">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform" />
                          Live Demo
                        </Button>
                      </div>
                    </div>

                    {/* Project Visual */}
                    <div className="relative group/image">
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-glow/10 rounded-lg border border-primary/20 flex items-center justify-center group-hover/image:scale-105 transition-transform duration-500">
                        <div className="text-center space-y-2">
                          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                            <ExternalLink className="w-8 h-8 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">Project Preview</p>
                        </div>
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <Button variant="glass" size="sm">
                          View Project
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work?
            </p>
            <Button variant="glass" size="lg" className="group">
              <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;