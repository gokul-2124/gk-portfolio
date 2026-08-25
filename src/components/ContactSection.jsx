import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "gokulkumar2124@gmail.com",
    href: "mailto:gokulkumar2124@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9677339005",
    href: "tel:+919677339005",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Madurai, Tamil Nadu, India",
    href: null,
  },
];

const socials = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/gokul-kumar-893670264/",
    label: "LinkedIn",
    color: "#0A66C2",
  },
  {
    icon: Twitter,
    href: "https://x.com/GokulKumar2124",
    label: "Twitter",
    color: "#1DA1F2",
  },
  {
    icon: Github,
    href: "https://github.com/gokul-2124",
    label: "GitHub",
    color: "#6e5494",
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      e.target.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — contact info */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold font-heading">
                Contact Information
              </h3>

              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-105">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-medium text-sm text-muted-foreground">
                        {item.title}
                      </h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-foreground font-medium">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="pt-6">
                <h4 className="font-medium mb-4 text-sm text-muted-foreground uppercase tracking-wider">
                  Connect With Me
                </h4>
                <div className="flex gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-3 rounded-xl glass-card text-foreground/70 transition-all duration-300 hover:scale-110 hover:text-white"
                      style={{
                        "--hover-bg": social.color,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = social.color;
                        e.currentTarget.style.borderColor = social.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "";
                        e.currentTarget.style.borderColor = "";
                      }}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — contact form */}
          <ScrollReveal direction="right">
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 space-y-6"
            >
              <h3 className="text-2xl font-semibold font-heading mb-2">
                Send a Message
              </h3>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-muted-foreground"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 placeholder:text-muted-foreground/50"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-muted-foreground"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 placeholder:text-muted-foreground/50"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-muted-foreground"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 resize-none placeholder:text-muted-foreground/50"
                  placeholder="Hello, I'd like to discuss..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
