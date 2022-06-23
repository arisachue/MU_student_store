import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid(props) {
  console.log('props.shoppingCart', props.shoppingCart)
  var products = props.products
  const findQuantity = (productId) => {
    var quantity = 0
    for (let i = 0; i < props.shoppingCart.length; i++) {
      if (props.shoppingCart[i].itemId == productId) {
        quantity = props.shoppingCart[i].quantity
      }
    }
    console.log('quantity', quantity)
    return quantity
  }

  return (
    <div className="product-grid">{
      products.map((product) => (
        <ProductCard key={product.id} quantity={findQuantity(product.id)} product={product} productId={product.id} shoppingCart={props.shoppingCart} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemToCart={props.handleRemoveItemToCart} showDescription={false}/>
      ))
    }
    </div>
  )
}
