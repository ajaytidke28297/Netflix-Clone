import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import classes from "./Row.module.css";

function Row(props) {
  const isLargeRow = props.isLargeRow ? true : false;
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [props.fetchUrl]);

  return (
    <div className={classes.row}>
      <h2>{props.title}</h2>
      <div className={classes.row__posters}>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`${classes.row__poster} ${
                  isLargeRow && classes.row__posterLarge
                }`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
