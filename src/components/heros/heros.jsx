
import { slideImages } from './data';
import AnimatedSection from "../../Animation/AnimatedSection";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Title from '../title/title';
import './heros.css'
import { Link } from 'react-router-dom';

export default function Heros() {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  const moveNext = () => {
    if (position > -width) {
      setPosition(position - 300);
    }
  };

  const movePrev = () => {
    if (position < 0) {
      setPosition(position + 300);
    }
  };

  return (
    <AnimatedSection>
      <div id='heros' className="imageSlider pt-[50px] w-full flex justify-center items-center m-auto pb-[100px] bg-[#161C24]">
        <div className="container w-[90%] flex justify-center items-center flex-col">
          <Title color='#fff'>Our Heros</Title>

          <motion.div ref={carouselRef} className="carousel overflow-hidden cursor-grab w-full inline-block" whileTap={{ cursor: "grabbing" }}>
            <motion.div 
              drag="x" 
              dragConstraints={{ right: 0, left: -width }} 
              className="inner-carousel flex"
              animate={{ x: position }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {slideImages.map((card, index) => (
                <AnimatedSection key={index}>
                  <motion.div className="item min-w-[35rem] min-h-[30rem] py-5 p-5">
                    <div className="itemContainer rounded-3xl overflow-hidden shadow-2xl border-[solid] border-[#9f9e9e] border-[2px]">
                      <div className="imgContainer">
                        <img 
                          loading="lazy" 
                          src={card.photo} 
                          alt="carousel-img" 
                          className='pointer-events-none w-full h-full object-cover rounded-[2rem]'
                        />
                        <div className="content-overlay">
                            <p className="font-takeaway tracking-wider text-center  text-white text-[20px] mt- font-bold slide-up">
                              {card.result}
                            </p>
                            <Link
                              className='text-[20px] mt-7 px-4 py-2 shadow-2xl shadow-secondary text-center font-anton rounded-3xl bg-black text-primary'
                              to="/training-details"
                            >
                              {card.program}
                            </Link>
                        </div>
                      </div>
                    </div>
                          <h2 className='text-[30px]  uppercase text-center font-bold text-white mt-[15px] '>
                            {card.name}
                          </h2>
                    
                  </motion.div>
                </AnimatedSection>
              ))}
            </motion.div>
          </motion.div>

          <div className="flex gap-[100px] mt-3">
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