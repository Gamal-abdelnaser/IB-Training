
import { useContext } from 'react';
import logo from '../../assets/logos/1.svg'
import logo2 from '../../assets/logos/2.PNG'
// import logo from '../../assets/logos/66.png'
import { DarkContext } from '../darkLight/darkContext';
export default function Footer() {
    const { isDark } = useContext(DarkContext);
    
    
    return (
        <div id='Contact' className={`footer static bottom-0 text-[20px] w-full flex justify-center items-center  py-10 pb-20 bg-PrimaryBg border-t-[1px] border-[#cccaca] ` }>
            <div className="container  w-5/6 flex flex-col items-center justify-center gap-[50px]">
                <div className={`content w-full max-[800px]:flex-col max-[800px]:gap-[30px] flex justify-center pb-10 border-b-white border-b border-solid`}>       
    
                    <Logo/>

                </div>
                
                <DevelopedIdentity/>
                
            </div>
        </div>
    )
}

function Logo() {
    return(
        <div className="logo flex items-center justify-between max-[800px]:flex-col max-[800px]:gap-[30px] w-full">
            <div className=' w-[50%] max-[800px]:w-[60%] flex flex-col max-[800px]:items-center '>
                <div className='w-[90px] max-sm:w-[75px] ' ><a className='ml-9' href=""><img src={ logo2 } alt="" className='w-full ' loading='lazy' /></a></div>
                <p  className={` font-bold font-anton text-[16px]  text-secondary  my-2.5`}>Joun Us Now !</p>
            </div>
            <div className="icons flex justify-between w-[300px] max-sm:w-[90%]  my-[20px] text-xl transition-all duration-500 "> 
                <Icons />
            </div>
        </div>
    )
}

function DevelopedIdentity() {
    return(
         <div className="developed flex md:flex-row max-md:flex-col max-[400px]: items-center ">
                <div className="meni flex items-center text-center justify-items-center max-[300px]:flex-col">
                    <Carle text="Developed By"  />
                    <span className='second-letter'>
                        <a
                        className={` text-[#cfcfcf] font-playwrite  text-[24px] max-[400px]:text-[20px] max-[300px]:text-[25px] transition-all duration-500  px-[5px]  rounded-[20px] hover:shadow-[0_3px_5px_rgba(0,0,0,0.5),0_5px_5px_rgba(0,0,0,0.2)]`}
                        href="https://www.instagram.com/gamal.abdelnaser.m/">Gematic</a> 
                    </span> 
                </div>
                
                <Carle text="All Copy Rights Reserved IB@2025" />
        </div>
    )
}

function Carle({text}) {
    return(
        <span className='mx-[7px]  max-[400px]:text-[14px] max-[300px]:text-[11px]'>
            <span  className={` text-[#cfcfcf] `} >{` < `}</span>
            <span className='text-secondary font-quad font-light   '>{text}</span>
            <span  className={` text-[#cfcfcf] `}>{`  > `}</span>
        </span>
    )
}

function Icons() {
    const iconsText = [
        'fa-facebook',
        'fa-instagram',
        'fa-linkedin-in',
        'fa-x',
        'fa-youtube'
    ];

    return (
        <>
            {
                iconsText.map((i, index) => (
                    <i key={index} className={`fa-brands ${i} text-[25px] max-sm:text-[18px] text-[#cfcfcf] hover:text-secondary transition-all duration-500`}></i>
                ))
            }
        </>
    );
}

