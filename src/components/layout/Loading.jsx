import React from 'react'
import pokeball from '../../assets/pokeball.gif'

function Loading() {
  return <div className='loading'>
      <img 
      src={pokeball} 
      className="loading-img" 
      alt='spinning pokeball' 
      width="150px" 
      height="150px"/>
  </div>
}

export default Loading