const infoRouter = require('express').Router()
const {
    getInfo,
    getById,
    createInfo,
    updateInfo,
    deleteInfo
} = require("../controllers/info-ctrl")

infoRouter.get('/',getInfo)
infoRouter.get("/getById/:id" , getById)
infoRouter.post("/addInfo" , createInfo)
infoRouter.put("/updateInfo" , updateInfo)
infoRouter.delete("/deleteInfo" , deleteInfo)

module.exports = infoRouter;