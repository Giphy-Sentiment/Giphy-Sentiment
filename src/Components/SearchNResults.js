import React from 'react';
import axios from 'axios';
import Results from './Results';

class SearchNResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: '', 
      submitInput: '', 
      gifsArray: [], 
      offset: 0, 
      gifsUrlArr: [],
      toSlice: [],
    };
  }
  getGif = async (userInput) => {
    const key = 'e6I6PjSAevodOVfP9kWE6ivjPXnDObA6';
    const searchPhrase = userInput;
    const limit = '25';

    axios
        .get(
            `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchPhrase}&limit=${limit}`
        )
        .then((res) => {
            const gifsArr = res.data.data;
            this.setState({
              gifsArray: gifsArr,
            });

            const gifsUrlArr = [];

             gifsArr.forEach((gifObj) => {
              gifsUrlArr.push(gifObj.images.fixed_height.url);
            });
          
            this.setState({
              gifsUrlArr
            })
            
            const toSlice = gifsUrlArr.slice(0, 5);

            this.setState({
              toSlice
            })
        });
};

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const input = this.state.value;
    this.getGif(input);    
    this.setState({ submitInput: input });
  }

  handleRegenerate(e) {
    e.preventDefault();
    let thing = this.state.offset + 5
    const arrSlice = this.state.gifsUrlArr.slice(thing, 5 + thing);
    this.setState({ 
      offset: thing, 
      toSlice: arrSlice 
    });
  }

  render() {
    return (
    <>
      <form onSubmit= {(e) => this.handleSubmit(e)}>
        <label htmlFor="searchterm"><p>Search Gallery:</p></label>
        
          <input type="text" name="searchterm" id="searchterm" value={this.state.value} onChange={(e) => this.handleChange(e)} required />
          <button type="submit">Submit!</button>
        
      </form>
        <button onClick={(e) => this.handleRegenerate(e)} >Regenerate</button>

        <Results arrSlice={this.state.toSlice} offset={this.state.offset} />
    </>

    );
  }
}
export default SearchNResults;