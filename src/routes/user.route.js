const { getAll, create, getOne, remove, update, login, logged } = require('../controllers/user.controller');
const express = require('express');
const { verifyJwt } = require("../utils/verifyJwt")
const routerUser = express.Router();

routerUser.route('/')
    .get(verifyJwt, getAll)
    .post(create);

routerUser.route('/login')
    .post(login)

routerUser.route('/me') // /api/v1/users/me
    .get(verifyJwt, logged)
// -------------------------------------------

routerUser.route('/:id')
    .get(verifyJwt, getOne)
    .delete(remove)
    .put(update);


module.exports = routerUser;