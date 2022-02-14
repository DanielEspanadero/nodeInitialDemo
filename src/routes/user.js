const { Router } = require('express');
const { userGet } = require('../controllers/user');

const router = Router();

router.get('/', userGet);

module.exports = router;