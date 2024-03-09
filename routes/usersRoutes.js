const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { registerUser, loginUser, userInfo } = require('../controllers/usersController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user', protect, userInfo)

module.exports = router;