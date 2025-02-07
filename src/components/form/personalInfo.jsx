/* eslint-disable react/prop-types */
import { Upload } from "lucide-react";
import { getInputClassName, getLabelClassName, renderErrorMessage } from "./Utility";

const PersonalInfo = ({
  formData,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleFileChange,
  handlePromoCode,
  discountApplied,
  previewUrl,
}) => {
  return (
    <div>
      <h2 className="text-[30px] text-white font-bold mb-6">Personal Information</h2>
      <div className="space-y-6 flex flex-col gap-[20px]">
        <div className="relative">
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClassName("name", touched, errors, formData)}
            placeholder=" "
          />
          <label htmlFor="name" className={getLabelClassName("name", touched, errors, formData)}>
            Full Name
          </label>
          {renderErrorMessage("name", touched, errors, formData)}
        </div>

        <div className="relative">
          <input
            type="number"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClassName("phone", touched, errors, formData)}
            placeholder=" "
          />
          <label htmlFor="phone" className={getLabelClassName("phone", touched, errors, formData)}>
            Phone Number
          </label>
          {renderErrorMessage("phone", touched, errors, formData)}
        </div>

        <div className="relative">
          <input
            type="text"
            name="promoCode"
            id="promoCode"
            value={formData.promoCode}
            onChange={handleChange}
            className={getInputClassName("promoCode", touched, errors, formData)}
            placeholder=" "
          />
          <label
            htmlFor="promoCode"
            className={getLabelClassName("promoCode", touched, errors, formData)}
          >
            Discount Code
          </label>
          <button
            type="button"
            onClick={handlePromoCode}
            className="absolute h-3/4 w-[15%] right-4 top-1/2 text-[18px] max-md:text-[10px] transform -translate-y-1/2 bg-orange-500 text-white px-4 rounded-lg hover:bg-orange-600"
          >
            Apply
          </button>
        </div>
        {discountApplied && (
            <div className="text-green-600 mt-1 text-[20px]">20% discount applied!</div>
        )}

        {formData.paymentMethod && (
          <div className="relative">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e.target.files[0])}
                className="hidden"
                id="screenshot-upload"
              />
              <label
                htmlFor="screenshot-upload"
                className="flex flex-col items-center justify-center relative top-8 w-full cursor-pointer"
              >
                {previewUrl ? (
                  <div className="relative w-full ">
                    <img
                      src={previewUrl}
                      alt="Payment screenshot"
                      className="max-h-48 mx-[100px] w-[100px] rounded-lg"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleFileChange(null);
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <Upload className="w-14 h-20  text-gray-400 mb-2" />
                    <p className="text-5xl text-gray-500">Click to upload payment screenshot</p>
                    {/* <p className="text-5xl text-gray-400 mt-1">Supported formats: JPG, PNG</p> */}
                  </div>
                )}
              </label>
            </div>
            {touched.paymentScreenshot && !formData.paymentScreenshot && (
              <div className="text-red-500 text-[20px] mt-1">
                Please upload your payment screenshot
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;