import { Mail, Phone, Github, Linkedin } from "lucide-react";
import Reveal from "@/components/Reveal";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Let's connect
              </h2>
              <p className="text-muted-foreground mb-12">
                I'm always interested in hearing about new projects and opportunities.
              </p>
            </Reveal>

            <div className="space-y-4 mb-12">
              <Reveal delay={90}>
                <a
                  href="mailto:chiebukaonyejesi@gmail.com"
                  className="glass-card hover-lift flex items-center gap-4 p-4"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 text-accent" />
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium">chiebukaonyejesi@gmail.com</div>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={160}>
                <a
                  href="tel:+12164576629"
                  className="glass-card hover-lift flex items-center gap-4 p-4"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 text-accent" />
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="font-medium">+1 (216) 457-6629</div>
                  </div>
                </a>
              </Reveal>
            </div>

            <Reveal delay={230}>
              <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/ebuka2385"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-full p-3 transition-transform duration-500 ease-out-expo hover:scale-110 hover:text-accent"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/chiebuka-onyejesi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-full p-3 transition-transform duration-500 ease-out-expo hover:scale-110 hover:text-accent"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140} className="hidden lg:flex justify-center">
            <div className="relative">
              <div
                className="absolute -inset-5 rounded-[2rem] bg-gradient-to-tr from-white/15 to-white/5 blur-2xl animate-aurora"
                aria-hidden="true"
              />
              <div className="glass relative overflow-hidden rounded-[1.75rem] p-1.5">
                <img
                  src="/connect.jpeg"
                  alt="Connect"
                  loading="lazy"
                  className="w-full max-w-sm rounded-[1.4rem]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
