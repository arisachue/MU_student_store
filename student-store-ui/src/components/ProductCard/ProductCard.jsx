import * as React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"

export default function ProductCard(props) {
  // console.log("shopping cart in product card", props.shoppingCart)
  // console.log(props.quantity)

  var productCardProperties = "product-card"
  if (props.showDescription) {
    productCardProperties = "product-card inProductView"
  }
  
  return (
    <div className={productCardProperties}>
      <div className="card-content">
        {props.showDescription 
          ? <p className="product-description">{props.product.description}</p>
          : null
        }
        <div className="media">
          <Link to={`/products/${props.product.id}`}>
            <img src={props.product.image} alt={props.product.name} />
          </Link>
        </div>
        <p className="product-name">{props.product.name}</p>
        <p className="product-price">${Number(props.product.price).toFixed(2)}</p>
        <div className="buttons-quantity">
          <button className="add" onClick={() => props.handleAddItemToCart(props.productId)}>
            <img className="button-icon" src="../../src/plusicon.png" alt="plus icon" />
          </button>
          <button className="remove" onClick={() => props.handleRemoveItemFromCart(props.productId)}>
            <img className="button-icon" src="../../src/minusicon.png" alt="minuc icon" />
          </button>
          <p className="product-quantity">{props.quantity}</p>
        </div>
      </div>
    </div>
  )
}
