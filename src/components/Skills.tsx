import Reveal from "@/components/Reveal";

const Skills = () => {
  const skillGroups = [
    {
      title: "Languages",
      skills: ["TypeScript", "JavaScript", "Python", "Java", "Swift", "SQL"],
    },
    {
      title: "Frontend",
      skills: ["React", "React Native", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Fastify", "FastAPI", "REST APIs"],
    },
    {
      title: "Data",
      skills: ["PostgreSQL", "Prisma", "Redis", "MongoDB", "Databricks"],
    },
    {
      title: "AI",
      skills: ["Claude API", "OpenAI API", "RAG", "Vector Embeddings", "Function Calling"],
    },
    {
      title: "Infrastructure",
      skills: ["Docker", "Kubernetes", "AWS", "Azure", "Git", "Linux"],
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container max-w-6xl">
        <Reveal className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground">
            Technologies and tools I work with
          </p>
        </Reveal>

        <div className="glass-card overflow-hidden">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 70}>
              <div
                className={`grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-3 sm:gap-10 px-6 py-6 md:px-8 transition-colors duration-500 hover:bg-white/[0.03] ${
                  index > 0 ? "border-t border-white/10" : ""
                }`}
              >
                <h3 className="text-sm uppercase tracking-wide text-muted-foreground">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm transition-all duration-500 ease-out-expo hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
