
// eslint-disable-next-line react/prop-types
export default function Title({children , color}) {
    return(
        <div className="w-full mb-[10px] max-[800px]:mb-[30px] flex items-center text-center justify-center">
            <h1 
                className={` selection:text-customSelection font-quad  mb-[50px] font-extrabold text-[50px]  max-md:text-[35px]  relative cursor-pointer transition-[0.3s]  py-0 rounded-[100px] uppercase before:content-["_"] before:absolute  before:w-[30%] before:h-[3px] before:bg-secondary before:left-[35%] before:bottom-[-6px] text-[${color}] `}
                
            >{children}</h1> 
        </div>
    )
}