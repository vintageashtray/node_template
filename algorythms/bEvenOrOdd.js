import {l, isArgumentValid} from '../lib/utilities.js'

export function bEvenOrOdd(n,logLevel=3){
    if (!isArgumentValid(n, ['number'])){return}

    if (n % 2 == 0){
        l.info(` 2: ${n} is Even`, logLevel)
    } else {
        l.info(` 2: ${n} is Odd`, logLevel)
    }
}