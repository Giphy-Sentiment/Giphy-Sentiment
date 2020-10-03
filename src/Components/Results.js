import React from 'react';

function Results(props) {

  return (
    <div>     
      {props.arrSlice.map((url, index) => {
        return <img src={url} key={index} />;
      })}
    </div>
  );
}

export default Results;


// take the results of the gifArray that takes the gifs from the api call
// 