const { Router } = require('express');
const { nivell3Get } = require('../controllers/nivell3');

const router = Router();

router.get('/', nivell3Get);

module.exports = router;