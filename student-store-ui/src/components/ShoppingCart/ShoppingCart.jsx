import * as React from "react"
import "./ShoppingCart.css"

export default function ShoppingCart(props) {
  var shoppedItems = props.shoppingCart
  if (shoppedItems.length == 0) {
    return <p className="notification">No items added to cart yet. Start shopping now!</p>
  }

  const findName = (itemId) => {
    var itemIndex = -1
    for (let i = 0; i < props.products.length; i++) {
        if (props.products[i].id == itemId) {
            itemIndex = i
        }
    }
    return props.products[itemIndex].name
  }

  const findPrice = (itemId) => {
    var itemIndex = -1
    for (let i = 0; i < props.products.length; i++) {
        if (props.products[i].id == itemId) {
            itemIndex = i
        }
    }
    return props.products[itemIndex].price
  }

  return (
    <div className="shopping-cart">
      <div className="cart">
        <div className="cart-heading">
          <p>Name</p>
          <p>Unit Price</p>
          <p>Quantity</p>
          <p>Cost</p>
        </div>
        {
          shoppedItems.map((shoppedItem) => (
            <div key={shoppedItem.itemId} className="cart-item">
                <p className="card-product-name">{findName(shoppedItem.itemId)}</p>
                <p className="card-product-price">${Number(findPrice(shoppedItem.itemId)).toFixed(2)}</p>
                <p className="card-product-quantity">{shoppedItem.quantity}</p>
                <p className="card-product-cost">${Number((shoppedItem.quantity)*(findPrice(shoppedItem.itemId))).toFixed(2)}</p>
            </div>
          ))
        }
      </div>
      <div className="money-calc">
        <div className="subtotal">
          <p>Subtotal</p>
          <p className="total-price">${Number(props.total).toFixed(2)}</p>
        </div>
        <div className="taxes">
          <p>Taxes</p>
          <p>${Number(props.total*0.0875).toFixed(2)}</p>
        </div>
        <div className="total">
          <p>Total</p>
          <p>${Number(props.total*1.0875).toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}
