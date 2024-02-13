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
import SearchPage from "./pages/search.js";

function App() {
  const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWYyMGM3ZDVhMzA0NmExYWY1ZGE2Y2MxYzgwZDIzMCIsInN1YiI6IjY1YmYxMWFiYTdlMzYzMDFiNzU1OWYzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qnPVZ3E8x4LT0U7eYATrv7Ki9qVk2DNogJzOReqTZjU';

  let [images] = useState([m1, m2, m3]);
  let [movies, setMovies] = useState(movie);
  let [timer, setTimer] = useState(false);

  let [review_images] = useState([review1, review2, review3]);
  let [reviews, setReviews] = useState(review);


  useEffect(() => {
    let timer = setTimeout(() => {
      setTimer(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

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
          element={<SearchPage/> 
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
