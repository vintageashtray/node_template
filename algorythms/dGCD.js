//import your dependencies if needed 
import {l, isArgumentInvalid} from '../lib/utilities.js'

export function dGCD(a, b){
    if (isArgumentInvalid(a, 'number') || isArgumentInvalid(b, 'number')){return}

    let GCD = a; //23
    let b_ = b; //97

    while (b_ != 0){
        let mod = GCD % b_; // GCD > b_ ?  GCD mod b_ : GCD
        GCD = b_;
        b_ = mod;
    }

    l.info(` 4: The GCD of '${a}' and '${b}' is ${GCD}`)
    return GCD
}
