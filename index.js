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
import {sValuePalindrome} from './algorythms/sValuePalindrome.js'

const LOGLEVEL={
    ALL:3,
    WARNINGS:1,
    ERRORS:2,
    NONE:0
}
//--------------------1
aSumNthNumber(5,LOGLEVEL.ALL)

//test the imported function 

//sumNthNumber(5) //success case `ℹ️  the nth Sum of 5 is 15`

//sumNthNumber('5s') //fail case `❌ invalid argument '5s' of type 'string'`


//--------------------2
bEvenOrOdd(5,LOGLEVEL.ALL)


//--------------------3
cFactorialLoop(7,LOGLEVEL.ALL)

// cFactorialRecursion(7)


//--------------------4
dGCD(252, 105,LOGLEVEL.ALL)


//--------------------5
eFibonacciSeq(6,LOGLEVEL.ALL)


//--------------------6
fIsNumPrime(29,LOGLEVEL.ALL)


//--------------------7
gReverseDigits(1234,1,LOGLEVEL.ALL)


//--------------------8
hNumPower(2, -3,LOGLEVEL.ALL)


//--------------------9
iPalindrome(121, 1,LOGLEVEL.ALL)


//--------------------10
jDigitCount(567,LOGLEVEL.ALL)


//--------------------11
kDigitSum(456, 0,LOGLEVEL.ALL)


//--------------------12
lLargestDigit(2947,LOGLEVEL.ALL)


//--------------------13
mAverage([10, 20, 30],LOGLEVEL.ALL)


//--------------------14
nIsPowerOfTwo(16,LOGLEVEL.ALL)


//--------------------15
oDecimalToBinary(25,LOGLEVEL.ALL)


//--------------------16
pSimpleInterest(1000, 5, 24,LOGLEVEL.ALL)


//--------------------17
qUOfN(0,LOGLEVEL.ALL)


//--------------------18
rPascalTriangle(11,LOGLEVEL.NONE)


//--------------------19
sValuePalindrome('Radar',LOGLEVEL.ALL)


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