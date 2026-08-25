import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" flex items-center justify-between h-20 bg-dark shadow-2xl p-10">
      <h1 className="text-[30px] font-bold text-main">Movie App</h1>
      <ul className="flex gap-5 font-semibold text-[20px] text-main">
        <li>
          <Link href="/" className="hover:text-hover transition duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/favorites" className="hover:text-hover transition duration-300">
            Favorites
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
