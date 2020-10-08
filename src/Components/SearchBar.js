import React from 'react';
import {Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';

export default function SearchBar(props) {
  const scrollToButton = () => {
    scroller.scrollTo(props.validEntry, {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <section className="searchbar" id="searchbar">
      <div className="wrapper">
        <form onSubmit={props.handleSubmit}>
          <label htmlFor="searchterm">
            <p>Describe how you are feeling today in just <span className="specialStyling">ONE</span> or <span className="specialStyling">TWO</span> words</p>
          </label>
            <input
              type="text"
              name="searchterm"
              id="searchterm"
              value={props.value}
              onChange={props.handleChange}
              required
            />
            <button onClick={scrollToButton} type="submit"><span className="fas fa-search" aria-label="search" value="&#xf002;"></span></button>
        </form>
      </div>
    </section>
  );
}
