const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();


const storage = multer.diskStorage({
    destination: path.join(__dirname, '../uploads'),
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
});

const upload = app.use(multer({
    storage,
    fileFilter: function (req, file, cb) {

        var filetypes = /jpeg|jpg|png|gif/;
        var mimetype = filetypes.test(file.mimetype);
        var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            console.log(file)
            return cb(null, true);
        }
        cb('Error: La càrrega de fitxers només admet els tipus de fitxer jpg, png i gif.', false);
    },
}).single('image'));

module.exports = {
    upload
}