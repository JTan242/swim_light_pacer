const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const configRoutes = require('./routes/api');
const errorHandler = require('./middleware/errorHandler');
const LedStripSimulator = require('./services/simulator');

const PORT = process.env.PORT || 3001;
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'Server running', 
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

app.use('/api', configRoutes);
app.use(errorHandler);

let simulator = new LedStripSimulator(50, 2); // Default values

// Socket connection handling
io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);
    
    // Emit server status to newly connected client
    socket.emit('server-status', {
        status: 'connected',
        timestamp: new Date().toISOString(),
        ledCount: simulator.ledCount,
        laneCount: simulator.laneCount
    });
    
    // Handle pacing control
    socket.on('start-pacing', (data) => {
        console.log('Starting pacing with config:', data);
        // Implement pacing logic here
    });
    
    socket.on('stop-pacing', () => {
        console.log('Stopping pacing');
        // Implement stop logic here
    });
    
    socket.on('update-config', (config) => {
        console.log('Updating configuration:', config);
        // Update simulator config
    });
    
    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});

server.listen(PORT, () => {
    console.log(`🏊 Swim Pacer Server running on port ${PORT}`);
    console.log(`📡 WebSocket server ready for connections`);
    console.log(`🔗 Health check available at http://localhost:${PORT}/api/health`);
});