import { useState } from "react";

const MovieRateForm = ({ movies, setMovies }) => {
  const [selectedMovie, setSelectedMovie] = useState("");
  const [rating, setRating] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedMovie || !rating) {
      setError("You must both movie and rating for it");
      return;
    } else {
      setError("");
    }

    const updatedMovies = movies.map((movie) => {
      if (movie.id.toString() === selectedMovie) {
        return {
          ...movie,
          ratings: [...movie.ratings, Number(rating)],
        };
      }
      return movie;
    });

    setMovies(updatedMovies);
    setSelectedMovie("");
    setRating(null);
  };

  return (
    <div className="rate-form">
      <h2 className="title">Rate a movie</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="movie">Movie</label>
          <select value={selectedMovie} name="selectedMovie" onChange={(e) => setSelectedMovie(e.target.value)}>
            <option value="">------</option>
            {movies.map((movie) => (
              <option key={movie.id} value={movie.id}>
                {movie.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group-radio">
          <input type="radio" name="rating" id="rating-1" value="1" checked={rating === "1"} onChange={(e) => setRating(e.target.value)} />
          <label htmlFor="rating-1">⭐</label>
        </div>
        <div className="form-group-radio">
          <input type="radio" name="rating" id="rating-2" value="2" checked={rating === "2"} onChange={(e) => setRating(e.target.value)} />
          <label htmlFor="rating-2">⭐⭐</label>
        </div>
        <div className="form-group-radio">
          <input type="radio" name="rating" id="rating-3" value="3" checked={rating === "3"} onChange={(e) => setRating(e.target.value)} />
          <label htmlFor="rating-3">⭐⭐⭐</label>
        </div>
        <div className="form-group-radio">
          <input type="radio" name="rating" id="rating-4" value="4" checked={rating === "4"} onChange={(e) => setRating(e.target.value)} />
          <label htmlFor="rating-4">⭐⭐⭐⭐</label>
        </div>
        <div className="form-group-radio">
          <input type="radio" name="rating" id="rating-5" value="5" checked={rating === "5"} onChange={(e) => setRating(e.target.value)} />
          <label htmlFor="rating-5">⭐⭐⭐⭐⭐</label>
        </div>
        {error.length > 0 && <p className="error">{error}</p>}
        <button className="button" type="submit">
          + Add movie
        </button>
      </form>
    </div>
  );
};
export default MovieRateForm;
