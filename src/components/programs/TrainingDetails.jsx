import { useContext, useEffect, useState } from "react";
import { TrainingContext } from "./TrainingContext";
import {  Link } from "react-router-dom";
import Title from '../title/title'
import Footer from "../footer.jsx/footer";
import Formy from "../form/form";
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
    
    <div className="w-full flex flex-row bg-[#161C24]  justify-center pt-[100px] ">
      <div className="container w-[95%] flex items-center flex-col">
        
        <Title color='#fff'>{selectedTraining.name} </Title>
        <div className="content flex items-center justify-between w-full flex-row max-lg:flex-col-reverse">
          <div className="text-content w-[50%] max-lg:w-full p-5 pt-[50px] relative pb-[100px]">
            <p className="text-[25px] mt-[20px] selection:text-customSelection font-bodoni text-[#a6a6a6]  tracking-[1.5px]">{selectedTraining.description}</p>
            <h2 className="text-[40px] font-quad font-semibold mt-[70px] text-white absolute bottom-0">Price:  <span className="text-secondary">{selectedTraining.price}</span></h2>
          </div>
          <div className="image-container max-sm:w-[300px] w-[500px]">
            <img
              src={selectedTraining.mainImage}
              alt={selectedTraining.title}
              className="object-cover rounded-md mb-5"
            />
          </div>
          
        </div>
        <div className="btnContainer flex gap-9">
          <Link
            to="/"
            className="m-[50px] rounded-[10px] text-black text-[30px] no-underline px-3 bg-primary"
            >
            Back To Programs
          </Link>
          <button
            onClick={() => handelGetPlan() }
            className="m-[50px] rounded-[10px] text-black text-[30px] no-underline px-3 bg-primary"
            >
            Get Plan
          </button>
        </div>
        {getPlan && <Formy />}
      </div>
    </div>
    <Footer />
    </>
  );
}
