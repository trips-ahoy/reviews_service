import React from 'react';
import axios from 'axios';
import Info from './Info.jsx';
import Photos from './Photos.jsx';
import Userbar from './Userbar.jsx';

class Review extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      date: this.props.review.date
    }

  }

  render() {
    return (
      <div>
          <div className = 'single-review'>
          <Userbar review={this.props.review} date={this.state.date}/>
          <Photos photo1 = {this.props.review.photo1} photo2 = {this.props.review.photo2} photo3 = {this.props.review.photo3}/>
          <Info review = {this.props.review}/>
          </div>
      </div>
    );
  }
}

export default Review;