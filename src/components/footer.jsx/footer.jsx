
import { useContext } from 'react';
import logo from '../../assets/logos/1.PNG'
import logo2 from '../../assets/logos/2.PNG'
// import logo from '../../assets/logos/66.png'
import { DarkContext } from '../darkLight/darkContext';
export default function Footer() {
    const { isDark } = useContext(DarkContext);
    

    return (
        <div id='Contact' className={`footer static bottom-0 text-[20px] w-full flex justify-center items-center mt-3 py-20 ${isDark ? 'bg-PrimaryBg' :'bg-[#fff]' }` }>
            <div className="container  w-5/6 flex flex-col items-center justify-center gap-[50px]">
                <div className={`content w-full max-[800px]:flex-col max-[800px]:gap-[30px] flex justify-center pb-10 ${isDark ?'border-b-white' : 'border-b-black'} border-b border-solid`}>       
                    <div className="logo flex items-center justify-between max-[800px]:flex-col max-[800px]:gap-[30px] w-full">
                        <div className=' w-[50%] max-[800px]:w-[60%] flex flex-col max-[800px]:items-center '>
                            <div className='w-[100px] max-sm:w-[80px] ' ><a className='ml-9' href=""><img src={isDark ? logo2 : logo} alt="" className='w-full ' /></a></div>
                            <p  className={` font-bold font-anton text-[20px]  text-secondary  my-2.5`}>Joun Us Now !</p>
                        </div>
                        <div className="icons flex justify-between w-[300px] max-sm:w-[60%]  my-[20px] text-xl transition-all duration-500 "> 
                            <i className={`fa-brands fa-facebook text-[25px] ${isDark ?  'text-[#cfcfcf]' : 'text-PrimaryBg' }  hover:text-secondary transition-all duration-500`}></i>
                            <i className={`fa-brands fa-instagram text-[25px] ${isDark ?  'text-[#cfcfcf]' : 'text-PrimaryBg' } hover:text-secondary transition-all duration-500`}></i>
                            <i className={`fa-brands fa-linkedin-in text-[25px] ${isDark ?  'text-[#cfcfcf]' : 'text-PrimaryBg' } hover:text-secondary transition-all duration-500`}></i>
                            <i className={`fa-brands fa-twitter text-[25px] ${isDark ?  'text-[#cfcfcf]' : 'text-PrimaryBg' } hover:text-secondary transition-all duration-500`}></i>
                            <i className={`fa-brands fa-youtube text-[25px] ${isDark ?  'text-[#cfcfcf]' : 'text-PrimaryBg' } hover:text-secondary transition-all duration-500`}></i>
                        </div>
                    </div>
                </div>
                <div className="developed flex md:flex-row max-md:flex-col max-[400px]: items-center ">
                        <div className="meni flex items-center text-center justify-items-center">
                           <Carle text="Developed By" isDark={isDark} />
                            <span className='second-letter'>
                                <a
                                className={`${ isDark ? 'text-[#cfcfcf]' : 'text-[#161C24]' } font-playwrite  text-[24px] max-[400px]:text-[20px] transition-all duration-500  px-[5px]  rounded-[20px] hover:shadow-[0_3px_5px_rgba(0,0,0,0.5),0_5px_5px_rgba(0,0,0,0.2)]`}
                                href="https://www.instagram.com/gamal.abdelnaser.m/">Gematic</a> 
                            </span> 
                        </div>
                        
                        <Carle text="All Copy Rights Reserved IB@2025" isDark={isDark} />
                </div>
                
            </div>
        </div>
    )
}

function Carle({text , isDark}) {
    return(
        <span className='mx-[7px]  max-[400px]:text-[14px]'>
            <span  className={`${ isDark ? 'text-[#cfcfcf]' : 'text-[#161C24]' } `} >{` < `}</span>
            <span className='text-secondary font-quad font-  '>{text}</span>
            <span  className={`${ isDark ? 'text-[#cfcfcf]' : 'text-[#161C24]' } `}>{`  > `}</span>
        </span>
    )
}
