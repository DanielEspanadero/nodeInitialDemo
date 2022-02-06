const path = require('path');

const uploadGet = (req, res) => {
    res.sendFile(path.join(`${__dirname}../../public/html/upload.html`))
}

const uploadPost = (req, res) => {
    res.sendFile(path.join(`${__dirname}../../public/html/uploaded.html`));
};

module.exports = {
    uploadPost,
    uploadGet
};