import React from 'react'

function About() {
  return (
    <div>
      <h1>About this App</h1>
      <p>This is a rebuild of my original pokedex. Made with...</p>
      <div className='p-1'>
        <a className="btn btn-primary m-1 border-r-a" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React JS</a>
        <a className="btn btn-primary m-1 border-r-a" href="https://v5.reactrouter.com/web/guides/quick-start" target="_blank" rel="noopener noreferrer">React Router</a>
        <a className="btn btn-primary m-1 border-r-a" href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a>
        <a className="btn btn-primary m-1 border-r-a" href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">SCSS</a>
      </div>
      <p>Version 2.0.0</p>
    </div>
  )
}

export default About