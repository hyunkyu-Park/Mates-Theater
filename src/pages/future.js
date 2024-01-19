// MovieList.js
import React from "react";
import { Link, useParams } from "react-router-dom";

function MovieList({ images, movies }) {
  return (
    <>
      <div className="container">
        <div className="row">
          {images.map((image, i) => (
            <Movie image={image} movies={movies} post={i} />
          ))}
        </div>
      </div>
    </>
  );
}

function Movie(props) {
  let { id } = useParams();

  return (
    <div className="col-md-4">
      <img src={props.image} width="60%" />
      <h4>{props.movies[props.post].title}</h4>
      <p className="description">{props.movies[props.post].content}</p>
    </div>
  );
}

export default MovieList;
