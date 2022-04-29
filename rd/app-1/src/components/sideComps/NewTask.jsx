import React, {useState} from 'react'

function NewTask(props) {
    const [input, setInput] = useState('')

    let handleChange = event => setInput(event.target.value)
    let handleClick = ()=> props.addTask(input)

  return (
    <div>
        <input type="text" onChange={handleChange}/>
        <button onClick={handleClick}>Add Task</button>
    </div>
  )
}

export default NewTask