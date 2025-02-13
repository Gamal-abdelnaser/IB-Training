import iconImage1 from "../../assets/icons/contract.svg";
import iconImage2 from "../../assets/icons/video-call.svg";
import iconImage3 from "../../assets/icons/whatsapp.svg";
import "./program.css";

export default function Packages() {

  const infoBoxes = [
    {   
      title: "Control",
      description: [
        "Meeting Call With Coach",
        "Training Program ( Gym / Home )",
        "Personalized Nutrition plan",
        "Supplements plan ",
        "Weekly Follow up"
      ],
    icon: iconImage2,
    color: "image-filter1"
    },
    {
      title: "Control+",
      description: [
        "Customized Training Program ( Gym / Home )",
        "Personalized Nutrition plan",
        "Supplements plan ",
        "Daily Follow up via Whatsapp",
        "2 Meeting calls / monthly"
      ], 
    icon: iconImage1,
    color: "image-filter2"
    },
    {
      title: "Med Control+",
      description: [
        "Customized Training Program ( Gym / Home )",
        "Personalized Nutrition plan",
        "Supplements plan",
        "Follow Up With Doctors | Coaches in Whatsapp",
        "2 Meeting calls / monthly"
      ], 
        icon: iconImage3, 
        color:"image-filter3",
    },
    {
      title: "Vip Control",
      description: [
        "All Med Control+ Benefits",
        "Customized Clinical & Nutrition Medical Care from Doctors",
        "12 Private Sessions Monthly Via Zoom Meeting",
        " ( Ladies only available )",
        "follow up with private Coach or doctor if needed",
        "Messages Daily ( Follow Up & Motivation )",
        "Direct Phone Call if needed"
      ], 
        icon: iconImage3, 
        color:"image-filter3",
    }
  ];

  return (
    <div className="tips h-auto flex  justify-center items-center flex-col text-center w-full selection:text-customSelection py-[100px] px-4 sm:px-6 lg:px-8">
      <div className="w-[90%] flex flex-col mx-auto">
        <h1 
          className='starter-text font-anton text-white w-full font-bold text-[5rem] max-sm:text-[25px] selection: cursor-pointer transition-[0.3s] pb-[100px] py-0  tracking-wide '>
            All Packages
        </h1>
        <div className="grid w-[100%] grid-cols-[repeat(auto-fit,minmax(400px,3fr))]  gap-9 ">
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




function InfoBox({ icon , color , title , description }) {
    
  return (
    <div className="flex flex-col justify-center object-cover items-center w-full border-2 px-14 rounded-lg shadow-lg transition-all duration-500  hover:scale-105">
      <div className="my-9">
        {/* <img src={icon} className={`w-[80px] ${color}`}  loading="lazy" /> */}
      </div>
      <h2 className="text-[5rem] font-anton tracking-wide font-bold mb-9 text-primary">{title}</h2>
      <ul className=" text-start w-full px-">
        {description.map((txt, i) => (
            <li key={i} className=" text-white list-disc text-[16px] tracking-wide font-tajawal font-bold  mb-9 ">{txt}<br/></li>
        ))}
      </ul>
    </div>
  );
}
