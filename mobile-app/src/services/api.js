import axios from 'axios';

const API_BASE_URL = 'http://<Raspberry_Pi_IP_Address>:3000/api'; // Replace with your Raspberry Pi's IP address

export const startPacing = async () => {
    try {
        const response = await axios.post(`${API_BASE_URL}/start`);
        return response.data;
    } catch (error) {
        throw new Error('Error starting pacing: ' + error.message);
    }
};

export const stopPacing = async () => {
    try {
        const response = await axios.post(`${API_BASE_URL}/stop`);
        return response.data;
    } catch (error) {
        throw new Error('Error stopping pacing: ' + error.message);
    }
};

export const getStatus = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/status`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching status: ' + error.message);
    }
};

export const setConfig = async (config) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/config`, config);
        return response.data;
    } catch (error) {
        throw new Error('Error setting configuration: ' + error.message);
    }
};