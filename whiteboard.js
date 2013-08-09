/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = require('http').createServer(handler)
,fs = require('fs')
,io = require('socket.io').listen(app)
 
app.listen(8081);
 
function handler(req, res) {
    fs.readFile('whiteboard.html', function(err, data) {
        res.writeHead(200);
        res.end(data);
    });
}
 
io.sockets.on('connection', function(socket) {
    socket.on('draw', function(data) { socket.broadcast.emit('draw', data); });
});