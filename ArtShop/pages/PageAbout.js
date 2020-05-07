"use strict";
import React from 'react';
import './PageAbout.css'

class PageAbout extends React.PureComponent {

  render() {

    return (
      <div className='wrapper_about'>
        <div className="img_about">
          <blockquote>
            <p> Художник — это человек, который пишет то, что можно продать. А хороший художник — это человек, который продает то, что пишет.</p>
            <footer>— <cite>Пабло Пикассо</cite></footer>
          </blockquote>
        </div>
        <div className="fon"></div>
      </div>
    );
  }
}

export default PageAbout;
