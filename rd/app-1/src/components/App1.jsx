import React, { useState } from 'react'


function App1() {
    const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  
  return (
    <div className='comps'>
      <h1>App1</h1>
      <input type='text' onChange={handleChange} />
      <p>{input}</p>
    </div>
  )
}

export default App1