import { useState, useEffect } from 'react';
import UpArrow from '../../assets/icons/up-arrow.png';
// import ScrollProgressBar from './ScrollProgressBar';

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY >= 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* <ScrollProgressBar /> */}
      <div className={`fixed bottom-5 right-5 max-md:right-3 flex justify-center items-center bg-secondary rounded-full w-auto p-2 shadow-lg ${isVisible ? "block" : "hidden"}`}>
        <button
          className={`text-black font-semibold w-[40px] max-md:w-[30px] rounded-xl transition-transform transform hover:scale-110 focus:outline-none `}
          onClick={handleClick}
        >
          <img src={UpArrow} alt="Scroll to top" className="w-full h-full" />
        </button>
      </div>
    </>
  );
}
