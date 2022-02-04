const { Router } = require('express');
const { uploadPost, uploadGet } = require('../controllers/upload');
const { upload } = require('../middlewares/upload');


const router = Router();

router.get('/', uploadGet);
router.post('/', upload, uploadPost);

module.exports = router;