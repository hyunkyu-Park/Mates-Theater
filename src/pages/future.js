// MovieList.js
import React from 'react';
import { Outlet, useParams } from 'react-router-dom';



function MovieList({ images, movies }) {
  return (
    <>
      <div className='container'>
        <div className='row'>
          {images.map((image, i) => (
            <Movie image={image} movies={movies} post={i} />
          ))}
        </div>
          <Outlet ></Outlet>
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

function MovieDetail(props){

  let {id} = useParams();

  return(
    <div className='wrapper'>
      <div className='movie_detail'>
        <img src={props.images[id]} width="60%" />
        <h4>{props.movies[id].title}</h4>
        <p className='description'>{props.movies[id].content}</p>
      </div>
    </div>
    
  )
}



export {MovieList, MovieDetail};
