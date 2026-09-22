import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { icon: Github, href: "https://github.com/ebuka2385", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/chiebuka-onyejesi/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:chiebukaonyejesi@gmail.com", label: "Email" },
  ];

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-2 text-gradient">Chiebuka</h3>
            <p className="text-sm text-muted-foreground">
              Software engineer building elegant solutions with modern technology.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                { href: "#", label: "Home" },
                { href: "#experience", label: "Experience" },
                { href: "#projects", label: "Projects" },
                { href: "#skills", label: "Skills" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground transition-colors duration-300 hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Connect</h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="glass rounded-full p-2.5 transition-transform duration-500 ease-out-expo hover:scale-110 hover:text-accent"
                  title={social.label}
                >
                  <social.icon className="w-4 h-4" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Chiebuka Onyejesi. Built with React.</p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 transition-colors duration-300 hover:text-foreground"
          >
            Back to top
            <ArrowUp className="w-4 h-4 transition-transform duration-500 ease-out-expo group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
