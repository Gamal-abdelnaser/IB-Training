import AnimatedSection from '../../Animation/AnimatedSection'
import coach1 from '../../assets/coaches/1.webp'
import coach2 from '../../assets/coaches/2.webp'
import Title from '../title/title'


export default function Coachs() {
  return (
    <AnimatedSection >
    <div id='coatches' className="coachs  flex justify-center items-center flex-col text-center w-full ">
      <div className="container w-[95%] flex justify-center justify-items-center  items-center  flex-col px-0 py-[50px]">
        
        {/* Section Title */}
        <Title color="#000">Our team</Title>

        {/* Coach Cards */}
        <div className="box-container  justify-items-center grid  items-center w-full grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[20px] px-[50px] py-0 justify-center">    
          <ListTips />
        </div>
      </div>
      
    </div>
  </AnimatedSection>
  )
}
function ListTips() {
  const trainers = [
    { name: "C. Ibrahim", image: coach1 },
    { name: "C. Nancy Khaled", image: coach2 },
    { name: "C. Ibrahim", image: coach1 }
  ];
  return (
    <>
      {
        trainers.map((traine , index) => {
          return (
            <AnimatedSection key={index} >
            <div className="tips-items flex flex-col justify-center object-cover overflow-hidden items-center w-full  cursor-pointer transition-all duration-500 z-[3] font-[bold]  text-[25px] hover:shadow-[0_8px_10px_rgba(0,0,0,0.5),0_5px_5px_rgba(0,0,0,0.2)] rounded-[15px] border-[5px] border-solid border-secondary bg-secondary ">
              <img className='transition-all duration-500 w-full ' loading="lazy" src={traine.image} alt="Icon" />
              <h1 className='text-[30px] text-[#ffffffc4] object-cover  font-extrabold py-5'>{traine.name}</h1>
            </div>
            </AnimatedSection>
          )
        })
      }
    </>
  )
}