// /* eslint-disable react/prop-types */
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, X } from "lucide-react";
import { PlansContext } from "../programs/plansContext";
import PersonalInfo from "./personalInfo";
import PackageDetails from "./PackageDetails";
import PaymentMethods from "./paymentMethod";
import "./form.css";

function Formy() {
  const { selectedPlan } = useContext(PlansContext);
  const navigate = useNavigate();
  
  const [price, setPrice] = useState(0);
  const [originalPrice, setOriginalPrice] = useState(0);
  const [packageDescription, setPackageDescription] = useState([""]);
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
  const [discountApplied, setDiscountApplied] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [promoError, setPromoError] = useState("");
  const [validPromoCode, setValidPromoCode] = useState("GAMAL");

  useEffect(() => {
    const savedPlan = JSON.parse(localStorage.getItem("selectedPlan"));
    if (!selectedPlan && !savedPlan) navigate("/select-plan");
  }, [selectedPlan, navigate]);

  useEffect(() => {
    if (selectedPlan) {
      localStorage.setItem("selectedPlan", JSON.stringify(selectedPlan));
      setOriginalPrice(selectedPlan.price);
      setPrice(selectedPlan.price);
      setPackageDescription(selectedPlan.description);
    } else {
      const savedPlan = JSON.parse(localStorage.getItem("selectedPlan"));
      if (savedPlan) {
        setOriginalPrice(savedPlan.price);
        setPrice(savedPlan.price);
        setPackageDescription(savedPlan.description);
      }
    }
  }, [selectedPlan]);

  const validatePhone = (phone) => /^\d{11}$/.test(phone);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    if (name === "phone" && value && !validatePhone(value)) {
      setErrors((prev) => ({ ...prev, phone: "Please enter a valid 11-digit phone number" }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    if (!formData[name]) setErrors((prev) => ({ ...prev, [name]: "This field is required" }));
  };

  const handleFileChange = (file) => {
    if (file) {
      setFormData((prev) => ({ ...prev, paymentScreenshot: file }));
      setPreviewUrl(URL.createObjectURL(file));
      setTouched((prev) => ({ ...prev, paymentScreenshot: true }));
    }
  };

  const handlePromoCode = () => {
    if (formData.promoCode.toUpperCase() === validPromoCode) {
      setPromoError("");
      setDiscountApplied(!discountApplied);
      setPrice(discountApplied ? originalPrice : originalPrice * 0.8);
    } else {
      setPromoError("Invalid promo code. Please try again.");
      setPrice(originalPrice);
      setDiscountApplied(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, promoCode: true, paymentMethod: true, paymentScreenshot: true });
    const newErrors = {
      name: !formData.name ? "This field is required" : "",
      phone: !formData.phone ? "This field is required" : !validatePhone(formData.phone) ? "Please enter a valid 11-digit phone number" : "",
      paymentMethod: !formData.paymentMethod ? "Please select a payment method" : "",
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some((error) => error)) return;
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    window.location.reload();
  };

  return (
    <div className="form w-full flex flex-col items-center justify-center bg-PrimaryBg">
      <div className="w-[90%] my-[100px] font-quad p-4">
        <h1 className="text-[40px] text-start font-bold my-[40px] uppercase text-primary">Be One of the Heroes</h1>
        <FormContent {...{ handleSubmit, formData, touched, errors, handleChange, handleBlur, handleFileChange, handlePromoCode, discountApplied, previewUrl, promoError, price, originalPrice, packageDescription }} />
        <SubmitSuccess closeModal={closeModal} showModal={showModal} />
      </div>
    </div>
  );
}

export default Formy;

function FormContent(props) {
  return (
    <form className="w-[100%]" onSubmit={props.handleSubmit}>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <PersonalInfo {...props} />
        <div>
          <PackageDetails price={props.price} originalPrice={props.originalPrice} packageData={props.packageDescription} />
          <PaymentMethods {...props} />
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <button type="submit" className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors text-lg font-medium">Pay Now</button>
      </div>
    </form>
  );
}

function SubmitSuccess({ closeModal, showModal }) {
  return showModal && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center relative py-12 w-[600px] max-sm:w-[350px]">
        <button className="absolute top-2 right-3 m-3 text-red-500 hover:text-gray-800 text-[25px] font-bold" onClick={closeModal}><X size={24} /></button>
        <div className="bg-green-500 text-white w-[100px] h-[100px] max-sm:h-[70px] max-sm:w-[70px] flex items-center justify-center mx-auto rounded-full text-3xl"><CheckCircle size={80} /></div>
        <h2 className="text-[25px] max-sm:text-[20px] font-bold text-gray-800 mt-4">Form sent successfully!</h2>
        <p className="text-gray-600 text-[20px] max-sm:text-[15px] mt-4 mb-6">Your data will be reviewed and we will respond to you as soon as possible.</p>
        <a href="https://wa.me/+201127994121" className="bg-green-500 text-white px-6 text-[20px] py-2 rounded-lg mt-4 inline-block">Contact us on WhatsApp Now</a>
      </div>
    </div>
  );
}
