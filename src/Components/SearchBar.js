import React from 'react'
import Results from "./Results";

export default function SearchBar(props) {
  return (
    <section>
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
        <button type="submit">Submit!</button>
      </form>
    </section>
  );
}
