import React from 'react'

function App2(props) {
  let list = props.list
  return (
    <div className='comps'>
      <h1>App2</h1>
      {list.map((item) =>{
        return <p key={item}>{item}</p>
      })}
    </div>
  )
}

export default App2