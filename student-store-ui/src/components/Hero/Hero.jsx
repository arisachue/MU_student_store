import * as React from "react"
import "./Hero.css"

export default function Hero() {
  return (
    <div className="hero">
        <div className="heading">
          <div>
              <h1 className="intro">Welcome!</h1>
              <h3>We have all kinds of goodies. Click on any of the items to start filling up your shopping cart.</h3>
              <h3>Checkout whenever you're ready.</h3>
          </div>
          <img className="hero-img" src="../../src/shoppingicon.png" alt="shopping icon" />
        </div>
        
    </div>
  )
}
