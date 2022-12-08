const express = require('express');
const bodyParser = require('body-parser');
const {addProducts, deleteProducts, updateProducts, showProducts, showProductsBySlug} = require('../controller/products')
const router = express.Router();

router.use(bodyParser.json());

router.post('/', addProducts)

router.delete('/:id', deleteProducts)

router.put('/:id', updateProducts)

router.get('/', showProducts)

router.get('/:id', showProductsBySlug)

module.exports = router;