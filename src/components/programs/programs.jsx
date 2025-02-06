import { programs } from './data'
import AnimatedSection from '../../Animation/AnimatedSection'
import { useContext } from "react";
import { TrainingContext } from "./TrainingContext";
import { useNavigate } from "react-router-dom";
import Title from '../title/title';
import './program.css'
export default function Programs() {
  
  return (
    
      <div id='programs' className="bg-[#161C24] programs flex justify-center items-center flex-col text-center w-full ">
        <div className="container w-[95%] flex justify-center justify-items-center  items-center  flex-col px-0 py-[50px]">
          <Title className="text-[#fff]" color='#fff'>Programs</Title>
            <div className="w-full mb-[50px]">
              {/* <h1 className='starter-text w-full selection:text-customSelection  mb-[50px] font-extrabold text-[60px] text-[#000] relative cursor-pointer transition-[0.3s]  py-0 rounded-[100px] uppercase before:content-["_"] before:absolute before:w-[15%] before:h-[3px] before:bg-[#633f08] before:left-[42.5%] before:bottom-[-6px] '>Our Programs</h1>  */}
            </div>
            <div className=" box-container items-center  justify-items-center grid   w-full grid-cols-[repeat(auto-fit,minmax(330px,1fr))] max-sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[20px] px-[50px] py-0 justify-center">    
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
