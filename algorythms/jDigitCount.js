import {l, isArgumentValid} from '../lib/utilities.js'

export function jDigitCount(n, logLevel=3){
    if (!isArgumentValid(n, ['number'])){return}

    let n0 = n;
    let i = 0;
    while (n > 1){
        n = n / 10;
        i++;
    }

    l.info(`10: The number '${n0}' carries '${i}' digits.`, logLevel)
}