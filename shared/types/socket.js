// shared/types/socket.js
export const SOCKET_EVENTS = {
    CONFIG_CHANGED: 'configChanged',
    LED_FRAME: 'ledFrame',
    CONNECTION_STATUS: 'connectionStatus',
};

export const SOCKET_MESSAGES = {
    CONNECT: 'connect',
    DISCONNECT: 'disconnect',
    ERROR: 'error',
};