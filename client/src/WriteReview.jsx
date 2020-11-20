import React from 'react';

class WriteReview extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault();
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));

  }

  render() {
    return (
      <div className='writeReviewContainer'>
        <div className = 'head28'>Reviews</div>
        <div className = 'writeReviewActionContainer'>
          <button className = 'primary'>Write a review</button>
          <div class="dropdown">
            {!this.state.isToggleOn &&
              <button className = 'dropbtn' onClick = {this.handleClick}><i class="fas fa-caret-down"></i></button>
            }
            {
              this.state.isToggleOn &&
              <div>
                <button className = 'dropbtn' onClick = {this.handleClick}><i class="fas fa-caret-up"></i></button>
                <div id="myDropdown" class="dropdown-content">
                  <a href="#home"><i class="far fa-edit"></i> Write a review</a>
                  <a href="#about"><i class="fas fa-camera"></i> Post a photo</a>
                  <a href="#contact"><i class="far fa-comment-alt"></i> Ask a question</a>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default WriteReview;