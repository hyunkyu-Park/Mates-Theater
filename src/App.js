import "./App.css";
import { Navbar, Container, Nav, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import m1 from "./img/m1.jpeg";
import m2 from "./img/m2.jpeg";
import m3 from "./img/m3.jpg";
import review1 from "./img/review1.jpeg";
import review2 from "./img/review2.jpeg";
import review3 from "./img/review3.jpg";
import { movie, review } from "./data.js";
import { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate, outlet } from "react-router-dom";
import MovieList from "./pages/future.js";
import ReviewList from "./pages/past.js";
import MovieDetail from "./pages/movieDetail.js";
import {getMovieRanking, getGenres} from "./pages/movieApi.js";

function App() {
  const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWYyMGM3ZDVhMzA0NmExYWY1ZGE2Y2MxYzgwZDIzMCIsInN1YiI6IjY1YmYxMWFiYTdlMzYzMDFiNzU1OWYzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qnPVZ3E8x4LT0U7eYATrv7Ki9qVk2DNogJzOReqTZjU';

  let [images] = useState([m1, m2, m3]);
  let [movies, setMovies] = useState(movie);
  let [timer, setTimer] = useState(false);

  let [review_images] = useState([review1, review2, review3]);
  let [reviews, setReviews] = useState(review);

  let [input, setInput] = useState("");
  const [movie_ranking, setMovieRanking] = useState([]);
  const [error, setError] = useState(null);
  let [year, setYear] = useState(2024)
  const [genres, setGenres] = useState([]);
  const [genreError, setGenreError] = useState(null);
  
  const [selectedGenres, setSelectedGenres] = useState([]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setTimer(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    handleClick(year);
  }, [year]);

  const handleClick = (year) => {
    getMovieRanking(year, setMovieRanking, setError);
  };
  
  useEffect(() => {
    // getGenres 함수를 호출하여 장르 목록을 가져옵니다.
    getGenres(setGenres, setGenreError);
  }, []); // 컴포넌트가 마운트될 때 한 번만 호출되도록 빈 배열을 전달합니다.

  return (
    <div className="App">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Mates Theater</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/future">Future</Nav.Link>
            <Nav.Link href="/past">Past</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              {timer == false ? <Timer></Timer> : null}
              <MovieList images={images} movies={movies} />
            </>
          }
        />

        <Route
          path="/future/"
          element={
            <>
              <MovieList images={images} movies={movies} />
            </>
          }
        />
        <Route
          path="/future/:id"
          element={<MovieDetail images={images} movies={movies} />}
        />

        <Route
          path="/past"
          element={
            <>
              <ReviewList review_images={review_images} reviews={reviews} />
            </>
          }
        />

        <Route
          path="/search"
          element={
            <>
              <div>
                <div>
                  <h1>Movie Ranking</h1>
                  <input onChange={(e) => setInput(e.target.value)} />
                  <button onClick={() => setYear(input)}>This is filter</button>
                  {error && <p style={{ color: 'red' }}>{error}</p>}

                  <div>
                    <h3>Genres</h3>
                    <div>
                      <ToggleButtonGroup type="checkbox" value={selectedGenres} onChange={setSelectedGenres}>
                        {genres.map((genre) => (
                          <ToggleButton variant="outline-dark" key={genre.id} id={`tbg-btn-${genre.id}`} value={genre.id} className="btn-primary" >
                            {genre.name}
                          </ToggleButton>
                        ))}
                      </ToggleButtonGroup>
                      {genreError && <p style={{ color: 'red' }}>{genreError}</p>}
                    </div>
                  </div>
                  
                  

                  <MovieList 
                    images={movie_ranking.map(movie => `https://image.tmdb.org/t/p/w200${movie.poster_path}`)} 
                    movies={movie_ranking.map(movie => ({
                      title: movie.title,
                      overview: movie.overview,
                      id: movie.id  
                    }))} 
                  />
                </div>

              </div>
            </>
          }
        />
        
        <Route
          path="/search/:id"
          element={<MovieDetail />}
        />

        <Route
          path="*"
          element={
            <div>
              <h1>Oops! 404 - Page not found</h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

function Timer() {
  return (
    <>
      <div>오늘의 깜짝 운세~!</div>
    </>
  );
}

export default App;
