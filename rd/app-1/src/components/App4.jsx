import React, {useState} from 'react'

function App4() {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [userVal, setUserVal] = useState('')
    const [passVal, setPassVal] = useState('')

    const handleUser = (event) => {
        setUser(event.target.value)
        setUserVal(event.target.value)
    }

    const handlePass = (event) => {
        setPass(event.target.value)
        setPassVal(event.target.value)
    }

    const handleClick = () => {
        alert(`Username: ${user} Password: ${pass}`)
        setUserVal('')
        setPassVal('')
    }


  return (
    <div className='comps'>
        <h1>App4</h1>
        <input type="text" 
        placeholder='username'
        value={userVal} 
        onChange={handleUser}/>
        <br />
        <input type="password" 
        placeholder='password'
        value={passVal} 
        onChange={handlePass}/>
        <br />
        <button onClick={handleClick}>Login</button>

    </div>
  )
}

export default App4