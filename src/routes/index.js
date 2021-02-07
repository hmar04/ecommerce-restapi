const { Router } = require('express')

const UserController = require('../controllers/UserController')
const SessionController = require('../controllers/Login')
const ProductController = require('../controllers/ProductController')

const routes = Router()

routes.get('/', (req,res) => {
    res.send('Ola Mundo!')
})


routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUsers)
routes.get('/users/:user_id', UserController.getUserByid)

routes.post('/sessions', SessionController.createSession)

routes.post('/products/:user_id', ProductController)
routes.get('/products/user_id', ProductController)
routes.patch('/products/:user_id/:products_id', ProductController)
routes.delete('/products/:user_id/:products_id', ProductController)

routes.get('/products')
routes.get('/products/:products_id')

routes.post('/cart/:user_id')
routes.get('/cart/:user_id')

routes.get('/cart/:cart_id')





module.exports = routes
