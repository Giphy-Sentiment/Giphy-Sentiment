import React from 'react';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function Results(props) {
	const scrollToButton = () => {
		scroller.scrollTo("timeline", {
			duration: 800,
			delay: 0,
			smooth: "easeInOutQuart",
		});
	};

	return (
		<section name="results">
			<div className="wrapper">
				<ul className="resultsList">
					{props.arrSlice.map((obj, index) => {
						return (
							<li key={index} className="card">
								<img src={obj.url} alt={obj.title} onClick={(e) => {
									props.onSelect(e)
									scrollToButton()}} />
							</li>
						);
					})}
				</ul>

				<button onClick={props.handleClick}>Regenerate</button>
			</div>
		</section>
	);
}

export default Results;
