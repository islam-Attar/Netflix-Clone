import { useState, useEffect } from "react";
import MovieList from "../movieList/MovieList";

 const Home = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    console.log(11111111111, process.env.REACT_APP_SERVER);

    let response = await fetch(`${process.env.REACT_APP_SERVER}/trending`);

    let moviesData = await response.json();
    setMovies(moviesData);
  }

  function updateMovies(newMovie, id){

    let updatedMovie = movies.map(movie =>{

      if (movie.id == id){
        movie.comment = newMovie.comment;
        return movie;
      }

      else {
        return movie;
      }
    })
       setMovies(updatedMovie)
  }

 

  return (
    <>
      <h1> Home page </h1>
      {movies && <MovieList movies={movies} updateMovies = {updateMovies}/>}
      {!movies && <div>No Movies To Show!</div> }
    </>
  );
}


export default Home;