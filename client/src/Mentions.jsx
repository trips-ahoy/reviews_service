import React from 'react';
import Word from './Word.jsx';

class Mentions extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      mentions: this.props.mentions,
      filters: []
    }

    this.filterMentions =  this.filterMentions.bind(this)
  }


  filterMentions(word) {

    if (index = this.state.filters.indexOf(word) === -1) {
      var newFilters = [...this.state.filters]
      newFilters.push(word)
      this.setState({
        filters: newFilters
      })
      this.props.filterWords(newFilters)

    } else {
      var index = this.state.filters.indexOf(word)
      var newFilters = [...this.state.filters]
      newFilters.splice(index, 1)
      this.setState({
        filters: newFilters
      })
      this.props.filterWords(newFilters)
    }


  }

  render() {
    return (
      <div>
        <div className='bold'>Popular mentions</div>
        <div className = 'container-mentions'>
        {(this.state.filters.length === 0) &&
        <button className = 'mentionsPrim'>All reviews</button>
        }
        {(this.state.filters.length !== 0) &&
        <button className = 'mentionsSec'>All reviews</button>
        }
        {this.state.mentions.map ((word, index) => (
          <Word word={word} key={word+'.'+index} filterMentions = {this.filterMentions}/>
        ))}
        </div>
      </div>
    );
  }
}

export default Mentions;