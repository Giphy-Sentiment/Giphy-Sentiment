import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import firebase from './firebase';
import swal from 'sweetalert';
import SearchBar from './Components/SearchBar';
import Results from './Components/Results';
import Timeline from './Components/Timeline';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './styles/App.css';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			submitInput: '',
			gifsArray: [],
			offset: 0,
			gifsUrlArr: [],
			toSlice: [],
			validate: true,
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
				if (gifsUrlArr.length === 0) {
					swal("No GIFs found.", "Please try again!", "error");
				}
				else {
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
				}
			});
	};
	handleChange(e) {
		const targetValue = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
		this.setState({ value: targetValue });
	}
	handleSubmit(e) {
		e.preventDefault();
		this.setState({toSlice: []});
		const reg = /^\s*([a-zA-Z]+\s*){1,2}$/
		if (reg.test(this.state.value))
			{
				const input = this.state.value
				this.getGif(input);
				this.setState({ submitInput: input, validate: true })
				
			}
			else {
				swal("Please only enter", "ONE or TWO words.", "info")
				this.setState({ validate: false })
			}
	}
	handleRegenerate(e) {
		e.preventDefault();
		let offsetNum = this.state.offset + 5;
		if (offsetNum >= this.state.gifsUrlArr.length) {
			swal("There are no more GIFs.", "Please search a new word!", "warning")
		}
		else {
			const arrSlice = this.state.gifsUrlArr.slice(offsetNum, 5 + offsetNum);
			this.setState({
				offset: offsetNum,
				toSlice: arrSlice,
			});
		}
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
			<div className="App">
				<Header />
				<SearchBar
					value={this.state.value}
					arrSlice={this.state.toSlice}
					offset={this.state.offset}
					handleSubmit={(e) => this.handleSubmit(e)}
					handleChange={(e) => this.handleChange(e)}
					validEntry={this.state.validate ? "results" : "searchbar"}
				/>

				<Results
					arrSlice={this.state.toSlice}
					offset={this.state.offset}
					onSelect={(e) => this.handleSelection(e)}
					handleClick={(e) => this.handleRegenerate(e)}
				/>
				<Timeline />
				<Footer />
			</div>
		);
	}
}
export default App;