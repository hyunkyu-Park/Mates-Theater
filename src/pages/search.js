import React, { useState, useEffect } from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import MovieList from "./future.js";
import {getMovieRanking, getGenres} from "./movieApi.js";



const SearchPage = () => {
    const [year, setYear] = useState("");
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [movieRanking, setMovieRanking] = useState([]);
    const [error, setError] = useState(null);
    const [genreError, setGenreError] = useState(null);


    useEffect(() => {
        handleClick();
    }, []);

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
        // getGenres 함수를 호출하여 장르 목록을 가져옵니다.
        getGenres(setSelectedGenres, setGenreError);
    }, []); // 컴포넌트가 마운트될 때 한 번만 호출되도록 빈 배열을 전달합니다.

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
                    {selectedGenres.map((genre) => (
                        <ToggleButton variant="outline-dark" key={genre.id} id={`tbg-btn-${genre.id}`} value={genre.id} className="btn-primary" >
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

export default SearchPage;