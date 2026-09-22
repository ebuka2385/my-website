import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      {/* Floating glass pill that tightens as you scroll */}
      <div
        className={`container max-w-6xl rounded-full transition-all duration-700 ease-out-expo ${
          isScrolled ? "glass px-6 py-1" : "px-6 py-1 border border-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a
            href="#"
            className="font-bold text-lg transition-colors duration-300 hover:text-accent"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Chiebuka
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="group relative text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {item.label}
                {/* Underline grows from the left on hover */}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-accent to-accent-soft transition-all duration-500 ease-out-expo group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="md:hidden rounded-full p-2 transition-colors duration-300 hover:bg-white/10"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden grid transition-all duration-500 ease-out-expo ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="space-y-1 border-t border-white/10 py-3">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full rounded-lg px-3 py-2 text-left text-sm text-muted-foreground transition-colors duration-300 hover:bg-white/5 hover:text-foreground"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
