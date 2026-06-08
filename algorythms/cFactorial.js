import {l, isArgumentValid, isArgumentInvalid} from '../lib/utilities.js'

export function cFactorialLoop(n,logLevel=3){
    if (!isArgumentValid(n, 'number')){return}

    let factorial = 1;

    for (let i = 1; i <= n; i++){
        factorial = factorial * i;
    }
    l.info(` 3: The factorial of ${n} is: ${factorial}`, logLevel);
}

let factorial;
export function cFactorialRecursion(n,logLevel=3){
    if (!isArgumentValid(n, 'number')){return}
    
    if (n === 0){return 1};
    
    factorial = n * cFactorialRecursion(n - 1)
    l.info(` 3: The factorial (recursion) of ${n} is: ${factorial}`, logLevel);
    return factorial
    
    // // 1. Base Case: stop when n is 0 or 1
    // if (n <= 1) {
    //     return 1;
    // }    
    // // 2. Recursive Case: n multiplied by factorial of (n - 1)
    // return n * cFactorialRecursion(n - 1);
    // l.info(`The factorial (recursion) of ${n} is: ${cFactorialRecursion(n)}`);
}