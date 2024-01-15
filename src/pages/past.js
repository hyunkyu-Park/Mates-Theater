// ReviewList.js
import React from 'react';

function ReviewList({ review_images, reviews }) {
    return (
      <>
        <div className='container'>
          <div className='row'>
            {review_images.map((review_image, i) => (
              <Review review_image={review_image} reviews={reviews} post={i} />
            ))}
          </div>
        </div>
      </>
    );
  }
  
  function Review(props){
    return(
      <div className="col-md-4">
        <img src={props.review_image} width="60%" />
        <h4>{props.reviews[props.post].title}</h4>
        <p className='description'>M Review: {props.reviews[props.post].M_review}</p>
        <p className='description'>H Review: {props.reviews[props.post].H_review}</p>
      </div>
    )
  }

  export default ReviewList;