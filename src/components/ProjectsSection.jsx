import { ArrowRight, ExternalLink, Github, Star } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const projects = [
  {
    id: 1,
    title: "Codlet",
    description:
      "A real-time collaborative code editor enabling multiple developers to write and edit code simultaneously with live sync.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Node", "Express", "Socket.IO"],
    demoUrl: "https://codlet-gk.vercel.app/",
    githubUrl: "https://github.com/karthi9772/CodLet",
    featured: true,
  },
  {
    id: 2,
    title: "AIMG",
    description:
      "An AI-powered image generation platform that transforms text prompts into stunning visuals using ClipDrop API.",
    image: "/projects/project2.png",
    tags: ["React", "Node", "Express", "MongoDB", "ClipDrop API"],
    demoUrl: "https://aimg-pi.vercel.app/",
    githubUrl: "https://github.com/gokul-2124/aimg",
    featured: false,
  },
  {
    id: 3,
    title: "GKonomics",
    description:
      "A full-stack expense tracker application built with Spring Boot backend, featuring dashboards, category-wise analytics, budget management, and spending trend visualizations.",
    image: "/projects/project4.png",
    tags: ["React", "Spring Boot", "Java", "REST API"],
    demoUrl: "https://gkonomics-front.vercel.app/",
    githubUrl: "https://github.com/gokul-2124/gkonomics-back.git",
    featured: false,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Each project was carefully crafted with attention to detail,
            performance, and user experience.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} direction="up" delay={index * 150}>
              <div className="group relative glass-card overflow-hidden h-full flex flex-col">
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold backdrop-blur-sm">
                    <Star size={12} fill="currentColor" />
                    Featured
                  </div>
                )}

                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end justify-center pb-4 gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full glass-card text-foreground hover:text-primary hover:scale-110 transition-all duration-200"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full glass-card text-foreground hover:text-primary hover:scale-110 transition-all duration-200"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Links row */}
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border/50">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:underline flex items-center gap-1 transition-colors"
                    >
                      Live Demo
                      <ExternalLink size={14} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                    >
                      Source Code
                      <Github size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-14">
            <a
              className="cosmic-button-outline inline-flex items-center gap-2"
              target="_blank"
              href="https://github.com/gokul-2124"
            >
              Explore More on GitHub
              <ArrowRight size={16} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
