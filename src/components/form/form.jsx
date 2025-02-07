
// import { useState } from "react";
// import { Smartphone, CreditCard, Upload } from "lucide-react";
// import "./form.css"; // For any additional CSS animations (like the popup)

// function Formy() {
//   // -------------------- State --------------------
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     promoCode: "",
//     paymentMethod: "",
//     paymentScreenshot: null,
//   });
//   const [touched, setTouched] = useState({
//     name: false,
//     phone: false,
//     promoCode: false,
//     paymentMethod: false,
//     paymentScreenshot: false,
//   });
//   const [errors, setErrors] = useState({
//     name: "",
//     phone: "",
//     paymentMethod: "",
//   });
//   const [price, setPrice] = useState(650);
//   const originalPrice = 650;
//   const [discountApplied, setDiscountApplied] = useState(false);
//   const [previewUrl, setPreviewUrl] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);

//   const validPromoCode = "SAVE20";

//   // -------------------- Helpers & Handlers --------------------
//   const validatePhone = (phone) => /^\d{11}$/.test(phone);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     // Clear previous errors for this field.
//     setErrors((prev) => ({ ...prev, [name]: "" }));

//     // Validate phone immediately.
//     if (name === "phone" && value && !validatePhone(value)) {
//       setErrors((prev) => ({
//         ...prev,
//         phone: "Please enter a valid 11-digit phone number",
//       }));
//     }
//   };

//   const handleBlur = (e) => {
//     const { name } = e.target;
//     setTouched((prev) => ({ ...prev, [name]: true }));

//     if (!formData[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "This field is required" }));
//     }
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files && e.target.files[0];
//     if (file) {
//       setFormData((prev) => ({ ...prev, paymentScreenshot: file }));
//       setPreviewUrl(URL.createObjectURL(file));
//       setTouched((prev) => ({ ...prev, paymentScreenshot: true }));
//     }
//   };

//   const handlePromoCode = () => {
//     if (formData.promoCode.toUpperCase() === validPromoCode && !discountApplied) {
//       setPrice(originalPrice * 0.8);
//       setDiscountApplied(true);
//     } else {
//       setPrice(originalPrice);
//       setDiscountApplied(false);
//     }
//   };

//   const renderPaymentInstructions = () => {
//     if (!formData.paymentMethod) return null;

//     if (formData.paymentMethod === "vodafone") {
//       return (
//         <div className="mt-4 p-4 bg-gray-50 rounded-lg">
//           <h4 className="font-bold mb-2">Vodafone Cash Payment Steps:</h4>
//           <ol className="list-decimal ml-4 space-y-2">
//             <li>Open Vodafone Cash on your phone</li>
//             <li>Select "Pay Bills"</li>
//             <li>Enter merchant code: 123456</li>
//             <li>Enter amount: {price} EGP</li>
//             <li>Confirm payment with your PIN</li>
//             <li>Keep the transaction ID for reference</li>
//             <li>Take a screenshot of the payment confirmation</li>
//           </ol>
//         </div>
//       );
//     }

//     if (formData.paymentMethod === "instapay") {
//       return (
//         <div className="mt-4 p-4 bg-gray-50 rounded-lg">
//           <h4 className="font-bold mb-2">InstaPay Payment Steps:</h4>
//           <ol className="list-decimal ml-4 space-y-2">
//             <li>Open your bank's InstaPay app</li>
//             <li>Select "Pay to Merchant"</li>
//             <li>Scan QR code or enter ID: INSTA-12345</li>
//             <li>Enter amount: {price} EGP</li>
//             <li>Review and confirm payment</li>
//             <li>Take a screenshot of the confirmation receipt</li>
//           </ol>
//         </div>
//       );
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Mark all fields as touched.
//     setTouched({
//       name: true,
//       phone: true,
//       promoCode: true,
//       paymentMethod: true,
//       paymentScreenshot: true,
//     });

//     // Validate required fields.
//     const newErrors = {
//       name: !formData.name ? "This field is required" : "",
//       phone: !formData.phone
//         ? "This field is required"
//         : !validatePhone(formData.phone)
//         ? "Please enter a valid 11-digit phone number"
//         : "",
//       paymentMethod: !formData.paymentMethod ? "Please select a payment method" : "",
//     };

//     setErrors(newErrors);

//     if (Object.values(newErrors).some((error) => error)) {
//       return;
//     }

//     // If validation passes.
//     console.log("Form submitted:", formData);
//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 3000);
//   };

//   // ------------- Tailwind Floating Label Styling Functions -------------
//   const getInputClassName = (fieldName) => {
//     let baseClasses =
//       "w-full text-[20px] font-quad h-[70px] bg-transparent border rounded-lg p-4 text-gray-300 outline-none transition-all duration-200";
//     if (fieldName === "phone") {
//       // Add extra left padding for the phone prefix.
//       baseClasses =
//         "w-full text-[20px] font-quad h-[70px] bg-transparent border rounded-lg p-4 text-gray-300 outline-none transition-all duration-200";
//     }
//     if (!touched[fieldName]) return `${baseClasses} border-gray-600`;
//     if (errors[fieldName] || !formData[fieldName]) return `${baseClasses} border-red-500`;
//     return `${baseClasses} border-gray-600`;
//   };

//   const getLabelClassName = (fieldName) => {
//     let baseClasses =
//       "absolute text-[25px] font-quad transition-all duration-200 pointer-events-none";
//     if (fieldName === "phone") {
//       baseClasses += " left-4 top-4"; // offset for the phone prefix
//     } else {
//       baseClasses += " left-4 top-4";
//     }
//     if (!touched[fieldName]) return `${baseClasses} text-gray-400`;
//     if (errors[fieldName] || !formData[fieldName])
//       return `${baseClasses} text-[20px] text-red-500`;
//     return `${baseClasses} text-[20px] text-gray-400`;
//   };

//   const renderErrorMessage = (fieldName) => {
//     if (touched[fieldName] && !formData[fieldName]) {
//       return (
//         <div className="text-red-500 text-[20px] text-start mt-1">
//           {fieldName} is required
//         </div>
//       );
//     }
//     if (errors[fieldName]) {
//       return <div className="text-red-500 text-[20px] mt-1">{errors[fieldName]}</div>;
//     }
//     return null;
//   };

//   // -------------------- JSX --------------------
//   return (
//     <div className="w-full flex flex-col mb-[100px] font-quad p-4 relative">
//       <h1 className="text-[40px] text-start font-bold my-[40px] uppercase text-primary">Be One of the Heroes</h1>
//       <form className="w-[100%] space-y-6" onSubmit={handleSubmit}>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Left Side – Personal Information */}
//           <div>
//             <h2 className="text-2xl text-white font-bold mb-6">Personal Information</h2>
//             <div className="space-y-6">
//               {/* Full Name Field */}
//               <div className="relative">
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={getInputClassName("name")}
//                   placeholder=" "
//                 />
//                 <label htmlFor="name" className={getLabelClassName("name")}>
//                   Full Name
//                 </label>
//                 {renderErrorMessage("name")}
//               </div>

//               {/* Phone Number Field */}
//               <div className="relative">
//                 {/* Phone prefix */}
//                 <input
//                   type="number"
//                   name="phone"
//                   id="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={getInputClassName("phone")}
//                   placeholder=" "
//                 />
                
//                 <label htmlFor="phone" className={getLabelClassName("phone")}>
//                   Phone Number
//                 </label>
//                 {renderErrorMessage("phone")}
//               </div>

//               {/* Discount Code Field */}
//               <div className="relative">
//                 <input
//                   type="text"
//                   name="promoCode"
//                   id="promoCode"
//                   value={formData.promoCode}
//                   onChange={handleChange}
//                   className={getInputClassName("promoCode")}
//                   placeholder=" "
//                 />
//                 <label htmlFor="promoCode" className={getLabelClassName("promoCode")}>
//                   Discount Code
//                 </label>
//                 <button
//                   type="button"
//                   onClick={handlePromoCode}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-4 rounded-lg hover:bg-orange-600"
//                 >
//                   Apply
//                 </button>
//                 {discountApplied && (
//                   <div className="text-green-600 mt-1 text-[20px]">20% discount applied!</div>
//                 )}
//               </div>

//               {/* Payment Screenshot (only shown if a payment method is selected) */}
//               {formData.paymentMethod && (
//                 <div className="relative">
//                   <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
//                     <input
//                       type="file"
//                       accept="image/*"
//                       onChange={handleFileChange}
//                       className="hidden"
//                       id="screenshot-upload"
//                     />
//                     <label
//                       htmlFor="screenshot-upload"
//                       className="flex flex-col items-center justify-center cursor-pointer"
//                     >
//                       {previewUrl ? (
//                         <div className="relative w-full">
//                           <img
//                             src={previewUrl}
//                             alt="Payment screenshot"
//                             className="max-h-48 mx-auto rounded-lg"
//                           />
//                           <button
//                             onClick={(e) => {
//                               e.preventDefault();
//                               setPreviewUrl(null);
//                               setFormData((prev) => ({ ...prev, paymentScreenshot: null }));
//                             }}
//                             className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
//                           >
//                             ×
//                           </button>
//                         </div>
//                       ) : (
//                         <div className="flex flex-col items-center">
//                           <Upload className="w-8 h-8 text-gray-400 mb-2" />
//                           <p className="text-sm text-gray-500">Click to upload payment screenshot</p>
//                           <p className="text-xs text-gray-400 mt-1">Supported formats: JPG, PNG</p>
//                         </div>
//                       )}
//                     </label>
//                   </div>
//                   {touched.paymentScreenshot && !formData.paymentScreenshot && (
//                     <div className="text-red-500 text-[20px] mt-1">
//                       Please upload your payment screenshot
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Right Side – Package Details & Payment Methods */}
//           <div>
//             <h2 className="text-2xl font-bold mb-6">Package Details</h2>
//             <div className="bg-gray-50 rounded-xl p-6 mb-6">
//               <div className="flex justify-between items-center mb-4">
//                 <div className="text-lg font-bold">{price} EGP</div>
//                 <div className="text-gray-600">One Month</div>
//               </div>
//               <div className="space-y-2 text-sm text-gray-600">
//                 <div className="flex items-center gap-2">
//                   <span>✓</span>
//                   <span>Practical Exam</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <span>✓</span>
//                   <span>Training Program</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <span>✓</span>
//                   <span>48-hour Expert Support</span>
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-6">
//               <h3 className="text-xl font-bold mb-4">
//                 Payment Methods <span className="text-red-500">*</span>
//               </h3>
//               <div className="grid grid-cols-2 gap-4">
//                 <label
//                   className={`relative border rounded-lg p-4 cursor-pointer transition-colors ${
//                     formData.paymentMethod === "vodafone"
//                       ? "border-orange-500"
//                       : "hover:border-orange-500"
//                   }`}
//                 >
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="vodafone"
//                     checked={formData.paymentMethod === "vodafone"}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className="absolute opacity-0"
//                   />
//                   <div className="flex flex-col items-center gap-2">
//                     <Smartphone className="w-8 h-8 text-red-500" />
//                     <span className="text-[20px] font-quad">Vodafone Cash</span>
//                   </div>
//                 </label>

//                 <label
//                   className={`relative border rounded-lg p-4 cursor-pointer transition-colors ${
//                     formData.paymentMethod === "instapay"
//                       ? "border-orange-500"
//                       : "hover:border-orange-500"
//                   }`}
//                 >
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="instapay"
//                     checked={formData.paymentMethod === "instapay"}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className="absolute opacity-0"
//                   />
//                   <div className="flex flex-col items-center gap-2">
//                     <CreditCard className="w-8 h-8 text-blue-500" />
//                     <span className="text-[20px] font-quad">InstaPay</span>
//                   </div>
//                 </label>
//               </div>
//               {touched.paymentMethod && errors.paymentMethod && (
//                 <div className="text-red-500 text-[20px] mt-1">{errors.paymentMethod}</div>
//               )}
//               {renderPaymentInstructions()}
//             </div>
//           </div>
//         </div>

//         <div className="mt-8 flex justify-end">
//           <button
//             type="submit"
//             className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors text-lg font-medium"
//           >
//             Pay Now
//           </button>
//         </div>
//       </form>

//       {showPopup && (
//         <div className="popup-animation">
//           Form submitted successfully!
//         </div>
//       )}
//     </div>
//   );
// }
// export default Formy;

import { useState } from "react";
import PersonalInfo from "./personalInfo";
import PackageDetails from "./PackageDetails";
import PaymentMethods from "./paymentMethod";
import "./form.css";

function Formy() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    promoCode: "",
    paymentMethod: "",
    paymentScreenshot: null,
  });
  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    promoCode: false,
    paymentMethod: false,
    paymentScreenshot: false,
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    paymentMethod: "",
  });
  const [price, setPrice] = useState(650);
  const originalPrice = 650;
  const [discountApplied, setDiscountApplied] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const validPromoCode = "SAVE20";

  const validatePhone = (phone) => /^\d{11}$/.test(phone);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));

    if (name === "phone" && value && !validatePhone(value)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Please enter a valid 11-digit phone number",
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    if (!formData[name]) {
      setErrors((prev) => ({ ...prev, [name]: "This field is required" }));
    }
  };

  const handleFileChange = (file) => {
    if (file) {
      setFormData((prev) => ({ ...prev, paymentScreenshot: file }));
      setPreviewUrl(URL.createObjectURL(file));
      setTouched((prev) => ({ ...prev, paymentScreenshot: true }));
    }
  };

  const handlePromoCode = () => {
    if (formData.promoCode.toUpperCase() === validPromoCode && !discountApplied) {
      setPrice(originalPrice * 0.8);
      setDiscountApplied(true);
    } else {
      setPrice(originalPrice);
      setDiscountApplied(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched({
      name: true,
      phone: true,
      promoCode: true,
      paymentMethod: true,
      paymentScreenshot: true,
    });

    const newErrors = {
      name: !formData.name ? "This field is required" : "",
      phone: !formData.phone
        ? "This field is required"
        : !validatePhone(formData.phone)
        ? "Please enter a valid 11-digit phone number"
        : "",
      paymentMethod: !formData.paymentMethod ? "Please select a payment method" : "",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    console.log("Form submitted:", formData);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="w-full flex flex-col mb-[100px] font-quad p-4 relative">
      <h1 className="text-[40px] text-start font-bold my-[40px] uppercase text-primary">
        Be One of the Heroes
      </h1>
      <form className="w-[100%]" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <PersonalInfo
            formData={formData}
            touched={touched}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleFileChange={handleFileChange}
            handlePromoCode={handlePromoCode}
            discountApplied={discountApplied}
            previewUrl={previewUrl}
          />
          <div>
            <PackageDetails price={price} originalPrice={originalPrice} />
            <PaymentMethods
              formData={formData}
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
              price={price}
            />
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors text-lg font-medium"
          >
            Pay Now
          </button>
        </div>
      </form>
      {showPopup && <div className="popup-animation">Form submitted successfully!</div>}
    </div>
  );
}

export default Formy;