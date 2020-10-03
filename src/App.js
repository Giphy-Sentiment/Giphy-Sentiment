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
