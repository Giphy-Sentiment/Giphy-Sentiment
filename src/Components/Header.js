import React from 'react';
import {Link, animateScroll as Scroll} from 'react-scroll';

function Header() {
  return (
    <header>
      <h1>Giphy Sentiment</h1>
      <p>Gifs and emotions and things...</p>

      
     <Link activeClass="active" to="searchbar" spy={true} smooth={true} duration={500}>
        <button>Get Started</button>
      </Link>
      
    </header>
  );
}

export default Header;