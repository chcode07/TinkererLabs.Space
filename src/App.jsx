import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Register from './components/Register/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Resource from './components/Resource/Resource'

function App() {

  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path='/resource' element={<Resource/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
