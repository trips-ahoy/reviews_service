import React from 'react';

class Language extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.initialSetting = this.initialSetting.bind(this);
  }

  componentDidMount() {
    this.initialSetting()
  }

  initialSetting() {
    if (this.props.language === 'English') {
      this.handleClick();
    }
  }

  handleClick(event) {

    if (event) {
      event.preventDefault();
    }



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
        this.props.handleChange(this.props.season, this.state.isToggleOn, "seasons");
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
        <button className= 'sqrbtn' season = {this.props.language} onClick = {this.handleClick} ><i class="far fa-circle"></i></button>
      }
      {
        this.state.isToggleOn &&
        <button className= 'sqrbtn' season = {this.props.language} onClick = {this.handleClick} ><i class="fas fa-dot-circle"></i></button>
      }
      {this.props.language}
      </div>
    );
  }
}

export default Language;