import React from 'react';

class Photos extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = 'photos'>
        <img className= 'reviewPhoto' src= {window.location.pathname + this.props.photo1}></img>
        <img className= 'reviewPhoto' src= {window.location.pathname + this.props.photo2} ></img>
        <img className= 'reviewPhoto' src={window.location.pathname+this.props.photo3} ></img>
      </div>
    );
  }
}

export default Photos;