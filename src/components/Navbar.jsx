import React from "react";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between h-20 bg-dark shadow-2xl p-10">
      <h1 className="text-[30px] font-bold text-main">Movie App</h1>
      <ul className="flex gap-5 font-semibold text-[20px] text-main">
        <li>
          <a href="" className="hover:text-hover transition duration-300">
            Home
          </a>
        </li>
        <li>
          <a href="" className="hover:text-hover transition duration-300">
            Favorites
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
