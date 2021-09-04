import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="container rounded-md shadow-lg h-14 bg-gray-200 min-w-full flex justify-evenly items-center">
      <h2 className="text-black font-medium cursor-pointer hover:text-gray-600">
        Brand
      </h2>
      <ul className="flex justify-between items-center cursor-pointer  capitalize">
        <NavLink to="/" className="mr-3 hover:text-gray-500">
          Home
        </NavLink>
        <NavLink to="/map" className="mr-3 hover:text-gray-500">
          Map
        </NavLink>

        <NavLink to="/india" className="hover:text-gray-500">
          India
        </NavLink>
      </ul>
    </div>
  );
};

export default Nav;
