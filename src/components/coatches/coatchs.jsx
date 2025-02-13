import AnimatedSection from '../../Animation/AnimatedSection'
import { DarkContext } from '../darkLight/darkContext';
import { useContext } from 'react';
import Title from '../title/title'

import { trainers } from './data';
import { useNavigate } from 'react-router-dom';
import { CoatchesContext } from './coatchesContext';

export default function Coachs() {
  const { isDark } = useContext(DarkContext);
  return (
    <AnimatedSection >
    <div id='coatches' className={`coachs flex justify-center items-center flex-col text-center w-full ${ isDark ? 'bg-PrimaryBg' : 'bg-white'}  `}>
      <div className="container w-[95%] flex justify-center justify-items-center  items-center  flex-col px-0 py-[50px]">
        
        {/* Section Title */}
        <Title color={`${ isDark ? '#fff' : '#000'}`}>Our team</Title>

        {/* Coach Cards */}
        <div className="box-container  justify-items-center grid  items-center w-full grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[20px] px-[50px] py-0 justify-center">    
          <ListTips />
        </div>
      </div>
      
    </div>
  </AnimatedSection>
  )
}
function ListTips() {
  const { setSelectedCoatch } = useContext(CoatchesContext);
  const navigate = useNavigate();

  return (
    <>
      {
        trainers.map((trainer , index) => {
          return (
            <AnimatedSection key={index} >
            <div 
              key={index}
              onClick={() => { 
                // console.log(training);
                window.scrollTo(0, 0);
                setSelectedCoatch(trainer); 
                navigate("/coatches-details"); 
              }}  
              className="tips-items flex flex-col justify-center object-cover overflow-hidden items-center w-full  cursor-pointer transition-all duration-500 hover:scale-105 z-[3] font-[bold]  text-[25px] hover:shadow-[0_8px_10px_rgba(0,0,0,0.5),0_5px_5px_rgba(0,0,0,0.2)] rounded-[15px] border-[2px] border-solid border-[#ababab] bg-secondary ">
              <img className='transition-all duration-500 w-full ' loading="lazy" src={trainer.photo2} alt="Icon" />
              {/* <h1 className='text-[30px] text-[#ffffffc4] object-cover  font-extrabold py-5'>{traine.name}</h1> */}
            </div>
            </AnimatedSection>
          )
        })
      }
    </>
  )
}