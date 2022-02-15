import { useState, useEffect } from "react";
import MovieList from "../movieList/MovieList";

export default function Home() {
  const [movies, setMovies] = useState();

  async function getData() {
    console.log(11111111111, process.env.REACT_APP_SERVER);

    let response = await fetch(`${process.env.REACT_APP_SERVER}/trending`);

    let moviesData = await response.json();
    setMovies(moviesData);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1> Home page </h1>
      {movies && <MovieList movies={movies} />}
    </>
  );
}
