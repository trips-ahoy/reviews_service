import React from 'react';

class Userbar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user[0]
    }


  }

  componentDidMount() {
    console.log('this.state', this.state.user)
  }

  render() {
    return (
      <div className = 'userbar'>
        <div className ='userContainer'>
        <img className= 'user-photo' src="avatar.jpg" ></img>
        <div className= 'userMeta'>
          <div className = 'user-name'>{this.state.user.name} wrote a review {this.props.date}</div>

        <div className = 'user-info'>
        <i class="fas fa-map-marker-alt"></i>  {this.state.user.address} • {this.state.user.contributions} contributions • {this.state.user.votes} helpful votes
        </div>
        </div>
        </div>
        <div className = 'ellipse'><i class="fas fa-ellipsis-h"></i></div>
      </div>
    );
  }
}

export default Userbar;