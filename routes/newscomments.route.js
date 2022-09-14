const {Router} = require('express');
const router = Router();
const {commentsController} = require ('../controllers/newscomments.controller');

router.post('./comments/:id', commentsController.postCommentsID);
router.delete('./comments/:id', commentsController.deleteComments);
router.get('./comments/:id', commentsController.getCommentsByNews);

module.exports = router;