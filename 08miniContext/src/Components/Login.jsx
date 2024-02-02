import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.prventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2> <br />
        <input type="text"
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        placeholder='username' /> <br />
    
        <input type="password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        placeholder='password' /> <br />
        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login