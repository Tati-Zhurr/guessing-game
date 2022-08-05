class GuessingGame {
    constructor() {}


    setRange(min, max) {
        this.min = min;
        this.max = max;
       return this.min, this.max;

    }

    guess() {
        this.number = (this.min + (Math.ceil((this.max-this.min)/2)))
    return this.number; 
    }

    lower() {
        this.max = this.number;
     return this.max;

    }

    greater() {
        this.min = this.number;
        return this.min;
    }
}

module.exports = GuessingGame;
