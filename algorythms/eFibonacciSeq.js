import {l, isArgumentValid} from '../lib/utilities.js'

export function eFibonacciSeq(n,logLevel=3){
    if (!isArgumentValid(n, ['number'])){return}

    const fibonacci = [];

    if (n === 0){
        l.warn(` 5: You chose 0 terms of the sequence! No item is there to display.`, logLevel)
        return
    }
    if (n > 0){
        fibonacci.push(0);
    }
    if (n > 1){
        fibonacci.push(1);

        for(let i = 1; i <= n-2; i++){
            let seq = fibonacci[i-1] + fibonacci[i]
            fibonacci.push(seq);
        }
    }
    
    l.info(` 5: The '${n}' terms of the Fibonacci Sequence are: '${fibonacci.join(', ')}'`, logLevel)
    return fibonacci
}