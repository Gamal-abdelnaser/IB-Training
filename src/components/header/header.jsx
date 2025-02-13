/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";
import ScrollProgressBar from '../scroll/scrollProgress';
import ThemeToggle from "../darkLight/darkLight";
import logoImg from '../../assets/logos/1.svg'
import { useState } from 'react';
import './header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { paths: "/", name: "Home", isRoute: true },
    { paths: "#coatches", name: "Coatches", isRoute: false },
    { paths: "#heros", name: "Heros", isRoute: false },
    { paths: "#programs", name: "Programs", isRoute: false },
    { paths: "/calcolator", name: "Calorie Calculator", isRoute: true },
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

    
    <header className="header font-futura font-bold  fixed w-full top-0 bg-[#fff] flex justify-center items-center border-b border-solid shadow-[0_10px_15px_rgba(0,0,0,0.25),0_5px_5px_rgba(0,0,0,0.22)] rounded-[10px] z-[1000] ">
      <ScrollProgressBar />
      <div className=" w-[95%] flex justify-between items-center px-[30px] py-[10px]">
        {/* Logo */}
        <Logo />

        <div className="flex xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-auto sm:gap-5 justify-between items-center  ">
          {/* Navigation Links */}
          <NavigationLinks navItems={navItems} handleNavigation={handleNavigation} />
          {/* Menu Button for Small Screens */}
          <MenuIcon isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <ThemeToggle />
        </div>
        
        {/* Dropdown Menu for Small Screens */}
        {isMenuOpen && (
          <SmallMenu navItems={navItems} handleNavigation={handleNavigation}  />
        )}

        
      </div>
    </header>
    
  );
}   

function Logo() {
  return (
    <div className="logo xl:w-[35px] lg:w-[35px] sm:w-[35px] w-[30px]">
      <Link to="/" className="w-full"><img src={logoImg} alt="LOGO" className="w-full" /></Link>
    </div>
  )
}

function NavigationLinks({ navItems , handleNavigation }) {
  return (
    <ul className="sm:hidden ul1 xl:text-[20px] lg:text-[18px] md:text-[16px] max-[1300px]:text-[10px]  text-[3px] font-bold lg:w-[90%] md:w-[95%] md:flex justify-between no-underline px-0 hidden">
      {navItems.map((item, index) => (
        <li key={index}>
          <button
            className="no-underline xl:text-[18px] lg:text-[16px] md:text-[14px]  text-black font-semibold transition duration-300 hover:text-[#633f08] bg-transparent border-none cursor-pointer"
            onClick={() => handleNavigation(item.paths)}
            >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  )
}

function MenuIcon ({isMenuOpen,setIsMenuOpen}) {
  return (
     <button className="md:hidden text-xl font-bold px-2 py-1.5 rounded-lg" onClick={() => setIsMenuOpen((e) => !e)}>
        <div className="flex flex-col gap-1 transition-all duration-500 ease-in-out">
          <span className={`h-1 bg-[#323232] ${isMenuOpen ? "w-3" : "w-6"} transition-all duration-500 ease-in-out rounded`}></span>
          <span className="w-6 h-1 bg-[#323232] transition-all duration-500 ease-in-out rounded"></span>
          <span className={`h-1 bg-[#323232] ${isMenuOpen ? "w-3" : "w-6"} transition-all duration-500 ease-in-out rounded`}></span>
        </div>
      </button>
  )
}

function SmallMenu( {navItems , handleNavigation}) {
  return (
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
  )
}