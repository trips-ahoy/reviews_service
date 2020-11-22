import React from 'react';

class Userbar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user[0]
    }


  }


  render() {
    return (
      <div className = 'userbar'>
        <div className ='userContainer'>
        <img className= 'user-photo' src={window.location.pathname + this.state.user.avatar}></img>
        <div className= 'userMeta'>
          <div className = 'user-name'>
            <div className = 'userNameText'>{this.state.user.name}</div>
            <div className = 'wroteReview'> wrote a review {this.props.date}</div>
          </div>

        <div className = 'user-info'>
        <i class="fas fa-map-marker-alt"></i>  {this.state.user.address} •  <div className = 'heavy'> {this.state.user.contributions} </div>contributions • <div className = 'heavy'>{this.state.user.votes}</div> helpful votes
        </div>
        </div>
        </div>
        <div className = 'ellipse'><i class="fas fa-ellipsis-h"></i></div>
      </div>
    );
  }
}

export default Userbar;