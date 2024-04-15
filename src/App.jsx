import { useState } from "react";
import MovieAddForm from "./components/movie-add-form";
import MovieRateForm from "./components/movie-rate-form";
import MoviesList from "./components/movies-list";

const initial_movies = [
  {
    id: 1,
    name: "Movie 1",
    description: "very good movie",
    category: "action",
    ratings: [2, 3],
  },
  {
    id: 2,
    name: "Movie 2",
    description: "very good second movie",
    category: "comedy",
    ratings: [4, 5],
  },
];

function App() {
  const [movies, setMovies] = useState(initial_movies);

  return (
    <main>
      <div className="container">
        <header>
          <h1 className="title">Movie app 🎬</h1>
          <p className="subtitle">Add or rate your movie ⭐</p>
        </header>
        <MoviesList movies={movies} />
        <div className="grid grid-cols-2">
          <MovieAddForm movies={movies} setMovies={setMovies} />
          <MovieRateForm movies={movies} setMovies={setMovies} />
        </div>
      </div>
    </main>
  );
}

export default App;
