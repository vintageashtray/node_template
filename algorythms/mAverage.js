//import your dependencies if needed 
import {l, isArgumentValid} from '../lib/utilities.js'

export function mAverage(numbers = [], logLevel=3){
    if (!isArgumentValid(numbers, 'object')){return}
    // const divisor = numbers.length

    let sum = 0;
    numbers.forEach(num => sum += num);

    // numbers.array.forEach(element => {
    // });

    const average = numbers.reduce((acc,st)=>acc+=st) / numbers.length

    l.info(`13: '${average}'`, logLevel)
}