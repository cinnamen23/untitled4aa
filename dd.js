/**
 * Created by topsg_000 on 2017-07-18.
 */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log("유져 들어옴")

    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
    });
});
http.listen(3000, function(){
    console.log('listening on *:3000');
});