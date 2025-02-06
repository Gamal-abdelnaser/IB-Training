import { useState } from 'react';
import './form.css'; // Create this file for CSS animations

function Formy() {
  // State for form data, touched fields, and errors
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    phone: '',
    weight: '',
    height: '',
    email: '',
    disabilities: ''
  });

  const [touched, setTouched] = useState({
    fullName: false,
    age: false,
    phone: false,
    weight: false,
    height: false,
    email: false,
    disabilities: false
  });

  const [errors, setErrors] = useState({
    email: '',
    phone: ''
  });

  const [showPopup, setShowPopup] = useState(false); // State for popup visibility

  // Validation functions
  const validateEmail = (email) => email.includes('@');
  const validatePhone = (phone) => /^\d+$/.test(phone);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear previous errors
    setErrors((prev) => ({ ...prev, [name]: '' }));

    // Validate phone (numbers only)
    if (name === 'phone' && value && !validatePhone(value)) {
      setErrors((prev) => ({ ...prev, phone: 'Phone number must contain only numbers' }));
    }

    // Validate email
    if (name === 'email' && value && !validateEmail(value)) {
      setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address' }));
    }

    // Update form data
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle blur events
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Check if all required fields are filled
    const isFormValid = Object.keys(formData).every((field) => {
      if (field === 'disabilities') return true; // Optional field
      return formData[field].trim() !== '';
    });

    if (!isFormValid) {
      alert('Please fill out all required fields.');
      return;
    }

    // Check for validation errors
    if (errors.email || errors.phone) {
      alert('Please fix the errors in the form.');
      return;
    }

    // Save the form data (you can log it, store it in state, or send it to an API)
    console.log('Form Data Submitted:', formData);

    // Show the popup
    setShowPopup(true);

    // Hide the popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    // Optionally, reset the form after submission
    setFormData({
      fullName: '',
      age: '',
      phone: '',
      weight: '',
      height: '',
      email: '',
      disabilities: ''
    });

    setTouched({
      fullName: false,
      age: false,
      phone: false,
      weight: false,
      height: false,
      email: false,
      disabilities: false
    });

    setErrors({
      email: '',
      phone: ''
    });
  };

  // Get input class name based on state
  const getInputClassName = (fieldName) => {
    let baseClasses = "w-full text-[20px] font-quad h-[70px] bg-transparent border rounded-lg p-4 text-gray-300 outline-none transition-all duration-200";
    if (!touched[fieldName]) return `${baseClasses} border-gray-600`;
    if (errors[fieldName] || !formData[fieldName]) return `${baseClasses} border-red-500`;
    return `${baseClasses} border-gray-600`;
  };

  // Get label class name based on state
  const getLabelClassName = (fieldName) => {
    let baseClasses = "absolute text-[25px] font-quad left-4 top-4 transition-all duration-200 pointer-events-none origin-[1]";
    if (!touched[fieldName]) return `${baseClasses} text-gray-400`;
    if (errors[fieldName] || !formData[fieldName]) return `${baseClasses} text-[20px] text-red-500`;
    return `${baseClasses} text-[20px] text-gray-400`;
  };

  // Render error message if field is touched and invalid
  const renderErrorMessage = (fieldName) => {
    if (touched[fieldName] && !formData[fieldName]) {
      return <div className="text-red-500 text-[20px] text-start mt-1">{`${fieldName} is required`}</div>;
    }
    if (errors[fieldName]) {
      return <div className="text-red-500 text-[20px] mt-1">{errors[fieldName]}</div>;
    }
    return null;
  };

  return (
    <div className="w-full flex flex-col mb-[100px] font-quad p-4 relative">
      <h1 className="text-[40px] font-bold mb-6 uppercase text-primary">Be One of the Heroes</h1>
      <form className="w-[70%] space-y-6" onSubmit={handleSubmit}>
        {['fullName', 'age', 'phone', 'weight', 'height', 'email', 'disabilities'].map((field) => (
          <div className="form-group" key={field}>
            {field === 'disabilities' ? (
              <textarea
                id={field}
                name={field}
                rows={4}
                className={getInputClassName(field)}
                placeholder=" "
                value={formData[field]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ) : (
              <input
                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : field === 'age' || field === 'weight' || field === 'height' ? 'number' : 'text'}
                id={field}
                name={field}
                className={getInputClassName(field)}
                placeholder=" "
                value={formData[field]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            )}
            <label htmlFor={field} className={getLabelClassName(field)}>
              {field === 'fullName' ? 'Full Name' : field === 'phone' ? 'Phone Number' : field === 'disabilities' ? 'Message for any disabilities' : field}
            </label>
            {renderErrorMessage(field)}
          </div>
        ))}
        <button
          type="submit"
          className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2"
        >
          Send <span className="text-xl">→</span>
        </button>
      </form>

      {/* Popup Animation */}
      {showPopup && (
        <div className="popup-animation">
          Submit Successfully!
        </div>
      )}
    </div>
  );
}

export default Formy;