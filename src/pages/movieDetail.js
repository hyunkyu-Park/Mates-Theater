import React from "react";
import { useParams } from "react-router-dom";

function MovieDetail(props) {
  let { id } = useParams();

  return (
    <div className="wrapper">
      <div className="movie_detail">
        <img src={props.images[id]} width="60%" />
        <h4>{props.movies[id].title}</h4>
        <p className="description">{props.movies[id].content}</p>
      </div>
    </div>
  );
}

export default MovieDetail;
