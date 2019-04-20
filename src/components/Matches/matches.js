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
      .then(matches => this.setState({ matches, upComingMatch : matches[0] }, () => console.log(matches)))
      .catch( error => console.log(error.response));
  }

  render() {
    return (
      <div>
        <section id = "profile" className = "container column align-center">
          <figure className = "profile-pic">
            <img className = "profile-icon" src="images/fmf-logo.png" alt=""/>
          </figure>
          <div id = "profile-user" className="column align-center">
            <h1 className = "profile-title">Selección Mexicana</h1>
            <p className = "profile-subtitle">#siSePuede</p>
          </div>
          <ul id = 'upComming-match'></ul>
        </section>
        {/*
        <section id="countdown" className="">
      		<div id="countdown-clock" className="row justify-center align-center">
      			<div className="falta-container">
      				<p className="faltan">Starts In:
      				</p>
      			</div>
      			<div className="timer-blocks">
      				<p id="days" ref='days' className="time-value"></p>
              <p className="time-indicator">DAYS</p>
      				</div>
      				<div className="timer-blocks">
      					<p className="time-symbol">.</p>
      				</div>
      				<div className="timer-blocks">
      					<p id="hours" className="time-value"></p>
      					<p className="time-indicator">HRS</p>
      				</div><div className="timer-blocks">
      					<p className="time-symbol">:</p>
      				</div>
      				<div className="timer-blocks">
      					<p id="minutes" className="time-value"></p>
      					<p className="time-indicator">MIN</p>
      				</div>
      				<div className="timer-blocks">
      					<p className="time-symbol">:</p>
      				</div>
      				<div className="timer-blocks">
      					<p id="seconds" className="time-value"></p>
      					<p className="time-indicator">SEC</p>
      				</div>
      			</div>
      	</section>
        */}
        <section>
          <ul>
            { this.state.matches.map( match => (
            <li key={ match._id }>
              <div className="match">
                <div className="match-card">
                  <div className="match-date">
                    <p className="month">{ Dates.matchDateConvertion(match.matchDate).month }</p>
                    <p className="date">{ Dates.matchDateConvertion(match.matchDate).date }</p>
                    <p className="time">{match.tournament}</p>
                  </div>
                  <div className="match-teams">
                    <ul>
                      <li className="local team-status">
                        <figure>
                          <img className="team-icon" alt= "" src= {`images/${ match.local.icon }.png`}/>
                        </figure>
                        <h3>{ match.local.abbreviation }</h3>
                      </li>
                      <li className="versus">VS</li>
                      <li className="visiting team-status">
                        <figure>
                          <img className="team-icon" alt= "" src= {`images/${ match.visiting.icon }.png`}/>
                        </figure>
                        <h3>{ match.visiting.abbreviation }</h3>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="complementary-info">
                  <p className="tournament">{ Dates.matchDateConvertion(match.matchDate).gameTime }</p>
                  <p className="city">{match.city}</p>
                </div>
              </div>
            </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}


export default Matches;
