import React from 'react'
import './App.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Chat from './Pages/Chat'

function App() {
  

  return (
    <>
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/Chat" element={<Chat />} />
  </Routes>
    </>
  )
}

export default App
