const path = require('path');

const indexGet = (req, res) =>{
    res.sendFile(path.join(`${__dirname} ../../public/index.html`));
};

module.exports = {
    indexGet
};