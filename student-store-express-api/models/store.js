const { storage } = require("../data/storage")
const { NotFoundError, BadRequestError } = require("../utils/errors")

class Store {
    constructor() {
        this.super()
    }

    static async getStorage() {
        return storage
    }

    static async listProducts() {
        return storage.get("products").value()
    }

    static async listPurchases() {
        return storage.get("purchases").value()
    }    

    static async fetchProductById(productId) {
        // let products = await this.listProducts
        // for (let i = 0; i < products.length; i++) {
        //     if (productId == products[i].id) {
        //         return products[i]
        //     }
        // }
        try {
            const product = storage
                .get("products")
                .find( { id: Number(productId)})
                .value()
            return product
        } catch (error) {
            throw new NotFoundError("product was not found with that id")
        }
    }

    static async addPurchase(purchaseOrder) {
        if (!purchaseOrder) {
            throw new BadRequestError(`No transaction sent.`)
        }
        const requiredFields = ["user", "shoppingCart"]
        requiredFields.forEach((field) => {
            if (!purchaseOrder[field] || Object.keys(purchaseOrder[field]).length == 0) {
                throw new BadRequestError(`Field: "${field}" is required in purchase`)
            }
        })
        if (purchaseOrder.total == 0) {
            throw new BadRequestError("purchased total is zero")
        }

        const curPurchases = await Store.listPurchases()
        const purchaseId = curPurchases.length + 1
        const createdAt = new Date().toISOString()

        const newPurchase = {
            id: purchaseId,
            name: purchaseOrder.user.name,
            email: purchaseOrder.user.email,
            total: purchaseOrder.total,
            time: createdAt
        }
        console.log(newPurchase)
        
        storage.get("purchases").push(newPurchase).write()
        return newPurchase
    }

    
}

module.exports = Store