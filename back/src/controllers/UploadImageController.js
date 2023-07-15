const { response, request } = require("express");
require("dotenv").config();

const cloudinary = require('./../config/cloudinaryConfig')

const uploadImage = (req = request, res = response) => {
    try {
        const url_data = req.file.path;
        const start = Date.now();
        setTimeout( async () => {
            const end = Date.now();
            const duration = end - start;
            const { url } = await cloudinary.uploader.upload(url_data, { folder: process.env.FOLDER_NAME });
            res.json({ msg: "Image Upload", url, duration });
        }, 2000);
    } catch (error) {
        res.json({ msg: "Error Controller - K64 " });
    }
}

module.exports = {
    uploadImage
}