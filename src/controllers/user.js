import 'dotenv/config';

export const userGet = (req, res) => {
    res.status(200).json({
        nom: 'Daniel',
        edad: 29,
        url: `http://localhost:${process.env.PORT}/user`
    });
};