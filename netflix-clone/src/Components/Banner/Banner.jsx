import React from "react";
import { useEffect, useState } from "react";
import styles from'./Banner.module.css'
import axios from "../../Utils/axios"
import requests from "../../Utils/requests"

const Banner = () => {
  const [movie, setMovie] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(requests.fetchNetflixOriginals);

              //  console.log(response);
              
                setMovie(response.data.results[
                    Math.floor(Math.random() * response.data.results.length)
                ]);

            } catch(error) {
                console.log("error", error);
            }

        };
        fetchData();

    }, [])
  //console.log(movie);
  function truncate(Tstring, num) {
    return Tstring?.length > num ? Tstring.substr(0, num - 1) + '...' : Tstring;
  }

  return (
    <div
      className={styles.banner}
      style={{
        
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        
      }}
    >
      <div className={styles.banner_contents}>
        <h1 className={styles.banner_title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className={styles.banner_buttons}>
          <button className={`${styles.banner_button} ${styles.play}`}>
            Play
          </button>
          <button className={styles.banner_button}>My List</button>
        </div>

        <h1 className={styles.banner_description}>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className={styles.banner_fadeBottom}> </div>
    </div>
  );
};

export default Banner;




