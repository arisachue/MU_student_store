import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid(props) {
  var products = props.products
  return (
    <div className="product-grid">{
      products.map((product) => (
        <ProductCard key={product.id} product={product} showDescription={false}/>
      ))
    }
    </div>
  )
}
