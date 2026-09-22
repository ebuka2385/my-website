import { MapPin, Calendar, ChevronDown } from "lucide-react";
import { useState } from "react";
import Reveal from "@/components/Reveal";

const Experience = () => {
  const experiences = [
    {
      company: "Buckeye AI",
      role: "Founding Engineer",
      duration: "Jan 2026 - Present",
      location: "San Francisco, CA",
      description: "Context engineering self-healing platform that auto-fixes broken hospital portal workflows when UIs change, extending benefits verification system serving 7 hospitals and $9M+ in recovered charity care debt.",
      highlights: [
        "Engineered dual-mode system: heavyweight (45k tokens) for novel problems, lightweight (45x cost reduction) for pattern retrieval",
        "90% coverage with pattern library growth trajectory",
        "Extended platform to 7 hospitals with $9M+ impact",
      ],
      technologies: ["TypeScript", "Claude API", "QwenVL", "PostgreSQL", "E2B", "Stagehand", "Browserbase"],
      image: "/buckeye.jpg",
    },
    {
      company: "Honeywell Technologies",
      role: "Software Engineering Intern",
      duration: "Jun 2026 - Aug 2026",
      location: "Richmond, VA",
      description: "Architected agnostic notification framework and AI-assisted incident orchestration for Niagara Cloud platform.",
      highlights: [
        "Built configurable push/SMS delivery with multi-level escalation workflows (projected $k/month subscriptions)",
        "AI incident orchestration correlating 100s of alarm streams with 90% volume reduction",
        "Improved operator response efficiency significantly",
      ],
      technologies: ["React", "Python", "Java", "TypeScript", "Node.js", "PostgreSQL", "Redis", "RabbitMQ", "Azure", "Twilio"],
      image: "/honeywell.jpg",
    },
    {
      company: "John Deere",
      role: "Software Engineering Intern",
      duration: "May 2025 - Aug 2025",
      location: "Moline, Illinois",
      description: "Built backend APIs and Databricks ETL pipeline automating ingestion of 90k+ cloud threat findings for security alert automation.",
      highlights: [
        "Reduced security alert triage time by 42% (projected $60k annual savings)",
        "Enabled 3x faster threat response with real-time GitHub risk data integration",
        "Surfaced critical vulnerabilities during active development",
      ],
      technologies: ["Python", "Databricks", "ServiceNow API", "PostgreSQL", "Kubernetes", "Azure DevOps", "Git"],
      image: "/deere.jpg",
    },
    {
      company: "Parker Hannifin Corporation",
      role: "Software Engineering Intern",
      duration: "May 2024 - Aug 2024",
      location: "Cleveland, OH",
      description: "Increased active usage of internal AI assistant by 30% through improved search responsiveness via RAG-based retrieval system.",
      highlights: [
        "Improved search relevance with RAG-based retrieval (30% usage increase)",
        "Reduced time-to-answer for technical queries by 60%",
        "Automated Python backend pipelines with parallel processing (8.2s → 1.1s latency)",
      ],
      technologies: ["Python", "JavaScript", "Azure AI Search", "React", "FastAPI", "Vector Embeddings"],
      image: "/parker.jpg",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-24">
      <div className="container max-w-6xl">
        <Reveal className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground">My professional journey</p>
        </Reveal>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <Reveal key={exp.company} delay={index * 90}>
                <div className="group glass-card hover-lift overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {/* Left: summary + toggle */}
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-8 md:p-12">
                      <h3 className="text-2xl md:text-3xl font-bold text-gradient">
                        {exp.role}
                      </h3>
                      <p className="mt-2 text-lg md:text-xl font-bold">
                        {exp.company}
                      </p>

                      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>

                      <button
                        onClick={() => setExpandedIndex(isExpanded ? null : index)}
                        aria-expanded={isExpanded}
                        className="glass-accent mt-7 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-accent-foreground transition-transform duration-500 ease-out-expo hover:scale-[1.04] active:scale-95"
                      >
                        {isExpanded ? "Show Less" : "Learn More"}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-500 ease-out-expo ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Animating grid rows lets the panel ease open to its natural height */}
                      <div
                        className={`grid w-full text-left transition-all duration-700 ease-out-expo ${
                          isExpanded
                            ? "grid-rows-[1fr] opacity-100 mt-8"
                            : "grid-rows-[0fr] opacity-0 mt-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="space-y-5 border-t border-white/10 pt-6">
                            <p className="text-muted-foreground">
                              {exp.description}
                            </p>

                            <div>
                              <h4 className="font-semibold mb-3">
                                Key achievements
                              </h4>
                              <ul className="space-y-2">
                                {exp.highlights.map((highlight) => (
                                  <li
                                    key={highlight}
                                    className="text-sm text-muted-foreground flex gap-2"
                                  >
                                    <span className="text-accent">•</span>
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-3">Technologies</h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/5 transition-colors duration-300 hover:border-accent/40"
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

                    {/* Right: photo */}
                    <div className="relative h-64 sm:h-80 md:h-auto md:w-[42%] shrink-0 overflow-hidden border-t border-white/10 md:border-t-0 md:border-l">
                      <img
                        src={exp.image}
                        alt={exp.company}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.05]"
                      />
                      {/* Softens the seam between photo and card */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-r md:from-black/40 md:via-transparent md:to-transparent" />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
