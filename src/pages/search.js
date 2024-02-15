import React, { useState, useEffect } from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import MovieList from "./future.js";
import {getMovieRanking, getGenres} from "./movieApi.js";

export default function SearchPage() {
    const [year, setYear] = useState("2024");
    const [genres, setGenres] = useState([])
    const [selectedGenres, setSelectedGenres] = useState([])
    const [movieRanking, setMovieRanking] = useState([]);
    const [error, setError] = useState(null);
    const [genreError, setGenreError] = useState(null);

    const handleClick = () => {
        getMovieRanking(
            {
                year: year,
                genreId: selectedGenres.length > 0 ? selectedGenres : null,
            },
            setMovieRanking,
            setError
        );
    };

    useEffect(() => { 
        getGenres(setGenres, setGenreError);
        handleClick();
    }, []);

    if (genres.length === 0){
        return <div>Loading~</div>
    } 
    return(
        <>
            <div>
                <h1>Movie Ranking</h1>
                <input onChange={(e) => setYear(e.target.value)} />
                <button onClick={() => { handleClick()}}>This is filter</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}

                <div>
                <h3>Genres</h3>
                    <div>
                        <ToggleButtonGroup type="checkbox" value={selectedGenres} onChange={setSelectedGenres}>
                            {genres.map((genre, index) => (
                                <ToggleButton key={index} id={`tbg-btn-${genre.id}`} value={genre.id} >
                                    {genre.name}
                                </ToggleButton>
                            ))}
                        </ToggleButtonGroup>
                        {genreError && <p style={{ color: 'red' }}>{genreError}</p>}
                    </div>
                </div>
                

                <MovieList 
                    images={movieRanking.map(movie => `https://image.tmdb.org/t/p/w200${movie.poster_path}`)} 
                    movies={movieRanking.map(movie => ({
                    title: movie.title,
                    overview: movie.overview,
                    id: movie.id  
                }))} 
                />
            </div>
        </>
    );
}
