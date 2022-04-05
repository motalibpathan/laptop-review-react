import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="bg-gray-900">
      <div className="md:container mx-auto p-5 flex justify-between items-center">
        <h1 className="text-3xl text-white font-bold">
          <span className="text-rose-500">Laptop</span> Review
        </h1>
        <nav>
          <ul className="text-white md:flex gap-7 font-bold">
            <li>
              <CustomLink to="/">HOME</CustomLink>
            </li>
            <li>
              <CustomLink to="/reviews">REVIEWS</CustomLink>
            </li>
            <li>
              <CustomLink to="/dashboard">DASHBOARD</CustomLink>
            </li>
            <li>
              <CustomLink to="/blogs">BLOGS</CustomLink>
            </li>
            <li>
              <CustomLink to="/about">ABOUT</CustomLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
