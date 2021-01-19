const express = require('express')
const routes = express.Router()
const User = require('./src/app/controllers/userController')

routes.get('/', (req, res) => {
    return res.redirect('/user')
})
routes.get('/user/create', User.create)
routes.get('/user/:id', User.show)
routes.get('/user', User.index)
routes.post("/user", User.post)
routes.put("/user", User.put)

routes.delete("/user", User.delete)

module.exports = routes