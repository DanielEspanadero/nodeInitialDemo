const { Router } = require('express');
const { nivell2Get } = require('../controllers/nivell2');

const router = Router();

router.get('/', nivell2Get);

module.exports = router;