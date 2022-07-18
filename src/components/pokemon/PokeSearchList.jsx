import React, { useContext } from 'react'
import PokeContext from '../../context/PokeContext'
import PokeItem from './PokeItem'
import Loading from '../layout/Loading'

function PokeSearchList() {

  const { loading, callComplete } = useContext(PokeContext)
  
  if(loading === false) {
    return (
      <PokeItem />
    )
  } else {
    if (callComplete === false) {
      return <p>Error - can't find em'</p>
    } else {
      return <Loading />
    }
}
}

export default PokeSearchList