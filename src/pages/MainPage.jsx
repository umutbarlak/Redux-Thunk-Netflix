import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopular } from "../redux/actions/movieActions";
import { getGenres } from "../redux/actions/genreActions";
import Hero from "../components/Hero";
import genreReducer from "../redux/reducers/genreReducer";
import MovieList from "../components/MovieList";
import Loader from "../components/Loader";

const MainPage = () => {
  const genreState = useSelector((store) => store.genreReducer);

  const dispatch = useDispatch();
  // apiden popüler verileri al store aktar
  useEffect(() => {
    dispatch(getPopular());
    dispatch(getGenres());
  }, []);

  return (
    <div className="p-5 md:p-10 lg:p-16  flex flex-col">
      <Hero />
      {genreState.isLoading ? (
        <Loader />
      ) : genreState.isError ? (
        <p>{genreState.isError}</p>
      ) : (
        genreState.genres.map((genre) => (
          <MovieList genre={genre} key={genre.id} />
        ))
      )}
    </div>
  );
};

export default MainPage;
