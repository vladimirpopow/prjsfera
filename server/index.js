require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const router = require('./router/index');
const errormiddleware = require('./middlewares/error-middleware');

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use('/api', router);
app.use(errormiddleware);


const start = async()=>{
    try {
        await mongoose.connect(process.env.DB_URL);
        app.listen(PORT, ()=>{
           console.log( `server start on PORT =  ${PORT}`)
        })
    } catch (err) {
        console.log(err)
    }
}

start()