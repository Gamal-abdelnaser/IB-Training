/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { TrainingContext } from "./TrainingContext";
import { Link } from "react-router-dom";
import Title from "../title/title";
import Footer from "../footer.jsx/footer";
import Formy from "../form/form";
import "./program.css";

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
      <div className="training-datails w-full flex flex-row bg-[#161C24] justify-center pt-[100px] selection:text-customSelection">
        <div className="container w-[95%] flex items-center flex-col">
          <Title color="#fff">{selectedTraining?.name}</Title>

          <div className="content flex items-center justify-between w-full flex-row max-lg:flex-col-reverse">
            <div className="text-content w-[50%] max-lg:w-full p-5 text-center pt-[50px] relative pb-[100px]">
              <span className="text-[35px] tracking-wider text-primary font-anton font-bold">
                {selectedTraining?.headTitle}
              </span>

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

            <div className="image-container max-sm:w-[280px] w-[500px]">
              <img src={selectedTraining?.mainImage} alt="Training" className="object-cover rounded-md mb-5" />
            </div>
          </div>

          {selectedTraining?.name === "IB Calistanics" && (
            <div className="Calistanic-Type flex flex-col items-center w-full mt-[80px]">
              <h1 className="text-[35px] text-center mb-[50px] text-primary font-anton">
                {selectedTraining?.question}
              </h1>
              <div className="container w-[95%] flex items-center justify-between max-lg:flex-col-reverse max-lg:gap-5">
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

          <h2 className="text-[40px] font-quad font-semibold mt-[70px] text-white">
            Price: <span className="text-secondary">{selectedTraining?.price}</span>
          </h2>

          <div className="btnContainer text-center w-full font-quad font-bold flex flex-col my-[50px] max-lg:gap-2">
            <button onClick={() => setGetPlan(!getPlan)} className="m-[20px] rounded-[10px] text-black text-[30px] bg-primary px-3">
              Get Plan
            </button>
            {getPlan && <Formy className="bg-white" />}
            <Link to="/" className="m-[20px] rounded-[10px] text-black text-[30px] bg-primary px-3">
              Back To Programs
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
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
