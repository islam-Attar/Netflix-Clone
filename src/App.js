import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import FavList from "./components/favList/FavList";
import Navbar from "./components/navbar/Navbar";

function App() {
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
