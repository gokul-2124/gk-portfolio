import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateMeteors();
  }, []);

  const generateMeteors = () => {
    const newMeteors = [];
    for (let i = 0; i < 3; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 4,
      });
    }
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* CSS gradient star field — replaces 100+ individual DOM elements */}
      <div
        className="absolute inset-0 opacity-60 dark:opacity-100 transition-opacity duration-500"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.8) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 25% 45%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 40% 10%, rgba(255,255,255,0.7) 0%, transparent 100%),
            radial-gradient(2px 2px at 55% 70%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 70% 30%, rgba(255,255,255,0.8) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 85% 55%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 15% 75%, rgba(255,255,255,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 30% 90%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(2px 2px at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 65% 85%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 80% 15%, rgba(255,255,255,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 95% 40%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 5% 55%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(2px 2px at 20% 35%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 45% 95%, rgba(255,255,255,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 60% 5%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 75% 65%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 90% 80%, rgba(255,255,255,0.8) 0%, transparent 100%),
            radial-gradient(1px 1px at 35% 60%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(2px 2px at 50% 25%, rgba(255,255,255,0.3) 0%, transparent 100%)
          `,
        }}
      />

      {/* Animated gradient mesh orbs */}
      <div
        className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full animate-float opacity-20 dark:opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(258, 65%, 65%, 0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full animate-float opacity-15 dark:opacity-25"
        style={{
          background: "radial-gradient(circle, hsl(190, 80%, 50%, 0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
          animationDelay: "-3s",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full animate-pulse-subtle opacity-10 dark:opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(330, 80%, 65%, 0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Cinematic meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 60 + "px",
            height: meteor.size + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
