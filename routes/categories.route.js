const categoriesRouter = require('express').Router()
const {
    getCategories,
    getById,
    createCategory,
    updateCategory,
    deleteCategory
}= require("../controllers/categories-ctrl")

categoriesRouter.get('/',getCategories)
categoriesRouter.get("/getById/:id" , getById)
categoriesRouter.post("/addCategory" , createCategory)
categoriesRouter.put("/updateCategory" , updateCategory)
categoriesRouter.delete("/deleteCategory" , deleteCategory)

module.exports = categoriesRouter;