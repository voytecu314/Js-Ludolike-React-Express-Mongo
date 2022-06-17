const express =  require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const testModel = require('./models/testModel.js');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(5555, {
    cors: {
        origin: ['http://localhost:3000']
    }
});

io.on('connection', socket => {
    console.log(socket.id);
});

dotenv.config();
const port = process.env.PORT || 5000;
const DB_URL= process.env.DB_URL;

mongoose.connect(DB_URL).then(()=>console.log('Connected to DB')).catch(err=>console.log('DB -initial connection error: ',err.message));

//To handle errors after initial connection was established
mongoose.connection.on('disconnected', () => { console. log('DB-> lost connection'); }); 

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.post('/test', async (req, res) => {

    const test = new testModel(req.body);
    await test.save();

    res.json(test);
});

app.listen(port,()=>{

    console.log('Server listens on port ', port);

});