const { Router } = require('express')

const { uploadImage } = require('../controllers/UploadImageController');

const upload = require("./../utils/multer");

const router = Router();

router.post('/image', upload.single("image"), uploadImage);

module.exports = router