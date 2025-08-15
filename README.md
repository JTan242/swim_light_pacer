# Swim Light Pacer

This project aims to replicate the functionality of lamalights for swim pacing using a React Native app that communicates with a Raspberry Pi server. The app allows coaches to configure pace, swimmer count, and lane length while visualizing live pacing lines in the pool.

## Project Structure

```
swim-light-pacer
├── mobile-app
│   ├── src
│   │   ├── components
│   │   ├── screens
│   │   ├── services
│   │   ├── utils
│   │   └── App.js
│   ├── package.json
│   ├── metro.config.js
│   ├── babel.config.js
│   └── index.js
├── raspberry-pi-server
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── services
│   │   ├── models
│   │   ├── middleware
│   │   └── server.js
│   ├── package.json
│   └── config.json
├── shared
│   ├── types
│   └── constants.js
├── docs
│   ├── api-documentation.md
│   └── setup-guide.md
└── README.md
```

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- React Native development environment set up (for mobile app)
- Raspberry Pi with Raspbian OS (for server)

### Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd swim-light-pacer
   ```

2. **Set up the mobile app:**
   - Navigate to the `mobile-app` directory:
     ```
     cd mobile-app
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the mobile app:
     ```
     npm start
     ```

3. **Set up the Raspberry Pi server:**
   - Navigate to the `raspberry-pi-server` directory:
     ```
     cd raspberry-pi-server
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the server:
     ```
     npm start
     ```

## Usage

- Use the mobile app to configure the pace, swimmer count, and lane length.
- The app will communicate with the Raspberry Pi server to visualize live pacing lines in the pool.
- Coaches can monitor the connection status and adjust settings in real-time.

## API Documentation

Refer to `docs/api-documentation.md` for detailed information on the available API endpoints.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.