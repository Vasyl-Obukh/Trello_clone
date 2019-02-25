import React from 'react';
import MainMenu from './MainMenu';

export default function PageTemplate({children}) {
  return (
    <>
      <div className='container'>
        <MainMenu />
      </div>
      <div className='container'>
        {children}
      </div>
    </>
  );
}