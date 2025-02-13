import AnimatedSection from '../../Animation/AnimatedSection'
import { DarkContext } from '../darkLight/darkContext';
import mainImage from '../../assets/mainmain.png'
import { useContext } from 'react';
import './main.css'
import { useNavigate } from "react-router-dom";
export default function Main() {
  const { isDark } = useContext(DarkContext);
  return (
    <AnimatedSection >
    <div className={`main relative w-full h-full flex justify-center items-center max-[1028px]:mt-[50px] max-[1028px]:pt-[100px] max-[1028px]:pb-[150px] selection:text-customSelection bg-[#161C24] ` }>
    <div className="overlay max-[1028px]:bg-[rgba(0,0,0,0.64)] absolute w-full h-full z-2 left-0 top-0 max-[1028px]:mt-[0px] max-[1028px]:pt-[100px] max-[1028px]:pb-[150px];"></div>
  
      <div className="container w-[90%] flex justify-center items-center max-[1028px]:z-10">
        <div className="wraber w-full px-[20px] flex justify-center items-center min-[1028px]:flex-row max-[1028px]:flex-col-reverse  ">
          {/* Left Text Content */}
          <TextContent isDark={isDark} />

          {/* Right Image */}
          <ImageContent />
          
        </div>
      </div>
    </div>
    </AnimatedSection>
  )
}

function TextContent({isDark}) {
    const navigate = useNavigate();
  return(
    <div className={`text-container pt-[100px] h-full w-[60%] max-[1028px]:w-full flex flex-col ${ isDark ? 'text-[#e2e1e1]' : 'text-[#000]' } `}>
      {/* <h1 
        className='holed text-[50px] font-anton font- xl:text-[65px] md:text-[60px] sm:text-[55px]'
          style={{
            WebkitTextStroke: `1px ${isDark ? "#fff" : "#161C24"}`,
            color: 'transparent', 
          }}
      >Control it</h1> */}
      <h1 className='xl:text-[60px] md:text-[45px] max-[1000px]:text-[35px] font-anton  font-bold text-white  tracking-[4px]'>Your Gatway To Be The
        <span
          style={{
            WebkitTextStroke: `1px #fff `,
            color: 'transparent', 
          }}
          className=' bg-clip-text text-transparent' > Fittest </span>
        Version of Yourself</h1>
      <h2 className='text-[20px] mt-[23px] font-tajawal  font-bold text-[#bababa]  tracking-[1.5px]'>More than 2000+ clients around the world had controlled their lives and achieved thier targets 
      </h2>
      <h2 className='text-[20px] mt-[23px] font-tajawal  font-bold text-[#bababa]  tracking-[1.5px]'> Whatever your targetand  your current condition we are  ready to give you the guidance  to make the magic happens
      </h2>
      <div  
        onClick={() => { 
          window.scrollTo(0, 0); 
          navigate("/calcolator"); 
        }}  
        className="text-center w-fit mt-14 cursor-pointer transition-all duration-500 z-[3] font-[bold]  hover:shadow-[0_8px_10px_rgba(0,0,0,0.5),0_5px_5px_rgba(0,0,0,0.2)] rounded-[15px] border-[2px] border-solid border-primary hover:bg-primary text-[white] hover:text-black  ">
        {/* <img className='transition-all duration-500 w-full ' loading="lazy" src={mainImage} alt="Icon" /> */}
        <h1 className='text-[30px] max-[491px]:text-[20px]  font-tajawal font-extrabold py-2 px-4 '>Calculate your calories free</h1>
      </div>
      
    </div>
  )
}

function ImageContent() {
  return(
     <div className="image-container pt-[60px] max-[1028px]:w-[80%] w-[40%] relative flex justify-center items-center rounded-xl max-[1028px]:hidden ">
        <div className='image-wraber  w-[95%] rounded-xl  relative '>
          <img src={mainImage} alt="Main Image" className='w-full ml-[0px] mt-[80px] rounded-xl ' loading="lazy"/>
        </div>
      </div>
  )
}