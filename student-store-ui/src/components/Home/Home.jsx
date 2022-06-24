import * as React from "react"
import "./Home.css"

import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"

export default function Home(props) {
  return (
    <div className="home">
      <Hero />
      <input type="text" className="search-bar" placeholder="Search..." name="search" value={props.search} onChange={props.handleOnSearchChange}/>
      <p>All Categories</p>
      <p>Clothing</p>
      <p>Food</p>
      <p>Accessories</p>
      <p>Tech</p>
      <ProductGrid products={props.products} shoppingCart={props.shoppingCart} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart}/>
    </div>
  )
}
