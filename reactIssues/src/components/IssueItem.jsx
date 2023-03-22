import React from 'react'

const IssueItem = ({ id, name, user, link }) => {
  return (
    <div>
      <div className='issueContainer'>
        <h2 className='id'>Issue id: {id}</h2>
        <p className='name'>Issue name: {name}</p>
        <p className='user'>Issuer name: {user}</p>
        <p className='link'>Link: {link}</p>
      </div>
    </div>
  )
}

export default IssueItem
