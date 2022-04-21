export const uploadPost = (req, res) => {
    res.status(201).json({
        message: "File uploaded successfully!",
        file: req.file
    });
};