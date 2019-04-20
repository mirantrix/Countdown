import React, { Component } from 'react';


class Countdown extends Component {
  render() {
    return (
      <section id='countdown' className=''>
        <div id='countdown-clock' className='row justify-center align-center'>
          <div className='falta-container'>
            <p className='faltan'>Starts In:
            </p>
          </div>
          <div className='timer-blocks'>
            <p id='days' ref='days' className='time-value'></p>
            <p className='time-indicator'>DAYS</p>
            </div>
            <div className='timer-blocks'>
              <p className='time-symbol'>.</p>
            </div>
            <div className='timer-blocks'>
              <p id='hours' className='time-value'></p>
              <p className='time-indicator'>HRS</p>
            </div><div className='timer-blocks'>
              <p className='time-symbol'>:</p>
            </div>
            <div className='timer-blocks'>
              <p id='minutes' className='time-value'></p>
              <p className='time-indicator'>MIN</p>
            </div>
            <div className='timer-blocks'>
              <p className='time-symbol'>:</p>
            </div>
            <div className='timer-blocks'>
              <p id='seconds' className='time-value'></p>
              <p className='time-indicator'>SEC</p>
            </div>
          </div>
      </section>
    );
  }
}

export default Countdown;
