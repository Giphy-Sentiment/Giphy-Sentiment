import React from 'react';

function Results(props) {
  return (
    <ul>     
      {props.arrSlice.map((url, index) => {
        return <li key={index} className="card"><img src={url} onClick={props.onSelect}/></li>
      })}
    </ul>
  );
}

export default Results;
