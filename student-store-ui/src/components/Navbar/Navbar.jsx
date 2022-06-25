import * as React from "react"
import Logo from "../Logo/Logo"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <a href="#buy-heading">Buy Now</a>
      <a href="#about-heading">About Us</a>
      <a href="#contact-heading">Contact Us</a>
    </nav>
  )
}
