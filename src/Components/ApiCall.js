import React from 'react';
import axios from 'axios';




function ApiCall() {
    const getGif = async () => {
		const key = 'e6I6PjSAevodOVfP9kWE6ivjPXnDObA6';
		const searchPhrase = 'depressed';
		const limit = '25';
		axios
			.get(
				`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchPhrase}&limit=${limit}`
			)
			.then((res) => {
				const gifsArr = res.data.data;
				let gifsUrlArr = [];
				// console.log(res);
				gifsArr.forEach((gifObj) => {
					gifsUrlArr.push(gifObj.images.fixed_height.url);
				});
				this.setState({
					gifs: gifsUrlArr,
				});
				console.log(this.state.gifs);
			});
	};
    return (
        <div>
            
        </div>
    );
}

export default ApiCall;