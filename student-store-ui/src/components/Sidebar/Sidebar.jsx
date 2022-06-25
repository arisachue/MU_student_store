import * as React from "react"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import "./Sidebar.css"

export default function Sidebar(props) {
  var toggleProperties = "sidebar"
  var buttonProperties = "toggle-button"
  if (props.isOpen) {
    toggleProperties = "sidebar open"
    buttonProperties = "toggle-button button-open"
  }
  return (
    <section className={toggleProperties}> 
    {props.isOpen
      ? <>
          <button className={buttonProperties} onClick={props.handleOnToggle}>
            <img className="arrow-img" src="../../src/arrowicon.png" alt="arrow icon" />
          </button>
          <div className="shopping-cart-heading">
            <img className="shopping-img" src="../../src/shoppingcarticon.png" alt="shopping cart icon" />
            <p>Shopping Cart</p>
          </div>
          <ShoppingCart total={props.total} products={props.products} shoppingCart={props.shoppingCart} isOpen={props.isOpen}/>
          <CheckoutForm checkoutMessage={props.checkoutMessage} isOpen={props.isOpen} shoppingCart={props.shoppingCart} checkoutForm={props.checkoutForm} handleOnCheckoutFormChange={props.handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}/>
        </>
      : <button className={buttonProperties} onClick={props.handleOnToggle}>
          <img className="arrow-img" src="../../src/arrowicon.png" alt="arrow icon" />
      </button>
    } 
    </section>
  )
}
