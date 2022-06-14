const express =  require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

dotenv.config();
const port = process.env.PORT || 5000;
const DB_URL= process.env.DB_URL;

mongoose.connect(DB_URL).then(()=>console.log('Connected to DB')).catch(err=>console.log('DB -initial connection error: ',err.message));

//To handle errors after initial connection was established
mongoose.connection.on('disconnected', () => { console. log('DB-> lost connection'); }); 

app.listen(port,()=>{

    console.log('Server listens on port ', port);

});