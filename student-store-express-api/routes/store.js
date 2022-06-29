const express = require("express");
const Store = require("../models/store");
const { NotFoundError } = require("../utils/errors")
// const StoreModel = require("../models/store");
const router = express.Router();

// list all products
router.get("/", async (req, res, next) => {
    try {
      const products = await Store.listProducts()
      res.status(200).json({ products })
    } catch (err) {
      next(err)
    }
})

// display purchases database
router.get("/storagepurchase", async (req, res, next) => {
    try {
      const purchases = await Store.listPurchases()
      console.log(purchases)
      res.status(200).json({ purchases })
    } catch (err) {
      next(err)
    }
})

// create new purchase
router.post("/", async (req, res, next) => {
    try {
      const purchase = req.body
      console.log(purchase)
      const newPurchase = await Store.addPurchase(purchase)
      res.status(201).json({ purchase : newPurchase })
    } catch (err) {
      next(err)
    }
})

// fetch single product
router.get("/:productId", async (req, res, next) => {
    try {
      const productId = req.params.productId
      const product = await Store.fetchProductById(productId)
      if (!product) {
        throw new NotFoundError("Product not found")
      }
      res.status(200).json({ product })
    } catch (err) {
      next(err)
    }
  })

module.exports = router