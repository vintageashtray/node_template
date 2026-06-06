//import your dependencies if needed 
import {l, isArgumentInvalid} from '../lib/utilities.js'

export function dGCD(a, b){
    if (isArgumentInvalid(a, 'number') || isArgumentInvalid(b, 'number')){return}

    let i = 0;
    let a0 = a;
    let b0 = b;

    while (b != 0){
        i++;
        // l.info(`i, '${i}', a, '${a}', b, '${b}'`)
        let mod = a % b;
        a = b;
        b = mod;
    }
    l.info(` 4: The GCD of '${a0}' and '${b0}' is ${a}`)
    return a
}