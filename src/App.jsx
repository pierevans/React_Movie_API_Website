import React from "react";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./components/MovieContext";
const App = () => {
  return (
    <MovieProvider>
      <div className="bg-light h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </MovieProvider>
  );
};

export default App;
