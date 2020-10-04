import React from 'react';

function Timeline(props) {
  const thing = props.data
  console.log(props.data);
  return (
    <>
      <ul>
        {thing.map((post) => {
          return (
            <li>
              <p>{post}</p>
            </li>
          )
        })}
      </ul>
    </>
  );
}

export default Timeline;