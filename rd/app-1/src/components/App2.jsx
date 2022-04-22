import React from 'react'

function App2(props) {
  let list = props.list
  return (
    <div>
      <h1>App2</h1>
      {list.map((item) =>{
        return <p>{item}</p>
      })}
    </div>
  )
}

export default App2