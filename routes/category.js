const express = require('express');
const bodyParser = require('body-parser');
const {showCategory, addCategory, deleteCategory, showCategoryBySlug, updateCategory} = require('../controller/category');
const router = express.Router();

router.use(bodyParser.json());

router.get('/', showCategory)

router.get('/:id', showCategoryBySlug)

router.post('/', addCategory)

router.delete('/:id', deleteCategory)

router.put('/:id', updateCategory)

module.exports = router;