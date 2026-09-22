import Reveal from "@/components/Reveal";

const Education = () => {
  const coursework = [
    "Data Structures",
    "Algorithms",
    "Computer Networks",
    "Full Stack Development",
    "Software Engineering",
  ];

  return (
    <section id="education" className="py-24">
      <div className="container max-w-6xl">
        <Reveal className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground">Background & coursework</p>
        </Reveal>

        <Reveal delay={90}>
          <div className="glass-card hover-lift p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-muted-foreground mb-2">
                  Case Western Reserve University
                </p>
                <p className="text-sm text-muted-foreground">
                  Minor in Data Science
                </p>
              </div>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <div>
                  <span className="font-semibold text-foreground">
                    Expected Graduation
                  </span>
                  <p>May 2027</p>
                </div>
                <div>
                  <span className="font-semibold text-foreground">GPA</span>
                  <p className="text-gradient font-semibold">3.70</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <h4 className="font-semibold mb-4">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm transition-all duration-500 ease-out-expo hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Education;
