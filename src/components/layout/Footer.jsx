import React from 'react'
import '../../scss/styles.scss'
import '../../scss/footer.scss'

function Footer() {

  const date = new Date();
  const year = date.getFullYear()

  return (
    <footer>
      <div className="container">
        <h4>RyanBriggsDev</h4>
        <p>© Copyright {year}, Ryan Briggs</p>
      </div>
    </footer>
  )
}

export default Footer