import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import bg1 from './img/bg1.avif'
import m1 from './img/m1.jpeg'
import m2 from './img/m2.jpeg'
import m3 from './img/m3.jpg'
import movie from './data'
import { useState } from 'react';

function App() {

  let [movies, setMovies] = useState(movie)
  let [images] = useState([m1, m2, m3])

  return (
    <div className="App">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Mates Theater</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Future</Nav.Link>
            <Nav.Link href="#features">Present</Nav.Link>
            <Nav.Link href="#pricing">Past</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      
      <div className='row'> 
        <Movie images = {images} movies = {movies} post = {0}/>
        <Movie images = {images} movies = {movies} post = {1}/>
        <Movie images = {images} movies = {movies} post = {2}/>
      </div>
    </div>
  );
}

function Movie(props){
  return(
    <div className="col-md-4">
      <img src={props.images[props.post]} width="60%" />
      <h4>{props.movies[props.post].title}</h4>
      <p className='description'>{props.movies[props.post].content}</p>
    </div>
  )
}

export default App;
