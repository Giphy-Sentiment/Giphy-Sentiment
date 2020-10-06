import React from 'react';

function Results(props) {
	return (
		<section>
			<ul className="resultsList">
				{props.arrSlice.map((obj, index) => {
					return (
						<li key={index} className="card">
							<img src={obj.url} alt={obj.title} onClick={props.onSelect} />
						</li>
					);
				})}
			</ul>

			<button onClick={props.handleClick}>Regenerate</button>
		</section>
	);
}

export default Results;
