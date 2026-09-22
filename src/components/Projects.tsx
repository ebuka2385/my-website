import { useState } from "react";
import { Github, ExternalLink, ChevronDown } from "lucide-react";
import Reveal from "@/components/Reveal";

const Projects = () => {
  const projects = [
    {
      title: "Helthy",
      subtitle: "Personalized Fitness Platform",
      description:
        "Cross-platform fitness application serving 800+ users with real-time personalized health coaching. Engineered agentic AI orchestration with function calling, SSE streaming, prompt caching, and parallel context hydration across 10+ relational data sources.",
      features: [
        "Agentic AI fitness & nutrition coaching",
        "Real-time calorie & workout tracking",
        "Deterministic recommendation engines",
        "Cross-platform (React Native)",
      ],
      technologies: ["React Native", "TypeScript", "Fastify", "PostgreSQL", "Prisma", "Claude API", "Docker"],
      githubUrl: "https://github.com/ebuka2385/helthy",
      liveUrl: "#",
      status: "Live",
      date: "2025-08-01",
    },
    {
      title: "Ekudi",
      subtitle: "Personal Finance Assistant",
      description:
        "Personal finance web app combining budgeting, transaction tracking, and AI-assisted financial insights. Built secure transaction ingestion and sync pipelines with webhook handling, encryption, and scheduled jobs.",
      features: [
        "Budget management & tracking",
        "Transaction sync & categorization",
        "AI-assisted financial insights",
        "Secure webhook handling & encryption",
      ],
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Stripe API", "OpenAI API", "Anthropic API", "Redis"],
      githubUrl: "https://github.com/ebuka2385",
      liveUrl: "#",
      status: "In Development",
      date: "2025-10-01",
    },
    {
      title: "Refactr",
      subtitle: "High-Volume File Conversion",
      description:
        "Web app for converting 500+ file formats with instant previews, secure uploads, and parallel processing capabilities.",
      features: [
        "500+ file format conversions",
        "Instant previews",
        "Batch & parallel processing",
      ],
      technologies: ["Node.js", "React", "Tailwind CSS", "LibreOffice", "FFmpeg"],
      githubUrl: "https://github.com/ebuka2385/refactr",
      liveUrl: "#",
      status: "Completed",
      date: "2025-05-01",
    },
    {
      title: "SOS",
      subtitle: "Personal Safety App",
      description:
        "Mobile emergency response app with real-time location tracking and automated notifications. Built during Harvard Hackathon.",
      features: [
        "One-tap emergency activation",
        "Real-time tracking",
        "Automated SMS alerts",
      ],
      technologies: ["React Native", "Firebase", "Express.js", "Twilio"],
      githubUrl: "https://github.com/ebuka2385/sos",
      liveUrl: "#",
      status: "Completed",
      date: "2024-10-01",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="container max-w-6xl">
        <Reveal className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground">
            Selected work showcasing my skills
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <Reveal key={project.title} delay={index * 90}>
                <div className="glass-card hover-lift flex h-full flex-col p-6">
                  <div className="mb-3">
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs text-muted-foreground">
                      {new Date(project.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                      })}
                    </span>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-xs ${
                        project.status === "Live"
                          ? "border-accent/30 bg-accent/15 text-accent"
                          : "border-white/10 bg-white/5 text-muted-foreground"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm transition-transform duration-500 ease-out-expo hover:scale-[1.04]"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm transition-transform duration-500 ease-out-expo hover:scale-[1.04]"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      aria-expanded={isExpanded}
                      className="glass-accent ml-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-accent-foreground transition-transform duration-500 ease-out-expo hover:scale-[1.04] active:scale-95"
                    >
                      {isExpanded ? "Show Less" : "Learn More"}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-500 ease-out-expo ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <div
                    className={`grid transition-all duration-700 ease-out-expo ${
                      isExpanded
                        ? "grid-rows-[1fr] opacity-100 mt-6"
                        : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-4 border-t border-white/10 pt-5">
                        <p className="text-sm text-muted-foreground">
                          {project.description}
                        </p>

                        <div>
                          <h4 className="text-sm font-semibold mb-2">
                            Key features
                          </h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {project.features.map((feature) => (
                              <li key={feature} className="flex gap-2">
                                <span className="text-accent">•</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold mb-2">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs transition-colors duration-300 hover:border-accent/40"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120} className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Want to see more?</p>
          <a
            href="https://github.com/ebuka2385?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-2.5 transition-transform duration-500 ease-out-expo hover:scale-[1.04]"
          >
            <Github className="w-4 h-4" />
            View all on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
