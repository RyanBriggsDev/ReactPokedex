import React, { useContext } from 'react'
import PokeContext from '../../context/PokeContext'

function PokeSearch() {
  
  const { captureData, handleFormSubmit, handleClear } = useContext(PokeContext)

  return (
    <>
        <form onSubmit={handleFormSubmit}>
            <input className='form-input btn border-r-l'
                   type="text" 
                   placeholder='bulbasaur'
                   onChange={captureData}
            />
            <input className='form-submit btn btn-primary border-r-r' type="submit"/>
        </form>
        <button className="btn btn-primary border-r-a mt-1" onClick={handleClear}>Clear Search</button>
    </>
  )
}

export default PokeSearch