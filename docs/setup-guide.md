# Setup Guide for Swim Light Pacer Project

## Introduction
This guide provides instructions for setting up the Swim Light Pacer project, which consists of a React Native mobile app and a Raspberry Pi server. The app communicates with the server over Wi-Fi to configure pacing, swimmer count, and lane length, and visualizes live pacing lines in the pool.

## Prerequisites
- Raspberry Pi with Raspbian OS installed
- Node.js and npm installed on the Raspberry Pi
- A computer with Node.js and npm installed for the mobile app
- React Native development environment set up on your computer

## Project Structure
The project is organized into two main directories:
- `mobile-app`: Contains the React Native application.
- `raspberry-pi-server`: Contains the server code running on the Raspberry Pi.

## Setting Up the Raspberry Pi Server

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd swim-light-pacer/raspberry-pi-server
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure the Server**
   - Open `config.json` and set the desired configuration options, such as the port number.

4. **Start the Server**
   ```bash
   node src/server.js
   ```
   The server should now be running and accessible at `http://<raspberry-pi-ip>:<port>`.

## Setting Up the Mobile App

1. **Navigate to the Mobile App Directory**
   ```bash
   cd swim-light-pacer/mobile-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure API Endpoint**
   - Open `src/services/api.js` and set the base URL to point to your Raspberry Pi server:
     ```javascript
     const BASE_URL = 'http://<raspberry-pi-ip>:<port>/api';
     ```

4. **Run the Mobile App**
   ```bash
   npm start
   ```
   Follow the instructions to run the app on an emulator or physical device.

## Connecting the App to the Server
- Ensure that both the Raspberry Pi and the mobile device (or emulator) are connected to the same Wi-Fi network.
- Open the mobile app and navigate to the configuration screen to set the pace, swimmer count, and lane length.

## Conclusion
You have successfully set up the Swim Light Pacer project. You can now use the mobile app to control the LED pacing lights in the pool in real-time. For further development, refer to the API documentation in `docs/api-documentation.md`.