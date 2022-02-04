const path = require('path');

const uploadGet = (req, res) => {
    res.sendFile(path.join(`${__dirname}../../public/html/upload.html`))
}

const uploadPost = (req, res) => {
    res.json({
        msg: 'Archivo enviado'
    })
};

module.exports = {
    uploadPost,
    uploadGet
};