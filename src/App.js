import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import FavList from "./components/favList/FavList";
import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from "react";

function App() {
  // const [favListData, setFavListData] = useState();

  // async function getDataFromDB() {
  //   const response = await fetch(`${process.env.REACT_APP_SERVER}/getMovies`);
  //   const data = await response.json();
  //   setFavListData(data);
  // }

  // useEffect(() => {
  //   getDataFromDB();
  // }, []);
  // favListData = {favListData}
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="favList" element={<FavList />} />
      </Routes>
    </div>
  );
}

export default App;
