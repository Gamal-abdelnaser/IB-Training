import hints2 from '../../assets/programs/hints2.PNG'
// import dotedBg from '../../assets/dotBg.png'
import './hints.css'
import AnimatedSection from "../../Animation/AnimatedSection"

export default function Hints2() {
    return (
        <AnimatedSection >
        <div className="hints2 w-full flex items-center bg-[#161C24]   justify-center ">
            <div className="container w-[90%] flex items-center justify-center p-[50px]">
                <div className="head-img-container  flex max-[1168px]:flex-col-reverse justify-between items-center w-[90%]   py-0">
                    {/* <img src={allPrograms} alt="" className="rounded-[40px]" /> */}
                    <h1 
                        className='starter-text font-anton font-semibold max-[1168px]:hidden selection:text-customSelection text-center  rounded-3xl  w-[50%] text-[50px] text-white relative cursor-pointer transition-[0.3s] '
                        >
                            The best place to provide you with professional service
                    </h1> 
                    <img src={hints2} alt="" className='w-[500px] rounded-[40px] ' />
                </div>
            </div>
        </div>
        </AnimatedSection>
    )
}
