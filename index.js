const express = require('express');
const category = require('./routes/category');
const products = require('./routes/products');
const assets = require('./routes/assets');

const app = express();
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Welcome to My Projects')
})

app.use('/category', category)

app.use('/products', products)

app.use('/assets', assets)

app.listen(PORT, () => {
    console.log(`Listenin on port ${PORT}`)
})