//import your dependencies if needed 
import {l, isArgumentValid} from '../lib/utilities.js'
import {gReverseDigits} from './gReverseDigits.js'

export function kDigitSum(n, nolog, nostring){
    if (!isArgumentValid(n, 'number')){return}

    const sum = gReverseDigits(n, nolog, nostring)

    l.info(`11: The sum of all digits in '${n}' is: '${sum}'`)
}