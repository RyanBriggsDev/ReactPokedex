import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Something's wrong, I can feel it!</p>
      <Link to='/home'>
            <button className='btn btn-primary border-r-a'>Eject!</button>
      </Link>
    </div>
  )
}

export default NotFound