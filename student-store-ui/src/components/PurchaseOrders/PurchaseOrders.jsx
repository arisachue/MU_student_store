import * as React from "react"
import "./PurchaseOrders.css"


export default function PurchaseOrders(props) {
    var purchases = props.purchases
    if (purchases == null || purchases.length == 0) {
        return <p className="purchase-orders">No purchases yet!</p>
    }
  return (
    <div className="purchase-orders">
        <h1>Purchases</h1>
    <div className="purchase-headings">
        <p>Name</p>
        <p>Email</p>
        <p>Total</p>
        <p>Time</p>
    </div>
    {
        purchases.map((purchase) => (
            <div className="purchase" key={purchase.id}>
                <p className="purchase-detail">{purchase.name}</p>
                <p className="purchase-detail"> {purchase.email}</p>
                <p className="purchase-detail">${Number(purchase.total).toFixed(2)}</p>
                <p className="purchase-detail"> {purchase.time}</p>
            </div>
        ))
      }
      
    </div>
  )
}
