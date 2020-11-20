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
      seasonFilter: [],
      languages:  [],
      languageFilter: [],
      travel: ['families', 'couples', 'solo', 'business', 'friends'],
      travelFilter: [],
      ratings: [0, 1, 2, 3, 4, 5],
      ratingFilter: []
    }
    this.createLangList = this.createLangList.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(filterElement, toggle, filterType) {

    if (filterType === "seasons") {
      var filter = [...this.state.seasonFilter]
      var key = "seasonFilter"
    }
    if (filterType === "ratings") {
      var filter = [...this.state.ratingFilter]
      var key = "ratingFilter"
    }
    if (filterType === "travel") {
      var filter = [...this.state.travelFilter]
      var key = "travelFilter"
    }
    if (filterType === "languages") {
      var filter = [...this.state.languageFilter]
      var key = "languageFilter"
    }

    if (toggle) {
      filter.push(filterElement);
    } else {
      var index = filter.indexOf(filterElement)
      filter.splice(index, 1)
    }

    let obj = {}
    obj[key] = filter
    this.setState(obj);
  }

  render() {
    return (
      <div className="filtersContainer">

        <div className='ratingsContainer'>
          <Rating summary = {this.props.summary} filterRating = {this.props.filterRating} handleChange = {this.handleChange}/>
        </div>

        <div className='travelContainer'>
          <div className='bold'>Traveler type</div>
            {
              this.state.travel.map ((travel, index) => (
                <TravelType travel = {travel} key = {travel + "." + index} handleChange = {this.handleChange} />
              ))
            }
        </div>

        <div className='seasonContainer'>
          <div className='bold'>Time of year</div>
            {
            this.state.seasons.map ((season, index) => (
              <Season season = {season} key = {season + "." + index} handleChange = {this.handleChange} />
            ))
            }
        </div>

        <div className='languageContainer'>
          <div className="bold">Language</div>
          {
            this.state.languages.map ((language, index) => (
              <Language language = {language} key = {language + "." + index} handleChange = {this.handleChange} />
            ))
            }
        </div>
      </div>
    );
  }
}

export default Filters;


