const { response, request } = require('express');

const usersGet = (req = request, res = response) => { 
    const { name, age, url } = req.query;

    res.json({
        name: 'Daniel Españadero',
        age: 29,
        url: `http://localhost:${process.env.PORT}/user`
    })
};

module.exports = {
    usersGet
}