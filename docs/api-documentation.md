# API Documentation for Swim Pacing Server

## Overview
This document provides detailed information about the RESTful API and WebSocket endpoints available in the Swim Pacing Server. The API allows a React Native mobile app to communicate with a Raspberry Pi server to configure pacing, swimmer count, and lane length, as well as to visualize live pacing lines in the pool.

## Base URL
The base URL for the API is:
```
http://<Raspberry_Pi_IP>:3000/api
```

## Endpoints

### 1. Configuration Endpoints

#### POST /config
- **Description**: Set the configuration for the pacing system.
- **Request Body**:
  ```json
  {
    "numLeds": 50,
    "numSwimmers": 2,
    "pace": 0.5
  }
  ```
- **Response**:
  - **Status**: 200 OK
  - **Body**:
  ```json
  {
    "status": "ok",
    "config": {
      "numLeds": 50,
      "numSwimmers": 2,
      "pace": 0.5
    }
  }
  ```

### 2. Pacing Control Endpoints

#### POST /start
- **Description**: Start the pacing simulation.
- **Response**:
  - **Status**: 200 OK
  - **Body**:
  ```json
  {
    "status": "started"
  }
  ```

#### POST /stop
- **Description**: Stop the pacing simulation.
- **Response**:
  - **Status**: 200 OK
  - **Body**:
  ```json
  {
    "status": "stopped"
  }
  ```

### 3. Status Endpoint

#### GET /status
- **Description**: Get the current status of the pacing system.
- **Response**:
  - **Status**: 200 OK
  - **Body**:
  ```json
  {
    "numLeds": 50,
    "numSwimmers": 2,
    "pace": 0.5,
    "positions": [0, 1],
    "running": true
  }
  ```

## WebSocket Events

### Connection
- **Event**: `connection`
- **Description**: Triggered when a client connects to the WebSocket server.

### Config Changed
- **Event**: `configChanged`
- **Description**: Emitted when the configuration is updated.
- **Payload**:
```json
{
  "numLeds": 50,
  "numSwimmers": 2,
  "pace": 0.5
}
```

### LED Frame
- **Event**: `ledFrame`
- **Description**: Emitted with the current positions of the swimmers.
- **Payload**:
```json
{
  "positions": [0, 1]
}
```

## Error Handling
In case of an error, the server will respond with a status code and an error message:
- **Response**:
  - **Status**: 400 Bad Request (or other relevant status)
  - **Body**:
  ```json
  {
    "error": "Error message describing the issue"
  }
  ```

## Conclusion
This API documentation provides a comprehensive overview of the endpoints and WebSocket events available for the Swim Pacing Server. For further assistance, please refer to the setup guide or contact the development team.