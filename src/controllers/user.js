require('dotenv').config();

const userGet = (req, res) => {
    res.status(200).json({
        nom: 'Daniel',
        edad: 29,
        url: `http://localhost:${process.env.PORT}/user`
    });
};

module.exports = { userGet };