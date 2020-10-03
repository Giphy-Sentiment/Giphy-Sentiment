import React from 'react';
import axios from 'axios';
import Results from './Results';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', submitInput: '', gifsArray: [], offset: 0, toSlice: []};

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    console.log(`line 13`, props);
  }
  getGif = async (userInput, ) => {
    const key = 'e6I6PjSAevodOVfP9kWE6ivjPXnDObA6';
    const searchPhrase = userInput;
    const limit = '25';

    axios
        .get(
            `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchPhrase}&limit=${limit}`
        )
        .then((res) => {
            console.log(res);
            const gifsArr = res.data.data;
            let gifsUrlArr = [];
            // console.log(res);
            gifsArr.forEach((gifObj) => {
                gifsUrlArr.push(gifObj.images.fixed_height.url);
            });
            const toSlice = this.state.gifsArray.slice(0, 5);
            
            this.setState({
                gifsArray: gifsUrlArr, 
                toSlice
            });
            // console.log(gifsUrlArr);

        });
};

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log('did it');
    event.preventDefault();
        const input = this.state.value;
        // this set state isnt working, check later if time
        // this.setState({ submitInput: input });
        console.log(input);
        this.getGif(input);    
  }

  handleRegenerate(e) {
    e.preventDefault();
    console.log(this.state.offset);
    let thing = this.state.offset + 1

    const arrSlice = this.state.gifsArray.slice(thing, 5);
    
    this.setState({ offset: thing, toSlice: arrSlice });
  }

  render() {
    // console.log('this.state.gifs');
    return (
    <>
      <form onSubmit= {(e) => this.handleSubmit(e)}>
        <label htmlFor="searchterm"><p>Search Gallery:</p></label>
        
          <input type="text" name="searchterm" id="searchterm" value={this.state.value} onChange={(e) => this.handleChange(e)} required />
          <button type="submit" >Submit!</button>
          {/* <input type="submit" className="fas fa-search" aria-label="search" value="&#xf002;" /> */}
        
        <button onClick={(e) => this.handleRegenerate(e)} >Regenerate</button>
      </form>

        <Results arrSlice={this.state.toSlice} offset={this.state.offset} />
    </>

    );
  }
}
export default SearchBar;


// if (this.props.onSubmit && typeof this.props.onSubmit === "function")