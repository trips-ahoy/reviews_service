import React from 'react';
import Review from './Review.jsx';


class Feed extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Review />
      </div>
    );
  }
}

export default Feed;