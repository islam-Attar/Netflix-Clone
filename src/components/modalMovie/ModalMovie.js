import {Modal, Button , Form , Card } from "react-bootstrap/";
import { useRef } from "react";


export default function ModalMovie(props) {

   const commentRef = useRef();

   function handleComment(e){
      e.preventDefault();

      console.log(commentRef.current.value);
      const comment = commentRef.current.value;

      const newMovie = {...props.chosenMovie, comment}
      console.log(newMovie);
      props.updateMovies(newMovie, props.chosenMovie.id)
   }

   async function handleAddFav(e, movie){
    e.preventDefault();

    const dataToBeSent = {
      
      title: movie.title,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      overview: movie.overview,
      comments: movie.comments,
      
     }

     const url = `${process.env.REACT_APP_SERVER}/addMovies`
   const response = await fetch(url, {

     method: 'POST',
     headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToBeSent)

   });
   const data = await response.json();
   console.log(response.status);
   console.log(data);
    

   }

  return (
    <>
      <Modal show={props.show} onHide={props.hide}>
        <Modal.Header closeButton>
          <Card.Img
            variant="top"
            src={
              "https://image.tmdb.org/t/p/w500" +
              `${props.chosenMovie.poster_path}`
            }
          />
        </Modal.Header>
        <Modal.Body>{props.chosenMovie.title}</Modal.Body>
        <Modal.Footer>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              
              <Form.Label>User Comment: <p>{props.chosenMovie.comment}</p></Form.Label>
              <Form.Control ref={commentRef} type="text" placeholder="Enter your comment" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleComment}>
              Submit
            </Button>
          </Form>
          <Button variant="secondary" onClick={props.handleClose}>
            Save
          </Button>
          <Button variant="primary" onClick={(e) => {handleAddFav (e,props.chosenMovie)}}>
            Add to favorite
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  
}
