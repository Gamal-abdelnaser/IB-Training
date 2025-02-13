/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { CoatchesContext } from "./coatchesContext";
import Footer from "../footer.jsx/footer";
import './coatch.css'
export default function CoachesDetails() {
  const { selectedCoatch, setSelectedCoatch } = useContext(CoatchesContext);

  useEffect(() => {
    const storedTraining = localStorage.getItem("selectedCoatch");
    if (storedTraining) setSelectedCoatch(JSON.parse(storedTraining));
  }, [setSelectedCoatch]);

  useEffect(() => {
    selectedCoatch && localStorage.setItem("selectedCoatch", JSON.stringify(selectedCoatch));
  }, [selectedCoatch]);

  if (!selectedCoatch) {
    return <h1 className="text-center text-red-600 text-2xl" > Coatch data not found</h1>;
  }
  return (
    <>
      <div className={`${selectedCoatch?.custombg} relative mt-[50px] w-full flex flex-row bg-[#161C24]  justify-center  selection:text-customSelection`}>
        <div className="overlay max-[1028px]:bg-[rgba(4,4,4,0.49)] absolute w-full h-full z-2 left-0 top-0 max-[1028px]:mt-[0px] max-[1028px]:pt-[100px] max-[1028px]:pb-[150px];"></div> 
        <div className="container w-[95%] xl:w-[90%] flex  flex-col">
          <div className="content flex justify-between pt-[100px]  w-full flex-row max-lg:flex-col-reverse">
            <TextContent selectedCoatch={selectedCoatch} />
            <ImageContent selectedCoatch={selectedCoatch} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function TextContent({selectedCoatch}) {
  return(
    <div className="text-content  w-[50%] max-lg:w-full p-5 pt-[80px]  max-lg:pt-[250px] relative pb-[100px]">
      
      <p className="xl:text-[20px] lg:text-[18px] md:text-[20px] sm:text-[18px] text-[18px] text-primary  uppercase tracking-wider font-takeaway font-bolder">
        {selectedCoatch?.title}
      </p>

      <h1 className="text-[6rem] xl:text-[10rem] lg:text-[9rem] md:text-[12rem] sm:text-[10rem] max-sm:text-[6rem] font-anton font-bold text-white ">
        {selectedCoatch?.name}
      </h1>

      <p className="text-[23px] mt-[40px] mb-[80px] font-tajawal font-bold text-[#dddcdc] ">
        {selectedCoatch?.description}
      </p>

      <SocialIcons selectedCoatch={selectedCoatch} />
      
    </div>
  )
}

function SocialIcons({selectedCoatch}) {
  return(
    <div className="icons flex gap-7 w-[100px] max-sm:w-[60%]  my-[20px] text-xl transition-all duration-500 "> 
        <div className="border-[1px] border-[#a3a3a3] rounded-full hover:bg-secondary transition-all duration-500">
          <a href=""><i className={`fa-brands fa-facebook p-[9px] text-[30px] text-[#cfcfcf]  hover:text-black transition-all duration-500`}></i></a> 
        </div>
        <div className="border-[1px] border-[#a3a3a3] rounded-full hover:bg-secondary transition-all duration-500">
          <a href={selectedCoatch?.instaLink}><i className={`fa-brands fa-instagram p-[9px] text-[30px] text-[#cfcfcf] hover:text-black transition-all duration-500`}></i></a>
        </div>
      </div>
  )
}

function ImageContent({selectedCoatch}) {
  return(
     <div className="image-container max-sm:w-[280px] w-[500px] max-lg:hidden">
        <img src={selectedCoatch?.photo1} alt="Training" className="object-cover rounded-[20px] mb-5 transition-all duration-500   " />
      </div>
  )
}