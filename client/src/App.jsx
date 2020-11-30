import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Tab from './Tab.jsx';
import WriteReview from './WriteReview.jsx';
import Filters from './Filters/Filters.jsx';
import Search from './Search.jsx';
import Feed from './Feed/Feed.jsx';
import PageIndex from './PageIndex.jsx';
import Mentions from './Mentions.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      reviewCount: 0,
      ratings: {},
      travelTypes: {},
      seasons: {},
      languages: {},
      summary: [],
      loaded: false,
      mentions: ['fumaroles','ascent', 'steaming', 'path', 'meters', 'snow' ],
      seasonFilter: ['Mar-May', 'Jun-Aug', 'Sep-Nov', 'Dec-Feb'],
      languageFilter: [ 'Chinese', 'English', 'German', 'French', 'Spanish', 'Italian', 'Arabic', 'Japanese'],
      travelFilter: ['families', 'couples', 'solo', 'business', 'friends'],
      ratingFilter: [1 ,2 ,3, 4, 5],
      currentReviews: []

    }

    this.fetchReviews = this.fetchReviews.bind(this)
    this.filterParams = this.filterParams.bind(this)
    this.searchFilter = this.searchFilter.bind(this)
    this.filterWords = this.filterWords.bind(this)

    this.fetchInitialReviews = this.fetchInitialReviews.bind(this)

    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    this.fetchReviews();
    this.filterParams();
  }

  handleChange(filterElement, toggle, filterType) {

    if (filterType === "seasonFilter") {
      if (this.state.seasonFilter.length !== 4) {
        var filter = []
      } else {
        var filter = [...this.state.seasonFilter]
      }

    } else if (filterType === "ratingFilter") {
      if (this.state.ratingFilter !== 5) {
        var filter = []
      } else {
        var filter = [...this.state.ratingFilter]
      }

    } else if (filterType === "travelFilter") {
      if (this.state.travelFilter !== 5) {
        var filter = []
      } else {
        var filter = [...this.state.travelFilter]
      }

    } else if (filterType === "languageFilter") {
      if (this.state.languageFilter !== 8) {
        var filter = []
      } else {
        var filter = [...this.state.languageFilter]
      }

    } else {
      console.log('Error with filterType input:', filterType)
    }

    if (toggle) {
      filter.push(filterElement);
    } else {
      var index = filter.indexOf(filterElement)
      filter.splice(index, 1)
    }

    let obj = {}
    obj[filterType] = filter
    this.setState(obj);
    this.fetchReviews()
  }


  fetchReviews() {
    var lang = this.state.languageFilter.join(" ")
    var rating = this.state.ratingFilter.join(" ")
    var travel = this.state.travelFilter.join(" ")
    var season = this.state.seasonFilter.join(" ")

    axios.get(`/api/listings${window.location.pathname}reviews/${lang}/${travel}/${rating}/${season}`)
      .then(({data}) => {
        this.setState({
          reviews: data
        })
        return data;
      })
      .then((data) => {
        var count = 0;
        for (let i = 0; i < data.length; i++) {
          count++
        }
        this.setState ({
          reviewCount: count
        })
        return data
      })
      .then(() => {
        this.fetchInitialReviews()
      })
  }




//overall counts
  filterParams() {
    axios.get(`/api/listings${window.location.pathname}reviews`)
    .then(({data}) => {
      var ratings = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0};
      for (let i = 0; i < data.length; i++) {
        for (var key in ratings) {
          if (data[i].rating === parseInt(key)) {
            ratings[key]++;
          }
        }
      }
      this.setState ({
        ratings: ratings
      })
      return data;
    })
    .then((data) => {
      var travelTypes = {families:0, couples:0, solo:0, business:0, friends:0};
      for (let i = 0; i < data.length; i++) {
        for (var key in travelTypes) {
          if (data[i].travel_type === key) {
            travelTypes[key]++;
          }
        }
      }
      this.setState ({
        travelTypes: travelTypes
      })
      return data;
    })
    .then((data) => {
      var seasons = {'Mar-May':0, 'Jun-Aug':0, 'Sep-Nov':0, 'Dec-Feb':0};
      for (let i = 0; i < data.length; i++) {
        for (var key in seasons) {
          if (data[i].season === key) {
            seasons[key]++;
          }
        }
      }
      this.setState ({
        seasons: seasons
      })
      return data;
    })
    .then((data) => {
      var languages = {'Russian':0, 'English':0, 'German':0, 'Chinese':0, 'French':0, 'Spanish':0, 'Italian':0, 'Polish':0, 'Swedish':0, 'Arabic':0, 'Japanese':0,'Hindi':0, 'Bengali':0, 'Indonesian':0, 'Turkish':0};
      for (let i = 0; i < data.length; i++) {
        for (var key in languages) {
          if (data[i].language === key) {
            languages[key]++;
          }
        }
      }
      this.setState ({
        languages: languages
      })
    })
    .then(() => {
      var summary = [];
      summary.push(this.state.ratings, this.state.languages, this.state.travelTypes, this.state.seasons)
      console.log('summary', summary)
      this.setState ({
        summary: summary
      })
    })
    .then(() => {
      console.log('all states have been set')
      this.setState ({
        loaded: true
      })
    })
  }

  searchFilter(searchWord) {
    console.log('i am search filter in app', searchWord)
  }
  filterWords(searchWord) {
    console.log('i am search filter in app', searchWord)
  }

  filter(language, travel, rating, season) {
    let obj = {}
    obj[filterType] = filter
    this.setState(obj)
    this.setState({

    })
    fetchReviews()
  }


  fetchInitialReviews() {
    var copyReviews = [...this.state.reviews]
    var firstPage = copyReviews.slice(0, 6)
    this.setState ({
      currentReviews: firstPage
    })
  }


  render() {
    return (
      <div className = 'main'>
      <div className='app'> {
        this.state.loaded &&
        <div>
        <div className='tabs'>
          <Tab className='reviewTab' reviewCount = {this.state.reviewCount}/>
          <div className='secondaryTab'>
            <div className='tab'>
             <div className = 'head28'><i class="far fa-comment-alt"></i></div>
             <div className = 'head18'> 7 </div>
              <div className = 'tabTitle'>Q&amp;A</div>
              </div>
          </div>
        </div>
        <div className = 'reviewFilter'>
        <WriteReview />
        <Filters summary = {this.state.summary} handleChange = {this.handleChange}/>
        <Mentions mentions = {this.state.mentions} filterWords = {this.filterWords}/>
        </div>
        <Search searchFilter = {this.searchFilter}/>
        <Feed currentReviews = {this.state.currentReviews}/>
        <PageIndex />
        </div>
        }

      </div>
      </div>
    );
  }
}

export default App;