import "./App.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
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

function App() {
  let [images] = useState([m1, m2, m3]);
  let [movies, setMovies] = useState(movie);
  let [review_images] = useState([review1, review2, review3]);
  let [reviews, setReviews] = useState(review);
  let [timer, setTimer] = useState(false);

  let [postname, setPostname] = useState([]);
  let [input, setInput] = useState("");

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
            <Nav.Link href="/Review">Review</Nav.Link>
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
          path="/review"
          element={
            <>
              <div>
                <input
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    let copy = [...postname];
                    copy.unshift(input);
                    setPostname(copy);
                  }}
                >
                  New Post!
                </button>

                <p>{postname}</p>
              </div>
            </>
          }
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
