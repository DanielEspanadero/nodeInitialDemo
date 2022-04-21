export const error404 = (req, res) => {
    res.status(404).json({
        msg: 'Error 404 - page not found'
    })
}