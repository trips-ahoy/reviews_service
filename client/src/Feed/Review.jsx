import React from 'react';
import axios from 'axios';
import Info from './Info.jsx';
import Photos from './Photos.jsx';
import Userbar from './Userbar.jsx';

class Review extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user:{},
      review: this.props.review,
      loaded: false,
      date: this.props.review.date
    }

    this.fetchCurrentUser = this.fetchCurrentUser.bind(this)
  }

  componentDidMount() {
    console.log('review in review', this.props.review)
    this.fetchCurrentUser();

  }


  fetchCurrentUser () {
    var id = this.props.userId;
    axios.get(`/user/${id}`)
      .then(({data}) => {
        console.log(data)
        this.setState ({
          user: data
        })
      })
      .then(() => {
        this.setState ({
          loaded: true
        })

      })
  }

  render() {
    return (
      <div>
        {
          this.state.loaded &&
          <div className = 'single-review'>
          <Userbar user={this.state.user} date={this.state.date}/>
          <Photos />
          <Info info = {this.state.review}/>
          </div>
        }
      </div>
    );
  }
}

export default Review;