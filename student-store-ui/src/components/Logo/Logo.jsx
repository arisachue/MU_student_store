import * as React from "react"
import { Link } from "react-router-dom"
import "./Logo.css"

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img className="logo-img" src="../../src/homelogo.png" alt="home logo" />
      </Link>
    </div>
  )
}
