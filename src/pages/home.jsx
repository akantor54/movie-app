import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieList from "../components/movieList";
import NavBar from "../components/navBar";
import MovieService from "../services/movie-service";

const Home = () => {
  const dispath = useDispatch();
  //   const [movies, setMovies] = useState([]);

  useEffect(() => {
    MovieService.getMovie("popular", "fr_FR", 25).then((m) =>
      dispath({
        type: "movie/getFilm",
        payload: m,
      })
    );
  });

  return (
    <div className="Home">
      <NavBar />
      <MovieList />
    </div>
  );
};

export default Home;
