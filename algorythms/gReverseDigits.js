//import your dependencies if needed 
import {l, isArgumentValid} from '../lib/utilities.js'

export function gReverseDigits(n, nolog, outputNumber){
    //return n.toString().split('').reverse().join('')
    //if number has too many ending digits ex 19000 👆
    //otherwise do the while loop % 10 approach

    if (!isArgumentValid(n, 'number')){return}

    const n0 = n
    let reverse = outputNumber ? 0 : "" ;

    while (n != 0){
        let mod10 = n % 10;

        reverse = reverse + mod10

        n = (n - mod10) / 10
    }

    // reverse = parseInt(reverse);  // we can't have this, zeroes would be lost otherwise

    if (nolog != 1){
        l.info(` 7: The reversed digits of '${n0}' are '${reverse}'`)
    }

    return reverse
}

export function reverseDigits(n){
    if (!isArgumentValid(n, 'number')){return}

    const n0 = n
    let reverse;
    if (nostring != 1){
        reverse = "";
    } else {
        reverse = 0;
    }

    while (n != 0){
        let mod10 = n % 10;

        reverse = reverse + mod10

        n = (n - mod10) / 10
    }
    return reverse
}