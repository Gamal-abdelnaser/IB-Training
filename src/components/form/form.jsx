
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