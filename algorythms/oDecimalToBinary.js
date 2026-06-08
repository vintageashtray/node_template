//import your dependencies if needed 
import {l, isArgumentValid} from '../lib/utilities.js'

export function oDecimalToBinary(n, logLevel=3){
    if (!isArgumentValid(n, 'number')){return}

    const n0 = n;

    //return n.toString().split('').reverse().join('')
    let bin = "";

    while (n != 0){
    const mod = n % 2;
    n = (n - mod) / 2;
    bin = bin + mod;
    }

    bin = bin.split('').reverse().join('')

    l.success(`15: The equivalent of '${n0}' in binary is: '${bin}'`, logLevel)
}