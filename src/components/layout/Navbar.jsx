import React from 'react'
import '../../scss/styles.scss'
import '../../scss/navbar.scss'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <ul className="nav-list">
          <Link className="nav-item" to={'/home'}>
            <li>Pokédex</li>
          </Link>
          <Link className="nav-item" to={'/home'}>
            <li>Search</li>
          </Link>
          <Link className="nav-item" to={'/about'}>
            <li>About</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar