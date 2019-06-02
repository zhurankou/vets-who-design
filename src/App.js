import React, { Component } from 'react';

import Header from './Header';
import Profile from './Profile';
import Footer from './Footer';

import './App.css';

const AT_KEY = process.env.REACT_APP_AT_API_KEY;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      positions: [],
      filter: 'filter'
    };
  }

  componentDidMount() {
    fetch(AT_KEY)
    .then((resp) => resp.json())
    .then(data => {
      console.log(data);
      this.setState({ profiles: data.records });
    }).catch(err => {
      // Error
    });
  }

  positionFilter(position) {
    this.setState({
      positions: this.state.profiles.filter((profile) => profile.fields.position === position)
    });
  }

  render() {
    let displayProfiles = [];
    if (this.state.positions.length === 0) {
      displayProfiles = this.state.profiles
    } else {
      displayProfiles = this.state.positions
    };

    return (
      <div className='container'>
        <Header/>
        <div className='filters'>
          <div className={this.state.filter}>
            <span
              onClick={() => this.positionFilter('All')}
              >All</span>
          </div>
          <div className={this.state.filter}>
            <span
              onClick={() => this.positionFilter('Design Student')}
              >Design Student</span>
          </div>
          <div className={this.state.filter}>
            <span
              onClick={() => this.positionFilter('Design Intern')}
              >Design Intern</span>
          </div>
          <div className={this.state.filter}>
            <span
              onClick={() => this.positionFilter('Visual Designer')}
              >Visual Designer</span>
          </div>
          <div className={this.state.filter}>
            <span
              onClick={() => this.positionFilter('UX/UI Designer')}
              >UX/UI Designer</span>
          </div>
          <div className={this.state.filter}>
            <span
              onClick={() => this.positionFilter('UX Researcher')}
              >UX Researcher</span>
          </div>
          <div className={this.state.filter}>
            <span
              onClick={() => this.positionFilter('Industrial Designer')}
              >Industrial Designer</span>
          </div>
          <div className={this.state.filter}>
            <span
              onClick={() => this.positionFilter('Design Technologist')}
              >Design Technologist</span>
          </div>
          <div className={this.state.filter}>
            <span
              onClick={() => this.positionFilter('3D Artist')}
              >3D Artist</span>
          </div>
          <div className={this.state.filter}>
            <span
              onClick={() => this.positionFilter('Design Instructor')}
              >Design Instructor</span>
          </div>
          <div className={this.state.filter}>
            <span
              onClick={() => this.positionFilter('Design Manager')}
              >Design Manager</span>
          </div>
          <div className={this.state.filter}>
            <span
              onClick={() => this.positionFilter('Creative Director')}
              >Creative Director</span>
          </div>
          <div className={this.state.filter}>
            <span
              onClick={() => this.positionFilter('Founder')}
              >Founder</span>
          </div>
        </div>
        <div className='profiles'>
          {displayProfiles.map((profile, index) => <Profile {...profile.fields} key={index}/> )}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
