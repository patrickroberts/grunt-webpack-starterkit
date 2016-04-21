'use strict';

let adapter = require('socket.io-redis');

module.exports = function connect(io) {

  if (typeof process.env.REDIS_URL === 'string') {
    io.adapter(adapter(process.env.REDIS_URL));
  }

  io.on('connection', function(socket) {
    socket.on('request', function() {
      socket.emit('response', 'You have received this message via socket.io!');
    });
  });

};
