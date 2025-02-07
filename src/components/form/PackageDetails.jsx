
const PackageDetails = ({ price , originalPrice }) => {
    const discount = originalPrice - price  
  return (
    <div>
      <h2 className="text-[30px] text-[#fff] font-bold mb-6">Package Details</h2>
      <div className="bg-[#fff] rounded-xl p-6 mb-6">
        <div className="flex justify-between items-center mb-[20px]">
          <div className="text-[20px] font-playwrite font-bold">{originalPrice} EGP</div>
          <div className="font-playwrite text-[20px]">Sub total</div>
        </div>
        <div className="flex justify-between items-center mb-[20px]">
          <div className="text-[20px] text-red-700 font-playwrite font-bold">{discount} EGP</div>
          <div className="font-playwrite text-red-700 text-[20px]">discount</div>
        </div>
        <div className="flex justify-between items-center mb-[70px]">
          <div className="text-[20px] font-playwrite font-bold">{price} EGP</div>
          <div className="font-playwrite text-[20px]">Total Pricing</div>
        </div>
        <div className="space-y-2 text-4xl text-gray-700">
          <div className="flex items-center gap-2">
            <span className="text-secondary text-[30px] font-anton font-bold">✓</span>
            <span>Practical Exam</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-secondary text-[30px] font-anton font-bold">✓</span>
            <span>Training Program</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-secondary text-[30px] font-anton font-bold">✓</span>
            <span>48-hour Expert Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;