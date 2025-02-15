
import { useContext } from "react";
import iconImage1 from "../../assets/icons/contract.svg";
import iconImage2 from "../../assets/icons/video-call.svg";
import iconImage3 from "../../assets/icons/whatsapp.svg";
import { DarkContext } from "../darkLight/darkContext.jsx"
import "./golTip.css"
function TipsGols2() {
        const { isDark } = useContext(DarkContext);

  const infoBoxes = [
    {   
      title: "Meeting Call With The Coach",
      description: [
        "To know your sports history and your current level",
        "Determine your goal",
        "Know your activity rate and work conditions"
      ],
    icon: iconImage2,
    color: "image-filter1"
    },
    {
      title: "Prepare a Nutrition and Training Plan",
      description: [
        "Nutrition Plan based on your target and body type",
        "Training program (videos) based on your current level and target to help you reach your goal 100% faster.",
        "It takes 2-3 days to make the magic happen"
      ], 
    icon: iconImage1,
    color: "image-filter2"
    },
    {
      title: "Follow Up",
      description: [
        "24/7 fast responding to all your inquiries",
        "We will be there to encourage you, help you grow, and reach your goal."
      ], 
        icon: iconImage3, 
        color:"image-filter3",
    }
  ];

  return (
    <div className={`tips h-auto flex  justify-center items-center flex-col text-center w-full selection:text-customSelection py-[100px] px-4  border-t-[1px] border-[#cccaca] sm:px-6 lg:px-8 ${isDark ? "bg-PrimaryBg" : "bg-white" }`}>
      <div className="max-w-[90%] mx-auto">
        <h1 
          className={`starter-text font-anton  w-full font-bold text-[40px] max-sm:text-[25px] ${isDark ? "text-white" : "text-black" }  selection: cursor-pointer transition-[0.3s] pb-[100px] py-0 leading-[50px] tracking-wide `}>
            Subscription Steps 
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-center ">
          {infoBoxes.map((box, index) => (
            <InfoBox
              key={index}
              icon={box.icon}
              title={box.title}
              description={box.description}
              color={box.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TipsGols2;


function InfoBox({ icon , color , title , description }) {
    
  return (
    <div className="flex flex-col items-center p-6 text-center border-2 bg-white rounded-lg shadow-lg transition-all duration-500  hover:scale-105">
      <div className="my-9">
        <img src={icon} className={`w-[80px] ${color}`}  loading="lazy" />
      </div>
      <h2 className="text-[25px] font-anton tracking-wide font-bold mb-9 text-[#051525]">{title}</h2>
      <ul className="px-[10px]">
        {description.map((txt, i) => (
            <li key={i} className="  text-[#051525] font-bold  text-center text-[15px] font-tajawal  mb-9 ">{txt}<br/></li>
        ))}
      </ul>
    </div>
  );
}
