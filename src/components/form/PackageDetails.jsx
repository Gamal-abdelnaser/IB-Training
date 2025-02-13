/* eslint-disable react/prop-types */

const PackageDetails = ({ price , originalPrice }) => {
    const discount = originalPrice - price  
  return (
    <div>
      <h2 className="text-[30px] text-[#fff] font-bold mb-6">Package Details</h2>
      <div className="bg-[#fff] rounded-xl p-6 mb-6">
        
        <Pricing price={originalPrice} text='Sub total'/>
        <div className="flex justify-between items-center mb-[20px]">
          <div className="text-[20px] text-red-700 font-playwrite font-bold">{discount} EGP</div>
          <div className="font-playwrite text-red-700 text-[20px]">discount</div>
        </div>
        <Pricing price={price} text='Total Pricing'/>
        <div className="space-y-2 text-4xl text-gray-700">
          <DetailsData text="Diet Plan" />
          <DetailsData text="Work Out Plan" />
          <DetailsData text="Metting Every week" />
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;


function Pricing({price ,text}) {
  return (
    <div className="flex justify-between items-center mb-[15px]">
      <div className="text-[20px] font-playwrite font-bold">{price} EGP</div>
      <div className="font-playwrite text-[20px]">{text}</div>
    </div>
  )
}

function DetailsData({text}) {
  return (
    <div className="flex items-center gap-2 mt-[60px]">
      <span className="text-secondary text-[20px] mr-3  font-anton font-bold">✓</span>
      <span className="text-[20px] font-quad font-light">{text}</span>
    </div>
  )
}