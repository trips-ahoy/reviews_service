import React from 'react';

class TravelType extends React.Component {

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
        this.props.handleChange(this.props.travel, this.state.isToggleOn, "travelFilter");
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
        <button className= 'sqrbtn' travel = {this.props.travel} onClick = {this.handleClick} ><i class="far fa-square"></i></button>
      }
      {
        this.state.isToggleOn &&
        <button className= 'sqrbtn' travel = {this.props.travel} onClick = {this.handleClick} ><i class="fas fa-check-square"></i></button>
      }
      {this.props.travel}
      </div>
    );
  }
}

export default TravelType;