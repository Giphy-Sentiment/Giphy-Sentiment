import React from 'react';

function Results(props) {
  return (

    <section>
      <ul className="resultsList">     
        {props.arrSlice.map((url, index) => {
          return <li key={index} className="card"><img src={url} onClick={props.onSelect}/></li>
        })}
      </ul>

      <button onClick={props.handleClick}>Regenerate</button>
    </section>
  );
}

export default Results;
