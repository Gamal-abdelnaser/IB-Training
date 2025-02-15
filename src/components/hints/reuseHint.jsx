import AnimatedSection from "../../Animation/AnimatedSection";
import "./hints.css"
export default function HintSection({hin = "", minbg ,  image, text, bgColor = "white", textSize = "35px",  textColor = "#161C24", reverse = false }) {
  return (
    <AnimatedSection>
      <div  className={`${hin &&` ${hin}`} ${minbg} relative flex  items-center justify-center w-full py-20  border-t-[1px] border-[#cccaca] ${bgColor ? `bg-[${bgColor}]` : ""}`}>
        <div className="overlay max-[1028px]:bg-[rgba(4,4,4,0.45)] absolute w-full h-full z-2  left-0 top-0 max-[1028px]:mt-[0px] max-[1028px]:pt-[100px] max-[1028px]:pb-[150px]"></div> 
        <div className="container w-[95%] flex items-center justify-center p-[10px] z-10">
          <div className={`head-img-container flex ${reverse ? "flex-row-reverse" : "flex-row"} max-[1168px]:flex-col-reverse justify-between items-center w-[100%]`}>
            <img src={image} alt="Hint Image" loading="lazy" className="w-[500px] max-[1168px]:hidden rounded-[40px]" />
            <h1 className={`starter-text font-semibold font-anton tracking-wider   selection:text-customSelection text-center w-[50%] max-[1168px]:w-[100%] max-[1168px]:py-[250px]  cursor-pointer uppercase transition duration-300 ${textSize && `text-[${textSize}]`} max-sm:text-[25px] ${textColor ? `text-[${textColor}]` : ""}  max-[1168px]:text-[#fff] `}>
              {text}
            </h1>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
