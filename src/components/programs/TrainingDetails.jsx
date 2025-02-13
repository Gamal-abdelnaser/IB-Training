/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { TrainingContext } from "./TrainingContext";
import { Link } from "react-router-dom";
import Title from "../title/title";
import Footer from "../footer.jsx/footer";
import Formy from "../form/form";
import "./program.css";
import Packages from "./packages";

export default function TrainingDetails() {
  const { selectedTraining, setSelectedTraining } = useContext(TrainingContext);
  const [getPlan, setGetPlan] = useState(false);

  useEffect(() => {
    const storedTraining = localStorage.getItem("selectedTraining");
    if (storedTraining) setSelectedTraining(JSON.parse(storedTraining));
  }, [setSelectedTraining]);

  useEffect(() => {
    selectedTraining && localStorage.setItem("selectedTraining", JSON.stringify(selectedTraining));
  }, [selectedTraining]);

  if (!selectedTraining) {
    return <h1 className="text-center text-red-600 text-2xl">التدريب غير موجود!</h1>;
  }

  return (
    <>
      <div className="w-full h-full bg-[#161C24] flex flex-col items-center justify-center ">
        <div className={`${selectedTraining?.custombg} bigContainer relative mt-[50px] pt-[50px] w-full flex flex-row bg-[#161C24]  justify-center  selection:text-customSelection`}>
          <div className="overlay max-[1028px]:bg-[rgba(4,4,4,0.5)] absolute w-full h-full z-2  left-0 top-0 max-[1028px]:mt-[0px] max-[1028px]:pt-[100px] max-[1028px]:pb-[150px]"></div> 
          <div className="container w-[95%] flex items-center flex-col z-10">
            <Title color="#fff">{selectedTraining?.name}</Title>

            {/*  */}
            <Content selectedTraining={selectedTraining} />

            {/* */}
            

            {/* */}
            
            {/*  */}
          </div>
        </div>
        <div className="w-[95%] flex flex-col justify-center items-center">  
          {
             selectedTraining?.id !== 1 && <Packages />
          }  
          {
            selectedTraining?.id !== 1 && 
            <Price selectedTraining={selectedTraining} />
          }
          
          {
            selectedTraining?.id !== 1 && <BtnContent  setGetPlan={setGetPlan}  getPlan={getPlan} />
          }
          {
            selectedTraining?.id === 1 && <IsCalistanics selectedTraining={selectedTraining} />
          }  
          {
            selectedTraining?.id === 1 && <Packages />
          }  
          {
            selectedTraining?.id === 1 && <Price selectedTraining={selectedTraining} />
          }
          {
            selectedTraining?.id === 1 && <BtnContent  setGetPlan={setGetPlan}  getPlan={getPlan} />
          }  
          {getPlan && <Formy className="bg-white" />}
        </div>
      </div>
      <Footer />
    </>
  );
}

function Content({selectedTraining}) {
  return(
    <div className={`content ${selectedTraining?.id === 1 && "max-lg:pb-[250px] pt-[100px]"} flex items-center justify-between w-full flex-row max-lg:flex-col-reverse z-10`}>
      <div className="text-content w-[50%] max-lg:w-full p-5 text-center  relative ">
        <h1 className="text-[35px] tracking-wider text-primary font-anton font-bold  pt-[100px]">
          {selectedTraining?.headTitle}
        </h1>

        <p className="text-[22px] mt-[20px] font-quad text-[#a6a6a6] tracking-[1.5px]">
          {selectedTraining?.description}
        </p>

        {selectedTraining?.name !== "IB Calistanics" && (
          <div className="text-[30px] text-start mt-[50px]">
            <h1 className="text-[30px] text-primary font-anton font-bold">
              {selectedTraining?.question}
            </h1>
            {selectedTraining?.listWhoJoin?.map((item, index) => (
              <li className="text-[20px] mt-[20px] font-quad text-[#a6a6a6] tracking-wider" key={index}>
                {item}
              </li>
            ))}
          </div>
        )}
      </div>

      <div className="image-container max-sm:w-[280px] w-[500px] pt-0 mt-0 max-lg:hidden">
        <img src={selectedTraining?.mainImage} alt="Training" className="object-cover rounded-md mb-5" />
      </div>
    </div>
  )
}


function IsCalistanics({selectedTraining}) {
  return(
    <>
      {selectedTraining?.name === "IB Calistanics" && (
        <div className="Calistanic-Type flex flex-col items-center w-full mt-[80px]">
          <h1 className="text-[35px] text-center mb-[50px] text-primary font-anton">
            {selectedTraining?.question}
          </h1>
          <div className="container w-[95%] flex justify-center items-center gap-[5%]  max-lg:flex-col-reverse max-lg:gap-5">
            <TrainType img={selectedTraining?.begainImg}>
              {selectedTraining?.begaining?.map((item, index) => (
                <li className="my-[30px] text-center text-[#fff]" key={index}>{item}</li>
              ))}
            </TrainType>

            <TrainType img={selectedTraining?.freeImg}>
              {selectedTraining?.freeStyle?.map((item, index) => (
                <li className="my-[30px] text-center text-[#fff]" key={index}>{item}</li>
              ))}
            </TrainType>
          </div>
        </div>
      )}
    </>
  )
}

function TrainType({ children, img }) {
  return (
    <div className="boxTrain2 cursor-pointer transition-all duration-500 z-[3] text-[25px] hover:shadow-[0_18px_15px_rgba(0,0,1,0.9)] overflow-hidden max-lg:w-[80%] w-[40%] flex items-center flex-col  rounded-[30px] border-[solid] border-[#9f9e9e] border-[2px]">
      <img className="w-full" loading="lazy" src={img} alt="Training Type" />
      <h1 className="text-[35px] mt-9 text-primary font-anton">FREE STYLE</h1>
      <ul className="text-[18px] max-sm:text-[14px] px-9 mt-[20px] font-quad text-[#a6a6a6] tracking-[1.5px]">{children}</ul>
    </div>
  );
}

function Price({selectedTraining}) {
  return(
    <h2 className="text-[40px] font-quad font-semibold mt-[70px] text-white z-10">
      Price: <span className="text-secondary">{selectedTraining?.price}</span>
    </h2>
  )
}

function BtnContent({setGetPlan , getPlan}) {
  return(
    <div className="btnContainer text-center w-full font-quad font-bold flex flex-col my-[50px] max-lg:gap-2">
      <button onClick={() => setGetPlan(!getPlan)} className="m-[20px] rounded-[10px] text-black text-[30px] bg-primary px-3">
        Get Plan
      </button>
      {/* {getPlan && <Formy className="bg-white" />} */}
    </div>
  )
}
