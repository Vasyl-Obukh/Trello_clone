import React from 'react';

export default function Board(props) {
  return (
    <div className='board'>
      <h2 className='board-name'>{props.value}</h2>
    </div>
  );
}