import React from 'react';
import './App.css';
import App1 from './components/App1';
import App2 from './components/App2';
import App3 from './components/App3';
import App4 from './components/App4';
import App5 from './components/App5';

function App() {
  let derp =
    'https://imgix.ranker.com/list_img_v2/12555/2292555/original/cute-derpy-dogs-that-ll-make-you-smile?w=817&h=427&fm=jpg&q=50&fit=crop';
  let food = ['pizza', 'tacos', 'sushi', 'burgers', 'burritos'];
  return (
    <div className='App'>
      <App1 />
      <App2 list={food} />
      <App3 list={food} />
      <App4 />
      <App5 dog={derp} />
    </div>
  );
}

export default App;
