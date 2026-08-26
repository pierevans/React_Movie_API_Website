import React from "react";
import { useMovieContext } from "./MovieContext";
import MovieCard from "./MovieCard";

const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    return (
      <div className="pt-10 bg-light">
        <h2 className="text-center text-main text-[30px] font-bold">Your Favorite Movies</h2>

        <div className="flex flex-wrap gap-y-5 gap-x-5 w-[90%] mx-auto min-w-150 h-auto mt-10 p-10">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center h-full">
      <h2 className="mt-20 text-main text-[30px] font-bold">
        No Favorite Movies Yet
      </h2>
    </div>
  );
};

export default Favorites;