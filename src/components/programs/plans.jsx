/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import './plans.css'
import { PlansContext } from "./plansContext";
import { useNavigate } from "react-router-dom";

export default function Plans() {
    const { selectedPlan, setSelectedPlan } = useContext(PlansContext);
  
    const infoBoxes = [
        {   
          title: "Control",
          description: [
            "Meeting Call With Coach",
            "Training Program (Gym / Home)",
            "Personalized Nutrition plan",
            "Supplements plan ",
            "Weekly Follow up"
            ],
          old : 250 ,
          price: 200 ,
          gif : 'checklist.gif',

        // icon: iconImage2,
        color: "image-filter1"
        },
        {
          title: "Control+",
          description: [
            "Customized Training Program (Gym / Home)",
            "Personalized Nutrition plan",
            "Supplements plan ",
            "Daily Follow up via Whatsapp",
            "2 Meeting calls / monthly"
          ], 
          old : 350 ,
          price: 300 ,
          gif: 'doctors.gif',
        // icon: iconImage1,
        color: "image-filter2"
        },
        {
          title: "Med Control+",
          description: [
            "Customized Training Program (Gym / Home)",
            "Personalized Nutrition plan",
            "Supplements plan",
            "Follow Up With Doctors | Coaches in Whatsapp",
            "2 Meeting calls / monthly"
          ], 
          old : 450 ,
          price: 400 ,
          gif : 'user.gif',
            // icon: iconImage3, 
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
          old : 550 ,
          price: 500,
          gif : 'vip.gif',
          // icon: iconImage3, 
          color:"image-filter3",
        }
      ];
      
  return (
    <div id='Programs' className="plans w-full flex justify-center items-center text-left bg-[#161C24] selection:text-customSelection ">
        <div className="container w-[90%] grid grid-cols-[repeat(auto-fit,minmax(350px,3fr))] gap-[30px] px-0 py-[100px]">
            {
                infoBoxes.map((item , index) => {
                    return(
                        <Box key={index} plandata={item} setSelectedPlan={setSelectedPlan}/>
                    )
                })
            }
           
        </div>
    </div>
  )
}

function Box( { plandata , setSelectedPlan} ) {
    const navigate = useNavigate();


    return (
        <div className="box bg-white border-[1px] flex flex-col items-center justify-center w-full shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)] float-left transition-[0.3s] h-fit relative px-9 rounded-[50px]" >
                <div className="gif-container w-[30%] h-[100px] flex items-center justify-center mx-[35%] my-[50px]">
                    <img className="w-full" loading="lazy" src={plandata?.gif} alt=""/>    
                </div>
                <h1 className="text-black font-bold font-anton text-center text-[35px] bg-white w-[90%] shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)] mb-[50px] mx-[5%] my-0 rounded-[30px]">
                    {plandata?.title}
                </h1>
                <ul className=" w-[100%] mb-[50px] mx-[6%] my-0">
                    {plandata?.description?.map((item) => <li className=" list-disc text-black ml-4 mb-16 pl-4 my-5 text-[17px] tracking-wide font-tajawal font-bold" key={item}> {item} </li>)}
                </ul>
                <select className="bg-white text-black font-bold text-[2rem] w-[90%] font-tajawal cursor-pointer px-20 shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)] text-center py-1 rounded-[20px] border-[none]" name="" id="" >
                    <option value="1 Month">1 Month</option>
                    {/* <option value="2 Month">2 Month</option>
                    <option value="3 Month">3 Month</option> */}
                </select>
                <h2 className=" w-full text-[30px] mt-14 mb-8 text-black text-center font-bold font-quad ">Pricing</h2>
                <h2 className=" w-full  text-[3rem] pl-[8rem]  mb-20 text-white font-bold font-quad bg-PrimaryBg py-[10px] rounded-[20px]">
                    {`${plandata.price}LE`}  
                    <span className='old text-[3rem] line-through  text-[#B4B9C9] ml-[4rem]'>{plandata.old}</span>
                </h2> 
                <div className="text-center mb-20 mt-14 cursor-pointer transition-all bg-PrimaryBg duration-500 w-[90%] z-[3] font-[bold]  hover:shadow-[0_8px_10px_rgba(0,0,0,0.5),0_5px_5px_rgba(0,0,0,0.2)] rounded-[15px] border-[2px] border-solid border-primary hover:bg-primary text-[white] hover:text-black  ">
                    <div className="text-[30px] max-[491px]:text-[20px]  font-tajawal font-extrabold py-2  " 
                      onClick={() => {
                        setSelectedPlan(plandata);
                        navigate("/form"); 
                        }}
                     >Get Plan</div>
                </div>
        </div>
    )
}