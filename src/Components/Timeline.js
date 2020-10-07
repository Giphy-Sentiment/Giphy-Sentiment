import React, { Component } from 'react';
import firebase from '../firebase';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Timeline extends Component {
	constructor() {
		super();
		this.state = {
			firebaseData: [],
		};
	}

	// Retreiving live data from Firebase to display gifs mood timeline
	componentDidMount() {
		const dbRef = firebase.database().ref();
		dbRef.on('value', async (res) => {
			const newState = [];
			const data = res.val();
			for (let key in data) {
				newState.push({ key: key, gifObj: data[key] });
			}
			await this.setState({
				firebaseData: newState,
			});
		});
	}

	removePost = (postKey) => {
		const dbRef = firebase.database().ref();
		dbRef.child(postKey).remove();
	}

	render() {
		// [{key: 'dafjo2ji32o3j', gifObj:{url, word, date, alt}}, {}, {}]
		// console.log(this.state.firebaseData);
		// Reversing array of {url, word, alt, date} obj so that timeline-
		// displays gifs from latest to oldest
		const fbDataArr = this.state.firebaseData.slice(0).reverse();
		return (
			<section className="timeline" name="timeline">
				<div className="wrapper">
					<h2>2020 Feels</h2>
					<ul>
						{fbDataArr.map((obj, index) => {
							return (
								// Timeline component
								<div className="timelineWrap">
									<VerticalTimeline>
										<li key={obj.key}>
											<VerticalTimelineElement
												className="vertical-timeline-element--work"
												position={index % 2 === 0 ? 'left' : 'right'}
												// position="right"
												date={obj.gifObj.date}
												iconStyle={{
													background: 'rgb(33, 150, 243)',
													color: '#fff',
												}}
											>
												<h3 className="vertical-timeline-element-title">
													{obj.gifObj.word}
												</h3>
												<img src={obj.gifObj.url} alt={obj.gifObj.alt} />	
												<button onClick={() => { this.removePost(obj.key) }}>x</button>
											</VerticalTimelineElement>
										</li>
									</VerticalTimeline>
								</div>
							);
						})}
					</ul>
				</div>	
			</section>
		);
	}
}

export default Timeline;
