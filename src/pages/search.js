import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { MovieList } from "./MovieList";  // MovieList 컴포넌트 import
import { getMovieRanking } from "./movieApi";


const SearchPage = () => {
    const [year, setYear] = useState("");
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [movieRanking, setMovieRanking] = useState([]);
    const [error, setError] = useState(null);
    const [genreError, setGenreError] = useState(null);