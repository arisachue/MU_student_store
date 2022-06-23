import * as React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"

export default function ProductCard(props) {
  return (
    <div className="product-card">
      <p className="product-name">{props.product.name}</p>
      <p className="product-price">${props.product.price}</p>
      {props.showDescription 
        ? <p className="product-description">{props.product.description}</p>
        : <p></p>
      }
      <div className="media">
        <Link to={`/products/${props.productId}`}>
          <img src={props.product.source} alt={props.product.name} />
        </Link>
      </div>
      <button className="add" onClick={() => props.handleAddItemToCart(props.productId)}>Add</button>
      <button className="remove" onClick={() => props.handleRemoveItemFromCart(props.productId)}>Remove</button>
      <p className="product-quantity">props.quantity</p>
    </div>
  )
}
