import React, { Component } from 'react';
import Matches from './components/Matches/matches';
import Header from './components/Header/header';

import './static/css/sade.css';
import './static/css/next-fc-mex.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Matches/>
      </div>
    );
  }
}

export default App;
