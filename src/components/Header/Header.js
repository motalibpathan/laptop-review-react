import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-900">
      <div className="md:container mx-auto p-5 flex justify-between items-center">
        <h1 className="text-3xl text-white font-bold">
          <span className="text-rose-500">Acer</span> Laptop Review
        </h1>
        <nav className="text-white flex gap-7">
          <Link to="/">HOME</Link>
          <Link to="/reviews">REVIEWS</Link>
          <Link to="/dashboard">DASHBOARD</Link>
          <Link to="/blogs">BLOGS</Link>
          <Link to="/about">ABOUT</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
