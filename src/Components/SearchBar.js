import React from 'react';


class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { value: '', submitInput: '' };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    console.log('did it');
    event.preventDefault();
        const input = this.state.value;
        this.setState({ submitInput: input });
        
        
    
  }
  render() {
    return (
      <form onSubmit= {(e) => this.handleSubmit(e)}>
        <label htmlFor="searchterm"><p>Search Gallery:</p></label>
        
          <input type="text" name="searchterm" id="searchterm" value={this.state.value} onChange={(e) => this.handleChange(e)} required />
          <button type="submit" >Submit!</button>
          {/* <input type="submit" className="fas fa-search" aria-label="search" value="&#xf002;" /> */}
    
      </form>
    );
  }
}
export default SearchBar;


// if (this.props.onSubmit && typeof this.props.onSubmit === "function")