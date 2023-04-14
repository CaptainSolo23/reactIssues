import React from 'react'

const IssueItem = ({ id, name, user, link, tags }) => {
  return (
    <div>
      <div className='issueContainer'>
        <h2 className='id'>Issue id: {id}</h2>
        <p className='name'>Issue name: <a href={link}> {name} </a></p>
        <p className='user'>Issuer name: {user}</p>
        <p className='tags'>Tags: {tags} </p>
      </div>
    </div>
  )
}

export default IssueItem
