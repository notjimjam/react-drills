import React, { useState } from 'react'
import Todo6 from './sideComps/Todo6'

function App6() {
    const [input, setInput] = useState('')
    const [display, setDisplay] = useState([])

    const changeHandler = (event) => {
        setInput(event.target.value)
    }

    const clickHandler = (event) => {
        console.log(input)
        setDisplay([...display, input])
        console.log(display)
    }

    return (
    <div className='comps'>
        <h1>App6</h1>
        <h2>My To-Do List</h2>
        <input type="text" onChange={changeHandler}/>
        <button onClick={clickHandler}>Add</button>
        <Todo6 display={display}/>
    </div>
  )
}

export default App6