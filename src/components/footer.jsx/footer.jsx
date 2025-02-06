
import logo from '../../assets/logos/66.png'
export default function Footer() {

    return (
        <div id='Contact' className="footer static bottom-0 text-[20px] w-full flex justify-center items-center py-20 ">
            <div className="container  w-5/6 flex flex-col items-center justify-center gap-[50px]">
                <div className="content w-full max-[800px]:flex-col max-[800px]:gap-[30px] flex justify-center pb-10 border-b-black border-b border-solid;">       
                    <div className="logo flex items-center justify-between max-[800px]:flex-col max-[800px]:gap-[30px] w-full">
                        <div className='w-[250px] max-[800px]:w-[60%] '>
                            <a className='w-[250px] ' href=""><span><img src={logo} alt="" className='w-full' /></span></a>
                            <p  className=' font-bold font-anton text-[20px] text-secondary m-2.5'>Joun Us Now !</p>
                        </div>
                        <div className="icons flex justify-between w-[300px] max-sm:w-[60%]  my-[20px] text-xl transition-all duration-500 "> 
                            <i className="fa-brands fa-facebook text-[25px] hover:text-secondary transition-all duration-500"></i>
                            <i className="fa-brands fa-instagram text-[25px] hover:text-secondary transition-all duration-500"></i>
                            <i className="fa-brands fa-linkedin-in text-[25px] hover:text-secondary transition-all duration-500"></i>
                            <i className="fa-brands fa-twitter text-[25px] hover:text-secondary transition-all duration-500"></i>
                            <i className="fa-brands fa-youtube text-[25px] hover:text-secondary transition-all duration-500"></i>
                        </div>
                    </div>
                </div>
                <div className="developed flex md:flex-row max-md:flex-col max-[400px]: items-center ">
                        <div className="meni flex items-center text-center justify-items-center">
                           <Carle text="Developed By" />
                            <span className='second-letter'>
                                <a
                                className='text-black font-anton font-bold text-[23px] transition-all duration-500  px-[5px]  rounded-[20px] hover:shadow-[0_3px_5px_rgba(0,0,0,0.5),0_5px_5px_rgba(0,0,0,0.2)]'
                                href="https://www.instagram.com/gamal.abdelnaser.m/">Gematic</a> 
                            </span> 
                        </div>
                        
                        <Carle text="All Copy Rights Reserved IB@2025" />
                </div>
                
            </div>
        </div>
    )
}

function Carle({text}) {
    return(
        <span className='mx-[7px] max-[400px]:text-[13px]'>
            <span  className='text-[#161C24] '>{` < `}</span>
            <span className='text-secondary font-quad font-  '>{text}</span>
            <span  className='text-[#161C24]'>{`  > `}</span>
        </span>
    )
}
