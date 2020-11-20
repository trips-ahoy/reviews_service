import React from 'react';

class Tab extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className='reviewTab tab'>
        <div className = 'head28'><i class="far fa-edit" ></i></div>
        <div className = 'head18'> {this.props.reviewCount} </div>
        <div className = 'tabTitle'>Reviews</div>
      </div>
    );
  }
}

export default Tab;