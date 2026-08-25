import { ArrowDown, Download } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "Creative Technologist",
  "Problem Solver",
  "UI/UX Enthusiast",
];

export const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-8">
          {/* Greeting badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </div>

          {/* Main heading */}
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text-shimmer">GokulKumar</span>
          </h1>

          {/* Animated role */}
          <div
            className={`h-10 flex items-center justify-center transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            <span className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
              I'm a{" "}
              <span
                key={currentRole}
                className="inline-block text-primary font-semibold animate-fade-in"
              >
                {roles[currentRole]}
              </span>
            </span>
          </div>

          {/* Tagline */}
          <p
            className={`text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-450 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            Turning real-world challenges into impactful digital solutions with
            modern web technologies and clean, scalable code.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            <a href="#projects" className="cosmic-button flex items-center gap-2">
              View My Work
            </a>
            <a
              href="https://drive.google.com/file/d/1HltJxMvoWI4okNBVrUW4jT6E6erv0MpL/view?usp=sharing"
              target="_blank"
              className="cosmic-button-outline flex items-center gap-2"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-gentle">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};
