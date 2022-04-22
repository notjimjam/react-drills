import React from 'react';
import './App.css';
import App1 from './components/App1';
import App2 from './components/App2';

function App() {
  let food = ['pizza', 'tacos', 'sushi', 'burgers'];
  return (
    <div className='App'>
      <App1 />
      <App2 list={food} />
    </div>
  );
}

export default App;
