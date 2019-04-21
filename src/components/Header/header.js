import React, { Component } from 'react';


class Header extends Component {
  state = {
    imagesEndpoint: 'http://mirantrix.com/nextfc/fmf/images/'
   };

  render() {
    return (
      <div>
        <section id = 'profile' className = 'container column align-center countdown-shadow'>
          <figure className = 'profile-pic'>
            <img className = 'profile-icon' src={`${this.state.imagesEndpoint}fmf-logo.png`} alt=''/>
          </figure>
          <div id = 'profile-user' className='column align-center'>
            <h1 className = 'profile-title'>Selección de México</h1>
            <div className = 'row'>
              <p className = 'profile-subtitle'>#próximosPartidos</p>
              <div className = "profile-emojis">
                <span role='img' aria-label=''>&#128525;</span>
                <span role='img' aria-label=''>&#128170;</span>
                <span role='img' aria-label=''>&#9917;</span>
              </div>
            </div>
          </div>
          <ul id = 'upComming-match'></ul>
        </section>
      </div>
    );
  }
}

export default Header;
