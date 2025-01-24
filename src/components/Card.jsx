import React from "react";

const Card = () => {
  return (
    <div className="mt-24 flex flex-col md:flex-row items-center bg-none p-8 rounded-xl shadow-lg max-w-[80%] lg:max-w-[1000px] mx-auto">
      <div className="flex mx-auto relative max-h-[530px]">
        <img
          src="https://images.pexels.com/photos/9943963/pexels-photo-9943963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Skincare Model"
          className="rounded-lg max-w-[100%]"
        />
        <div className="absolute bottom-0 rounded-lg w-fit leading-tight">
          <h1 className="text-5xl font-bold text-white relative top-4">
            <p className="bg-glass px-6 py-1 rounded-tr-2xl inline-block">BASED</p> <br />
            <p className="bg-glass px-6 py-1
            rounded-tr-2xl inline-block">PEPTIDE</p> <br />
            <p className="bg-glass px-6 py-1 pb-2 rounded-r-2xl inline-block">SKINCARE</p>
          </h1>
          <p className="mt-4 text-xs text-gray-300 w-[200px] bg-glass py-2 px-6">
            Discover The World Of Step-By-Step Care With Skincare Kit By Estee
            Lauder.
          </p>
          <div className="bg-glass px-6 py-4 rounded-tr-2xl rounded-bl-lg">
            <button className="px-16 py-2 bg-black text-white rounded-full hover:bg-gray-800">
              BUY KIT $119.00
            </button>
          </div>
        </div>

        <div className="absolute top-8 left-8 bg-glass p-2 rounded shadow-lg">
          <p className="text-sm font-medium text-gray-300">REVITALIZING MASK</p>
          <p className="text-xs text-gray-400">50ml/1.69oz</p>
        </div>
        <div className="absolute bottom-8 right-8 bg-glass p-4 rounded shadow-lg">
          <p className="text-sm font-medium text-gray-300">DAILY CREAM</p>
          <p className="text-xs text-gray-400">75ml/2.5oz</p>
          <p className="text-sm font-bold text-gray-300 line-through">$35.65</p>
          <p className="text-lg font-bold text-green-600">$29.55</p>
        </div>
      </div>
    </div>
  );
};

export default Card;