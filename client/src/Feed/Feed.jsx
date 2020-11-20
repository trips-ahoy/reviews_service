import React from 'react';
import Review from './Review.jsx';


class Feed extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentReviews: [],
      allReviews: this.props.reviews
    }
    this.fetchInitialReviews = this.fetchInitialReviews.bind(this)

  }

  componentDidMount() {
    this.fetchInitialReviews()
  }

  fetchInitialReviews() {
    var copyReviews = [...this.props.reviews]
    var firstPage = copyReviews.slice(0, 6)
    this.setState ({
      currentReviews: firstPage
    })
  }

  render() {
    return (
      <div>
          {this.state.currentReviews.map ((review, index) => (
          <Review review={review} key={review+'.'+index} userId = {review.user_id}/>
          ))}
      </div>
    );
  }
}

export default Feed;