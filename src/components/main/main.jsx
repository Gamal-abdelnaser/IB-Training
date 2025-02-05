import AnimatedSection from '../../Animation/AnimatedSection'
import mainImage from '../../assets/main.jpg'
export default function Main() {
  return (
    <AnimatedSection >
    <div className='main w-full  flex justify-center items-center py-[50px] pt-[100px] selection:text-customSelection'>
      <div className="container w-[90%] flex justify-center items-center">
        <div className="wraber w-full px-[20px]  flex justify-center items-center min-[1028px]:flex-row max-[1028px]:flex-col-reverse  ">
          <div className="text-container  w-1/2 max-[1028px]:w-full flex flex-col fl pt-[40px]">
            <h1 className='text-[50px] font-anton font- xl:text-[65px] md:text-[60px]  sm:text-[55px]   '>Control it</h1>
            <h1 className='xl:text-[50px] md:text-[35px] max-[1000px]:text-[35px] font-anton  font-bold leading-[50px]  tracking-[4px]'>To be the <span className='bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent' >fittest</span> version of yourself</h1>
            <h2 className='text-[20px] mt-[20px] font-bodoni text-[#666565]  tracking-[1.5px]'>Whatever your level is, believe that the dream no matter how big it is, once you plan it correctly and start taking real steps in the right direction, it becomes a reality. 
              That is why you dream.
            </h2>
          </div>
          <div className="image-container max-[1028px]:w-3/4 w-1/2 relative flex justify-center items-center rounded-xl ">
            <div className='image-wraber  w-3/4 rounded-xl relative before:content-["_"] before:absolute before:top-7 before:right-[-20px] before:bottom-[-20px] before:left-7 before:bg-secondary z-[1] before:z-[-10] before:rounded-xl before:shadow-text '>
              <img src={mainImage} alt="Main Image" className='w-full rounded-xl cursor-pointer' />
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </AnimatedSection>
  )
}

