import React from 'react';

const Info = ({review}) => (
      <div className='infoContainer' >
        <div className = "review-rating">
          {
            (review.rating === 0) &&
            <div className = "circles">
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            </div>

          }
          {
            (review.rating === 1) &&
            <div className = "circles">
            <i class="fas fa-circle"></i>
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            </div>

          }
          {
            (review.rating === 2) &&
            <div className = "circles">
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            </div>

          }
          {
            (review.rating === 3) &&
            <div className = "circles">
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            </div>

          }
          {
            (review.rating === 4) &&
            <div className = "circles">
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="far fa-circle"></i>
            </div>

          }
          {
            (review.rating === 5) &&
            <div className = "circles">
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            </div>

          }

        </div>

        <div className = "review-title">{review.title}</div>
        <div className = "review-text">{review.full_text}</div>
        < br/>

        <div className = "date">
          <div className = "date-heading">Date of experience: </div>
          <div className = "date-text"> {review.date}</div>
        </div>

        <div className = "helpfulVotes">{review.helpful_count} Helpful votes</div>

        <div className = "reviewFooter">
          <div className = 'likeContainer'>
            <div className = "review-icon"><i class="far fa-thumbs-up"></i></div>
            <div className = "review-icon-text">Helpful</div>
          </div>
          <div className = "shareContainer">
            <div className = "review-icon"><i class="fas fa-share-square"></i></div>
            <div className = "review-icon-text">Share</div>
          </div>
        </div>

      </div>
);

export default Info;