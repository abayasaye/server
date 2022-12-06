const departmentRouter = require("express").Router()
const {
    getDepartments,
    getById,
    createDepartment,
    updateDepartment,
    deleteDepartment
} = require("../controllers/departments-ctrl")

departmentRouter.get('/',getDepartments)
departmentRouter.get("/getById/:id" , getById)
departmentRouter.post("/addDepartment" , createDepartment)
departmentRouter.put("/updateDepartment" , updateDepartment)
departmentRouter.delete("/deleteDepartment" , deleteDepartment)

module.exports = departmentRouter;