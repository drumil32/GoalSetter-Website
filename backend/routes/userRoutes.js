const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/authMiddlerware');
const {registerUser,getMe,loginUser} = require('../controllers/userControllers');

router.post('/',registerUser);
router.post('/login',loginUser);
router.get('/me',protect,getMe);

module.exports = router;