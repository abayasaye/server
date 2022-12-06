const usersRouter = require("express").Router()
const { login, getUsers ,register} = require("../controllers/users-ctrl");

usersRouter.get("/" , getUsers)
usersRouter.post("/login" , login)
usersRouter.post("/register" , register)


module.exports = usersRouter;