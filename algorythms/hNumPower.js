//import your dependencies if needed 
import {l, isArgumentValid} from '../lib/utilities.js'

export function hNumPower(a, b, logLevel=3){
    if (!isArgumentValid(a, ['number']) || !isArgumentValid(b, ['number'])){return}

    let power = 1;
    
    const b_ = b * -1
    
    if (b < 0){
        const negPower = 1 / hNumPower(a, b_, 0)
        l.success(` 8: '${a}' to the power '${b}' is: '${negPower}'`, logLevel)
        return
    }

    for (let i = 1; i <= b; i++){
        power = power * a;
    }
    

    l.success(` 8: '${a}' to the power '${b}' is: '${power}'`, logLevel)
    return power
}