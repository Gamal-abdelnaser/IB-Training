// import { useGetgamalByNameQuery } from '../../Redux/programs';

// export const About = () => {
//   const { data, error, isLoading } = useGetgamalByNameQuery('heroes?populate=*');
  
//   if(data) {
//     console.log(data.data);
//   }
//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error loading data!</p>;
//   if (!data || !data.data) return <p>No data available.</p>;
//   if(data){

  
//   return (
//     <div className='h-screen mt-[200px]'>
//       <div>
//         {data.data.map((dt, index) => (
//           <div key={index}>
//             <img src={` http://localhost:1337${dt.herosImage[0].url}`} alt="" />
//             <h2 className='text-[40px]'>{dt.name}</h2>
//             {/* <p>{dt.store}</p> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// }
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function PhoneNumberInput() {
  const [phone, setPhone] = useState("");

  return (
    <div className="flex flex-col mt- w-full items-center gap-4">
      <h2 className="text-[30px] font-bold">Enter Your Phone Number</h2>
      <PhoneInput
        country={"eg"} // Default country (Egypt)
        value={phone}
        onChange={setPhone}
        inputClass="w-full p-2 text-black border rounded-lg focus:ring focus:ring-blue-300"
        dropdownClass="custom-dropdown"
        enableSearch={true} // Enable country search
      />
      <p className="mt-2">Selected Number: {phone}</p>
    </div>
  );
}

export default PhoneNumberInput;
