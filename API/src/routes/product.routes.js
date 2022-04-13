 const router = require('express-promise-router')();
 const productController = require('../controllers/product.controller');
 
 router.post('/products', productController.createProduct);
 router.get('/objeto', productController.objeto);
 router.get('/ordens', productController.ordens);
 router.get('/colaborador', productController.colaborador);
 router.post('/addordem', productController.adicionarOrdem);

 module.exports = router;