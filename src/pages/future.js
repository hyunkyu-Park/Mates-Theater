// MovieList.js
import React from "react";
import { Link, useParams } from "react-router-dom";

function MovieList({ images, movies }) {
  return (
      <>
        <div className="container">
          <div className="row">
            {images.map((image, i) => (
              <Movie key={i} image={image} movie={movies[i]} />
            ))}
          </div>
        </div>
      </>
    );
  }
  
  function Movie(props) {
  return (
    <div className="col-md-4">
      <Link to={`/search/${props.movie.id}`} style={{ textDecoration: "none" }}>
        <img src={props.image} width="60%" alt={props.movie.title} />
          <h4>{props.movie.title}</h4>
        <p className="description">{props.movie.overview}</p>
      </Link>
    </div>
  );
}

export default MovieList;
