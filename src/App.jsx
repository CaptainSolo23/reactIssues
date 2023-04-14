import { useState, useEffect } from 'react'
import './App.css'

function App () {
  const [issues, setIssues] = useState([])
  useEffect(() => {
    fetch()
      .then(response => response.json())
      .then(results => {
        setIssues(results.data)
      })
      .catch(error => {
        console.log(error)
      })
  })

  return (
    <div className='App'>
      shit
    </div>
  )
}

export default App
