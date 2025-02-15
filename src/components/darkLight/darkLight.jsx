// ThemeToggle.jsx
import { useEffect, useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Icons for light and dark mode
import { DarkContext } from "./darkContext";

const ThemeToggle = () => {
  const { isDark, setIsDark } = useContext(DarkContext);

  // Toggle Theme Function
  const toggleTheme = () => {
    setIsDark((prevMode) => !prevMode);
    localStorage.setItem("theme", !isDark ? "dark" : "light");
  };

  // Check localStorage for saved theme preference on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }
  }, [setIsDark]);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all duration-500 relative w-10 h-10 flex items-center justify-center"
    >
      <div className="relative w-full h-full">
        {/* Moon Icon (Dark Mode) */}
        <FaMoon
          className={`absolute inset-0 transition-all duration-500 transform ${
            isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 rotate-180"
          } text-[20px] text-gray-800`}
        />
        {/* Sun Icon (Light Mode) */}
        <FaSun
          className={`absolute inset-0 transition-all duration-500 transform ${
            isDark ? "opacity-0 scale-0 rotate-180" : "opacity-100 scale-100 rotate-0"
          } text-[20px] text-primary`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
