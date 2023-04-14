import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (

    <nav className='navbar navbar-expand-sm navbar-light bg-primary  d-flex justify-content-between px-4 mb-3 text-white'>
      <NavLink className='navbar-brand text-white' to='#'>ReactIssues</NavLink>

      <ul className='navbar-nav mr-auto mt-2 mt-lg-0 '>
        <li className='nav-item px-2'>
          <NavLink className='nav-link text-white' to='/'>Home</NavLink>
        </li>
        <li className='nav-item px-2'>
          <NavLink className='nav-link text-white' to='/about'>About</NavLink>
        </li>
      </ul>

    </nav>

  )
}

export default Navbar
