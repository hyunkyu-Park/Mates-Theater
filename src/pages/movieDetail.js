// import React from "react";
// import { Navigate, useNavigate, useParams } from "react-router-dom";
// import { Button } from "react-bootstrap";

// function MovieDetail(props) {
//   let { id } = useParams();
//   let navigate = useNavigate();

//   return (
//     <>
//       <div className="wrapper">
//         <div className="movie_detail">
//           <img src={props.images} width="60%" />
//           <h4>{props.movies[id].title}</h4>
//           <p className="description">{props.movies[id].overview}</p>
//         </div>
//       </div>

//       <div>
//         <Button
//           variant="outline-primary"
//           onClick={() => {
//             navigate(-1);
//           }}
//         >
//           Back Button
//         </Button>{" "}
//       </div>
//     </>
//   );
// }

// export default MovieDetail;
// MovieDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function MovieDetail() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWYyMGM3ZDVhMzA0NmExYWY1ZGE2Y2MxYzgwZDIzMCIsInN1YiI6IjY1YmYxMWFiYTdlMzYzMDFiNzU1OWYzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qnPVZ3E8x4LT0U7eYATrv7Ki9qVk2DNogJzOReqTZjU';

  useEffect(() => {
    // 클릭한 영화의 ID를 이용하여 TMDB API에서 상세 정보를 가져오는 코드
    axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
      params: {
        api_key: apiKey,
        language: 'en-US'
      },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWYyMGM3ZDVhMzA0NmExYWY1ZGE2Y2MxYzgwZDIzMCIsInN1YiI6IjY1YmYxMWFiYTdlMzYzMDFiNzU1OWYzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qnPVZ3E8x4LT0U7eYATrv7Ki9qVk2DNogJzOReqTZjU', // 여기에 실제 액세스 토큰을 넣어주세요.
      }
    })
    .then((response) => {
      setMovieDetail(response.data);
    })
    .catch((error) => {
      console.error(error);
      setMovieDetail({});
    });
  }, [id, apiKey]);

    console.log(movieDetail);

  return (
    <div className="col-md-4">
        <img src={`https://image.tmdb.org/t/p/w200${movieDetail.backdrop_path}`} width="60%" alt={movieDetail.title} />
        <img src={`https://image.tmdb.org/t/p/w200${movieDetail.poster_path}`} width="60%" alt={movieDetail.title} />
          <h4>{movieDetail.title}</h4>
        <p className="description">{movieDetail.overview}</p>
    </div>
    
  );
}

export default MovieDetail;
