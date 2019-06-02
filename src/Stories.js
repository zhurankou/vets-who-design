import React, { Component } from 'react';

import Header from './Header';
import Article from './Article';
import Footer from './Footer';

const MEDIUM_FEED = process.env.REACT_APP_M_API_KEY;

class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch(MEDIUM_FEED)
    .then((resp) => resp.json())
    .then(data => {
      this.setState({ posts: data.items });
    }).catch(err => {
      // Error
    });
  }

  render() {
    console.log(this.state.posts);
    return (
      <div className='container'>
        <Header/>
        <div className='content'>
          <div className='copy'>
          <h1>Stories</h1>
          <p>Every transition story is different ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className='feed'>
            {this.state.posts.map((article, index) => <Article {...article} key={index}/> )}
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
export default Stories
