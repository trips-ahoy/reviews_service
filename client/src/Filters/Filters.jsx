import React from 'react';
import Rating from './Rating.jsx';
import TravelType from './TravelType.jsx';
import Season from './Season.jsx';
import Language from './Language.jsx';

class Filters extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Rating />
        <TravelType />
        <Season />
        <Language />
      </div>
    );
  }
}

export default Filters;