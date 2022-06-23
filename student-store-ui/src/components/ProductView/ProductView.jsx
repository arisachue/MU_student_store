import * as React from "react"
import "./ProductView.css"


export default function ProductView(props) {

  return (
    <div className="product-view">
      <h1 className="product-id">Product {props.productId}</h1>
      <ProductCard quantity={quantity} productId={productId} product={product} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} showDescription={true}/>
    </div>
  )
}
