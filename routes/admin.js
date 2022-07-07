const path = require('path');

const express = require('express');

const productsController = require('../controllers/products')

const router = express.Router();
 
// /admin/add-product => GET
router.get('/add-product', productsController.getAddProductPage);

// /admin/add-product => POST
router.post('/add-product', productsController.addNewProduct);

module.exports = router
