const { Router } = require('express');
const cors = require('cors');

const { timePost } = require('../controllers/time');
const { cacheControl } = require('../middlewares/cache-control');
const router = Router();

router.post('/',cors(), cacheControl, timePost);

module.exports = router;