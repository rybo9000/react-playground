import React from 'react';
import Split from './composition/Split';
import './App.css';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state-drills/HelloWorld';
import RouletteGun from './state-drills/RouletteGun';

function App() {
  return (
    <main className='App'>
      <Split className="left" flexBasis={2}>Left Split</Split>
      <Split className="right">Right Split</Split>
      <RouletteGun/>
    </main>
  );
}

export default App;
