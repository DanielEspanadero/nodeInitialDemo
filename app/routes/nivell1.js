const { Router } = require('express');
const { nivell1Get } = require('../controllers/nivell1');

const router = Router();

router.get('/', nivell1Get);

module.exports = router;