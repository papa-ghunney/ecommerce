const express = require('express')
const expressAsyncHandler = require('express-async-handler')
const productRouter = express.Router()
const data = require('../data')
const Product = require('../models/productModels')
const { isAdmin, isAuth } = require('../utils')

productRouter.get("/", expressAsyncHandler(async (req, res) => {

    const products = await Product.find({})
    res.send(products)
}))

productRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    const createdProducts = await Product.insertMany(data.products)
    res.send({ createdProducts })
}))

productRouter.get("/:id", expressAsyncHandler(async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({ message: 'Product Not Found' })
    }

}))


productRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const product = new Product({
            name: 'sample name ' + Date.now(),
            image: '/images/p1.jpg',
            price: 0,
            category: 'sample category',
            brand: 'sample brand',
            countInStock: 0,
            rating: 0,
            numReviews: 0,
            description: 'sample description',
        });
        const createdProduct = await product.save();
        res.send({ message: 'Product Created', product: createdProduct });
    })
);


module.exports = productRouter