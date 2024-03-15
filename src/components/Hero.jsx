import { useSelector } from "react-redux";
import { movieReducer } from "../redux/reducers/movieReducer";
import millify from "millify";
import { baseImgUrl } from "../constants";
import Loader from "./Loader";

const Hero = () => {
  const store = useSelector((store) => store.movieReducer);

  const i = Math.floor(Math.random() * store.popularMovies.length);

  const randomMovie = store.popularMovies[i];

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-3">
      {store.isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-col gap-5 items-center  ">
            <h1 className=" text-3xl font-bold text-center">
              {randomMovie?.title}
            </h1>
            <p className="text-start">{randomMovie?.overview}</p>
            <p className="text-center ">
              <span>IMDB: </span>
              <span className=" text-yellow-500 s">
                {randomMovie?.vote_average.toFixed(1)}
              </span>
            </p>
            <div className="flex gap-3 justify-center">
              <button className="p-2 bg-red-600 hover:bg-red-700 rounded-md">
                Filmi İzle
              </button>
              <button className="p-2 bg-blue-500 hover:bg-blue-600 rounded-md">
                Listeye Ekle
              </button>
            </div>
          </div>
          <div className="my-4 flex justify-center">
            <img
              className="hero-img max-h-[300px] img-fluid object-contain rounded"
              src={baseImgUrl + randomMovie?.backdrop_path}
              alt={randomMovie?.title}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
