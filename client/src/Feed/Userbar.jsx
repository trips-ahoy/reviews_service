import React from 'react';

const Userbar = ({review}) => (
      <div className = 'userbar'>
        <div className ='userContainer'>
        <img className= 'user-photo' alt = "user photo" src={review.user_avatar}></img>
        <div className= 'userMeta'>
          <div className = 'user-name'>
            <div className = 'userNameText'>{review.user_name}</div>
            <div className = 'wroteReview'> wrote a review {review.date}</div>
          </div>

        <div className = 'user-info'>
        <i class="fas fa-map-marker-alt"></i>  {review.user_address} •  <div className = 'heavy'> {review.user_contributions} </div>contributions • <div className = 'heavy'>{review.user_votes}</div> helpful votes
        </div>
        </div>
        </div>
        <div className = 'ellipse'><i class="fas fa-ellipsis-h"></i></div>
      </div>
);


export default Userbar;