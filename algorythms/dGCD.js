//import your dependencies if needed 
import {l, isArgumentValid} from '../lib/utilities.js'

export function dGCD(a, b,logLevel=3){
    if (!isArgumentValid(a, ['number']) || !isArgumentValid(b, ['number'])){return}

    let GCD = a; //23
    let b_ = b; //97

    while (b_ != 0){
        let mod = GCD % b_; // GCD > b_ ?  GCD mod b_ : GCD
        GCD = b_;
        b_ = mod;
    }

    l.info(` 4: The GCD of '${a}' and '${b}' is ${GCD}`, logLevel)
    return GCD
}
