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
      renderedReviews: [],
      reviewCount: 0,
      ratings: {},
      travelTypes: {},
      seasons: {},
      languages: {},
      summary: [],
      loaded: false,
      mentions: ['fumaroles','ascent', 'steaming', 'path', 'meters', 'snow' ]

    }

    this.fetchReviews = this.fetchReviews.bind(this)
    this.filterParams = this.filterParams.bind(this)
    this.searchFilter = this.searchFilter.bind(this)
    this.filterWords = this.filterWords.bind(this)

    this.filterLang = this.filterLang.bind(this)
    this.filterSeason = this.filterSeason.bind(this)
    this.filterTravel = this.filterTravel.bind(this)
    this.filterRating = this.filterRating.bind(this)
  }

  componentDidMount() {
    this.fetchReviews();
    this.filterParams();

    console.log('window.location.pathname', window.location.pathname)
  }

  fetchReviews() {
    axios.get('/reviews')
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
      })
  }

//create filter objects
  filterParams() {
    axios.get('/reviews')
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
      console.log('inside filterParams', this.state.ratings)
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
      console.log('travel types', this.state.travelTypes)
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

  filterWords(words) {
    console.log('i am filter mentions in app', words)
  }

  filterRating(ratings) {
    console.log('i am filter rating in app', rating)
  }

  filterTravel(types) {
    console.log('i am filter travel in app', types)
  }

  filterSeason(seasons) {
    var reviews = [...this.state.reviews]
    var filtered = [];
    for (var i = 0; i < reviews.length; i++) {
      for (var j = 0; j < seasons.length; j++) {
        if (reviews[i].season === seasons[j]) {
          filtered.push(reviews[i])
        }
      }
    }

    this.setState({
      renderedReviews: filtered
    })

    console.log('i am filter season in app', seasons)
  }

  filterLang(languages) {
    // var reviews = [...this.state.reviews]
    // var filtered = [];
    // for (var i = 0; i < reviews.length; i++) {
    //   for (var j = 0; j < languages.length; j++) {
    //     if (reviews[i].language === languages[j]) {
    //       filtered.push(reviews[i])
    //     }
    //   }
    // }

    // this.setState({
    //   renderedReviews: filtered
    // })

    // console.log('i am filter language in app', languages)
  }

  render() {
    return (
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
        <Filters summary = {this.state.summary} filterLang = {this.filterLang} filterTravel = {this.filterTravel} filterSeason = {this.filterSeason} filterRating = {this.filterRating}/>
        <Mentions mentions = {this.state.mentions} filterWords = {this.filterWords}/>
        </div>
        <Search searchFilter = {this.searchFilter}/>
        <Feed reviews = {this.state.reviews}/>
        <PageIndex />
        </div>
        }

      </div>
    );
  }
}

export default App;