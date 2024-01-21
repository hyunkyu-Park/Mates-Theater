import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

function MovieDetail(props) {
  let { id } = useParams();
  let navigate = useNavigate();

  return (
    <>
      <div className="wrapper">
        <div className="movie_detail">
          <img src={props.images[id]} width="60%" />
          <h4>{props.movies[id].title}</h4>
          <p className="description">{props.movies[id].content}</p>
        </div>
      </div>

      <div>
        <Button
          variant="outline-primary"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back Button
        </Button>{" "}
      </div>
    </>
  );
}

export default MovieDetail;
