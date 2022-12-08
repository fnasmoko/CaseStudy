const express = require('express');
const bodyParser = require('body-parser');
const {addCategoryAssets, deleteCategoryAssets, updateCategoryAssets, showCategoryAssets} = require('../controller/category_assets')
const {addProductsAssets, deleteProductsAssets, updateProductsAssets, showProductsAssets} = require('../controller/products_assets')
const router = express.Router();

router.use(bodyParser.json());

router.post('/category/', addCategoryAssets)
router.delete('/category/:id', deleteCategoryAssets)
router.put('/category/:id', updateCategoryAssets)
router.get('/category/', showCategoryAssets)

router.post('/products/', addProductsAssets)
router.delete('/products/:id', deleteProductsAssets)
router.put('/products/:id', updateProductsAssets)
router.get('/products/', showProductsAssets)



module.exports = router;