import React from 'react';
import Rating from './Rating.jsx';
import TravelType from './TravelType.jsx';
import Season from './Season.jsx';
import Language from './Language.jsx';

class Filters extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      seasons: ['Mar-May', 'Jun-Aug', 'Sep-Nov', 'Dec-Feb'],
      languages:  [],
      travel: ['families', 'couples', 'solo', 'business', 'friends'],
      ratings: [0, 1, 2, 3, 4, 5]

    }
    this.createLangList = this.createLangList.bind(this);
  }

  componentDidMount () {
    this.createLangList()
  }


  createLangList () {
    var langlist = ['All languages']
    var languageObj = this.props.summary[1]
    for (var key in languageObj) {
      langlist.push(key)
    }

    this.setState ({
      languages: langlist
    })
  }



  render() {
    return (
      <div className="filtersContainer">

        <div className='ratingsContainer'>
          <Rating summary = {this.props.summary} filterRating = {this.props.filterRating} handleChange = {this.props.handleChange}/>
        </div>

        <div className='travelContainer'>
          <div className='bold'>Traveler type</div>
            {
              this.state.travel.map ((travel, index) => (
                <TravelType travel = {travel} key = {travel + "." + index} handleChange = {this.props.handleChange} />
              ))
            }
        </div>

        <div className='seasonContainer'>
          <div className='bold'>Time of year</div>
            {
            this.state.seasons.map ((season, index) => (
              <Season season = {season} key = {season + "." + index} handleChange = {this.props.handleChange} />
            ))
            }
        </div>

        <div className='languageContainer'>
          <div className="bold">Language</div>
          {
            this.state.languages.map ((language, index) => (
              <Language language = {language} key = {language + "." + index} handleChange = {this.props.handleChange}/>
            ))
            }
        </div>
      </div>
    );
  }
}

export default Filters;


