import React from 'react';
import Review from './Review.jsx';


const Feed = ({currentReviews}) => (
  <div>
    {currentReviews.map ((review, index) => (
      <Review review={review} key={review.id}/>
    ))}
  </div>
);

export default Feed;