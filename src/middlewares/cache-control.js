const { request, response } = require('express');

const cacheControl = (req, res, next) => {
    res.header('Cache-control', 'no-cache');
    next()
}

module.exports = { cacheControl };