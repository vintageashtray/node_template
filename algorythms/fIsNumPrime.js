//import your dependencies if needed 
import {l, isArgumentValid} from '../lib/utilities.js'

export function fIsNumPrime(n,logLevel=3){
    if (!isArgumentValid(n, ['number'])){return}
    if (n === (0 || 1)){
        l.warn(` 6: 0 is divisible by every number, and 1 is only divisible by itself. They don't meet the requirement by mathematical definition!`)
        return
    }

    // The underlying logic, is we solve for numbers going up, if we reach a number that gives % = 0 that is not our number, then our number is not prime.
    let i = 2;

    while (i != n){
        let mod = n % i;
        
        if (mod === 0){
            l.warn(` 6: '${n}' is not a prime number!`, logLevel)
            return false
        }
        
        i++;
    }
    l.success(` 6: '${n}' is a prime number!`, logLevel)
    return true
}

function allPrimeNumbersUnder(n,logLevel=3){
    let results = []
    for(let i=2;i<n;i++){
        results = fIsNumPrime(i) ? [...results,i] : results
    }   
    l.info(` 6: found ${results.length} prime numbers under ${n} : [${results.join(',')}]`, logLevel)
}

// allPrimeNumbersUnder(33)