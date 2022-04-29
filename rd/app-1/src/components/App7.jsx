import React, { useState } from 'react'
import List from './sideComps/List'
import NewTask from './sideComps/NewTask'


function App7() {
    const [tasks, setTasks] = useState([])

    let addTaskHandler = (task) => {
        setTasks([...tasks, task])
    }

    return (
        <div className='comps'>
            <h1>App7</h1>
            <h2>My To-Do List v2</h2>
            <NewTask addTask={addTaskHandler}/>
            <List tasks={tasks}/>
            
        </div>
    )
}

export default App7