export const getInputClassName = (fieldName, touched, errors, formData) => {
  let baseClasses =
    "w-full text-[20px] font-quad h-[70px] bg-transparent border rounded-lg p-4 text-gray-300 outline-none transition-all duration-200";
  if (fieldName === "phone") {
    baseClasses =
      "w-full text-[20px] font-quad h-[70px] bg-transparent border rounded-lg p-4 text-gray-300 outline-none transition-all duration-200";
  }
  if (!touched[fieldName]) return `${baseClasses} border-gray-600`;
  if (errors[fieldName] || !formData[fieldName]) return `${baseClasses} border-red-500`;
  return `${baseClasses} border-gray-600`;
};

export const getLabelClassName = (fieldName, touched, errors, formData) => {
  let baseClasses =
    "absolute text-[25px] font-quad transition-all duration-200 pointer-events-none";
  if (fieldName === "phone") {
    baseClasses += " left-4 top-4";
  } else {
    baseClasses += " left-4 top-4";
  }
  if (!touched[fieldName]) return `${baseClasses} text-gray-400`;
  if (errors[fieldName] || !formData[fieldName])
    return `${baseClasses} text-[20px] text-red-500`;
  return `${baseClasses} text-[20px] text-gray-400`;
};

export const renderErrorMessage = (fieldName, touched, errors, formData) => {
  if (touched[fieldName] && !formData[fieldName]) {
    return (
      <div className="text-red-500 text-[20px] text-start mt-1">
        {fieldName} is required
      </div>
    );
  }
  if (errors[fieldName]) {
    return <div className="text-red-500 text-[20px] mt-1">{errors[fieldName]}</div>;
  }
  return null;
};