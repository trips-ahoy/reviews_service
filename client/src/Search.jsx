import React from 'react';

class Search extends React.Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.props.searchFilter(event.target.value)
    console.log('search value' , event.target.value)
  }


  render() {
    return (
      <div className='container-search'>
      <i  class="fas fa-search"></i>
      <input type="text" onChange={this.handleChange} placeholder="Search reviews"/>
      </div>
    );
  }
}

export default Search;