//import your dependencies if needed 
import {l, isArgumentValid} from '../lib/utilities.js'
import {gReverseDigits} from './gReverseDigits.js'

export function iPalindrome(n, outputString, logLevel=3){
    if (!isArgumentValid(n, 'number')){return}

    const palindrome = gReverseDigits(n, outputString)

    if (n != palindrome){
        l.warn(` 9: The integer '${n}' is not a Palindrome!`, logLevel)
        return
    }
    
    l.success(` 9: The integer '${n}' is a Palindrome!`, logLevel)
}