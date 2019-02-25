import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default function BoardCreateOpen({onClose, onAdd, onType , value, error}) {
  return (
    <div className="board boardCreateOpen">
      <div className="boardCreateOpen-head">
        <h3 className='title'>Creating a board</h3>
        <FontAwesomeIcon icon={faTimesCircle} className='close' onClick={onClose} />
      </div>
      <div className='boardCreateOpen-body'>
        <h5 className='question'>What shell we call to the board?</h5>
        <form className='boardCreateForm' onSubmit={onAdd}>
          <input id='name' className='name' type="text" value={value} autoComplete='off' onChange={onType} />
          <label htmlFor='name' className='error' style={{display: error ? 'block' : 'none'}}>You haven't type the name. Try again</label>
          <div className='buttons'>
            <button className="cancel" onClick={onClose}>Cancel</button>
            <button className="create" type='submit' onClick={onAdd}>Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}