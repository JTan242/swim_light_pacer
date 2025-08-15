import { io } from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://<Raspberry_Pi_IP>:3000'; // Replace with your Raspberry Pi server IP

const socket = io(SOCKET_SERVER_URL);

const SocketService = {
    onConfigChanged: (callback) => {
        socket.on('configChanged', callback);
    },
    onLedFrame: (callback) => {
        socket.on('ledFrame', callback);
    },
    emitConfigChange: (config) => {
        socket.emit('configChanged', config);
    },
    emitStartPacing: () => {
        socket.emit('start');
    },
    emitStopPacing: () => {
        socket.emit('stop');
    },
    disconnect: () => {
        socket.disconnect();
    },
};

export default SocketService;