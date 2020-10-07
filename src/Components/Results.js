import React from 'react';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function Results(props) {
	const scrollToButton = () => {
		scroller.scrollTo("timeline", {
			duration: 1000,
			delay: 0,
			smooth: "easeInOutQuart",
		});
	};

	console.log(props.validEntry);
	return (
		<section className="results" name="results">
			<p>Choose a GIF that best suits your current emotion.</p>
			<div className="wrapper">
				<ul className="resultsList">
					{props.arrSlice.map((obj, index) => {
						return (
							<li key={index} className="card">
								<div className="overlay">+</div>
								<img src={obj.url} alt={obj.title} onClick={(e) => {
									props.onSelect(e)
									scrollToButton()}} />
							</li>
						);
					})}
				</ul>
			</div>
			<div className="regenerateContents">
				<p>Don't like what you see?</p>
				<button onClick={props.handleClick}>Regenerate</button>
			</div>
		</section>
	);
}

export default Results;
