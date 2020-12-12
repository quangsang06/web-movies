import React from "react";
import { IMG_PATH } from "../service/api";

const voteMovies = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};
const Movies = ({ title, poster_path, overview, vote_average }) => (
  <div className="movie">
    <img src={IMG_PATH + poster_path} alt={title} />
    <div className="movie-info">
      <h3>{title}</h3>
      <span className={`tag ${voteMovies(vote_average)}`}>{vote_average}</span>
    </div>
    <div className="movie-overview">
      <h2>Overview</h2>
      <p>{overview}</p>
    </div>
  </div>
);

export default Movies;
