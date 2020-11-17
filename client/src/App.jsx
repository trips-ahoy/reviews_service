import React from 'react';
import Tab from './Tab.jsx';
import WriteReview from './WriteReview.jsx';
import Filters from './Filters/Filters.jsx';
import Search from './Search.jsx';
import Feed from './Feed/Feed.jsx';
import PageIndex from './PageIndex.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Tab />
        <WriteReview />
        <Filters />
        <Mentions />
        <Search />
        <Feed />
        <PageIndex />
      </div>
    );
  }
}

export default App;