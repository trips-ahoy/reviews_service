import React from 'react';
import RatingButton from  './RatingButton.jsx';

class Rating extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      excellent: '0%',
      veryGood: '0%',
      average: '0%',
      poor: '0%',
      terrible: '0%'
    }

    this.createGraphs = this.createGraphs.bind(this);

  }

  componentDidMount() {
    this.createGraphs();
  }



  createGraphs() {
    var ratings = this.props.summary[0]
    var percentages = [];
    for (var key in ratings) {
      var percent  = ratings[key]
      var str = percent.toString()+'%'
      percentages.push(str)
    }
    this.setState ({
      excellent: percentages[4],
      veryGood: percentages[3],
      average: percentages[2],
      poor: percentages[1],
      terrible: percentages[0]
    })
  }


  render() {
    return (
      <div>
        <div className= 'bold'>Travel Rating</div>

          <div className= 'rating'>
          <RatingButton rating = {this.props.summary[0][4]} handleChange = {this.props.handleChange} ratingType = {4}/>
          <div className='ratingText'> Excellent</div>

            <div class="container">
            <div class="percent" style={{ 'width': this.state.excellent }}>
            </div>
            </div>
            {this.props.summary[0][4]}
          </div>

          <div className= 'rating'>
          <RatingButton rating = {this.props.summary[0][3]} handleChange = {this.props.handleChange} ratingType = {3}/>

          <div className='ratingText'> Very Good </div>

            <div class="container">
            <div class="percent" style={{ 'width': this.state.veryGood }}>
            </div>
            </div>
            {this.props.summary[0][3]}
          </div>

          <div className= 'rating'>
          <RatingButton rating = {this.props.summary[0][2]} handleChange = {this.props.handleChange} ratingType = {2}/>

          <div className='ratingText'> Average </div>
            <div class="container">
            <div class="percent" style={{ 'width': this.state.average}}>
            </div>
            </div>
            {this.props.summary[0][2]}
          </div>

          <div className= 'rating'>
          <RatingButton rating = {this.props.summary[0][1]} handleChange = {this.props.handleChange} ratingType = {1}/>

          <div className='ratingText'> Poor </div>
            <div class="container">
            <div class="percent" style={{ 'width': this.state.poor }}>
            </div>
            </div>
            {this.props.summary[0][1]}
          </div>

          <div className= 'rating'>
          <RatingButton rating = {this.props.summary[0][0]} handleChange = {this.props.handleChange} ratingType = {0}/>

           <div className='ratingText'> Terrible </div>

            <div class="container">
            <div class="percent" style={{ 'width': this.state.terrible }}>
            </div>
            </div>
            {this.props.summary[0][0]}
          </div>

      </div>
    );
  }
}

export default Rating;