import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ebuka2385", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/chiebuka-onyejesi/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:chiebukaonyejesi@gmail.com", label: "Email" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20">
      {/* Ambient colour drifting behind the content */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="aurora-blob animate-drift animate-aurora -top-24 left-[8%] h-[26rem] w-[26rem] bg-white/[0.07]" />
        <div className="aurora-blob animate-drift-slow bottom-[-6rem] right-[4%] h-[30rem] w-[30rem] bg-white/[0.05]" />
      </div>

      <div className="container max-w-6xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Reveal>
                <span className="glass inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  3&times; SWE Intern &middot; Founder of Helthy
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Hi, I'm{" "}
                  <span className="block text-gradient">Chiebuka</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founder of Helthy, building the next-gen fitness platform helping 5k+ people reach their fitness goals. 
                </p>
              </Reveal>
            </div>

            {/* CTA Buttons */}
            <Reveal delay={240}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="/Chiebuka-Onyejesi-Resume.pdf" download>
                  <Button
                    size="lg"
                    className="glass-accent w-full sm:w-auto rounded-full border-0 text-accent-foreground transition-transform duration-500 ease-out-expo hover:scale-[1.04] active:scale-95"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </a>
                <a href="#projects">
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass w-full sm:w-auto rounded-full border-0 transition-transform duration-500 ease-out-expo hover:scale-[1.04] active:scale-95"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Work
                  </Button>
                </a>
              </div>
            </Reveal>

            {/* Social Links */}
            <Reveal delay={320}>
              <div className="flex gap-4 pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-full p-3 transition-transform duration-500 ease-out-expo hover:scale-110 hover:text-accent"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: Image */}
          <Reveal delay={200} className="flex items-center justify-center">
            <div className="relative">
              {/* Accent halo behind the frame */}
              <div
                className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-white/20 to-white/5 blur-2xl animate-aurora"
                aria-hidden="true"
              />
              <div className="glass relative w-full max-w-[16rem] sm:max-w-xs lg:max-w-md aspect-[2/3] overflow-hidden rounded-[1.75rem] p-1.5">
                <img
                  src="/headshot.jpeg"
                  alt="Chiebuka Onyejesi"
                  className="h-full w-full rounded-[1.4rem] object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
