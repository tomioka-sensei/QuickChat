import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Chat from './Pages/Chat'

function App() {
  

  return (
    <div className='app'>
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/Chat" element={<Chat/>} />
  </Routes>
  </div>
  )
}

export default App
