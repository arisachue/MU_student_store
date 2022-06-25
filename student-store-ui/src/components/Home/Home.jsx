import * as React from "react"
import "./Home.css"

import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"

export default function Home(props) {
  return (
    <div className="home">
      <Hero />
      <input type="text" className="search-bar" placeholder="Search..." name="search" value={props.search} onChange={props.handleOnSearchChange}/>
      <div className="filters">
        <button className="category" onClick={() => props.handleCategoryChange("all")}>All Categories</button>
        <button className="category" onClick={() => props.handleCategoryChange("clothing")}>Clothing</button>
        <button className="category" onClick={() => props.handleCategoryChange("food")}>Food</button>
        <button className="category" onClick={() => props.handleCategoryChange("accessories")}>Accessories</button>
        <button className="category" onClick={() => props.handleCategoryChange("tech")}>Tech</button>
      </div>
      <h2 className="home-headings" id="buy-heading">Best Selling Products</h2>
      <ProductGrid products={props.products} shoppingCart={props.shoppingCart} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart}/>
      <h2 className="home-headings" id="about-heading">About Us</h2>
      <div className="about">
        <div className="about-section">
          <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
          <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
          <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
        </div>
        <div>
        <img className="about-img" src="../../src/shoppingicon.png" alt="shopping icon" />
        </div>
      </div>
      <h2 className="home-headings" id="contact-heading">Contact Us</h2>
      <div className="contact">
        <div className="contact-section">
          <div className="contact-rows">
            <p>Email:</p>
            <p>code@path.org</p>
          </div>
          <div className="contact-rows">
            <p>Phone:</p>
            <p>1-800-CODEPATH</p>
          </div>
          <div className="contact-rows">
            <p>Address:</p>
            <p>123 Fake Street, San Francisco, CA</p>
          </div>
          <div className="contact-rows">
            <p>Socials:</p>
            <img className="socials-img" src="../../src/socialsicon.png" alt="social media icons" />
          </div>
        </div>
        <img className="contact-img" src="../../src/contacticon.png" alt="contact us robot icon" />
      </div>
      <div className="footer-wrapper">
        <div className="footer">
          <div className="footer-categories">
            <h4>Categories</h4>
            <p>All Categories</p>
            <p>Clothing</p>
            <p>Food</p>
            <p>Accessories</p>
            <p>Tech</p>
          </div>
          <div className="footer-company">
            <h4>Company</h4>
            <p>About Us</p>
            <p>Find a Store</p>
            <p>Terms</p>
            <p>Sitemap</p>
            <p>Careers</p>
          </div>
          <div className="footer-support">
            <h4>Support</h4>
            <p>Contact Us</p>
            <p>Money Refund</p>
            <p>Order Status</p>
            <p>Shipping Info</p>
            <p>Open Dispute</p>
          </div>
          <div className="footer-account">
            <h4>Account</h4>
            <p>Login</p>
            <p>Register</p>
            <p>Account Settings</p>
            <p>My Orders</p>
          </div>
          <div className="footer-socials">
            <h4>Socials</h4>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
            <p>Instagram</p>
            <p>Youtube</p>
          </div>
          <div className="footer-app">
            <h4>Our App</h4>
            <img className="footer-img" src="../../src/appdownloadicon.png" alt="app download icons" />
          </div>
        </div>
      </div>
    </div>
  )
}
