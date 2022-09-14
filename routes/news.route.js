const {Router} = require ('express');
const router = Router();
const {newsController} = require ('../controllers/news.controller');

router.post('/news', newsController.postNews);
router.delete('/news', newsController.deleteNews);
router.patch('/news', newsController.patchNews);
router.get('/news/:id', newsController.getNewsID);
router.get('/news', newsController.getNews);
router.get('/news/category/:id', newsController.getNewsByCategories);

module.exports = router;
