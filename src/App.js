import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Favorites from "./components/Favorites";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
