import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import MovieCard from "./MovieCard";


const Home = () => {

  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e)=>{
    e.preventDefault()
    alert(searchQuery)
    setSearchQuery("")
  } 
  
  return (
    <div className="flex-center flex-col mt-10">
      <form onSubmit={handleSearch} className="flex-center gap-5 text-[18px]">
        <input
          onChange={e => setSearchQuery(e.target.value)}
          type="text"
          value={searchQuery}
          placeholder="Search for Movies..."
          className="px-5 py-2 rounded-full bg-gray-300 w-100 outline-none focus-within:ring-2 focus-within:ring-dark"
        />
        <button type="submit" className="cursor-pointer flex-center gap-1 p-2 rounded-md bg-main hover:bg-hover transition duration-300">
          <FaSearch /> Search
        </button>
      </form>

      <div className="flex flex-wrap w-[90%] min-w-150 h-300 bg-amber-200 mt-10 p-10">
        {Movies.map((movie, index)=> (
         movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
