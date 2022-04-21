import React, { useState } from 'react'


function App1() {
    const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  
  return (
    <div>
      <input type='text' onChange={handleChange} />
      <p>{input}</p>
    </div>
  )
}

export default App1