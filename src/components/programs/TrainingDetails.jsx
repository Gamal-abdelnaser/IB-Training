import { useContext, useEffect, useState } from "react";
import { TrainingContext } from "./TrainingContext";
import {  Link } from "react-router-dom";
import Title from '../title/title'
import Footer from "../footer.jsx/footer";
import Formy from "../form/form";
import "./program.css"
export default function TrainingDetails() {
  const { selectedTraining, setSelectedTraining } = useContext(TrainingContext);
  const [getPlan, setGetPlan] = useState(false)

  // عند تحميل الصفحة أول مرة نتحقق من وجود البيانات في localStorage
  useEffect(() => {
    const storedTraining = localStorage.getItem("selectedTraining");
    if (storedTraining) {
      // إذا كان هناك بيانات في localStorage، نسترجعها ونعينها في context
      setSelectedTraining(JSON.parse(storedTraining));
    }
  }, [setSelectedTraining]);

  // عند الضغط على الصورة، نقوم بحفظ البيانات في localStorage
  useEffect(() => {
    if (selectedTraining) {
      localStorage.setItem("selectedTraining", JSON.stringify(selectedTraining));
    }
  }, [selectedTraining]);
  
  function handelGetPlan() {
    setGetPlan((e) => !e)
  }

  if (!selectedTraining) {
    return <h1 className="text-center text-red-600 text-2xl">التدريب غير موجود!</h1>;
  }

  return (
    <>
    
    <div className="training-datails w-full flex flex-row bg-[#161C24]  justify-center selection:text-customSelection   pt-[100px] ">
      <div className="container w-[95%] flex items-center flex-col">
        
        <Title color='#fff'>{selectedTraining.name} </Title>
        <div className="content flex items-center justify-between w-full flex-row max-lg:flex-col-reverse">

          <div className="text-content w-[50%] max-lg:w-full p-5 text-center pt-[50px] relative pb-[100px]">
            
            <span className="text-[35px] tracking-wider text-center mb-[50px] font-anton text-primary selection:text-[#fff]  font-bold">
              {selectedTraining.headTitle}<br/>
            </span>
            
            <p 
              className="text-[22px] mt-[20px] font-quad text-center selection:text-customSelection  text-[#a6a6a6]  tracking-[1.5px]"
            >
              {selectedTraining.description}
              
            </p>
            {
              selectedTraining.name !== "IB Calistanics" &&
            
              <div className="text-[30px] text-start  mt-[50px] selection:text-[#fff] ">
                <h1 className=" text-[30px] tracking-wider text-primary font-anton font-bold">
                   {selectedTraining.question} 
                </h1>
                {selectedTraining.listWhoJoin.map((item ,index) => {
                  return <li className="text-[20px] mt-[20px] font-quad   selection:text-customSelection  text-[#a6a6a6]  tracking-wider  " key={index}> {item}</li>
                })}
              </div>
            }
          </div>
          <div className="image-container max-sm:w-[280px]  w-[500px]">
            <img
              src={selectedTraining.mainImage}
              alt={selectedTraining.title}
              className="object-cover rounded-md mb-5"
            />
          </div>
          
        </div>
        {
          selectedTraining.name === "IB Calistanics" &&
            <div className="Calistanic-Type flex flex-col items-center justify-center w-full mt-[80px]" >
                  <h1 className="text-[35px] w-full text-center mb-[50px] text-primary font-anton">{selectedTraining.question}</h1>
                  <div className="container w-[95%] flex items-center justify-between max-lg:flex-col-reverse max-lg:gap-5">
                    <TrainType img={selectedTraining.begainImg}>
                        {selectedTraining.begaining.map((item ,index) => {
                          return <li className="my-[30px] text-[#fff]" key={index}>{item}</li>
                        })}
                    </TrainType>
                    
                    <TrainType img={selectedTraining.freeImg}>
                        {selectedTraining.freeStyle.map((item ,index) => {
                          return <li className="my-[30px] text-[#fff]" key={index}>{item}</li>
                        })}
                    </TrainType>
                </div>
              
            </div>
        }
            <h2 className="text-[40px] font-quad font-semibold mt-[70px] text-white relative bottom-0">Price:  <span className="text-secondary">{selectedTraining.price}</span></h2>
        
        <div className="btnContainer text-center w-full font-quad font-bold flex flex-col max-lg:flex-col my-[50px] max-lg:gap-2 ">
          <button
            onClick={() => handelGetPlan() }
            className="m-[20px]  flex items-center justify-center rounded-[10px] text-black text-[30px] max-sm:text-[25px] no-underline px-3 bg-primary"
            >
            Get Plan
          </button>
          {getPlan && <Formy className="bg-white" />}
          <Link
            to="/"
            className="m-[20px] rounded-[10px] font-quad font-bold text-black text-[30px] max-sm:text-[25px] no-underline px-3 bg-primary"
            >
            Back To Programs
          </Link>
        </div>
        {/* {getPlan && <Formy />} */}
      </div>
    </div>
    <Footer />
    </>
  );
}




// eslint-disable-next-line react/prop-types
function TrainType(  {children , img} ) {


  return (
    <div className="boxTrain2 cursor-pointer transition-all duration-500 z-[3] font-[bold]  text-[25px] hover:shadow-[0_8px_10px_rgba(0,0,0,0.9),0_5px_5px_rgba(0,0,0,0.9)]  overflow-hidden max-lg:w-[80%] w-[40%] flex items-center flex-col shadow-2xl rounded-[30px] border-[solid] border-[#9f9e9e] border-[2px]">
      <img className="w-full " src={img} alt="" />
      <h1 className="text-[35px] mt-9 text-primary font-anton">FREE STYLE</h1>
      <ul className=" text-[18px] max-sm:text-[14px] max-sm:px-3  px-9 mt-[20px] font-quad text-center selection:text-customSelection  text-[#a6a6a6]  tracking-[1.5px]">
        {/* {typee.map((item ,index) => {
          return <li className="my-[30px] text-[#fff]" key={index}>{item}</li>
          })} */}
          {children}
      </ul>
    </div>
  )
}