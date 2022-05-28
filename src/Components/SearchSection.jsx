import React from "react";
import Recents from "./Recents";

const SearchSection = ({ setMovie }) => {
  const [title, setTitle] = React.useState("");
  const [recents, setRecents] = React.useState([]);

  const searchMovie = () => {
    if (!title.trim()) return;
    fetch(`https://www.omdbapi.com/?t=${title}&apikey=db94254e`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        if (data.Error) {
          alert(data.Error);
        } else {
          setMovie(data);
          setRecents([{ title: data.Title, id: data.imdbID }, ...recents]);
        }
      })
      .catch((e) => {
        alert("Error Searching for movie");
      });
  };
  return (
    <div className="search-section">
      <div className="search-input">
        <input
          type="text"
          className="search"
          placeholder="Search for a movie..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <button onClick={searchMovie} className="search">
          Search
        </button>
      </div>
      <ul className="recent-searches">
        <span>Recent Searches</span>
        {recents.map((mv) => {
          return <Recents setMovie={setMovie} movie={mv} key={mv.id} />;
        })}
      </ul>
    </div>
  );
};
export default SearchSection;
