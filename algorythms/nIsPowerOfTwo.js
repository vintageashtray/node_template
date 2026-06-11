//import your dependencies if needed 
import {l, isArgumentValid} from '../lib/utilities.js'

export function nIsPowerOfTwo(n, logLevel=3){
    if (!isArgumentValid(n, ['number'])){return}

    if (n === 0){
        l.warn(`14: '0' is mathematically impossible. Pick a number greater than 2.`, logLevel)
        return
    }

    const n0 = n;

    let k = 0;
    while (n >= 2){
        k++;

        n = n / 2;
    }
    l.info(`14: n: ${n}, k: ${k}, 'n % 2': ${n % 2}, 'n / 2': ${n / 2}`, logLevel)

    if (((n * 2) % 2) != 0){
        l.fail(`14: No, '${n0}' can not be expressed as 2^k`, logLevel)
        return
    }
    
    l.success(`14: Yes, '${n0}' can be expressed as 2^${k}.`, logLevel)
}