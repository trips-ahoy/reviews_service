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

      ratings: [0, 1, 2, 3, 4, 5],

    }
    this.createLangList = this.createLangList.bind(this);
    // this.handleChange = this.handleChange.bind(this);
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
  // //filterType = [seasonFilter, ratingFilter, travelFilter, languageFilter]
  // handleChange(filterElement, toggle, filterType) {
  //   console.log('handlechange triggered:', filterElement, toggle, filterType)

  //   if (filterType === "seasonFilter") {
  //     var filter = [...this.state.seasonFilter]
  //   } else if (filterType === "ratingFilter") {
  //     var filter = [...this.state.ratingFilter]
  //   } else if (filterType === "travelFilter") {
  //     var filter = [...this.state.travelFilter]
  //   } else if (filterType === "languageFilter") {
  //     var filter = [...this.state.languageFilter]
  //   } else {
  //     console.log('Error with filterType input:', filterType)
  //   }

  //   if (toggle) {
  //     filter.push(filterElement);
  //   } else {
  //     var index = filter.indexOf(filterElement)
  //     filter.splice(index, 1)
  //   }

  //   let obj = {}
  //   obj[filterType] = filter
  //   this.setState(obj);
  //   console.log('verify:', obj)
  //   if (filterType === 'seasonFilter') {
  //     this.props.filterSeason(this.state.seasonFilter)
  //   }
  // }

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
              <Language language = {language} key = {language + "." + index} handleChange = {this.props.handleChange} />
            ))
            }
        </div>
      </div>
    );
  }
}

export default Filters;


