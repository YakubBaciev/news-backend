const {Router} = require('express');
const router = Router();
const {categoriesController} = require("../controllers/categories.controller")

router.get('/categories', categoriesController.getCategories);
router.post('/categories', categoriesController.postCategories);
router.delete('/categories', categoriesController.deleteCategories);

module.exports = router;