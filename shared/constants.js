// shared/constants.js
export const API_BASE_URL = 'http://<Raspberry_Pi_IP>:3000/api';
export const SOCKET_URL = 'http://<Raspberry_Pi_IP>:3000';
export const DEFAULT_CONFIG = {
    numLeds: 50,
    numSwimmers: 2,
    pace: 0.5, // seconds
};
export const CONNECTION_TIMEOUT = 5000; // 5 seconds
export const MAX_SWIMMERS = 10; // Maximum number of swimmers supported
export const MIN_PACE = 0.1; // Minimum pace in seconds
export const MAX_PACE = 5; // Maximum pace in seconds