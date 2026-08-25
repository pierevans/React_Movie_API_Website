import React from "react";
import { FaSearch } from "react-icons/fa";

import MovieCard from "./MovieCard";
const Home = () => {
  return (
    <div className="flex-center flex-col mt-10">
      <div className="flex-center gap-3 text-[18px]">
        <input
          type="text"
          placeholder="Search for Movies..."
          className="px-5 py-2 rounded-full bg-gray-300 w-100 outline-none focus-within:ring-2 focus-within:ring-dark"
        />
        <button className="cursor-pointer flex-center gap-1 p-2 rounded-md bg-main hover:bg-hover transition duration-300">
          <FaSearch /> Search
        </button>
      </div>
    </div>
  );
};

export default Home;
