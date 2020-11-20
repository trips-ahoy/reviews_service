import React from 'react';

class Photos extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('phto3', this.props.photo3)
  }

  render() {
    return (
      <div className = 'photos'>
        <img className= 'reviewPhoto' src={this.props.photo1} ></img>
        <img className= 'reviewPhoto' src={this.props.photo2} ></img>
        <img className= 'reviewPhoto' src={this.props.photo3} ></img>
      </div>
    );
  }
}

export default Photos;