import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ModalMovie from "../modalMovie/ModalMovie";
import { useState } from "react";

export default function MovieList(props) {
  const [show, setShow] = useState(false);
  const [chosenMovie, setChosenMovie] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleShowModal(movieData) {
    console.log(movieData);
    handleShow();
    setChosenMovie(movieData);
  
  }
  return (
    <>
      <h1>Movies List</h1>

      {props.movies.map((movie) => {
        return (
          <>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>release date: {movie.release_date}</Card.Text>
                <Card.Text>
                  <b>Overview</b> <br /> {movie.overview}
                </Card.Text>
                <Card.Text>
                  {movie.comment ? movie.comment : "No Comment Is Added"}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleShowModal(movie);
                  }}
                >
                  Show Modal
                </Button>
              </Card.Body>
            </Card>
            {chosenMovie && ( <ModalMovie show={show} handleClose={handleClose} chosenMovie={chosenMovie} updateMovies = {props.updateMovies}/> )}
              
            </div>
          </>
        );
      })}
    </>
  );
}
