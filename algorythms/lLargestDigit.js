//import your dependencies if needed 
import {l, isArgumentValid} from '../lib/utilities.js'

export function lLargestDigit(n, logLevel=3){
    if (!isArgumentValid(n, 'number')){return}

    const n0 = n;
    let collector = 0;

    while (n != 0){
        let mod10 = n % 10;

        n = (n - mod10) / 10

        if (mod10 > collector){
            collector = mod10
        }
    }

    l.info(`12: The largest digit from '${n0}' is: '${collector}`, logLevel)
}