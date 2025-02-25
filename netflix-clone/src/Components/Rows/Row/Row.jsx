
import React, { useEffect, useState } from "react";
import styles from "./Row.module.css";
import axios from "../../../Utils/axios";
import movieTrailer from "movie-trailer"; // youtube -url
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, islargeRow }) => {
  const [movies, setMovies] = useState([]); // Stores the fetched list of movies

  const [trailerUrl, setTrailerUrl] = useState(""); //Stores the YouTube trailer video ID

  const singleImageBase_Url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchUrl);
        let shuffledMovies = request.data.results.sort(
          () => 0.5 - Math.random()
        );
        setMovies(shuffledMovies);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
         // console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log("Trailer not found", error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className={styles.row}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.row_posters}>
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${singleImageBase_Url}${
              islargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`${styles.row_poster} ${
              islargeRow ? styles.row_posterLarge : ""
            }`}
          />
        ))}
      </div>

      <div style={{ padding: "0px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
