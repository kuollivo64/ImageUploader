const express = require("express");
const { corsNode } = require('./src/middlewares/cors');
require("dotenv").config();

const app = express();
//cors config
app.use(corsNode)
// Directorio Publico
app.use(express.static("./src/public"));

//Router Controller
app.use('/upload', require('./src/routers/ImageUoloadRoute'))

//Lectura y parseo del body
app.use(express.json());
app.listen(process.env.PORT, () => {
    console.log(`Server Image Uploader:[${process.env.PORT}]`);
  });
