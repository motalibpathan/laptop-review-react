import React from "react";

const Home = () => {
  return (
    <div className="md:container mx-auto flex justify-between items-center p-5 gap-5">
      <div className="w-1/2">
        <h1 className="text-5xl font-bold text-rose-600">
          Acer Aspire 3 A315-58 Core i5{" "}
        </h1>
        <h1 className="text-5xl font-bold my-2">11th Gen 15.6" FHD Laptop</h1>
        <p>
          Specifications of Acer Aspire 3 A315-58 Core i5 11th Gen 15.6" FHD
          Laptop. Display Size: 15.6inches. Storage: 8GB DDR4 2666MHz RAM + 1TB
          SATA HDD
        </p>
      </div>
      <div className="w-1/2">
        <img
          className="w-full"
          src="https://static.acer.com/up/Resource/Acer/Home/Product_Highlights/20200713/Acer-Chromebook-Spin-311-Cairns-Product-Highlight.png"
          alt="Acer Laptop "
        />
      </div>
    </div>
  );
};

export default Home;
