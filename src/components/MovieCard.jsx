import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useMovieContext } from "./MovieContext";

const MovieCard = ({ movie }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);
  const onFavoriteClick = (e) => {
    e.preventDefault();
      setLike(!like);
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  };

  const [like, setLike] = useState();


  return (
    <div className="relative w-70 h-100 bg-gray-700 rounded-2xl">
      <div className="">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-t-2xl w-full h-85"
        />
        <div className="">
          <button
            onClick={onFavoriteClick}
            // onClick={clickOnCard}
            className="group text-[20px] absolute right-3 top-3 rounded-full border-2 border-transparent hover:border-white p-2 cursor-pointer transition duration-300"
          >
            <FaHeart
              className={`transition duration-300  ${like ? "opacity-100 text-main" : "opacity-0 text-white group-hover:opacity-100"}`}
            />
          </button>
        </div>
      </div>
      <div className="pl-3 py-2">
        <h3 className="text-white font-semibold">{movie.title}</h3>
        <p className="text-white font-medium">
          {movie.release_date?.split("-")[0]}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
