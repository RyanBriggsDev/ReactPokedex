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

    const capitaliseEachWord = (input) => {
        // split into an array of words
        const words = input.split(" ");
    
        // loop over array and capitalise each word
        for (let i = 0; i < words.length; i++) {
            // capitalise each letter of each word + add capitalised letter back to word
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        // recreate string
        return words.join(" ")
    }
    
    const capitalise = (input) => {
        // convert all to lower case
        let lower = input.toLowerCase();
        // grab first letter of word/sentence
        let first = lower.charAt(0);
        // uppercase first letter
        let upper = first.toUpperCase();
        // take the initial string and save all but first letter
        let remainer = lower.slice(1, );
        // add pieces together
        let capResult = upper + remainer;
        return capResult;
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
            capitaliseEachWord,
            capitalise,
    }}>
        {children}
    </PokeContext.Provider>
}

export default PokeContext