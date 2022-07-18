import { createContext, useState } from "react";

const PokeContext = createContext()

export const PokeProvider = ({ children }) => {

// variables
const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'

// state 
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [callComplete, setCallComplete] = useState()

// functions
    const captureData = (e) => {
        setSearchTerm(e.target.value.toLowerCase())
    }

    const fetchData = async () => {
        if(searchTerm !== '') {
            
            setLoading(true)
            const response = await fetch(pokeUrl + searchTerm)
            if(!response.ok) {
                setCallComplete(false)
            } else {
                const data = await response.json()
                    setPokemon(data)
                    setLoading(false)
                    setCallComplete(true)
            }
        } else {
            return alert('enter a search term')
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        fetchData()
        e.target.reset()
    }

    const handleClear = () => {
        setCallComplete(false)
        setPokemon([])
    }

    return <PokeContext.Provider value={{
            pokemon, 
            loading,
            searchTerm,
            callComplete,
            captureData,
            setLoading,
            handleFormSubmit,
            handleClear,
    }}>
        {children}
    </PokeContext.Provider>
}

export default PokeContext