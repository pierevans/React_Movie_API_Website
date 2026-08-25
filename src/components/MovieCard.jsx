import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";

const MovieCard = ({ movie }) => {
  const [like, setLike] = useState();
  const clickOnCard = () => {
    setLike(!like);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
            <button onClick={clickOnCard}>
              <CiHeart className={`${like? "text-white": "text-main"}`}/>
            </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
