import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section highlighting via IntersectionObserver
  useEffect(() => {
    const sections = navItems.map((item) =>
      document.querySelector(item.href)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-500",
        isScrolled
          ? "py-3 bg-background/70 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center gap-1 group"
          href="#hero"
        >
          <span className="text-2xl font-heading font-bold gradient-text transition-all duration-300">
            GK
          </span>
          <span className="text-foreground font-heading font-semibold hidden sm:inline">
            .dev
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                activeSection === item.href.slice(1)
                  ? "text-primary bg-primary/10"
                  : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
              )}
            >
              {item.name}
              {activeSection === item.href.slice(1) && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
              )}
            </a>
          ))}

          <div className="ml-3 pl-3 border-l border-border/50 flex items-center gap-2">
            <ThemeToggle />
            <a href="#contact" className="cosmic-button text-sm !px-5 !py-2">
              Hire Me
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50 rounded-lg hover:bg-foreground/5 transition-colors"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center",
            "transition-all duration-400 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center space-y-6 text-xl">
            {navItems.map((item, i) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "font-medium transition-all duration-300",
                  activeSection === item.href.slice(1)
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                )}
                style={{ transitionDelay: isMenuOpen ? `${i * 50}ms` : "0ms" }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="cosmic-button mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
