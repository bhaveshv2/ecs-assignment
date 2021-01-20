import React, { Component } from 'react';
import { BooksList } from './index';

class Home extends Component {
  render() {
    const {books} = this.props;
    return (
      <div className="home-container">
          <BooksList books={books}/>
      </div>
    )
  }
}

export default Home;
