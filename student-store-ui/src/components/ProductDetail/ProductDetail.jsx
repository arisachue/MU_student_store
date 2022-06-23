import * as React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ProductView from "../ProductView/ProductView"
import NotFound from "../NotFound/NotFound"
import "./ProductDetail.css"

export default function ProductDetail(props) {
  const [product, setProduct] = useState({})
  const [isFetching, setIsFetching] = useState(false)
  const { productId } = useParams()
  const productsApiUrl = "https://codepath-store-api.herokuapp.com/store"
  
  var quantity = -1
  for (let i = 0; i < props.shoppingCart.length; i++) {
    if(props.shoppingCart[i].itemId == productId) {
      quantity = props.shoppingCart[i].quantity
    }
  }
  var isValid = true
  if (quantity == -1) {
    isValid = false
  }
  useEffect(() => {
    setIsFetching(true)
    async function fetchData() {
      const { data } = await axios(`${productsApiUrl}/${productId}`)
      setProduct(data.product)
    }
    fetchData()
    setIsFetching(false)
  })

  return (
    <div className="product-detail">
      {isFetching
        ? <h1 className="loading">Loading...</h1>
        : isValid 
          ? <ProductView quantity={quantity} productId={productId} product={product} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>
          : <NotFound />
      }
    </div>
    )
  }