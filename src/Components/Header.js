import React from 'react';
// import {Link, animateScroll as Scroll} from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Header() {

  const scrollToTimeline = () => {
    scroller.scrollTo("timeline", {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }  

  return (
    <header>
      <div className="wrapper">
        <a onClick={scrollToTimeline}>Go to timeline!</a>
        <div className="headerContents">
          <h1>Giphy Sentiment</h1>
          <p>Turning your emotions into GIFs</p>
          <div className="logo">
            <div className="line">
              <div className="triangleLeft"></div>
              <div className="triangleRight"></div>
              <span className="fas fa-smile-beam"></span>
            </div>
          </div>
        </div>  
        
        <Link activeClass="active" to="searchbar" spy={true} smooth={true} duration={1000}>
          <button>Get Started</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;