import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { baseImgUrl, options } from "../constants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}`,
        options
      )
      .then((res) => setMovies(res.data.results));
  }, []);

  return (
    <div className="my-4">
      <h1 className="text-3xl font-semibold my-5">{genre.name}</h1>
      <Splide
        options={{
          autoWidth: true,
          rewind: true,
          gap: "10px",
          lazyLoad: true,
        }}
        aria-label="My Favorite Images"
      >
        {!movies ? (
          <div className="h-[300px] flex items-center">
            <Loader />
          </div>
        ) : (
          movies?.map((movie) => (
            <SplideSlide key={movie.id}>
              <Link to={`/detay/${movie.id}`}>
                <img
                  height={300}
                  className=" max-w-[300px] h-full img-fluid rounded cursor-pointer"
                  src={baseImgUrl + movie.poster_path}
                  alt={movie.title}
                />
              </Link>
            </SplideSlide>
          ))
        )}
      </Splide>
    </div>
  );
};

export default MovieList;
