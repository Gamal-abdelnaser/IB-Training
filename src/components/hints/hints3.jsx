import hints3 from '../../assets/programs/hints3.PNG'
// import allPrograms from '../../assets/programs/all2.PNG'
import AnimatedSection from "../../Animation/AnimatedSection"

export default function Hints() {
    return (
      <AnimatedSection>
      <div className="hints1 flex items-center  justify-center  w-full ">
        <div className="container w-[90%] flex  items-center justify-center p-[50px]">
          <div className="head-img-container uppercase  flex max-[1168px]:flex-col-reverse  justify-between items-center w-[90%]   py-0">
            {/* <img src={allPrograms} alt="" className="rounded-[40px]" /> */}
            <img src={hints3} alt="" className='w-[500px] rounded-[40px] ' />
            <h1 
              className='starter-text font-semibold font-anton tracking-wider  max-[1168px]:hidden  selection:text-customSelection text-center  w-[50%] text-[30px] text-[#161C24] relative cursor-pointer transition-[0.3s] '
              >
               Here you will transform from just an ordinary player to a professional player
              </h1> 
          </div>
        </div>
      </div>
      </AnimatedSection>
    )
}