import React from 'react'
import PokeSearch from '../components/pokemon/PokeSearch'
import PokeSearchList from '../components/pokemon/PokeSearchList'

function Home() {
  return (
    <>
      <PokeSearch />
      <PokeSearchList />
    </>
  )
}

export default Home