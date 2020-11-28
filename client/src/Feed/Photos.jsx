import React from 'react';

class Photos extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = 'photos'>
        <img className= 'reviewPhoto' alt = "first travel photo" src= {window.location.pathname + this.props.photo1}></img>
        <img className= 'reviewPhoto' alt = "second travel photo" src= {window.location.pathname + this.props.photo2} ></img>
        <img className= 'reviewPhoto' alt = "third travel photo" src={window.location.pathname+this.props.photo3} ></img>
      </div>
    );
  }
}

export default Photos;