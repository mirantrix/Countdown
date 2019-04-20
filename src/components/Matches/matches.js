import React, { Component } from 'react';
import Api from '../../services/Api/api';
import Dates from '../../services/Dates/dates';
//import Countdown from '../../services/Countdown/countdown';

class Matches extends Component {
  state = {
    matches: [],
    upComingMatch: {}
   };

  componentDidMount() {
    Api.getMatches()
      .then(res => res.data)
      .then(matches => this.setState({ matches, upComingMatch : matches[0] }))
      .catch( error => console.log(error.response));
  }

  render() {
    return (
        <section>
          <ul>
            { this.state.matches.map( match => (
            <li key={ match._id }>
              <div className='match'>
                <div className='match-card'>
                  <div className='match-date'>
                    <p className='month'>{ Dates.matchDateConvertion(match.matchDate).month }</p>
                    <p className='date'>{ Dates.matchDateConvertion(match.matchDate).date }</p>
                    <p className='time'>{match.tournament}</p>
                  </div>
                  <div className='match-teams'>
                    <ul>
                      <li className='local team-status'>
                        <figure>
                          <img className='team-icon' alt= '' src= {`images/${ match.local.icon }.png`}/>
                        </figure>
                        <h3>{ match.local.abbreviation }</h3>
                      </li>
                      <li className='versus'>VS</li>
                      <li className='visiting team-status'>
                        <figure>
                          <img className='team-icon' alt= '' src= {`images/${ match.visiting.icon }.png`}/>
                        </figure>
                        <h3>{ match.visiting.abbreviation }</h3>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='complementary-info'>
                  <p className='tournament'>{ Dates.matchDateConvertion(match.matchDate).gameTime }</p>
                  <p className='city'>{match.city}</p>
                </div>
              </div>
            </li>
            ))}
          </ul>
        </section>
    );
  }
}


export default Matches;
