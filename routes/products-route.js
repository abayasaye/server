const productsRouter = require('express').Router()
const {
    getProducts,
    getById,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/products-ctrl')

productsRouter.get('/',getProducts)
productsRouter.get("/getById/:id" , getById)
productsRouter.post("/addProducts" , createProduct)
productsRouter.put("/updateProducts" , updateProduct)
productsRouter.delete("/deleteProducts" , deleteProduct)

module.exports = productsRouter;