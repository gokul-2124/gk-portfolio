import { Briefcase, Code, Palette, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const specializations = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building responsive, performant web applications using React, Node.js, and modern frameworks.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Designing intuitive interfaces with seamless user experiences and attention to visual detail.",
  },
  {
    icon: Briefcase,
    title: "Real-World Projects",
    description:
      "Developed and deployed full-stack projects with real-world impact and production-grade features.",
  },
];

const stats = [
  { value: "3+", label: "Projects Deployed" },
  { value: "5+", label: "Technologies" },
  { value: "∞", label: "Curiosity" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            A snapshot of who I am and what drives me
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — text content */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-sm text-primary">
                <Sparkles size={14} />
                Full-Stack Developer & Tech Creator
              </div>

              <p className="text-muted-foreground leading-relaxed">
                I'm a Computer Science Engineer with a deep curiosity for how
                technology can shape the world around us. Throughout my journey,
                I've honed my skills in JavaScript, Java, NoSQL and MySQL as
                creative mediums to build meaningful and practical solutions.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                My passion lies in applying technology to address real-world
                challenges through well-structured, efficient, and user-focused
                applications. I'm committed to continuous learning and thrive in
                environments where innovation and collaboration come together.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-xl glass-card"
                  >
                    <div className="text-2xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#contact" className="cosmic-button text-center">
                  Get In Touch
                </a>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/14DPsy2XsgMCNgExPpyfMCNmebl7X7LXO/view?usp=sharing"
                  className="cosmic-button-outline text-center"
                >
                  Download CV
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — specialization cards */}
          <div className="space-y-5">
            {specializations.map((item, index) => (
              <ScrollReveal
                key={item.title}
                direction="right"
                delay={index * 150}
              >
                <div className="glass-card-hover p-6 flex items-start gap-5">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg font-heading mb-1">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
