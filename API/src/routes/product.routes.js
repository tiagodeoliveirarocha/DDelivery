 const router = require('express-promise-router')();
const { get } = require('.');
 const productController = require('../controllers/product.controller');
 
 router.post('/products', productController.createProduct);

 //obter dados de objeto, ordens e colaborador para exibir nas tabelas da plataforma
 router.get('/objeto', productController.objeto);
 router.get('/ordens', productController.ordens);
 router.get('/colaborador', productController.colaborador);
 router.get('/ultimasentregas', productController.ultimasentregas);

 //enviar dados de nova ordem, novo colaborador e novo objeto para o banco de dados PostgreSQL
 router.post('/adicionarordem', productController.adicionarOrdem);
 router.post('/adicionarcolab', productController.adicionarColaborador);
 router.post('/adicionarobjeto', productController.adicionarObjeto);

 //obter dados de objeto, colaborador e ordem utilizando o ID - o dado é utilizado para visualizar o modal especifico de cada item
 router.get('/objeto/:id', productController.objetoporid);
 router.get('/colaborador/:id', productController.colaboradorporid);
 router.get('/ordens/:id', productController.ordempeloid);

 //atualiza os dados do objeto, colaborador e ordem utilizando os dados enviado pelo formulario do Modal Editar

 router.put('/ordens', productController.ordenseditar);
 router.put('/objeto', productController.objetoeditar);
 router.put('/colaborador', productController.colaboradoreditar);

//dados para montagem do grafico - dashboard

router.get('/dashboarddiaanterior', productController.dashboardgrafico);


 module.exports = router;