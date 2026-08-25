import { useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";

const skills = [
  // Languages
  { name: "JavaScript", category: "languages", color: "#F7DF1E", icon: "JS" },
  { name: "Java", category: "languages", color: "#ED8B00", icon: "JV" },
  { name: "HTML/CSS", category: "languages", color: "#E34F26", icon: "HC" },

  // Technologies
  { name: "React", category: "technologies", color: "#61DAFB", icon: "Re" },
  { name: "Tailwind CSS", category: "technologies", color: "#06B6D4", icon: "TW" },
  { name: "Node.js", category: "technologies", color: "#339933", icon: "No" },
  { name: "Express", category: "technologies", color: "#68A063", icon: "Ex" },
  { name: "MongoDB", category: "technologies", color: "#47A248", icon: "Mo" },
  { name: "MySQL", category: "technologies", color: "#4479A1", icon: "SQ" },
  { name: "PostgreSQL", category: "technologies", color: "#4169E1", icon: "PG" },
  { name: "Spring Boot", category: "technologies", color: "#6DB33F", icon: "SB" },

  // Tools
  { name: "Git / GitHub", category: "tools", color: "#F05032", icon: "Gt" },
  { name: "Vercel", category: "tools", color: "#000000", icon: "Vc" },
  { name: "VS Code", category: "tools", color: "#007ACC", icon: "VS" },
  { name: "Postman", category: "tools", color: "#FF6C37", icon: "PM" },
  { name: "IntelliJ IDEA", category: "tools", color: "#FE315D", icon: "IJ" },
  { name: "Eclipse", category: "tools", color: "#2C2255", icon: "Ec" },
];

const categories = ["all", "languages", "technologies", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="section-padding bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-heading">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </ScrollReveal>

        {/* Category filters */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "glass-card text-muted-foreground hover:text-foreground hover:border-primary/30"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <ScrollReveal key={skill.name} direction="scale" delay={index * 60}>
              <div
                className="group glass-card-hover p-5 flex flex-col items-center gap-3 cursor-default"
                style={{
                  "--skill-color": skill.color,
                }}
              >
                {/* Icon circle */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-lg font-bold font-heading transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{
                    backgroundColor: `${skill.color}15`,
                    color: skill.color,
                    boxShadow: `0 0 0 1px ${skill.color}20`,
                  }}
                >
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-foreground text-center">
                  {skill.name}
                </span>
                {/* Subtle glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}08 0%, transparent 70%)`,
                  }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
