//import your dependencies if needed 
import {l, isArgumentValid} from '../lib/utilities.js'
import {gReverseDigits} from './gReverseDigits.js'

export function kDigitSum(n, outputString, logLevel=3){
    if (!isArgumentValid(n, 'number')){return}

    const sum = gReverseDigits(n, outputString)

    l.info(`11: The sum of all digits in '${n}' is: '${sum}'`, logLevel)
}