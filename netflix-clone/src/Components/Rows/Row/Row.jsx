import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../Utils/axios"
 import movieTrailer from "movie-trailer" // youtube -url
 import YouTube from "react-youtube"

const Row = ({ title, fetchUrl, islargeRow }) => {
  const [movies, setMovies] = useState([]);
   const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original"; // of single image 

  useEffect(() => {
    (async () => {
      try {
       // console.log(fetchUrl); // request api key
        const request = await axios.get(fetchUrl)

       // console.log(request); // all movies data
        setMovies(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);

          console.log(urlParams); // video link
          console.log(urlParams.get("v")); // video Id
          setTrailerUrl(urlParams.get("v"));
        }
      );
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playVars: {
      autoPlay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row-posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${
              islargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row-poster $(isLargeRow && "row-posterLarge")`}
          />
        ))}
      </div>

      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
