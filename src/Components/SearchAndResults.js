import React from 'react';
import axios from 'axios';
import moment from 'moment';
import firebase from '../firebase';
import SearchBar from './SearchBar';
import Results from './Results';

class SearchAndResults extends React.Component {
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

	// Method for API call when user submits a mood query
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

				// Creating an array of objects
				// Each obj contains k/v pair of url & title (for alt attribute)
				gifsArr.forEach((gifObj) => {
					gifsUrlArr.push({
						url: gifObj.images.fixed_height.url,
						title: gifObj.title,
					});
				});

				// Storing array of {url, title} objects in state
				this.setState({
					gifsUrlArr,
				});

				// Creating an array of the first 5 {url, title} obj
				const toSlice = gifsUrlArr.slice(0, 5);

				// Storing array of 5 {url, title} obj to state
				// This will then be passed as props to Results comp for display
				this.setState({
					toSlice,
				});
			});
	};

	handleChange(e) {
		this.setState({ value: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		const input = this.state.value;
		this.getGif(input);
		this.setState({ submitInput: input });
	}

	handleRegenerate(e) {
		e.preventDefault();
		let thing = this.state.offset + 5;
		const arrSlice = this.state.gifsUrlArr.slice(thing, 5 + thing);
		this.setState({
			offset: thing,
			toSlice: arrSlice,
		});
	}

	// Creating a handle that extracts all data of gif user selects-
	// and stores to Firebase with each gif being represented as an-
	// obj of {url, word, date, alt} (word being the mood query user entered)
	handleSelection(e) {
		const url = e.target.src;
		const alt = e.target.alt;
		const word = this.state.submitInput;
		const date = moment().format('LL');
		const dbRef = firebase.database().ref();
		dbRef.push({ url: url, word: word, date: date, alt: alt });
	}

	render() {
		return (
			<>
				<SearchBar
					value={this.state.value}
					arrSlice={this.state.toSlice}
					offset={this.state.offset}
					handleSubmit={(e) => this.handleSubmit(e)}
					handleChange={(e) => this.handleChange(e)}
				/>

				<Results
					arrSlice={this.state.toSlice}
					offset={this.state.offset}
					onSelect={(e) => this.handleSelection(e)}
					handleClick={(e) => this.handleRegenerate(e)}
				/>
			</>
		);
	}
}
export default SearchAndResults;