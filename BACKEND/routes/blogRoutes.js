const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const { authenticateUser, authorizeBloggerOrAdmin } = require('../middlewares/authMiddleware');


router.get('/', blogController.getPublicBlogs);
router.get('/:author', blogController.getAuthorBlogs);
router.post('/', authenticateUser, authorizeBloggerOrAdmin, blogController.createBlog);
router.put('/:id', authenticateUser, authorizeBloggerOrAdmin, blogController.updateBlog);
router.delete('/:id', authenticateUser, authorizeBloggerOrAdmin, blogController.deleteBlog);
router.post('/:id/like', authenticateUser, blogController.likeBlog);
router.post('/:id/comment', authenticateUser, blogController.commentOnBlog);
router.post('/:id/share', authenticateUser, blogController.shareBlog);

module.exports = router;
