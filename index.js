var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/client'));

io.on('connection', function(socket){
  console.log('iPhone connected');
});

http.listen(8080, function(){
  console.log('listening on *:8000');
});