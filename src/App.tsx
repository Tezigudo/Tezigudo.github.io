import React from 'react';

import './App.css';
import Main from './pages/main';

function App() {
  return (
    <div className='relative w-full h-screen bg-tearmat bg-no-repeat bg-cover bg-center bg-fixed overflow-auto'>
      <div className='w-full h-full flex flex-col absolute backdrop-blur-md font-FutoMin overflow-auto'>
      <Main/>
    </div>
    </div>
  );
}

export default App;
