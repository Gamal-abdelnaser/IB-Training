// ThemeToggle.jsx
import  { useEffect, useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Icons for light and dark mode
import { DarkContext } from "./darkContext";

const ThemeToggle = () => {
  
  // State to manage the theme
  const { isDark , setIsDark } = useContext(DarkContext);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDark((prevMode) => !prevMode);
  };

  // Effect to apply the theme and save it to localStorage
  useEffect(() => {
    if (isDark) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Check localStorage for saved theme preference on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
    }
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full text-gray-800 transition-all duration-300`}
    >
      {isDark ? <FaMoon className="text-[18px] sm:text-[20px] md:text-[16px] lg:text-[19px] "/> :  <FaSun className="text-[18px] sm:text-[20px] md:text-[16px] lg:text-[19px] "  /> }
    </button>
  );
};

export default ThemeToggle;