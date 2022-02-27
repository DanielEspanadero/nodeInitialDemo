import { request, response } from 'express';

export const cacheControl = (req, res, next) => {
    res.header('Cache-control', 'no-cache');
    next()
};