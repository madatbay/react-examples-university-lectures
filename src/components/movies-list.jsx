const MoviesList = ({ movies }) => {
  return (
    <div className="grid grid-max">
      {movies?.map((movie) => (
        <div key={movie.id} className="movie-card">
          <h3 className="movie__title">{movie.name}</h3>
          <p className="movie__description">{movie.description}</p>
          <span className="movie__category">{movie.category}</span>
          <div className="movie__ratings">
            {movie.ratings.length > 0 ? (movie.ratings.reduce((a, b) => a + b) / movie.ratings.length).toFixed(1) : 0} ⭐
          </div>
        </div>
      ))}
    </div>
  );
};
export default MoviesList;
