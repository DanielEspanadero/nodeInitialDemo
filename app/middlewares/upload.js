const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();


const storage = multer.diskStorage({
    destination: path.join(__dirname, '../../public/uploads'),
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = app.use(multer({
    storage,
        fileFilter: function (req, file, cb) {

        var filetypes = /jpeg|jpg|png|gif/;
        var mimetype = filetypes.test(file.mimetype);
        var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: File upload only supports the following filetypes - " + filetypes);
    },
}).single('image'));

module.exports = {
    upload
}