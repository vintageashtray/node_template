//import your dependencies if needed 
import {l, isArgumentValid} from '../lib/utilities.js'

export function fIsNumPrime(n){
    if (!isArgumentValid(n, 'number')){return}
    if (n === (0 || 1)){
        l.warn(` 6: 0 is divisible by every number, and 1 is only divisible by itself. They don't meet the requirement by mathematical definition!`)
        return
    }

    // The underlying logic, is we solve for numbers going up, if we reach a number that gives % = 0 that is not our number, then our number is not prime.
    let i = 2;

    while (i != n){
        let mod = n % i;
        
        if (mod === 0){
            l.warn(` 6: '${n}' is not a prime number!`)
            return
        }
        
        i++;
    }
    l.success(` 6: '${n}' is a prime number!`)
}