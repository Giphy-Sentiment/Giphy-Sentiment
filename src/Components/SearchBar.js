import React from 'react'
import {Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'



export default function SearchBar(props) {
  const scrollToButton = () => {
    scroller.scrollTo("results", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <section id="searchbar">
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="searchterm">
          <p>Search Gallery:</p>
        </label>

        <input
          type="text"
          name="searchterm"
          id="searchterm"
          value={props.value}
          onChange={props.handleChange}
          required
        />
        {/* <Link to='/results'> */}
        
        <button onClick={scrollToButton} type="submit" >Submit!</button>
        
        
        {/* </Link> */}
      </form>
    </section>
  );
}
