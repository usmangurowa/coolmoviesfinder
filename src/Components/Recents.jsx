import React from "react";

const Recents = ({ movie, setMovie }) => {
  const getMovie = () => {
    fetch(`http://www.omdbapi.com/?apiKey=db94254e&i=${movie.id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => setMovie(data))
      .catch((e) => alert("Error fetching movie"));
  };

  return (
    <>
      <li onClick={getMovie}>{movie.title}</li>
    </>
  );
};
export default Recents;
