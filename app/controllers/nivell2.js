const path = require('path');

const nivell2Get = (req, res) => {
    res.sendFile(path.join(`${__dirname}../../public/html/nivell-2.html`));
};

module.exports = {
    nivell2Get
};