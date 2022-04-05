import React from "react";

const Slider = () => {
  return (
    <div className="md:flex justify-between items-center p-5 gap-5 ">
      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5xl text-2xl font-bold text-rose-600 my-5">
          Acer Aspire 3 Core i5{" "}
        </h1>
        <h1 className="md:text-5xl text-2xl font-bold my-2">
          11th Gen FHD Laptop
        </h1>
        <p>
          Specifications of Acer Aspire 3 A315-58 Core i5 11th Gen 15.6" FHD
          Laptop. Display Size: 15.6inches. Storage: 8GB DDR4 2666MHz RAM + 1TB
          SATA HDD
        </p>
        <button className="py-2 px-5 bg-rose-500 my-9 text-white rounded-md font-bold hover:bg-transparent hover:-translate-y-3 duration-500 border-2 border-rose-500 hover:text-rose-500">
          Live Demo
        </button>
      </div>
      <div className="md:w-1/2 w-full">
        <img
          className="w-full"
          src="https://static.acer.com/up/Resource/Acer/Home/Product_Highlights/20200713/Acer-Chromebook-Spin-311-Cairns-Product-Highlight.png"
          alt="Acer Laptop "
        />
      </div>
    </div>
  );
};

export default Slider;
