const socketio = require('socket.io')
const parserStringArray = require('./utils/parserStringAsArray');

const connection = [];

exports.setupWebsocket = (server) => {
  const io = socketio(server);

  io.on('connection', socket => {
    const { latitude, longitude, techs } = socket.handshake.query;

    connection.push({
      id: socket.id,
      coordinates: {
        latitude: Number(latitude),
        longitude: Number(longitude),
      },
      techs: parserStringArray(techs),
    });

  });
};