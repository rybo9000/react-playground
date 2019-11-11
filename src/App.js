import React from 'react';
import Split from './composition/Split';
import './App.css';
import TheDate from './state/TheDate';

function App() {
  return (
    <main className='App'>
      <Split className="left" flexBasis={2}>Left Split</Split>
      <Split className="right">Right Split</Split>
      <TheDate />
    </main>
  );
}

export default App;
