
import { Link, useNavigate } from "react-router-dom";
import logoImg from '../../assets/logos/1.svg'
import ScrollProgressBar from '../scroll/scrollProgress';
import { useState } from 'react';
import './header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { paths: "/", name: "Home", isRoute: true },
    { paths: "#programs", name: "Programs", isRoute: false },
    { paths: "#coatches", name: "Coatches", isRoute: false },
    { paths: "#heros", name: "Heros", isRoute: false },
    { paths: "/aboutUs", name: "About Us", isRoute: true }
  ];

  // دالة للانتقال إلى القسم المطلوب
  const handleNavigation = (path) => {
    if (path.startsWith("#")) {
      navigate("/"); // الانتقال إلى الصفحة الرئيسية
      setTimeout(() => {
        const sectionId = path.substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); 
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
  };

  return (

    
    <header className="header  fixed w-[100%] top-0 bg-[#fff] flex justify-center items-center border-b border-solid shadow-[0_10px_15px_rgba(0,0,0,0.25),0_5px_5px_rgba(0,0,0,0.22)] rounded-[10px] z-[1000] ">
      <ScrollProgressBar />
      <nav className="w-[95%] flex justify-between items-center px-[30px] py-[10px]">
        
        {/* Logo */}
        <div className="logo xl:w-[40px] lg:w-[40px] sm:w-[35px] w-[30px]">
          <Link to="/" className="w-full"><img src={logoImg} alt="LOGO" className="w-full" /></Link>
        </div>

        {/* Menu Button for Small Screens */}
        <button className="md:hidden text-xl font-bold px-2 py-1.5 rounded-lg" onClick={() => setIsMenuOpen((e) => !e)}>
          <div className="flex flex-col gap-1 transition-all duration-500 ease-in-out">
            <span className={`h-1 bg-[#323232] ${isMenuOpen ? "w-3" : "w-6"} transition-all duration-500 ease-in-out rounded`}></span>
            <span className="w-6 h-1 bg-[#323232] transition-all duration-500 ease-in-out rounded"></span>
            <span className={`h-1 bg-[#323232] ${isMenuOpen ? "w-3" : "w-6"} transition-all duration-500 ease-in-out rounded`}></span>
          </div>
        </button>

        {/* Navigation Links */}
        <ul className="ul1 xl:text-[22px] lg:text-[18px] md:text-[18px] font-bold lg:w-[50%] md:w-[55%] md:flex justify-between no-underline px-0 hidden">
          {navItems.map((item, index) => (
            <li key={index}>
              <button
                className="no-underline xl:text-[22px] lg:text-[18px] md:text-[18px] text-black font-semibold transition duration-300 hover:text-[#633f08] bg-transparent border-none cursor-pointer"
                onClick={() => handleNavigation(item.paths)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Dropdown Menu for Small Screens */}
        {isMenuOpen && (
          <ul className="absolute top-[70px] left-[2.5%] w-[95%] gap-2 rounded-lg bg-[#f0efef] text-center md:hidden shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)]">
            {navItems.map((item, index) => (
              <li key={index} className="py-2 border-b w-[100%] rounded-xl text-black hover:text-white transition-all duration-200 hover:bg-[#633f08]">
                <button
                  className="no-underline text-[20px] w-full font-bold bg-transparent border-none cursor-pointer"
                  onClick={() => handleNavigation(item.paths)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
    
  );
}   