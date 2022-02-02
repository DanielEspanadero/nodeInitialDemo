const uploadPost = (req, res)=>{
    if (err instanceof multer.MulterError) {
        res.json({
            prueba: 'Esto es un error'
        })
        // Un error de Multer ocurrió durante la subida.
    } else if (err) {
        res.json({
            prueba2:'Otro error es esto'
        })
        // Un error desconocido ocurrió durante la subida.
    }
};

module.exports = {
    uploadPost
};