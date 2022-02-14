const { Router } = require('express');
const { timePost } = require('../controllers/time');
const router = Router();

router.post('/', timePost);

module.exports = router;