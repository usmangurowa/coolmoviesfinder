import React from "react";

const MovieSection = ({ movie }) => {
  if (!movie) return <div className="movie-section">Search for a movie</div>;
  if (movie.error) return <div className="movie-section">{movie.error}</div>;
  return (
    <div className="movie-section">
      <div className="info">
        <h1 className="movie-title">
          {movie.Title} <span className="year">{movie.Released}</span>
        </h1>
        <span className="year">{movie.Rated}</span>
        <p>
          <b>Genre:</b> {movie.Genre}
        </p>
        <p>
          <b>Rating:</b>
          {movie.imdbRating}
        </p>
        <p>
          <b>Actors:</b> {movie.Actors}
        </p>
        <p>
          <b>Plot:</b> {movie.Plot}
        </p>
      </div>
      <div className="poster">
        <img src={movie.Poster} alt="" />
      </div>
    </div>
  );
};
export default MovieSection;
