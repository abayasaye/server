const storesRouter = require("express").Router()
const {
    getStores,
    getById,
    createStore,
    updateStore,
    deleteStore
} = require("../controllers/store-ctrl")

storesRouter.get('/',getStores)
storesRouter.get("/getById/:id" , getById)
storesRouter.post("/addStore" , createStore)
storesRouter.put("/updateStore" , updateStore)
storesRouter.delete("/deleteStore" , deleteStore)

module.exports = storesRouter;