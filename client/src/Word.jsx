import React from 'react';

class Word extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault();
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))

    this.props.filterMentions(this.props.word)

  }

  render() {
    return (
      <div>
        {
          !this.state.isToggleOn &&
          <button className = 'mentionsSec' onClick = {this.handleClick}>{this.props.word}</button>
        }
        {
          this.state.isToggleOn &&
          <button className = 'mentionsPrim' onClick = {this.handleClick}>{this.props.word}</button>
        }

      </div>
    );
  }
}

export default Word;