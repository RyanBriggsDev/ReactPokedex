import React from 'react'
import PokeSearch from '../components/pokemon/PokeSearch'
import PokeSearchList from '../components/pokemon/PokeSearchList'

function Home() {
  return (
    <>
      <h1>Pokédex</h1>
      <p className='mb-2'>by RyanBriggsDev</p>
      <PokeSearch />
      <PokeSearchList />
    </>
  )
}

export default Home