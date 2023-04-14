
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const [issues, setIssues] = useState([]) /* save info */
  const [searchTerm, setSearchTerm] = useState('') /* searchTerm save */

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

  const handleSearch = event => {
    setSearchTerm(event.target.value)
  }

  const filteredIssues = issues.filter(issue => {
    return issue.title.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div className='container-col-12 bg-dark text-white'>
      <h1 className='pt-3 text-center'>ReactIssues Search</h1>
      <div className='search-container col-12 d-flex justify-content-around pt-3 pb-3'>
        <h3>Search by issue: </h3>
        <form className='form-inline my-2 my-lg-0 w-75'>

          <input type='text' className='form-control' id='search' placeholder='Enter issue' value={searchTerm} onChange={handleSearch} />
        </form>
      </div>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
        {filteredIssues.map(issue => (
          <div className='col' key={issue.id}>
            <div className='container-grid px-4 py-5 ' id='icon-grid'>
              <div className='card h-100 '>
                <div className='card-body bg-secondary-emphasys'>
                  <div className='row flex-row pb-2'>
                    <FontAwesomeIcon icon={faBug} className='bi text-secondary flex-shrink-0 me-3' width='1.75em' height='1.75em' />
                  </div>
                  <a href={issue.html_url}><h3 className='card-title fw-bold mb-2 pb-2 fs-4 text-primary text-center'>{issue.title}</h3></a>
                  <p className='card-text text-black text-center pb-1'>Issue id: {issue.id}</p>
                  <p className='card-text text-black text-center pb-1'>User: {issue.user.login}</p>
                  <div className='row'>
                    {issue.labels.map(label => (
                      <span key={label.id} className='badge me-1' style={{ backgroundColor: '#' + label.color }}>
                        <span className='badge-text'>{label.name}</span>
                      </span>
                    ))}
                  </div>
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
