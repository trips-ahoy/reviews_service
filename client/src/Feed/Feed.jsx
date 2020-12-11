import React from 'react';
import Review from './Review.jsx';


class Feed extends React.Component {

  constructor(props) {
    super(props);

  }








  render() {
    return (
      <div>
          {this.props.currentReviews.map ((review, index) => (
          <Review review={review} key={review.id}/>
          ))}
      </div>
    );
  }
}

export default Feed;