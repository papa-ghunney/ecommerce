const bcrypt = require('bcryptjs')

const data = {
    users: [
        {
            name: "Papa",
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        },
        {
            name: "Ama",
            email: 'amantow@example.com',
            password: bcrypt.hashSync('4321', 8),
            isAdmin: false
        },
    ],
    products: [
        {

            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: "https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?cs=srgb&dl=pexels-jeffrey-reed-769749.jpg&fm=jpg",
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image: "https://images.pexels.com/photos/3026282/pexels-photo-3026282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            price: 100,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'Lacoste Free Shirt',
            category: 'Shirts',
            image: "https://images.pexels.com/photos/5145180/pexels-photo-5145180.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            price: 220,
            countInStock: 0,
            brand: 'Lacoste',
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product',
        },
        {

            name: 'Nike Slim Pant',
            category: 'Pants',
            image: 'https://images.pexels.com/photos/6311120/pexels-photo-6311120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            price: 78,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product',
        },
        {

            name: 'Puma Slim Pant',
            category: 'Pants',
            image: "https://images.pexels.com/photos/4066290/pexels-photo-4066290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            price: 65,
            countInStock: 5,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name: 'Adidas Fit Pant',
            category: 'Pants',
            image: "https://images.pexels.com/photos/1895943/pexels-photo-1895943.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            price: 139,
            countInStock: 12,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 15,
            description: 'high quality product',
        },
    ],
};

module.exports = data;