import {l} from "../lib/utilities.js"
import {_8getRandomInRange} from "./2Math.js"
import readline from "readline"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export const GuessingGame={
    startRandomRange:1,
    endRandomRange:50,
    initialMaxAttempts:6,
    randomNumber:0,
    userAttempts:0,
    maxAttemptsAllowed:6,
    isGameOn:true,
    startGame(){
        //check if isGameOn is true and make it true if not already
        this.isGameOn = true
        //reset game status
        this.resetGameStats()
        // call runGameLoop
        this.runGameLoop()
    },
    runGameLoop() {
        // l.info(`game is looping`);
        this.processUserGuess(); 
    },
    resetGameStats(){
        this.userAttempts=0,
        this.randomNumber = _8getRandomInRange(this.startRandomRange,this.endRandomRange, 0); //between 1 and 100 inclussive
    },
    processUserGuess() {
    // Only ask the next question if the game is still on
    if (!this.isGameOn) {
        rl.close();
        return;
    }

    rl.question(`Guess a Number Between ${this.startRandomRange} and ${this.endRandomRange}: (attempt:${this.userAttempts+1}/${this.maxAttemptsAllowed}) `, (numberInput) => {
        const num = Number(numberInput);
        
        // Validation
        const isValid = !isNaN(num) && Number.isFinite(num) && 
                        num >= this.startRandomRange && num <= this.endRandomRange;
        
        if (!isValid) {
            l.warn(`Please enter a valid Number between ${this.startRandomRange} and ${this.endRandomRange}`);
            // Recursively call again immediately for invalid input without counting an attempt
            return this.processUserGuess(); 
        }

        // Logic
        if (num === this.randomNumber) {
            l.success(`Spot on! You guessed it, the number was ${this.randomNumber}`);
            this.isGameOn = false;
        } else {
            if (num < this.randomNumber) l.warn(`It's higher than that`);
            if (num > this.randomNumber) l.warn(`It's lower than that`);
            
            this.userAttempts++;
            
            if (this.userAttempts >= this.maxAttemptsAllowed) {
                l.fail(`Game over! You failed to guess ${this.randomNumber} in ${this.maxAttemptsAllowed} attempts.`);
                this.isGameOn = false;
            }
        }

        // CRITICAL: Call the function again to continue the loop
        this.runGameLoop(); 
    });
}
}

GuessingGame.startGame()