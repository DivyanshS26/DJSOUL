if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const app = express();
const mongoose = require ('mongoose');


mongoose.connect('mongodb://localhost:27017/Djsoul-app')
    .then(() => console.log('DB connected'))
    .catch((err) => console.log(err));









app.listen(process.env.PORT || 2323, () => {
    console.log("Server started at 2323");
})