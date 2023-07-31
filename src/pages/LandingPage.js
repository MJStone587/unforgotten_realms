import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className="landingPage_container">
      <div className="landingPage_caption">
        <h1>Forgotten Realms Lore</h1>
        <p>fan made page for forgotten realms lore</p>
      </div>
      <nav>
      <a href="#dontworryboutit">Deities</a>
      <a href="#dontworryboutit">Influential Characters</a>
      <a href="#dontworryboutit">Cities and Peoples</a>
      <a href="#dontworryboutit">Contact</a>
      </nav>
    </div>
  )
}

export default LandingPage