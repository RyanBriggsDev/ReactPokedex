import React from 'react'
import { useContext } from 'react'
import PokeContext from '../../context/PokeContext'
import '../../scss/pokeCard.scss'

function PokeItem() {

    const { loading, callComplete, pokemon, capitalise, capitaliseEachWord} = useContext(PokeContext)

if (loading === false && callComplete === true) {
  return (
    <div className="card-container">
      <div className="card mt-1">
        <div className="card-grid">
        <img id='poke-img' src={pokemon.sprites.front_default} alt={`image of ${pokemon.name}`} />
          <p id="poke-name"><span>{capitalise(pokemon.name)}</span></p>
          <p id="poke-id">ID: <span>{pokemon.id.toString().padStart(3, "0")}</span></p>
          <p id="poke-hp">HP: <span>{pokemon.stats[0].base_stat}</span></p>
          <p id="poke-type">Type: <span>{capitalise(pokemon.types[0].type.name)}</span></p>
          <p id="poke-height">Height: <span>{pokemon.height}</span></p>
          <p id="poke-weight">Weight: <span>{pokemon.weight}</span></p>
          <p id="poke-move">Move: <span>{capitaliseEachWord(pokemon.moves[0].move.name.replace("-", " "))}</span></p>
        </div>
      </div>
    </div>
    )
  }
}
export default PokeItem