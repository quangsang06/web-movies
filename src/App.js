import Movies from "./components/Movies";
import { API_URL } from "./service/api";
import { useEffect, useState } from "react";
import axios from "axios";
import "../src/styles/style.css";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => res.data)
      .then((data) => {
        const movie = data.results;
        setMovies(movie);
      });
  }, []);

  return (
    <div>
      <header>
        <input type="search" placeholder="Search" className="search" />
      </header>
      <div className="movie-container">
        {movies.map((movie) => (
          <Movies key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
