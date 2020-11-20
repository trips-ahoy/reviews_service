import React from 'react';

class Photos extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = 'photos'>
        <img className= 'reviewPhoto' src="photo1.jpeg" ></img>
        <img className= 'reviewPhoto' src="photo1.jpeg" ></img>
        <img className= 'reviewPhoto' src="photo1.jpeg" ></img>
      </div>
    );
  }
}

export default Photos;