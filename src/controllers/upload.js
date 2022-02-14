const uploadPost = (req, res) => {
    if (!req.files.image) {
        res.status(400).send('No file uploaded. Expected "image" field and being non empty');
    }

    if (!req.files.image.mimetype.includes('image')) {
        res.status(400).send('File mimetype is not an image');
    }
    res.json({
        msg: 'POST succeeded'
    });
};

module.exports = { uploadPost };