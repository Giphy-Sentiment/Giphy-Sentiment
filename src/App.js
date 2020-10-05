import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import SearchAndResults from "./Components/SearchAndResults";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Timeline from './Components/Timeline';
import './App.css';

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
      <Router>
        <div className="App">
          {/* header */}
          <Header />
          {/* search bar and results */}
          <Route path="/results" component={SearchAndResults} />
          {/* timeline */}
          <Timeline />
          {/* footer */}
          <Footer />
        </div>
      </Router>
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
