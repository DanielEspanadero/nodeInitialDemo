const path = require('path');

const nivell1Get = (req, res) =>{
    res.sendFile(path.join(`${__dirname}../../public/html/nivell-1.html`));
};

module.exports = {
    nivell1Get
};