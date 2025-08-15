// raspberry-pi-server/src/services/ledService.js
const LedStripSimulator = require('./simulator');

class LedService {
    constructor(config) {
        this.config = config || {};
        this.simulator = new LedStripSimulator(
            this.config.numLeds || 60, 
            this.config.numSwimmers || 8
        );
        console.log(`💡 LED Service initialized with ${this.config.numLeds || 60} LEDs`);
    }

    start() {
        const positions = this.simulator.start();
        console.log('💡 LED Service started');
        return positions;
    }

    stop() {
        const positions = this.simulator.stop();
        console.log('💡 LED Service stopped');
        return positions;
    }

    step() {
        if (this.simulator.running) {
            return this.simulator.step();
        }
        return this.simulator.positions;
    }

    reset() {
        const positions = this.simulator.reset();
        console.log('💡 LED positions reset');
        return positions;
    }

    getPositions() {
        return this.simulator.positions;
    }

    getStatus() {
        return this.simulator.getStatus();
    }

    setPace(pace) {
        this.simulator.setPace(pace);
        return this.getStatus();
    }

    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
        
        // If LED count changed, recreate simulator
        if (newConfig.numLeds && newConfig.numLeds !== this.simulator.numLeds) {
            const wasRunning = this.simulator.running;
            this.simulator = new LedStripSimulator(
                newConfig.numLeds,
                this.config.numSwimmers || this.simulator.numSwimmers
            );
            if (wasRunning) {
                this.simulator.start();
            }
        }
        
        console.log('💡 LED Service configuration updated:', this.config);
        return this.getStatus();
    }
}

module.exports = LedService;