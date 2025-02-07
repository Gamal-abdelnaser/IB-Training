/* eslint-disable react/prop-types */
// import { Smartphone, CreditCard } from "lucide-react";
import vodafone from '../../assets/vodafone-cash.png'
import instapay from '../../assets/insta-pay.png'
import { useState } from "react";
const PaymentMethods = ({ formData, touched, errors, handleChange, handleBlur, price }) => {
    const [copiedVoda, setCopiedVoda] = useState(false);
    const [copiedInsta, setCopiedInsta] = useState(false);
    const textToCopyVoda = "01127994121";
    const textToCopyInsta = "gemy@instapay";

    const handleCopyVoda = async () => {
        try {
        await navigator.clipboard.writeText(textToCopyVoda);
        setCopiedVoda(true);
        setTimeout(() => setCopiedVoda(false), 2000); // Reset after 2 seconds
        } catch (error) {
        console.error("Failed to copy:", error);
        }
    };
    const handleCopyInsta = async () => {
        try {
        await navigator.clipboard.writeText(textToCopyInsta);
        setCopiedInsta(true);
        setTimeout(() => setCopiedInsta(false), 2000); // Reset after 2 seconds
        } catch (error) {
        console.error("Failed to copy:", error);
        }
    };

  const renderPaymentInstructions = () => {
    if (!formData.paymentMethod) return null;

    if (formData.paymentMethod === "vodafone") {
      return (
        <div className="mt-4 p-4 pb-9 text-start bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center mb-[0px]">
            <div className="text-[15px] ml-4 font-playwrite text-secondary font-bold">Vodafone cash</div>
            <div className="font-playwrite w-[70px]">
                <img src={vodafone} alt="" />
            </div>
          </div>
          <div className='flex justify-between items-center text-center w-[80%]'>
            <h2 className=" text-[18px] font-quad ml-6 mb-5 text-start"> {textToCopyVoda} </h2>

            <button
                onClick={handleCopyVoda}
                className="px-6 py-0 h-[24px] bg-[#dddcdc] text-secondary font-bold font-anton rounded-[30px] border-[#7c7b7b]  border-solid border-[1px] transition"
            >
            {copiedVoda ? "Copied !" : "Copy Text"}
            </button>
          </div>
          <ol className="list-decimal list-inside font-playwrite ml-4  text-[14px] text-[#6D758F] space-y-2">
            <li className="list-inside">Transfer {price} EGP to 01127994121</li>
            <li>After conversion, attach the conversion image </li>
            <li>We will contact you as soon as possible to confirm the transfer process and start the subscription</li>
          </ol>
        </div>
      );
    }

    if (formData.paymentMethod === "instapay") {
      return (
        
        <div className="mt-4 p-4 pb-9 text-start bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <div className="text-[15px] ml-4 font-playwrite text-secondary font-bold">InstaPay</div>
            <div className="font-playwrite w-[70px]">
                <img src={instapay} alt="" />
            </div>
          </div>
          {/* <h2 className=" text-[18px] font-quad ml-6 mb-5 text-start"> {textToCopyInsta} </h2> */}
          <div className='flex justify-between items-center text-center w-[80%]'>
            <h2 className=" text-[18px] font-quad ml-6 mb-5 text-start"> {textToCopyInsta} </h2>

            <button
                onClick={handleCopyInsta}
                className="px-6 py-0 h-[24px] bg-[#dddcdc] text-secondary font-bold font-anton rounded-[30px] border-[#7c7b7b]  border-solid border-[1px] transition"
            >
            {copiedInsta ? "Copied !" : "Copy Text"}
            </button>
          </div>
          <ol className="list-decimal list-inside font-playwrite ml-4  text-[14px] text-[#6D758F] space-y-2">
            <li className="list-inside">Transfer {price} EGP to {textToCopyInsta} </li>
            <li>After conversion, attach the conversion image </li>
            <li>We will contact you as soon as possible to confirm the transfer process and start the subscription</li>
          </ol>
        </div>
      );
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-5xl font-bold my-9 text-primary">
        Payment Methods <span className="text-red-500">*</span>
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <label
          className={`relative border rounded-lg p-4 cursor-pointer transition-colors ${
            formData.paymentMethod === "vodafone"
              ? "border-orange-500"
              : "hover:border-orange-500"
          }`}
        >
          <input
            type="radio"
            name="paymentMethod"
            value="vodafone"
            checked={formData.paymentMethod === "vodafone"}
            onChange={handleChange}
            onBlur={handleBlur}
            className="absolute opacity-0"
          />
          <div className="flex flex-col items-center gap-2">
            {/* <Smartphone className="w-8 h-8 text-red-500" /> */}
            <img src={vodafone} alt="" />
            <span className="text-[20px] text-[#fff] font-quad">Vodafone Cash</span>
          </div>
        </label>

        <label
          className={`relative border rounded-lg p-4 cursor-pointer transition-colors ${
            formData.paymentMethod === "instapay"
              ? "border-orange-500"
              : "hover:border-orange-500"
          }`}
        >
          <input
            type="radio"
            name="paymentMethod"
            value="instapay"
            checked={formData.paymentMethod === "instapay"}
            onChange={handleChange}
            onBlur={handleBlur}
            className="absolute opacity-0"
          />
          <div className="flex flex-col items-center gap-2">
            {/* <CreditCard className="w-8 h-8 text-blue-500" /> */}
            <img src={instapay} alt="" />
            <span className="text-[20px] text-[#fff] font-quad">InstaPay</span>
          </div>
        </label>
      </div>
      {touched.paymentMethod && errors.paymentMethod && (
        <div className="text-red-500 text-[20px] mt-1">{errors.paymentMethod}</div>
      )}
      {renderPaymentInstructions()}
    </div>
  );
};

export default PaymentMethods;