import AnimatedSection from "../../Animation/AnimatedSection";
import "./hints.css"
export default function HintSection({hin = "",  image, text, bgColor = "white", textSize = "35px",  textColor = "#161C24", reverse = false }) {
  return (
    <AnimatedSection>
      <div  className={`${hin &&` ${hin}`} flex  items-center justify-center w-full ${bgColor ? `bg-[${bgColor}]` : ""}`}>
        <div className="container w-[90%] flex items-center justify-center p-[50px]">
          <div className={`head-img-container flex ${reverse ? "flex-row-reverse" : "flex-row"} max-[1168px]:flex-col-reverse justify-between items-center w-[90%]`}>
            <img src={image} alt="Hint Image" loading="lazy" className="w-[500px] rounded-[40px]" />
            <h1 className={`starter-text font-semibold font-anton tracking-wider  max-[1168px]:hidden selection:text-customSelection text-center w-[50%]  cursor-pointer uppercase transition duration-300 ${textSize && `text-[${textSize}]`}  ${textColor ? `text-[${textColor}]` : ""}`}>
              {text}
            </h1>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
