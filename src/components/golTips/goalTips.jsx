// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPen,faRoadCircleCheck,faHourglassHalf,faDumbbell } from '@fortawesome/free-solid-svg-icons';
import iconImage1 from "../../assets/icons/write.png"
import iconImage2 from "../../assets/icons/time.png"
import iconImage3 from "../../assets/icons/road.png"
import iconImage4 from "../../assets/icons/last.png"
import AnimatedSection from "../../Animation/AnimatedSection"
export default function TipsGols() {
  
return(
  <AnimatedSection >
  <div className="tips flex bg-[#161C24] justify-center items-center flex-col text-center w-full selection:text-customSelection ">
      <div className="container w-[90%] flex justify-center justify-items-center  items-center  flex-col px-0 py-[100px]">
          <div className="w-full">
            <h1 
              className='starter-text font-anton  w-full font-bold text-[30px] max-sm:text-[25px] text-white selection: cursor-pointer transition-[0.3s] pb-[100px] py-0 leading-[50px] tracking-widest '>
                In order to achieve any goal in your life<br/> you need these four elements
            </h1>
          </div>
          <div className="box-container selection:text-customSelection justify-items-center grid  items-center w-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[15px]  py-0 justify-center">    
            <ListTips />
          </div>
      <h1 className='end-text font-extrabold  font-quad text-[25px] text-white cursor-pointer transition-[0.3s] mt-[100px] mb-[50px] px-[30px] py-5 rounded-[100px]'>Finally, and surprisingly, you can get all of that in <span className="uppercase text-[30px] bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent font-futura relative selection:text-black">IB Training</span></h1>
      </div>
      
  </div>
  </AnimatedSection>
)
}


function ListTips() {
  const tips =[
    {
      num:'1-',
      text:'Determine the goal you want to achieve in your life',
      // ic: <FontAwesomeIcon icon={faPen} />
      ic: iconImage1
    },
    {
      num:'2-',
      text:'Choose the roadmap that will lead you to your goal',
      // ic: <FontAwesomeIcon icon={faRoadCircleCheck} />
      ic: iconImage2
    },
    {
      num:'3-',
      text:'Determine the time needed to reach your goal',
      // ic: <FontAwesomeIcon icon={faHourglassHalf} />
      ic: iconImage3

    },
    {
      num:'4',
      text:'Commitment to the established plan to reach your goal',
      // ic: <FontAwesomeIcon icon={faDumbbell} />
      ic: iconImage4

    }
  ]
  return (
    <>
      {
        tips.map((tip , index) => {
          return (
            <AnimatedSection key={index}>
            <div 
              key={index}
              className="tips-items flex flex-col justify-center items-center w-full h-auto  cursor-pointer transition-all duration-500 z-[3] font-[bold]  text-[25px] hover:shadow-[0_8px_10px_rgba(0,0,0,0.5),0_5px_5px_rgba(0,0,0,0.2)] rounded-[15px] border-2 border-solid border-[#827b7b9f] "
            >
              <span className="font-playwrite font-bold tracking-wider text-white text-[25px] max-md:text-[20px]  p-5 ">
                <span className='icon flex items-center justify-center  '>
                  <img className='transition-all duration-500 w-[30%] mb-8' src={tip.ic} alt="Icon" />
                </span>
                {tip.text}
              </span>
            </div>
            </AnimatedSection>
          )
        })
      }
    </>
  )
}