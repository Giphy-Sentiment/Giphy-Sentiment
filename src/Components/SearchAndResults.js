import React from 'react';
import axios from 'axios';
import moment from 'moment';
import firebase from '../firebase';
import SearchBar from './SearchBar';
import Results from "./Results";


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
					gifsUrlArr,
				});

				const toSlice = gifsUrlArr.slice(0, 5);

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

	handleSelection(e) {
		const url = e.target.src;
		const word = this.state.submitInput;
		const date = moment().format('LL');
		const dbRef = firebase.database().ref();
		dbRef.push({ url: url, word: word, date: date });
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
