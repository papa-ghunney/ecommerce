const express = require('express');
const mongoose = require('mongoose')
const userRouter = require('./routes/userRoutes')
const orderRouter = require('./routes/orderRoutes')
const productRouter = require('./routes/productRoutes')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config();

const app = express()

const db = require('./config/keys').MongoURI

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//DB Config 
mongoose.connect(
    process.env.MongoURI || db,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    () => {
        console.log("Connected to MongoDB");
    }
);


app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)
app.get("/api/config/paypal", (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb')
})

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})