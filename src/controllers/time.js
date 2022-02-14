const { dateAndTime } = require('../models/dateAndTime');

const timePost = (req, res) => {
    res.json({
        'date': dateAndTime('date'),
        'time': dateAndTime('time'),
    });
}

module.exports = {
    timePost
}