import React from 'react'
import RoutesIndex from './routes/Index'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'

function App () {
  return (
    <div className='App'>

      <BrowserRouter>
        <NavBar />
        <RoutesIndex />
      </BrowserRouter>
    </div>
  )
}

export default App
