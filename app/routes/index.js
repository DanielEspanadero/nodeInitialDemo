const { Router } = require('express');
const {indexGet} = require('../controllers/index');

const router = Router();

router.get('/', indexGet);


module.exports = router;