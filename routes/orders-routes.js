const ordersRouter = require("express").Router()
const {
    getOrder,
    getById,
    createOrder,
    updateOrder,
    deleteOrder
} = require("../controllers/orders-ctrl")

ordersRouter.get('/',getOrder)
ordersRouter.get("/getById/:id" , getById)
ordersRouter.post("/addOrder" , createOrder)
ordersRouter.put("/updateOrder" , updateOrder)
ordersRouter.delete("/deleteOrder" , deleteOrder)

module.exports = ordersRouter;