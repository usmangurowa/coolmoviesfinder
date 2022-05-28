import React from "react";
import "./App.css";
import SearchSection from "./Components/SearchSection";
import MovieSection from "./Components/MovieSection";

function App() {
  const [movie, setMovie] = React.useState(null);

  return (
    <div className="app">
      <div className="logo-section">
        <h1>Movie Finder</h1>
      </div>
      <div className="sections">
        <SearchSection setMovie={setMovie} />
        <MovieSection movie={movie} />
      </div>
    </div>
  );
}

export default App;
