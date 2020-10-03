import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from './Components/SearchBar'

class App extends Component {
	constructor() {
		super();
		this.state = {
			gifs: [],
		};
	}
	componentDidMount() {
		this.getGif();
	}

	getGif = async () => {
		const key = 'e6I6PjSAevodOVfP9kWE6ivjPXnDObA6';
		const searchPhrase = 'depressed';
		const limit = '25';
		axios
			.get(
				`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchPhrase}&limit=${limit}`
			)
			.then((res) => {
				const gifsArr = res.data.data;
				let gifsUrlArr = [];
				// console.log(res);
				gifsArr.forEach((gifObj) => {
					gifsUrlArr.push(gifObj.images.fixed_height.url);
				});
				this.setState({
					gifs: gifsUrlArr,
				});
				console.log(this.state.gifs);
			});
	};
	render() {
		const gifs = this.state.gifs;
		return (
			<div className="App">
				{/* header */}
				{/* search bar */}
				<SearchBar />
				{/* results */}
				{/* timeline */}
				{/* <h1>Giphy Sentiment</h1>
				<div>
					{gifs.map((url, index) => {
						return <img src={url} key={index} />;
					})}
				</div> */}
			</div>
		);
	}
}
export default App;

// HEADER
// Parts: h1, smoothscroll btn, tagline
// SEARCH-PAGE
// Parts: h2, Form(Searchbar, submit btn), p(instructions)
// State: Array of gif objects
// RESULTS-PAGE
// Parts: h2, Results/gifs, Regenerate btn with p description
// Firebase setup (each entry will be an obj containing user selections WITH present date)
// HISTORY/TIMELINE
// Parts: h2, Component from react vertical timeline, gifs mathcing date that populate timeline
