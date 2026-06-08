import {l, isArgumentValid} from '../lib/utilities.js'

export function aSumNthNumber(n,logLevel=3){
    let sum=0
    if (!isArgumentValid(n, 'number')){return}

    for(let i=0 ; i<=n ;i++){
        sum += i // sum = sum + i
    }
    l.info(` 1: The nth Sum of ${n} is ${sum}`, logLevel)
}

export const sumNthNum = (n,logLevel=3) => {
    l.info(`Testing '${n}'`, LogLevel)
}
//module.exports = sumNthNumber; commonjs syntax 