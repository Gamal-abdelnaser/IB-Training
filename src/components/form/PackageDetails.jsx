/* eslint-disable react/prop-types */

const PackageDetails = ({ price , originalPrice, packageData }) => {
    const discount = originalPrice - price  
  return (
    <div>
      <h2 className="text-[30px] text-[#fff] font-bold mb-6">Package Details</h2>
      <div className="bg-[#fff] rounded-xl p-6 mb-6">
        
        <Pricing price={originalPrice} text='Sub total'/>
        <div className="flex justify-between items-center mb-[20px]">
          <div className="text-[20px] text-red-700 font-quad font-bold">{discount} LE</div>
          <div className="font-quad text-red-700 text-[20px]">discount</div>
        </div>
        <Pricing price={price} text='Total Pricing'/>
        <div className="space-y-2 mt-16 text-4xl text-gray-700">
          {
            packageData.map((item , index) => {
              return (
                <DetailsData key={index} text={item} />
              )
            })

          }
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;


function Pricing({price ,text}) {
  return (
    <div className="flex justify-between items-center mb-[15px]">
      <div className="text-[20px] font-quad font-bold">{price} EGP</div>
      <div className="font-quad text-[20px]">{text}</div>
    </div>
  )
}

function DetailsData({text}) {
  return (
    <>
    <div className="flex items-center gap-2  w-fit  border-b-2 pb-4 pt-4 border-[#e8eaea] ">
        <span className="text-secondary text-[20px] mr-3  font-anton font-bold">✓</span>
        <span className="text-[20px]  font-quad font-light ">{text}</span>
      </div>
      {/* <div className="w-[30%] h-[2px] bg-[#6f6f6f]" ></div> */}
    </>
  )
}