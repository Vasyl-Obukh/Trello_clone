import React from 'react';
import Board from './Board';
import BoardCreate from './BoardCreate';

export default function Boards({boardsList, onCreate}) {
  return (
      <>
        <BoardCreate onClick={onCreate}/>
        {boardsList.map((elem, id) => <Board key={id} value={elem.name} />)}
      </>
  );
}