/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useContext, useState } from "react";
import { DarkContext } from "../darkLight/darkContext";
import Programs from "../programs/programs";
import Footer from "../footer.jsx/footer";
import './calculator.css'

export default function CalorieCalculator () {
    const { isDark } = useContext(DarkContext);
  
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    height: "",
    gender: "male",
    activity: "1.2",
  });

  const [errors, setErrors] = useState({});
  const [calories, setCalories] = useState(null);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Remove error when typing
  };

  // Validate Inputs
  const validateInputs = () => {
    let newErrors = {};
    if (!formData.age) newErrors.age = "Age is required";
    if (!formData.weight) newErrors.weight = "Weight is required";
    if (!formData.height) newErrors.height = "Height is required";
    return newErrors;
  };

  // Calculate Calorie Intake
  
  const calculateCalories = () => {
    const validationErrors = validateInputs();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Stop execution if there are errors
    }

    const { age, weight, height, gender, activity } = formData;
    
    let BMR;
    if (gender === "male") {
      BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      BMR = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const TDEE = BMR * parseFloat(activity);
    setCalories(TDEE.toFixed(2));
  };
  

  return (
    <div className={`w-full text-[30px] flex flex-col items-center justify-center ${isDark ?' bg-[#161C24]' : 'bg-[#fff]' }   selection:text-customSelection `}>
      <h2 className={`mb-9 text-[35px] xl:text-[50px] lg:text-[50px] md:text-[50px] sm:text-[35px] max-sm:font-light  font-bold text-center ${isDark ? 'text-white' : 'text-[#161C24]' } font-futura mt-[100px] `}>Your Daily Calorie Intake</h2>
      <div className="container pb-[50px] mb-1 flex flex-col justify-center items-center  w-[100%] xl:w-[90%] lg:w-[90%] md:w-[90%] max-sm:w-[100%]  mt-[20px]">
        <div className="inputsContainer flex flex-col items-center  justify-center w-[100%] xl:w-[90%] lg:w-[90%] md:w-[95%]  max-sm:w-[100%]">

          <div className="d1 w-[80%] xl:w-[80%] lg:w-[80%]  md:w-[90%] sm:w-[95%]  flex justify-between flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col   ">
            <Inputs valueData={formData.age} name="age" handleChange={handleChange} error={errors.age} placeHolder="years"/>
            <Inputs valueData={formData.weight} name="weight" handleChange={handleChange} error={errors.weight} placeHolder="kg" />
          </div>

          <div className="d1 w-[80%] xl:w-[80%] lg:w-[80%]  md:w-[90%] sm:w-[95%] flex justify-between flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col  ">
            <Inputs valueData={formData.height} name="height" handleChange={handleChange} error={errors.height} placeHolder="cm" />
            <Select1 formData={formData} handleChange={handleChange} />
          </div>

          <div className="sel w-[80%] xl:w-[80%] lg:w-[80%]  md:w-[90%] sm:w-[95%] flex ">
          <Select2 formData={formData} handleChange={handleChange} />
          </div>
          
          <Btn calculateCalories={calculateCalories} />

        </div>

        <Result calories={calories} />

      </div>
      <div className="w-[90%] flex justify-center flex-col items-center">

        <div className="w-[80%] ">
          <h1 className={`text-[35px]  xl:text-[50px] lg:text-[50px] md:text-[50px] sm:text-[35px] text-center font-tajawal font-bold mt-[100px] ${isDark ? 'text-white' : 'text-[#161C24]' }`}>
            You Can Reach a High Level of Muscle Building Endurance, And Balance With IB Training
          </h1>
        </div>

      </div>
      <div className="w-full pb-[60px] mt-[60px] bg-[#161C24] flex justify-center items-center">
        <div className="w-[90%]">
          <Programs/>
          <p  className="text-[25px] text-center mt-[50px] text-[#9b9a9a] font-tajawal font-bold">
            You can now choose the program you preferand and {"let's"} do something strong together
          </p>
        </div>

      </div>
        <Footer />
    </div>
  );
};


// Input Component with Error Handling
function Inputs({ valueData, name, handleChange, error ,placeHolder }) {
  const { isDark } = useContext(DarkContext);

  return (
    <div className="w-full xl:w-[45%] lg:w-[45%]  md:w-[45%] mb-7">
      <h1 className={`block text-[18px] font-bold mb-3 first-letter:uppercase ${isDark ? "text-primary" : "text-secondary"} font-playwrite`}>{name}</h1>
      <input
        type="number"
        name={name}
        value={valueData}
        onChange={handleChange}
        placeholder={placeHolder}
        className={`w-full h-[50px] text-[16px] ${isDark ? "bg-[#161C24] text-[#fff]" : "bg-white text-[#161C24]"} pl-[10px] font-playwrite border-2 border-[#595959] rounded-xl`}
      />
      {error && <div className="text-red-500 mt-1 text-[20px]">{error}</div>} {/* Show error message if input is empty */}
    </div>
  );
}


function Select1({formData , handleChange}) {
  const { isDark } = useContext(DarkContext);
  return (
    <div className="w-full xl:w-[45%] lg:w-[45%]  md:w-[45%] flex flex-col">
      <h1 className={`block mb-2 mt-4 ${isDark ? "text-primary" : "text-secondary"} text-[18px] font-bold font-playwrite`}>Gender</h1>
      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        className={`w-full h-[50px] p-2.5 ${isDark ? "bg-[#161C24] text-[#fff]" : "bg-white text-[#161C24]"}  text-[16px]  font-light font-playwrite border-2 border-[#595959] rounded-xl `}
      >
        <option className="" value="male">Male</option>
        <option className=" " value="female">Female</option>
      </select>
    </div>
  )
}


function Select2({ formData, handleChange }) {
    const { isDark } = useContext(DarkContext);

  return (
    <div className=" w-full flex  item-center justify-center flex-col mb-20">
      <h1 className={`block mb-5 mt-9 ${isDark ? "text-primary" : "text-secondary"} font-bold text-[18px] font-playwrite`}>Activity Level</h1>
      <div className="w-full flex  flex-col item-center justify-between ">

        <div className="content w-full  flex  flex-col lg:flex-row  md:flex-col sm:flex-col ">
          <SelectedInputs valueNumber="1.2" text='Sedentary' formData={formData} handleChange={handleChange} />
          <SelectedInputs valueNumber="1.375" text='Lightly' formData={formData} handleChange={handleChange} />

        </div>
        <div className="content w-full  flex flex-col lg:flex-row  md:flex-col sm:flex-col">
          <SelectedInputs valueNumber="1.55" text='Moderately' formData={formData} handleChange={handleChange} />
          <SelectedInputs valueNumber="1.725" text=' Active' formData={formData} handleChange={handleChange} /> 
        </div>
        <div className="content w-full flex flex-col lg:flex-row  md:flex-col sm:flex-col">
          <SelectedInputs valueNumber="1.9" text='Very active' formData={formData} handleChange={handleChange} />
          <SelectedInputs valueNumber="2.0" text='Super active' formData={formData} handleChange={handleChange} />
        </div>

      </div>
    </div>
  );
}

function SelectedInputs({text,valueNumber,formData,handleChange}) {
  const { isDark } = useContext(DarkContext);
  return (
    <label className={`inline-flex mb-4 items-center text-center   w-[100%] xl:w-[20%] lg:w-[25%] md:w-[100%] sm:w-[100%] `}>
      <input
        type="radio"
        name="activity"
        value={valueNumber}
        checked={formData.activity === valueNumber}
        onChange={handleChange}
        className="form-radio mr-2"
      />
      <span className={`ml-[1px] text-[18px] max-sm:text-[14px] font-light font-quad  ${isDark ? "text-[#dbd9d9]" : "text-[#000]" } `}> {text}</span>
    </label>
  )
}

function Btn({calculateCalories}) {
  return(
    <button onClick={calculateCalories} className="w-[60%] text-[30px] max-sm:text-[20px] bg-secondary text-black font-tajawal font-bold p-2 mt-4 rounded">
      Calculate
    </button>
  )
}

function Result({calories}) {
  return (
    <div className="result mt-[80px] py-[20px] w-[95%] xl:w-[80%] lg:w-[80%]  md:w-[90%] sm:w-[95%] bg-[#b6d1ec] flex justify-center items-center border-[solid] border-[#9f9e9e] border-[2px] rounded-[25px]">
      <div className="mt-4 p-4 flex justify-center items-center flex-col rounded">
        <h1 className="text-[#000] text-center font-bold font-tajawal text-[30px] max-sm:text-[25px]">Target calorie intake per day:</h1>
        <h1 className="text-green-800 text-[25px] mx-sm:text-[20px] font-bold font-tajawal mt-9 rounded-full px-[40px] w-[70%] py-3   bg-white text-center">{!calories ? 0 : Math.round(calories)  }</h1>
      </div>
    </div>
  )
}