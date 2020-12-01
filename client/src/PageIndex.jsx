import React from 'react';

class PageIndex extends React.Component {

  constructor(props) {
    super(props);

    this.decreasePage = this.decreasePage.bind(this)
    this.increasePage = this.increasePage.bind(this)
  }

  decreasePage() {
    console.log('decreasepage is clicked')
    this.props.handleClick('previous')
  }

  increasePage() {
    console.log('increaspage is clicked')
    this.props.handleClick('next')
  }


  render() {
    return (
      <div className='pageIndexContainer'>
        <button className = 'mentionsSec' aria-label='button-index' onClick = {this.decreasePage}>Previous</button>
        <button className = 'mentionsPrim' aria-label='button-index' onClick = {this.increasePage}>Next</button>

      </div>
    );
  }
}

export default PageIndex;