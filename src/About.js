import React from 'react';

import Header from './Header';
import Footer from './Footer';

const About = () =>
  <div className='container'>
    <Header/>
    <div className='content'>
      <div className='copy'>
        <h1>About</h1>
        <p>Vets Who Design is a directory of veterans who have successfully transitioned from military service to a career in the design industry.</p>
        <p>The main mission of the project is to support veterans with their transition to the civilian world by providing career guidance, inspiration, networking, and mentoring opportunities.</p>
        <p>We also believe in workplace diversity and inclusiveness, thus this directory is a great resource for companies to discover veteran candidates.</p>
        <h2>Inspiration</h2>
        <p><a href='https://womenwho.design' target='_blank' rel="noopener noreferrer">Women Who Design</a> (Accomplished women in design industry.) <br/> <a href='https://blackswho.design' target='_blank' rel="noopener noreferrer">Blacks Who Design</a> (Inspiring Blacks in design industry.) <br/>
        <a href='https://www.latinxswhodesign.com' target='_blank' rel="noopener noreferrer">Latinxs Who Design</a> (Thriving Latinxs in design industry.) <br/>
        <a href='https://t.co/ofPJSccSDf' target='_blank' rel="noopener noreferrer">LGBTQ Plus Who Design</a> (Inspiring LGBTQIA+ voices in the creative & design industry.)</p>
        <h2>Opt-out</h2>
        <p>If your profile has been added to the directory and you would like to opt out or edit the information, please send us an email to <a href='mailto:salute@vetswho.design'>salute@vetswho.design</a>.</p>
        <h2>Join us</h2>
        <p>Join our <a href='https://join.slack.com/t/vetswhodesign/shared_invite/enQtNjIzNjgxNzU5ODg4LWI0MDg4ZjVlNTgwYzVmMDE4NTIyYTE1YWNjNTMyODgzZmZjNWZhZjExZjljMzE2ZDgyNjYxYjRmYjAxYThhYjU' target='_blank' rel="noopener noreferrer">Slack Channel</a>, read about our transition stories on <a href='https://medium.com/vets-who-design' target='_blank' rel="noopener noreferrer">Vets Who Design</a> Medium publication,  and follow <a href='https://twitter.com/zhurankou' target='_blank' rel="noopener noreferrer">@VetsWhoDesign</a> on Twitter.</p>
      </div>
    </div>
    <Footer/>
  </div>

export default About;
