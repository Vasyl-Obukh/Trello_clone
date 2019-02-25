import React from 'react';

export default function BoardCreateClosed({onOpen}) {
  return (
    <div className='board boardCreateClosed' onClick={onOpen} >
      <h3 className='boardCreateClosed-title'>Create a new board...</h3>
    </div>
  );
}