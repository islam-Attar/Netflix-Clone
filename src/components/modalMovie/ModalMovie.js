import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export default function ModalMovie(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.ModalMoviehandleClose}>
                <Modal.Header closeButton>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + `${props.chosenMovie.poster_path}`} />
                </Modal.Header>
                <Modal.Body>{props.chosenMovie.title}</Modal.Body>
                <Modal.Footer>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control type="text" placeholder="Enter your comment" />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}


