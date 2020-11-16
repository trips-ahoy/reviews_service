import React from 'react';

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