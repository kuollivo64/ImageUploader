const express = require("express");
const { corsNode } = require('./src/middlewares/cors');
require("dotenv").config();
const port = process.env.PORT || 4000;

const app = express();
//cors config
app.use(corsNode)
// Directorio Publico
app.use(express.static("./src/public"));

//Router Controller
app.use('/upload', require('./src/routers/ImageUoloadRoute'))

//Lectura y parseo del body
app.use(express.json());
app.listen(port, () => {
  console.log(`Server Image Uploader:[${port}]`);
});
