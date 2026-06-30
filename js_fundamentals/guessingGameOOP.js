import {l} from '../lib/utilities.js'
import {_8getRandomInRange} from "./2Math.js"
import readline from "readline"
import {bEvenOrOdd} from '../algorythms/bEvenOrOdd.js'
import {fIsNumPrime} from '../algorythms/fIsNumPrime.js'
import {dGCD} from '../algorythms/dGCD.js'
class GuessingGame {
    //constructor()
    constructor(config){
        this.startRandomRange = config.startRandomRange
        this.endRandomRange = config.endRandomRange
        this.initialMaxAttempts = config.maxAttemptsAllowed
        this.randomNumber = _8getRandomInRange(config.startRandomRange,config.endRandomRange, 0)
        this.maxAttemptsAllowed = config.maxAttemptsAllowed
        
        this.isEven = bEvenOrOdd(this.randomNumber, 0)
        this.isPrime = fIsNumPrime(this.randomNumber, 0)
        this.divByFive = dGCD(5, this.randomNumber, 0)
        
        this.userAttempts = 0
        this.isGameOn = true
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        this.runGame()
    }
    
    runGame() {
        // Only ask the next question if the game is still on
        if (!this.isGameOn) {
            this.rl.close();
            return;
        }
        const qStr=`Guess a number between ${this.startRandomRange} and ${this.endRandomRange} - (Hint: ${this.divByFive == 5 || this.isEven == 'even' || this.isPrime ? 'it\'s ' : 'none'}${this.isEven == 'even' ? 'even' : ''}${this.isPrime ? 'a prime' : ''}${this.divByFive == 5 && (this.isEven == 'even' || this.isPrime) ? ' and ' : ''}${this.divByFive == 5 ? 'divisible by 5' : ''}) - (attempt:${this.userAttempts+1}/${this.maxAttemptsAllowed}): `
        this.rl.question(qStr, (numberInput) => {
            const num = Number(numberInput);
            
            // Validation
            const isValid = !isNaN(num) && Number.isFinite(num) && 
                            num >= this.startRandomRange && num <= this.endRandomRange;
            
            if (!isValid) {
                l.warn(`Please enter a valid Number between ${this.startRandomRange} and ${this.endRandomRange}`);
                this.runGame(); 
            }

            // Logic
            if (num === this.randomNumber) {
                l.success(`Spot on! You guessed it, the number was ${this.randomNumber}.`);
                this.isGameOn = false; // means game over
            } else {
                if (num < this.randomNumber) l.warn(`⬆️  It's higher️ than that`);
                if (num > this.randomNumber) l.warn(`️⬇️  It's lower than that`);
                
                this.userAttempts++;
                
                if (this.userAttempts >= this.maxAttemptsAllowed) {
                    l.fail(`Game over! You failed to guess ${this.randomNumber} in ${this.maxAttemptsAllowed} attempts.`);
                    this.isGameOn = false;// means game over
                }
            }

            // CRITICAL: Call the function again to continue the loop
            this.runGame()
        });
    }
}


const game = new GuessingGame(
    {
        startRandomRange:1,
        endRandomRange:100,
        maxAttemptsAllowed:5,
    })

// const game2 = new GuessingGame(
//     {
//         startRandomRange:1,
//         endRandomRange:50,
//         maxAttemptsAllowed:6,
//     }) 



// check if guessed number is even or prime or devisable by 5 (prompt that informs the user (do these checks) when asking about the number)
// board = [[" "," "," "],[" "," "," "],[" "," "," "]]
// sodoku = [
//     [" "," "," "],[" "," "," "],[" "," "," "],[" "," "," "],[" "," "," "],[" "," "," "],[" "," "," "],[" "," "," "],[" "," "," "],
//     [" "," "," "],[" "," "," "],[" "," "," "],[" "," "," "],[" "," "," "],[" "," "," "],[" "," "," "],[" "," "," "],[" "," "," "],
//     [" "," "," "],[" "," "," "],[" "," "," "],[" "," "," "],[" "," "," "],[" "," "," "],[" "," "," "],[" "," "," "],[" "," "," "],
// ]
// row
// col
// board[row][col]="x|o"
/**
 *    0  1  2
 * 0 [x][x][o]
 * 1 [ ][ ][ ]
 * 2 [ ][ ][ ]
 * 
 * it's x's turn : 
 *  enter position row :0 (row 0 is full)
 *  enter position col :
 *  
 * after evry round check if game is over
 *  game is over when either x or o wins or the board is full
 *  if game is 
 * 
 * 
 * 
 *  * 0  1  2   3  4  5   6  7  8
 * 0 [1][ ][9]|[2][7][ ]|[x][x][o]
 * 1 [ ][ ][ ]|[ ][ ][ ]|[ ][ ][ ]
 * 2 [ ][ ][ ]|[ ][ ][ ]|[ ][ ][ ]
 * -------------------------------
 * 3 [ ][x][ ]|[ ][ ][ ]|[ ][ ][ ]
 * 4 [ ][ ][ ]|[ ][ ][ ]|[ ][ ][ ]
 * 5 [ ][ ][ ]|[ ][ ][ ]|[ ][ ][ ]
 * -------------------------------
 * 6 [ ][ ][ ]|[ ][ ][ ]|[ ][ ][ ]
 * 7 [ ][ ][ ]|[ ][ ][ ]|[ ][ ][ ]
 * 8 [ ][ ][ ]|[ ][ ][ ]|[ ][ ][ ]
 * 
 */