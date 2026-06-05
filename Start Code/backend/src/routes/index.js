const { Router } = require('express');
const { articleController, categoryController, journalistController } = require('../controllers');

const router = Router();

router.get('/articles', articleController.getAll);
router.get('/articles/:id', articleController.getById);
router.post('/articles', articleController.create);
router.put('/articles/:id', articleController.update);
router.delete('/articles/:id', articleController.remove);

router.get('/categories', categoryController.getAll);
router.get('/categories/:id', categoryController.getById);

router.get('/journalists', journalistController.getAll);
router.get('/journalists/:id', journalistController.getById);

module.exports = router;
