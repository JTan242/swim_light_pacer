class LedStripSimulator {
    constructor(numLeds = 60, numSwimmers = 8) {
        this.numLeds = numLeds || parseInt(process.env.LED_COUNT) || 60;
        this.numSwimmers = numSwimmers;
        this.laneCount = numSwimmers;
        this.positions = Array(numSwimmers).fill(0);
        this.speeds = Array(numSwimmers).fill(1); // LED positions per step
        this.running = false;
        this.stepCounter = 0;
        
        console.log(`🔧 LED Simulator initialized: ${this.numLeds} LEDs, ${this.numSwimmers} swimmers`);
    }

    step() {
        if (!this.running) return this.positions;
        
        this.stepCounter++;
        this.positions = this.positions.map((pos, index) => {
            const newPos = pos + this.speeds[index];
            return newPos >= this.numLeds ? 0 : newPos; // Reset to start when reaching end
        });
        
        return [...this.positions];
    }

    setPace(pace) {
        // pace is in seconds per length
        // Convert to LED positions per step (assuming 60 FPS)
        const stepsPerLength = pace * 60; // 60 FPS
        const speed = this.numLeds / stepsPerLength;
        this.speeds.fill(speed);
        console.log(`🏊 Pace set to ${pace}s per length (${speed.toFixed(2)} LEDs/step)`);
    }

    setSwimmerSpeeds(speeds) {
        if (speeds.length === this.numSwimmers) {
            this.speeds = [...speeds];
            console.log(`⚡ Individual swimmer speeds set:`, speeds);
        }
    }

    start() {
        this.running = true;
        console.log(`▶️  Simulator started`);
        return this.positions;
    }

    stop() {
        this.running = false;
        console.log(`⏹️  Simulator stopped`);
        return this.positions;
    }

    reset() {
        this.positions = Array(this.numSwimmers).fill(0);
        this.stepCounter = 0;
        console.log(`🔄 Simulator reset`);
        return this.positions;
    }

    getStatus() {
        return {
            running: this.running,
            positions: this.positions,
            speeds: this.speeds,
            stepCounter: this.stepCounter,
            numLeds: this.numLeds,
            numSwimmers: this.numSwimmers
        };
    }
}

module.exports = LedStripSimulator;