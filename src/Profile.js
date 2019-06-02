import React from 'react';
import map from './map-marker-alt-solid.svg';
import ribbon from './ribbon-solid.svg';
// import medal from './medal-solid.svg';

const Profile = ({ name, photo, linkedin, portfolio, company, position, location, branch }) => (
  <div className='profile'>
    <img src={photo} alt="veteran"/>
    <div className='profile-info'>
      <h2>{name}</h2>
      <p className='profile-position'>{position} @{company}</p>
      <p className='profile-location'><img src={map} alt="location icon"/>  {location}</p>
      <div className='profile-links'>
        <div>
          <span className='profile-link'>
            <a href={linkedin} target='_blank' rel="noopener noreferrer">LinkedIn</a>
          </span>
          <span className={portfolio ? '' : 'hidden'}>
            <span className='profile-link'>
              <a href={portfolio} target='_blank' rel="noopener noreferrer">Portfolio</a>
            </span>
          </span>
        </div>
        <span className='profile-branch'><img src={ribbon} alt="location icon"/> {branch}</span>
      </div>
    </div>
  </div>
);

export default Profile;
