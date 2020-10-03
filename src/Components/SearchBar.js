import React from 'react';
import axios from 'axios';


class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { value: '', submitInput: '', gifsArray: [] };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
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
            console.log(res);
            const gifsArr = res.data.data;
            let gifsUrlArr = [];
            // console.log(res);
            gifsArr.forEach((gifObj) => {
                gifsUrlArr.push(gifObj.images.fixed_height.url);
            });
            this.setState({
                gifsArray: gifsUrlArr,
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
  render() {
    // console.log('this.state.gifs');
    return (
    <>
      <form onSubmit= {(e) => this.handleSubmit(e)}>
        <label htmlFor="searchterm"><p>Search Gallery:</p></label>
        
          <input type="text" name="searchterm" id="searchterm" value={this.state.value} onChange={(e) => this.handleChange(e)} required />
          <button type="submit" >Submit!</button>
          {/* <input type="submit" className="fas fa-search" aria-label="search" value="&#xf002;" /> */}
    
      </form>
      
      <div>
      {this.state.gifsArray.map((url, index) => {
          return <img src={url} key={index} />;
      })}
    </div>
    </>
    );
  }
}
export default SearchBar;


// if (this.props.onSubmit && typeof this.props.onSubmit === "function")