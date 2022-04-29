import React from 'react';
import './App.css';
import App1 from './components/App1';
import App2 from './components/App2';
import App3 from './components/App3';
import App4 from './components/App4';
import App5 from './components/App5';
import App6 from './components/App6';
import App7 from './components/App7';
import App4Again from './components/App4Again';

function App() {
  //Used in app5
  let derp =
    'https://imgix.ranker.com/list_img_v2/12555/2292555/original/cute-derpy-dogs-that-ll-make-you-smile?w=817&h=427&fm=jpg&q=50&fit=crop';

  //used in app2 and app3
  let food = ['pizza', 'tacos', 'sushi', 'burgers', 'burritos'];

  //Used for app6

  return (
    <div className='App'>
      <App1 />
      <App2 list={food} />
      <App3 list={food} />
      <App4 />
      <App5 dog={derp} />
      <App6 />
      <App7 />
      <App4Again />
    </div>
  );
}

export default App;
