import React from "react";

const Nav = () => {
  return (
    <div className="container rounded-md shadow-lg h-14 bg-gray-200 min-w-full flex justify-evenly items-center">
      <h2 className="text-black font-medium cursor-pointer hover:text-gray-600">
        Brand
      </h2>
      <ul className="flex justify-around items-center cursor-pointer hover:text-gray-500 capitalize">
        <li>home</li>
      </ul>
    </div>
  );
};

export default Nav;
