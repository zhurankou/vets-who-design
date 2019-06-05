import React from 'react';
import { Link } from 'react-router-dom';

import logo from './logo-olive.svg';

const Header = () =>
  <div className='container'>
    <div className='menu'>
      <div className='logo-moto'>
        <Link
          to='/'>
          <img src={logo} className='logo' alt="vets who design logo" />
        </Link>
        <span className='moto'><i>Mission_Final</i></span>
      </div>
      <div className='menu-links'>
        <Link to='/about'>About</Link>
        <Link to='/stories'>Stories</Link>
        <a href='https://airtable.com/shrrLfheMQ9CEJP7V' target='_blank' rel="noopener noreferrer">Nominate</a>
        <a href='https://join.slack.com/t/vetswhodesign/shared_invite/enQtNjIzNjgxNzU5ODg4LWI0MDg4ZjVlNTgwYzVmMDE4NTIyYTE1YWNjNTMyODgzZmZjNWZhZjExZjljMzE2ZDgyNjYxYjRmYjAxYThhYjU' target='_blank' rel="noopener noreferrer">Slack</a>
      </div>
    </div>
  </div>

export default Header;
