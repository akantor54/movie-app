import { useSelector } from "react-redux";
import MovieCard from "./movieCard.jsx";

const MovieList = () => {
  const movies = useSelector((state) => {
    return state.movie;
  });

  return (
    <div className="movielist">
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </div>
  );
};

export default MovieList;
