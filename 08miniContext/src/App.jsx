import { useState } from 'react'
import Login from './Components/login'
import Profile from './Components/profile'


import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
