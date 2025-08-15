// raspberry-pi-server/src/services/socketService.js
const socketIo = require('socket.io');

let io;

const initSocket = (server) => {
    io = socketIo(server);

    io.on('connection', (socket) => {
        console.log('Client connected');

        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });
};

const emitConfigChanged = (config) => {
    if (io) {
        io.emit('configChanged', config);
    }
};

const emitLedFrame = (positions) => {
    if (io) {
        io.emit('ledFrame', { positions });
    }
};

module.exports = {
    initSocket,
    emitConfigChanged,
    emitLedFrame,
};