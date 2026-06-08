//1 import you file from algorythms folder
import {aSumNthNumber, sumNthNum} from './algorythms/aSumNthNumber.js'
import {bEvenOrOdd} from './algorythms/bEvenOrOdd.js'
import {cFactorialLoop, cFactorialRecursion} from './algorythms/cFactorial.js'
import {dGCD} from './algorythms/dGCD.js'
import {eFibonacciSeq} from './algorythms/eFibonacciSeq.js'
import {fIsNumPrime} from './algorythms/fIsNumPrime.js'
import {gReverseDigits} from './algorythms/gReverseDigits.js'
import {hNumPower} from './algorythms/hNumPower.js'
import {iPalindrome} from './algorythms/iPalindrome.js'
import {jDigitCount} from './algorythms/jDigitCount.js'
import {kDigitSum} from './algorythms/kDigitSum.js'
import {lLargestDigit} from './algorythms/lLargestDigit.js'
import {mAverage} from './algorythms/mAverage.js'
import {nIsPowerOfTwo} from './algorythms/nIsPowerOfTwo.js'
import {oDecimalToBinary} from './algorythms/oDecimalToBinary.js'
import {pSimpleInterest} from './algorythms/pSimpleInterest.js'
import {qUOfN} from './algorythms/qUOfN.js'
import { rPascalTriangle } from './algorythms/rPascalTriangle.js'
const LOGLEVEL={
    ALL:3,
    WARNINGS:1,
    ERRORS:2,
    NONE:0
}
aSumNthNumber(5,LOGLEVEL.NONE)

//test the imported function 

//sumNthNumber(5) //success case `ℹ️  the nth Sum of 5 is 15`

//sumNthNumber('5s') //fail case `❌ invalid argument '5s' of type 'string'`


//--------------------
bEvenOrOdd(5,LOGLEVEL.NONE)


//--------------------
cFactorialLoop(7,LOGLEVEL.NONE)

// cFactorialRecursion(7)


//--------------------
dGCD(252, 105,LOGLEVEL.NONE)


//--------------------
eFibonacciSeq(6,LOGLEVEL.NONE)


//--------------------
fIsNumPrime(29,LOGLEVEL.NONE)


//--------------------
gReverseDigits(1234,1,LOGLEVEL.NONE)


//--------------------
hNumPower(2, 5,LOGLEVEL.NONE)


//--------------------
iPalindrome(121, 1,LOGLEVEL.NONE)


//--------------------
jDigitCount(567,LOGLEVEL.NONE)


//--------------------
kDigitSum(456, 0,LOGLEVEL.NONE)


//--------------------
lLargestDigit(2947,LOGLEVEL.NONE)


//--------------------
mAverage([10, 20, 30],LOGLEVEL.NONE)


//--------------------
nIsPowerOfTwo(16,LOGLEVEL.NONE)


//--------------------
oDecimalToBinary(25,LOGLEVEL.NONE)


//--------------------
pSimpleInterest(1000, 5, 24,LOGLEVEL.NONE)


//--------------------
qUOfN(0,LOGLEVEL.NONE)


//--------------------
rPascalTriangle(11,LOGLEVEL.NONE)


// function areWeThereYet(current, limit) {
//     console.log(`we are at step ${current} of ${limit}`)
//     if (current < limit) {
//         current++
//         areWeThereYet(current, limit)
//     }else{
//         console.log("------------Done!")
//     }
// }
// areWeThereYet(-3, 14)