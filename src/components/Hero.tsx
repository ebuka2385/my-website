import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/chiebukaonyejesi", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/chiebukaonyejesi", label: "LinkedIn" },
    { icon: Mail, href: "mailto:chiebukaonyejesi@gmail.com", label: "Email" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary-glow/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="space-y-6 animate-slide-in-up">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-space">
                <span className="block text-foreground">Hi, I'm</span>
                <span className="block gradient-text glow-text">Chiebuka</span>
              </h1>
              
              <div className="space-y-2">
                <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
                  Software Engineer & CS Student
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Computer Science major at Case Western Reserve University, passionate about creating 
                  innovative solutions and building the future through technology.
                </p>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button variant="glow" size="lg" className="group">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button variant="glass" size="lg" className="group">
                <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-45 transition-transform" />
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full glass hover-lift hover:glow-purple transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default Hero;