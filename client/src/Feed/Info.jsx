import React from 'react';

class Info extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      info: this.props.info
    }
  }


  render() {
    return (
      <div className='infoContainer' >
        <div className = "review-rating">
          {
            (this.props.info.rating === 0) &&
            <div className = "circles">
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            </div>

          }
          {
            (this.props.info.rating === 1) &&
            <div className = "circles">
            <i class="fas fa-circle"></i>
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            </div>

          }
          {
            (this.props.info.rating === 2) &&
            <div className = "circles">
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            </div>

          }
          {
            (this.props.info.rating === 3) &&
            <div className = "circles">
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="far fa-circle"></i>
            <i class="far fa-circle"></i>
            </div>

          }
          {
            (this.props.info.rating === 4) &&
            <div className = "circles">
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="far fa-circle"></i>
            </div>

          }
          {
            (this.props.info.rating === 5) &&
            <div className = "circles">
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            <i class="fas fa-circle"></i>
            </div>

          }

        </div>

        <div className = "review-title">{this.state.info.title}</div>
        <div className = "review-text">{this.state.info.full_text}</div>
        < br/>

        <div className = "date">
          <div className = "date-heading">Date of experience: </div>
          <div className = "date-text"> {this.state.info.date}</div>
        </div>

        <div className = "helpfulVotes">{this.state.info.helpful.length} Helpful votes</div>

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
  }
}

export default Info;