import { useEffect, useState } from "react";
import movies from "./data/movies";

function App() {
  const moviesGenres = [...new Set(movies.map((movie) => movie.genre))];

  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    const filterMovies = movies.filter(
      (movie) => !selectedGenre || movie.genre === selectedGenre
    );
    setFilteredMovies(filterMovies);
  }, [selectedGenre]);

  return (
    <>
      <h1>Lista film</h1>

      <div className="container mt-4">
        <select
          className="form-select"
          aria-label="Default select example"
          value={selectedGenre}
          onChange={(e) => {
            setSelectedGenre(e.target.value);
          }}
        >
          <option value="">Tutti i film</option>
          {moviesGenres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <div className="row row-cols-3 mt-3 g-3">
          {filteredMovies.map((mov, index) => (
            <div key={index} className="col">
              <div className="card">
                <div className="card-header">{mov.title}</div>
                <div className="card-body">{mov.genre}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
