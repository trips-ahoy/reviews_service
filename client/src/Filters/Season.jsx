import React from 'react';
const Promise = require('bluebird');

class Season extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: false
    }

    this.handleClick = this.handleClick.bind(this);
  }



  handleClick(event) {

    event.preventDefault();

    var setToggle = () => {
        return new Promise ((resolve, reject) => {
          this.setState(state => ({
            isToggleOn: !state.isToggleOn
          }))
          resolve(this.state.isToggleOn)
       })
    }

    setToggle()
      .then ((toggle) => {
        this.props.handleChange(this.props.season, this.state.isToggleOn, "seasonFilter");
      })
      .catch( (err) => {
        console.log(err)
      })


  }

  render() {
    return (
      <div>
      {
        !this.state.isToggleOn &&
        <button className= 'sqrbtn' aria-label='button-season' season = {this.props.season} onClick = {this.handleClick} ><i class="far fa-square"></i></button>
      }
      {
        this.state.isToggleOn &&
        <button className= 'sqrbtn' aria-label='button-season' season = {this.props.season} onClick = {this.handleClick} ><i class="fas fa-check-square"></i></button>
      }
      {this.props.season}
      </div>


    );
  }
}

export default Season;