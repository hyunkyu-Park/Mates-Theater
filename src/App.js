import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import m1 from './img/m1.jpeg'
import m2 from './img/m2.jpeg'
import m3 from './img/m3.jpg'


function App() {
  return (
    <div className="App">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={m1} width="60%" />
            <h4>Glass Onion: A Knives Out Mystery</h4>
            <p className='description'>Tech billionaire Miles Bron invites his friends for a getaway on his private Greek island.
              When someone turns up dead, Detective Benoit Blanc is put on the case</p>
          </div>
          <div className="col-md-4">
            <img src={m2} width="60%" />
            <h4>The Lord of the Rings: The Return of the King</h4>
            <p className='description'>Frodo, Sam and Gollum are making their final way toward Mount Doom to destroy the One Ring,
             unaware of Gollum's true intentions, while Merry, Pippin, Gandalf, Aragorn, Legolas, Gimli and the others 
             join forces together against Sauron and his legions in Minas Tirith.</p>
          </div>
          <div className="col-md-4">
            <img src={m3} width="60%" />
            <h4>probability of love at first sight</h4>
            <p className='description'>17-year-old Hadley misses her flight to London, 
              where her father is marrying the woman he left their family for, 
              but she unexpectedly may have found true love in the process.</p>
          </div>
        </div>
      </div>





      
    </div>
  );
}

export default App;
