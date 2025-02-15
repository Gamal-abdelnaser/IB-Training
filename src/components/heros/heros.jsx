import { slideImages } from './data';
import AnimatedSection from "../../Animation/AnimatedSection";
import { useRef, useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import Title from '../title/title';
import './heros.css'
import { Link } from 'react-router-dom';
import { DarkContext } from '../darkLight/darkContext';

export default function Heros() {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);
  const [position, setPosition] = useState(0);
  const { isDark } = useContext(DarkContext);
  const intervalRef = useRef(null); // For auto-slide interval

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    startAutoSlide();
    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, []);

  const moveNext = () => {
    setPosition((prev) => (prev > -width ? prev - 300 : 0)); // Loop back to start
  };

  const movePrev = () => {
    setPosition((prev) => (prev < 0 ? prev + 300 : -width)); // Loop to last slide
  };

  // Auto-slide function
  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(moveNext, 1000); // Slide every 3 seconds
  };

  return (
    <AnimatedSection>
      <div id='heros' className={`imageSlider pt-[50px] w-full flex justify-center items-center m-auto pb-[100px] bg-PrimaryBg border-t-[1px] border-[#cccaca] "`}>
        <div className="container w-[90%] flex justify-center items-center flex-col">
          <Title color='#fff'>Our Heros</Title>

          <motion.div 
            ref={carouselRef} 
            className="carousel overflow-hidden cursor-grab w-full inline-block"
            whileTap={{ cursor: "grabbing" }}
            onMouseEnter={() => clearInterval(intervalRef.current)} // Stop auto-slide on hover
            onMouseLeave={startAutoSlide} // Resume auto-slide on leave
          >
            <motion.div 
              drag="x" 
              dragConstraints={{ right: 0, left: -width }} 
              className="inner-carousel flex"
              animate={{ x: position }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {slideImages.map((card, index) => (
                <AnimatedSection key={index}>
                  <motion.div className="item min-w-[40rem] max-[500px]:min-w-[30rem] min-h-[35rem] py-5 p-5">
                    <div className="itemContainer rounded-3xl overflow-hidden shadow-2xl border-[solid] border-[#9f9e9e] border-[2px]">
                      <div className="imgContainer">
                        <img 
                          loading="lazy" 
                          src={card.photo} 
                          alt="carousel-img" 
                          className='pointer-events-none w-full h-full object-cover rounded-[2rem]'
                        />
                        <div className="content-overlay">
                          <p className="font-takeaway tracking-wider text-center text-white text-[20px] font-bold slide-up">
                            {card.result}
                          </p>
                          <Link
                            className='text-[20px] mt-7 px-4 py-0 shadow-2xl shadow-secondary text-center font-anton rounded-3xl bg-black text-primary'
                            to="/training-details"
                          >
                            {card.program}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <h2 className='text-[30px] uppercase text-center font-bold text-white mt-[15px] '>
                      {card.name}
                    </h2>
                  </motion.div>
                </AnimatedSection>
              ))}
            </motion.div>
          </motion.div>

          <div className="flex gap-[100px] mt-0">
            <button onClick={movePrev} className="bg-primary rounded-full text-[25px] font-bold text-white px-5 py-1 text-center hover:bg-[#4d3006] transition">
              {'<'}
            </button>
            <button onClick={moveNext} className="bg-primary rounded-full text-[25px] font-bold text-white px-5 py-1 hover:bg-[#4d3006] transition">
              {'>'}
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
