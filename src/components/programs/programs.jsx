/* eslint-disable react/prop-types */
import { programs } from './data'
import AnimatedSection from '../../Animation/AnimatedSection'
import { useContext } from "react";
import { TrainingContext } from "./TrainingContext";
import { useNavigate } from "react-router-dom";
import Title from '../title/title';
import './program.css'
export default function Programs({name}) {
  
  return (
    
      <div id='programs' className="bg-[#161C24] programs flex justify-center items-center flex-col text-center w-full ">
        <div className="container w-[95%] flex justify-center justify-items-center  items-center  flex-col px-0 py-[50px]">
          {name && <Title className="text-[#fff]" color='#fff'>{name}</Title>}
            <div className=" box-container items-center  justify-items-center grid   w-full grid-cols-[repeat(auto-fit,minmax(330px,1fr))]  gap-[20px] px-[50px] py-0 justify-center">    
              <ListTips />
            </div>
        </div>
        
    </div>
   
  )
}
function ListTips() {
  const { setSelectedTraining } = useContext(TrainingContext);
  const navigate = useNavigate();

  
  return (
    <>
      {
        programs.map((training , index) => {
          return (
            <AnimatedSection key={index}>
                <div  
                  key={index}
                  onClick={() => { 
                    // console.log(training);
                    window.scrollTo(0, 0);
                    setSelectedTraining(training); 
                    navigate("/training-details"); 
                  }}  
                  className="tips-items  flex flex-col justify-center  object-cover overflow-hidden items-center w-full  cursor-pointer transition-all duration-500 z-[3] font-[bold]  text-[25px] hover:shadow-[0_8px_10px_rgba(0,0,0,0.5),0_5px_5px_rgba(0,0,0,0.2)] rounded-[15px] border-[5px] border-solid border-secondary  bg-secondary ">
                  <img className='transition-all duration-500 w-full ' loading="lazy" src={training.mainImage} alt="Icon" />
                  {/* <h1 className='text-[30px] text-[#ffffffc4] object-cover  font-extrabold py-5'>{training.name}</h1> */}
                </div>
            </AnimatedSection>
          )
        })
      }
    </>
  )
}
