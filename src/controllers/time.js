const { dateAndTime } = require('../models/dateAndTime');

const timePost = (req, res) => {
    res.status(200).json({
        'date': dateAndTime('date'),
        'time': dateAndTime('time'),
    });
}

module.exports = {
    timePost
}