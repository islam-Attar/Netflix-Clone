import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import {useEffect, useState} from 'react';


function FavList(props){
    const [favListData, setFavListData] = useState();

    async function getDataFromDB(){
       const response = await fetch(`${process.env.REACT_APP_SERVER}/getMovies`);
       const data = await response.json();
       setFavListData(data);
     }
     useEffect(() => {
       getDataFromDB();
     }, []);

   
   async function handleDelete(id){
        const response = await fetch(`${process.env.REACT_APP_SERVER}/DELETE/${id}`,{
            method: 'DELETE',
        });
        
        if(response.status === 204){
            getDataFromDB();
            
            
        }
    }

  //   async function handleUpdate(id){
  //     const response = await fetch(`${process.env.REACT_APP_SERVER}/UPDATE/${id}`,{
  //         method: 'PUT',
  //     });
      
  // }





 return (
     <>
          <h1>This is my favorite list of Movies</h1>
     {
         favListData && favListData.map(movie =>{
             return (
                 <>
                   <Card style={{ width: '18rem' }} key={movie.id}>
                                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                   
                                    <Card.Text>
                                        It will be released in {movie.release_date}
                                    </Card.Text>
                                    <Card.Text>
                                        {movie.comment ? movie.comment : "No Comment is Added"}
                                    </Card.Text>
                                    <Button variant="primary" onClick={()=>{handleDelete(movie.id)}}>Delete</Button>
                                    
                                </Card.Body>
                            </Card>
                 </>
             )
         })
     }
     </>
 )
}

export default FavList;
