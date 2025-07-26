import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "chiebukaonyejesi@gmail.com",
      href: "mailto:chiebukaonyejesi@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "216-457-6629",
      href: "tel:+12164576629"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cleveland, OH, USA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/chiebukaonyejesi",
      username: "@chiebukaonyejesi"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/chiebukaonyejesi",
      username: "Chiebuka Onyejesi"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always excited to connect and discuss new opportunities. 
              Let's create something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold font-space text-primary">
                  Let's Start a Conversation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or just want to 
                  say hello, I'd love to hear from you. I'm currently open to new opportunities 
                  and exciting challenges.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center p-4 glass rounded-lg hover-lift group transition-all duration-300"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <contact.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-foreground">{contact.label}</p>
                      <p className="text-muted-foreground">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-primary">Connect with me</h4>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 glass rounded-lg hover-lift group transition-all duration-300"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <social.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="ml-4">
                        <p className="font-medium text-foreground">{social.label}</p>
                        <p className="text-muted-foreground">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* University Address */}
              <div className="glass p-6 rounded-lg">
                <h4 className="font-semibold text-primary mb-3">University Address</h4>
                <div className="space-y-1 text-muted-foreground">
                  <p>Case Western Reserve University</p>
                  <p>Cleveland, OH 44106</p>
                  <p>United States</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass p-8 rounded-xl">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-space text-primary">
                    Send a Message
                  </h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        First Name
                      </label>
                      <Input 
                        placeholder="John" 
                        className="bg-background/50 border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Doe" 
                        className="bg-background/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      placeholder="john.doe@example.com" 
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <Input 
                      placeholder="Let's discuss an opportunity" 
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project or opportunity..."
                      rows={6}
                      className="bg-background/50 border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button variant="glow" size="lg" className="w-full group">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;