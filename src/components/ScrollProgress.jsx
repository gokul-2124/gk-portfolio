import { useScrollProgress } from "@/hooks/useScrollProgress";

export const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[100] bg-transparent">
      <div
        className="h-full rounded-r-full transition-all duration-150 ease-out"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, hsl(258, 65%, 65%), hsl(190, 80%, 50%), hsl(330, 80%, 65%))",
          boxShadow: "0 0 10px hsl(258, 65%, 65%, 0.5)",
        }}
      />
    </div>
  );
};
