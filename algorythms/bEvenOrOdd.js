//import your dependencies if needed 
import {l, isArgumentValid} from '../lib/utilities.js'

export function bEvenOrOdd(n){
    if (!isArgumentValid(n, 'number')){return}

    if (n % 2 == 0){
        l.info(` 2: ${n} is Even`)
    } else {
        l.info(` 2: ${n} is Odd`)
    }
}


/*
if(condition){  logic will run only when condition evaluates to true
// logic
}
*/