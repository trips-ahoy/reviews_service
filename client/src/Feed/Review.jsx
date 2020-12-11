import React from 'react';
import axios from 'axios';
import Info from './Info.jsx';
import Photos from './Photos.jsx';
import Userbar from './Userbar.jsx';

const Review = ({review}) => (
  <div>
    <div className = 'single-review'>
      <Userbar review={review} />
      <Photos photo1 = {review.photo1} photo2 = {review.photo2} photo3 = {review.photo3}/>
      <Info review = {review}/>
    </div>
  </div>
);

export default Review;