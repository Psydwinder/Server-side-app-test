const express = require('express');

const server = express();

server.use(express.static('public'));
server.use(express.json({limit: '1mb'}));

server.post('/',(request,response)=>{
    console.log('I got a request!');
    console.log(request.body);
    const data = request.body;
    response.json({
        status: 'success',
        latitude: data.lat,
        longitude: data.long,
    })
})

module.exports = server;