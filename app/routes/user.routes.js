const { Router } = require('express');
const { usersGet } = require('../controllers/users.controllers');

const router = Router();

router.get('/', usersGet)

module.exports = router;