const express =  require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes/routes.js');
const app = express();
//const http = require('http').Server(app);
const http = require('http');
const server = http.createServer(app);
const socketIo = require("socket.io");
const io = socketIo(server, {
    cors: {
        origin: ['http://localhost:3000','http://localhost:3001']
    }
});


io.on('connection', socket => {
    console.log(socket.id);
    socket.emit("FromAPI", socket.id);
});

dotenv.config();
const port = process.env.PORT || 5000;
const DB_URL= process.env.DB_URL;

mongoose.connect(DB_URL).then(()=>console.log('Connected to DB')).catch(err=>console.log('DB -initial connection error: ',err.message));

//To handle errors after initial connection was established
mongoose.connection.on('disconnected', () => { console. log('DB-> lost connection'); }); 

app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin: ['http://localhost:3000','http://localhost:3001']
}));
app.use('/', routes);

server.listen(port,()=>{

    console.log('Server listens on port ', port);

});