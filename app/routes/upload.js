const { Router } = require('express');
const { uploadPost } = require('../controllers/upload');
const { upload } = require('../middlewares/upload');


const router = Router();


router.post('/', upload, uploadPost);

module.exports = router; 