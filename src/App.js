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
import axios from "axios";

function App() {
  const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWYyMGM3ZDVhMzA0NmExYWY1ZGE2Y2MxYzgwZDIzMCIsInN1YiI6IjY1YmYxMWFiYTdlMzYzMDFiNzU1OWYzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qnPVZ3E8x4LT0U7eYATrv7Ki9qVk2DNogJzOReqTZjU';

  let [images] = useState([m1, m2, m3]);
  let [movies, setMovies] = useState(movie);
  let [timer, setTimer] = useState(false);

  let [review_images] = useState([review1, review2, review3]);
  let [reviews, setReviews] = useState(review);

  let [postname, setPostname] = useState([]);
  let [input, setInput] = useState("");
  const [movie_ranking, setMovieRanking] = useState([]);
  const [error, setError] = useState(null);
  let [year, setYear] = useState(2017)

  useEffect(() => {
    let timer = setTimeout(() => {
      setTimer(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClick = (year) => {
    
    axios.get('https://api.themoviedb.org/3/discover/movie', {
      params: {
        api_key: apiKey,
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: true,
        include_video: false,
        page: 1,
        primary_release_year: year,
        region: 'US',
      },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWYyMGM3ZDVhMzA0NmExYWY1ZGE2Y2MxYzgwZDIzMCIsInN1YiI6IjY1YmYxMWFiYTdlMzYzMDFiNzU1OWYzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qnPVZ3E8x4LT0U7eYATrv7Ki9qVk2DNogJzOReqTZjU', // 여기에 실제 액세스 토큰을 넣어주세요.
      }
    })
      .then((response) => {
        setMovieRanking(response.data.results);
        setError(null);
      })
      .catch((error) => {
        console.error(error);
        setMovieRanking([]);
        setError('영화 정보를 가져오는 중에 오류가 발생했습니다.');
      });
  };
  

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

              <div>
                <button onClick={() => {
                  axios.get('https://codingapple1.github.io/shop/data2.json')
                  .then((result)=>{
                    console.log(result.data)})
                  .catch(()=>{
                    console.log("실패함 ㅅㄱ")
                  })

                }}>버튼</button>
                <button
                  onClick={() => {
                    axios.get('https://api.themoviedb.org/3/discover/movie', {
                      params: {
                        include_adult: 'false',
                        include_video: 'false',
                        language: 'en-US',
                        page: '1',
                        sort_by: 'popularity.desc'
                      },
                      headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWYyMGM3ZDVhMzA0NmExYWY1ZGE2Y2MxYzgwZDIzMCIsInN1YiI6IjY1YmYxMWFiYTdlMzYzMDFiNzU1OWYzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qnPVZ3E8x4LT0U7eYATrv7Ki9qVk2DNogJzOReqTZjU'
                      }
                    })
                      .then((response) => {
                        console.log(response.data);
                      })
                      .catch((error) => {
                        console.error(error);
                      });
                  }}
                >
                  버튼2
                </button>

                <div>
                  <h1>2017년 미국에서 가장 인기 있었던 영화</h1>
                  <button onClick={() => handleClick(year)}>
                    버튼3
                  </button>
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                  <ul>
                    {movie_ranking.map(movie => (
                      <li key={movie.id}>
                        {movie.title}
                      </li>
                    ))}
                  </ul>
                </div>
              
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
