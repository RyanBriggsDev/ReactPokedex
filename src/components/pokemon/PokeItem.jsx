import React from 'react'
import { useContext } from 'react'
import PokeContext from '../../context/PokeContext'

function PokeItem() {

    const { loading, callComplete, pokemon} = useContext(PokeContext)

if (loading === false && callComplete === true) {
  return (
    <div className='poke-item'>
      <img src={pokemon.sprites.front_default} height='150px' width='150px' alt={`picture of ${pokemon.name}`} />
      <p className="poke-name">{`Name: ${pokemon.name}`}</p>
      <p className="poke-name">{`ID: ${pokemon.id}`}</p>
      <p className="poke-height">{`Height: ${pokemon.height}`}</p>
      <p className="poke-weight">{`Weight: ${pokemon.weight}`}</p>
      <p className="poke-type">{`Type: ${pokemon.types[0].type.name}`}</p>
    </div>
    )
  }
}
export default PokeItem