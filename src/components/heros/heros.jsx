import { slideImages } from './data';
import AnimatedSection from "../../Animation/AnimatedSection";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Title from '../title/title';
import './heros.css'
export default function Heros() {

  const carouselRef = useRef();
  const [width, setWidth] = useState(0);
  const [position, setPosition] = useState(0); // موضع الحركة الحالي

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  // دالة لتحريك السلايدر لليسار (Next)
  const moveNext = () => {
    if (position > -width) {
        setPosition(position - 300); // تحريك بمقدار 300 بكسل
    }
  };

  // دالة لتحريك السلايدر لليمين (Prev)
  const movePrev = () => {
    if (position < 0) {
        setPosition(position + 300);
    }
  };


  // Using a query hook automatically fetches data and returns query values
  // const { data, error, isLoading } = useGetgamalByNameQuery('/heroes')
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
  // console.log(data);



  return (
    <AnimatedSection>
        <div id='heros' className="imageSlider pt-[50px] w-full flex justify-center items-center m-auto pb-[100px] bg-[#161C24] ">
            <div className="container w-[90%] flex justify-center items-center flex-col">
                
                <Title color='#fff' >Our Heros </Title>

                {/* الكاروسيل */}
                <motion.div ref={carouselRef} className="carousel overflow-hidden cursor-grab w-full inline-block" whileTap={{ cursor: "grabbing" }}>
                    <motion.div 
                        drag="x" 
                        dragConstraints={{ right: 0, left: -width }} 
                        className="inner-carousel flex"
                        animate={{ x: position }} // تحديد الموضع الحالي بناءً على state
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        {slideImages.map((card, index) => (
                            <AnimatedSection key={index}>
                                <motion.div className="item min-w-[35rem] min-h-[30rem] py-5 p-5">
                                    <div className="itemContainer bg-white rounded-3xl p-8 overflow-hidden shadow-2xl border-[solid] border-[#9f9e9e] border-[2px] ">
                                        <img loading="lazy" src={card.photo} alt="carousel-img" className='pointer-events-none max-w-full max-h-full object-contain rounded-[2rem]' />
                                        <div className="content items-center text-center">
                                            <p className='text-[20px] mt-[20px] text-right font-bodoni text-[#5a5a5a] tracking-[1.5px]'>{card.store}</p>
                                            <div className='w-full h-[3px] bg-[#000] my-[10px]'></div>
                                            
                                            <h2 className='text-[20px]  text-center font-bold text-secondary mb-[5px]'>{card.program}</h2>
                                            <div className='w-full h-[3px] bg-[#000] my-[10px]'></div>
                                            <h2 className='text-[30px] uppercase text-center font-bold text-[#161C24]  mb-[5px]'>{card.name}</h2>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </motion.div>
                </motion.div>

                {/* أزرار التحكم */}
                <div className="flex gap-[100px] mt-3">
                    <button onClick={movePrev} className="bg-primary rounded-full text-[25px] font-bold text-white px-5 py-1 text-center  hover:bg-[#4d3006] transition">
                        {'<'}
                    </button>
                    <button onClick={moveNext} className="bg-primary rounded-full text-[25px] font-bold text-white px-5 py-1  hover:bg-[#4d3006] transition">
                        {'>'}
                    </button>
                </div>
            </div>
        </div>
    </AnimatedSection>
  );
  }
