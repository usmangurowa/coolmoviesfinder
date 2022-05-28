import React from "react";

const Recents = ({ movie, setMovie }) => {
  const getMovie = () => {
    fetch(`https://www.omdbapi.com/?i=${movie.id}&apikey=db94254e`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setMovie(data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <li onClick={getMovie}>{movie.title}</li>
    </>
  );
};
export default Recents;
