'use strict';

let express = require('express');
let socketio = require('socket.io');
let adaro = require('adaro');
let app = express();
let http = require('http');
let server = http.Server(app);
let io = socketio(server);

require('./server/connect')(io);

app.engine('dust', adaro.dust());
app.set('view engine', 'dust');

app.use(require('./server/routes'));

server.listen(process.env.PORT || 8000);
