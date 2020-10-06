import React from 'react'
import {Link, animateScroll as scroll} from 'react-scroll';




export default function SearchBar(props) {
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
        
        <button type="submit" >Submit!</button>
        
        {/* </Link> */}
      </form>
    </section>
  );
}
