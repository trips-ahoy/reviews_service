import React from 'react';

class RatingButton extends React.Component {

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
        this.props.handleChange(this.props.ratingType, this.state.isToggleOn, "ratingFilter");
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
          <button className= 'sqrbtn' rating = {this.props.rating} onClick = {this.handleClick} ><i class="far fa-square"></i></button>
        }
        {
          this.state.isToggleOn &&
          <button className= 'sqrbtn' rating = {this.props.rating} onClick = {this.handleClick} ><i class="fas fa-check-square"></i></button>
        }
      </div>
    );
  }
}

export default RatingButton;