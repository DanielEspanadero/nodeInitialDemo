const path = require('path');

const nivell3Get = (req, res) => {
    res.sendFile(path.join(`${__dirname}../../public/html/nivell-3.html`));
};

module.exports = {
    nivell3Get
};