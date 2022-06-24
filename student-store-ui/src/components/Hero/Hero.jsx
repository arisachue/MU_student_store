import * as React from "react"
import "./Hero.css"

export default function Hero() {
  return (
    <div className="hero">
        <div className="heading">
          <div className="intro">
              <h1>Welcome!</h1>
              <h1>Find Your Merch!</h1>
          </div>
          <img className="hero-img" src="../../src/shoppingicon.png" alt="shopping icon" />
        </div>
        <h3>We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</h3>
    </div>
  )
}
