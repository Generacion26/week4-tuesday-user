const express = require('express');
const routerUser = require('./user.route');
const routerTodo = require('./todo.router');
const router = express.Router();
const { verifyJwt } = require("../utils/verifyJwt")

// colocar las rutas aquí
router.use("/users", routerUser)
router.use("/todos", verifyJwt, routerTodo)

module.exports = router;