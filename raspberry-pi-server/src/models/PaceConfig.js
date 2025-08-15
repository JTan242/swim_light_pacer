class PaceConfig {
    constructor(numLeds, numSwimmers, pace) {
        this.numLeds = numLeds;
        this.numSwimmers = numSwimmers;
        this.pace = pace; // in seconds
    }

    validate() {
        if (this.numLeds <= 0) {
            throw new Error('Number of LEDs must be greater than 0');
        }
        if (this.numSwimmers <= 0) {
            throw new Error('Number of swimmers must be greater than 0');
        }
        if (this.pace <= 0) {
            throw new Error('Pace must be greater than 0');
        }
    }
}

module.exports = PaceConfig;