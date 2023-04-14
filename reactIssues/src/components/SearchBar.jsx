import React, { useState } from 'react'

const SearchBar = ({ handleSearch }) => {
  const [search, setSearch] = useState('')
  return (
    <div>Search
      <input
        className='search-input'
        placeholder='Busqueda'
        onChange={(event) => setSearch(event.target.value)}
      />

      <button
        className='Search'
        onChange={() => { handleSearch(search) }}
      >
        Search
      </button>

    </div>
  )
}

export default SearchBar
