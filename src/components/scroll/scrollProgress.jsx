import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute bottom-0 left w-[99%] h-2 bg-gray-300 rounded-[30px] overflow-hidden">
      <div
        className="h-full bg-primary rounded-[30px] transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
}
