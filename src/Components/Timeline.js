import React, {Component} from 'react';
import firebase from '../firebase';
 
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
    return (
      <div className='timeline'>
        {this.state.firebaseData.map((gifObj) => {
          return (
            <div>
              <time>{gifObj.date}</time>
              <h2>{gifObj.word}</h2>
              <img src={gifObj.url} alt="" />
            </div>
          );
        })}
      </div>
    );
  }
} 


export default Timeline;