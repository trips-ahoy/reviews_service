import React from 'react';
import Info from './Info.jsx';
import Photos from './Photos.jsx';
import Userbar from './Userbar.jsx';

class Review extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Userbar />
        <Photos />
        <Info />
      </div>
    );
  }
}

export default Review;