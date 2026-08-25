import { useEffect, useState } from "react";
import { Home } from "lucide-react";

export const NotFound = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 relative overflow-hidden">
      {/* Background orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-float opacity-20"
        style={{
          background:
            "radial-gradient(circle, hsl(258, 65%, 65%, 0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full animate-float opacity-15"
        style={{
          background:
            "radial-gradient(circle, hsl(190, 80%, 50%, 0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
          animationDelay: "-3s",
        }}
      />

      <div className="relative z-10 text-center max-w-lg">
        {/* 404 number */}
        <h1
          className={`text-[10rem] md:text-[14rem] font-bold font-heading leading-none gradient-text transition-all duration-1000 ${
            isVisible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-75"
          }`}
        >
          404
        </h1>

        <h2
          className={`text-2xl md:text-3xl font-bold font-heading mb-4 -mt-6 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Page Not Found
        </h2>

        <p
          className={`text-muted-foreground mb-8 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Looks like this page went on a space adventure and didn't come back.
          Let's get you home.
        </p>

        <a
          href="/"
          className={`cosmic-button inline-flex items-center gap-2 transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Home size={18} />
          Back to Home
        </a>
      </div>
    </div>
  );
};
