import React from 'react'
import '../../scss/styles.scss'
import '../../scss/footer.scss'

function Footer() {
  const date = new Date();
  const year = date.getFullYear()

  return (
    <footer>
      <div className="container">
        <a href="https://github.com/RyanBriggsDev" target="_blank" rel="noopener noreferrer">
          <h4>@RyanBriggsDev</h4>
        </a>
        <p>© Copyright {year}, Ryan Briggs</p>
      </div>
    </footer>
  )
}

export default Footer