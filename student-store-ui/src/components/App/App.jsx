import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios';
import "./App.css"

export default function App() {
  var basicUser = {
    name: "arisa",
    email: "arisa"
  }
  const productsApiUrl = "https://codepath-store-api.herokuapp.com/store"
  var total = 0

  const [products, setProducts] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [shoppingCart, setShoppingCart] = useState([])
  const [checkoutForm, setCheckoutForm] = useState(basicUser)

  useEffect(() => {
    console.log("in use effect")
    async function fetchData() {
      try {
        console.log("in fetch data")
        setIsFetching(true)
        const { data } = await axios(productsApiUrl)
        setProducts(data.products)
      } catch (err) {
        setError(err)
      }
    }
    fetchData()
    setIsFetching(false)

    if(products.length == 0) {
      setError("no products found in response")
    }
  }, [])

  const handleOnToggle = () => {
    if(isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  const handleAddItemToCart = (productId) => {
    // console.log(shoppingCart)
    var itemIndex = -1
    // look if product already in shopping cart
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId == productId) {
        itemIndex = i
      }
    }
    // not in cart, add new product in cart
    if (itemIndex == -1) {
      console.log("not in cart")
      var newItem = {
        itemId: productId,
        quantity: 1
      }
      console.log(newItem)
      
      // setShoppingCart(newShoppingCart)
      setShoppingCart([...shoppingCart, newItem])
      console.log("shopping cart state", shoppingCart)
    // in cart, increase product quantity
    } else {
      shoppingCart[itemIndex].quantity += 1
    }
    console.log(shoppingCart)
    // add product price to total price
    total += products[productId].price
  }

  const handleRemoveItemFromCart = (productId) => {
    var itemIndex = -1
    // look if product already in shopping cart
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId == productId) {
        itemIndex = i
      }
    }
    // remove item if only exist
    if (itemIndex > -1) {
      shoppingCart[i].quantity -= 0
      // remove item from shopping cart
      if (shoppingCart[i].quantity == 0) {
        shoppingCart.splice(i, 1)
      }
    }
  }
  // update checkoutForm object for specific input
  const handleOnCheckoutFormChange = (name, value) => {
    setCheckoutForm({...checkoutForm, name: value})
  }
  
  const handleOnSubmitCheckoutForm = () => {
    var newOrder = {
      user: checkoutForm,
      shoppingCart: shoppingCart
    }
    axios.post(productsApiUrl, newOrder)
  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar handleOnToggle={handleOnToggle} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}/>
          <Routes>
            <Route path="/" element={<Home shoppingCart={shoppingCart} products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>} />
            <Route path="product/:productId" element={<ProductDetail shoppingCart={shoppingCart} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
