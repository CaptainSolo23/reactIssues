import React from 'react'
import RoutesIndex from './routes/Index'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

function App () {
  return (
    <div className='App'>

      <BrowserRouter>
        <RoutesIndex />
      </BrowserRouter>
    </div>
  )
}

export default App
