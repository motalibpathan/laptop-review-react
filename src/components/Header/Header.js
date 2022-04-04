import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-900">
      <div className="md:container mx-auto p-5 flex justify-between items-center">
        <h1 className="text-3xl text-white font-bold">
          <span className="text-rose-500">Acer</span> Laptop Review
        </h1>
        <nav>
          <ul className="text-white md:flex gap-7">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/reviews">REVIEWS</Link>
            </li>
            <li>
              <Link to="/dashboard">DASHBOARD</Link>
            </li>
            <li>
              <Link to="/blogs">BLOGS</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
