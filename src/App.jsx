import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";

const MovieCard = ({ movie }) => {
  const [like, setLike] = useState();
  let clickOnCard = () => {
    setLike(!like);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
            <button className="favorite-btn" onClick={clickOnCard}>
            {like ? (
                <CiHeart style={{ color: "white" }} />
            ) : (
                <CiHeart style={{ color: "red" }} />
            )}
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
