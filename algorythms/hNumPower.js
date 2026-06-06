//import your dependencies if needed 
import {l, isArgumentValid} from '../lib/utilities.js'

export function hNumPower(a, b){
    if (!isArgumentValid(a, 'number') || !isArgumentValid(b, 'number')){return}

    let power = 1;
    for (let i = 1; i <= b; i++){
        power = power * a;
    }

    l.info(` 8: '${a}' to the power '${b}' is: '${power}'`)
}