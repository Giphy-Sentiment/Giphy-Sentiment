import React from 'react';
import {Link, animateScroll as Scroll} from 'react-scroll';

function Header() {
  return (
    <header>
      <div className="wrapper">
        <h1>Giphy Sentiment</h1>
        <p>Turning your emotions into GIFs</p>
        
        <Link activeClass="active" to="searchbar" spy={true} smooth={true} duration={500}>
          <button>Get Started</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;