import React from 'react';
import { Link } from 'react-router-dom';

import logo from './logo-olive.svg';

const Header = () =>
  <div className='container'>
    <div className='menu'>
      <Link
        to='/'
        className='logo-link'>
        <img src={logo} className='logo' alt="vets who design logo" />
      </Link>
      <div className='menu-links'>
        <Link to='/about'>About</Link>
        <Link to='/stories'>Stories</Link>
        <a href='https://airtable.com/shrWtohVYk4W7lDYp' target='_blank' rel="noopener noreferrer">Nominate</a>
        <a href='https://join.slack.com/t/vetswhodesign/shared_invite/enQtNjYwNjQ3ODEzMjcxLWUzNzRiZjU2MjFhMDk4NmI4MTY4OTdjMWQyN2ZmYTY2MWIxNjdjZTlmOTU1ZDkxZWZkYTM1ZTFkZmJmNThkZDg' target='_blank' rel="noopener noreferrer">Slack</a>
        <a href='https://teespring.com/VetsWhoDesign' target='_blank' rel="noopener noreferrer">Uniform</a>
      </div>
    </div>
  </div>

export default Header;

// <span className='moto'><i>Mission_Final</i></span>
