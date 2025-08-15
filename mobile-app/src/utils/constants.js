const API_BASE_URL = 'http://<raspberry-pi-ip>:3000/api'; // Replace <raspberry-pi-ip> with the actual IP address of the Raspberry Pi
const SOCKET_URL = 'ws://<raspberry-pi-ip>:3000'; // Replace <raspberry-pi-ip> with the actual IP address of the Raspberry Pi

const DEFAULT_CONFIG = {
    numLeds: 50,
    numSwimmers: 2,
    pace: 0.5, // seconds
};

const CONNECTION_STATUS = {
    CONNECTED: 'Connected',
    DISCONNECTED: 'Disconnected',
    CONNECTING: 'Connecting',
};

export { API_BASE_URL, SOCKET_URL, DEFAULT_CONFIG, CONNECTION_STATUS };