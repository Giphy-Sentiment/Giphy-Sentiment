import React, {Component} from 'react';
import firebase from '../firebase'; 
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";

class Timeline extends Component {
  constructor() {
    super();
    this.state = {
      firebaseData: []
    }
  }

  componentDidMount() {
		const dbRef = firebase.database().ref();
		dbRef.on('value', (res) => {
			const newState = [];
			const data = res.val();
			for (let key in data) {
				newState.push(data[key]);
			}
			this.setState({
				firebaseData: newState,
			});
		});
  }
  
  render() {
    const fbDataArr = this.state.firebaseData.slice(0).reverse();
    return (
      <div className="timeline">
        {fbDataArr.map((gifObj, index) => {
          return (
            // Timeline component

            <VerticalTimeline>
              <ul>
                <li key={index}>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work vertical-timeline-element--left"
                    position={index % 2 === 0 ? "left" : "right"}
                    date={gifObj.date}
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  >
                  
                    <h3 className="vertical-timeline-element-title">
                      {gifObj.word}
                    </h3>
                    <img src={gifObj.url} />
                  </VerticalTimelineElement>                  
                </li>
              </ul>
            </VerticalTimeline>
          );
        })}
      </div>
    );
  }
} 


export default Timeline;