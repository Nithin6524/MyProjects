import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Series from './components/Series/Series'
import Movies from './components/Movies/Movies'
import Popular from './components/MostPopular/Popular'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/movies" element={<Movies/>} />
        <Route exact path="/series" element={<Series/>} />
        <Route exact path="/popular" element={<Popular/>} />
      </Routes>
    </Router>
  );
}

export default App;
