import { dateAndTime } from '../models/dateAndTime';

export const timePost = (req, res) => {
    res.status(200).json({
        'date': dateAndTime('date'),
        'time': dateAndTime('time')
    });
};