import React from 'react'
import IssueItem from './components/IssueItem'
import './App.css'

function App () {
  return (
    <div className='App'>

      <IssueItem
        id='00' name='test' user='me' link='test'
      />
    </div>
  )
}

export default App
