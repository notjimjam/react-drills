import React from 'react';
import './App.css';
import App1 from './components/App1';
import App2 from './components/App2';
import App3 from './components/App3';

function App() {
  let food = ['pizza', 'tacos', 'sushi', 'burgers', 'burritos'];
  return (
    <div className='App'>
      <App1 />
      <App2 list={food} />
      <App3 list={food} />
    </div>
  );
}

export default App;
