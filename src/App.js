import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import bg1 from './img/bg1.avif'
import m1 from './img/m1.jpeg'
import m2 from './img/m2.jpeg'
import m3 from './img/m3.jpg'
import review1 from './img/review1.jpeg'
import review2 from './img/review2.jpeg'
import review3 from './img/review3.jpg'
import movie from './data'
import { useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom'

function App() {

  let [movies, setMovies] = useState(movie)
  let [images] = useState([m1, m2, m3])
  let [review_images] = useState([review1, review2, review3])

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
          path='/'
          element={
            <>
              <div className='main-bg'></div>
              <MovieList images={images} movies={movies} />
            </>
          }
        />

        <Route path='/future' element={
          <>
          <MovieList images={images} movies={movies}/>
          </>
        }/>
        <Route path='/past' element={
          <>
          <div className='container'>
            <div className='row'>
              <div className="col-md-4">
                <img src={review1} width="60%" />
                <h4>Cruella</h4>
                <p className='description'>M Review: 진짜 너무 보고 싶었는데 오빠가 같이 봐줬다 히히</p>
                <p className='description'>H Review: 민하가 보자고 해서 봤는데 생각보다 재밌었다</p>
              </div>

              <div className="col-md-4">
                <img src={review2} width="60%" />
                <h4>knives Out</h4>
                <p className='description'>M Review: 보다가 너무 졸려서 도망쳤다..꾸버억</p>
                <p className='description'>H Review: 딱 기대만큼 재밌었다. 반전 아주 맛있어</p>
              </div>

              <div className="col-md-4">
                <img src={review3} width="60%" />
                <h4>Holidate</h4>
                <p className='description'>M Review: 오빠가 재밌다고 해서 봤는데 짱재밌었당. 우리 첫 영화!!</p>
                <p className='description'>H Review: 예전에 인상 깊게 봐서 여자친구 생기면 같이 보고 싶었는데, 그 사람이 바로 하민이였네</p>
              </div>
            </div>
          </div>
          </>

        }/>
        <Route path='/review'/>
      </Routes>
    </div>
  );
}

function MovieList({ images, movies }) {
  return (
    <>
      <div className='container'>
        <div className='row'>
          {images.map((image, i) => (
            <Movie image={image} movies={movies} post={i} />
          ))}
        </div>
      </div>
    </>
  );
}

function Movie(props){
  return(
    <div className="col-md-4">
      <img src={props.image} width="60%" />
      <h4>{props.movies[props.post].title}</h4>
      <p className='description'>{props.movies[props.post].content}</p>
    </div>
  )
}

export default App;
