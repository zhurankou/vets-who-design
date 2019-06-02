import React from 'react';
import Moment from 'react-moment';

const Article = ({ author, title, pubDate, thumbnail, link }) => (
  <div className='article'>
    <img src={thumbnail} alt="" />
    <div className='article-info'>
      <h3>{title}</h3>
      <div className='article-meta'>
        <div className='article-author-date'>
          <p className=''>By {author}</p>
          <p className='article-date'><Moment fromNow>{pubDate}</Moment></p>
        </div>
        <div className='article-links'>
          <span className='article-link'>
            <a href={link} target='_blank' rel="noopener noreferrer">Read on Medium</a>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Article;
