import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Movie from "./pages/movie";
import Favoritos from "./pages/favoritos";
import Login from "./pages/login";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/favoritos" exact element={<Favoritos />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/:id" exact element={<Movie />} />
            </Routes>
        </div>
    );
};

export default App;