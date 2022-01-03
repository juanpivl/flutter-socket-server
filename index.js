const { config } = require('dotenv');

const { env } = require('process');



const path = require('path');
const express = require('express');
require ('dotenv').config();

//App de express
const app = express();

//node server
const server = require('http').createServer(app);
module.exports.io =require('socket.io')(server);
require('./sockets/socket');





//Path publico
const publicPath = path.resolve(__dirname,'public');
app.use(express.static(publicPath));


server.listen(process.env.PORT,(err)=>{
    if(err)throw new Error(err);
    console.log('Servidor corriendos en puerto',process.env.PORT);
});