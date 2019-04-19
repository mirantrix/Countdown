import React, { Component } from 'react';
import Api from '../../services/Api/api'

class Matches extends Component {
  state = { matches: [] };

  componentDidMount() {
    Api.getMatches()
      .then(res => res.data)
      .then(matches => this.setState({ matches }, () => console.log(matches)))
      .catch( error => console.log(error.response));
  }

  render() {
    return (
      <div>
        <h2>Matches</h2>
        <ul>
          {this.state.matches.map( match => (
            <li key={match._id}>
            <p>Local: {match.local.abbreviation}</p>
            <p>vs</p>
            <p>Visiting: {match.visiting.abbreviation}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}


export default Matches;
