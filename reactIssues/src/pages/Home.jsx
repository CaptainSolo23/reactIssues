
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const [issues, setIssues] = useState([]) /* save info */

  useEffect(() => { /* Fetch to get info */
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setIssues(data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div className='container-col-12 bg-dark '>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
        {issues.map(issue => (
          <div className='col' key={issue.id}>
            <div className='container-grid px-4 py-5 ' id='icon-grid'>
              <div className='card h-100 '>
                <div className='card-body bg-secondary text-center'>
                  <FontAwesomeIcon icon={faBug} className='bi text-body-secondary flex-shrink-0 me-3' width='1.75em' height='1.75em' />
                  <h3 className='card-title fw-bold mb-0 fs-4 text-white'>{issue.title}</h3>
                  <p className='card-text'>Issue id: {issue.id}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
