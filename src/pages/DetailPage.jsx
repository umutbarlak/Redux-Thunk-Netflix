import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseImgUrl, options } from "../constants";
import Loader from "../components/Loader";
import DetailDisplay from "../components/DetailDisplay";
import millify from "millify";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import PlayerCard from "../components/PlayerCard";

const DetailPage = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams("id");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos,credits`,
        options
      )
      .then((res) => setMovie(res.data));
  }, []);
  return (
    <div>
      {!movie && <Loader />}
      {movie && (
        <div>
          <div className=" relative h-[40vh]">
            <img
              className="h-full w-full object-cover  "
              src={baseImgUrl + movie.backdrop_path}
              alt={movie.title}
            />
            <div className=" absolute bg-black bg-opacity-50 inset-0  grid place-items-center">
              <span className="text-3xl font-semibold tracking-widest ">
                {movie.title}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 px-5 md:px-10 lg:px-16 my-10">
            <div>
              <DetailDisplay title={"Kategoriler"} data={movie.genres} />
              <DetailDisplay
                title={"Konuşulan Diller"}
                data={movie.spoken_languages}
              />
              <DetailDisplay
                title={"Yapımcı Şirketler"}
                data={movie.production_companies}
              />
              <DetailDisplay
                title={"Yapılan Ülkeler"}
                data={movie.production_countries}
              />
            </div>
            <div>
              <p>{movie.overview}</p>
              <p className="my-4">
                <span>Bütçe: </span>
                <span className="text-green-500  ms-2">
                  {movie.budget !== 0
                    ? millify(movie.budget) + "$"
                    : "Bilinmiyor"}
                </span>
              </p>

              <p className="my-4">
                <span>Gelir: </span>
                <span className="text-green-500  ms-2">
                  {movie.revenue !== 0
                    ? millify(movie.revenue) + "$"
                    : "Bilinmiyor"}
                </span>
              </p>
            </div>
          </div>

          <div className="px-5 md:px-10 lg:px-16 ">
            <Splide
              options={{
                autoWidth: true,
                gap: "10px",
                rewind: true,
                lazyLoad: true,
              }}
            >
              {movie.credits.cast.map((player) => (
                <SplideSlide key={player.id}>
                  <PlayerCard player={player} />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
