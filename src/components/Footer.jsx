import { ArrowUp, Github, Heart, Linkedin, Twitter } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/gokul-kumar-893670264/",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://x.com/GokulKumar2124",
    label: "Twitter",
  },
  {
    icon: Github,
    href: "https://github.com/gokul-2124",
    label: "GitHub",
  },
];

export const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/50 bg-card/50 backdrop-blur-sm">
      {/* Gradient top border */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(258, 65%, 65%, 0.5), hsl(190, 80%, 50%, 0.5), transparent)",
        }}
      />

      <div className="container mx-auto max-w-5xl py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-3">
            <a href="#hero" className="text-2xl font-bold font-heading gradient-text">
              GK.dev
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full-Stack Developer building impactful digital solutions with
              modern web technologies.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold font-heading mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold font-heading mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-lg glass-card text-foreground/60 hover:text-primary hover:border-primary/30 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            &copy; {new Date().getFullYear()} Gokul Kumar. Built with{" "}
            <Heart size={14} className="text-red-400 inline" fill="currentColor" /> and React
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full glass-card text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};
