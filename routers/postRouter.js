const { listPost, createPost } = require("../controller/postController");

const {Router} = require ('express');
const {} = require('../controller/postController')
const router = Router();

router.get('/post',listPost);
router.post('/post',createPost);

module.exports = router