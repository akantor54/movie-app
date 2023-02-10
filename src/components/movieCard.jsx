const MovieCard = ({ movie }) => {
  return (
    <div className="moviecard">
      <div className="movie-image">
        <img
          src={"https://image.tmdb.org/t/p/w200/" + movie.poster_path}
          alt={movie.title}
        />
      </div>
      <div className="movie-content"></div>
    </div>
  );
};

export default MovieCard;
