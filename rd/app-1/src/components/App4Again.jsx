import React, {useState} from 'react'

function App4Again() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const userNameHandler = (event) => {
        setUserName(event.target.value)
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }

    const clickHandler = (event) => {
        event.preventDefault();
        alert(`Username: ${userName} Password: ${password}`)
        setUserName('')
        setPassword('')
    }

  return (
    <div className='comps'>
        <h1>App4 Again</h1>
        <input type="text" onChange={userNameHandler} value={userName} placeholder='username'/>
        <br />
        <input type="password" onChange={passwordHandler} value={password} placeholder='password'/>
        <br />
        <button onClick={clickHandler}>Submit</button>
    </div>
  )
}

export default App4Again