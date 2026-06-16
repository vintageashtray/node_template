import {l, isArgumentValid, truncator} from '../lib/utilities.js'

function _1rollDie(logLevel=3){

    const roll = Math.floor((Math.random() * 6) +1);

    l.success(` 1: The die rolled: '${roll}'`, logLevel)
}

_1rollDie()
//--------------------



function _2getHypotenuse(a, b ,logLevel=3){
    if(!isArgumentValid(a, 'number') || !isArgumentValid(b, 'number')){return}

    const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    l.success(` 2: c='${truncator(c)}' is the length of the hypotenuse of a triangle whose sides are a='${a}' and b='${b}'.`, logLevel)
}

_2getHypotenuse(5, 12)
//--------------------



function _3getAbsoluteDifference(num1, num2, logLevel=3){
    if(!isArgumentValid(num1, 'number') || !isArgumentValid(num2, 'number')){return}

    const absDiff = Math.abs(num1 - num2);

    l.success(` 3: The absoulte difference between '${num1}' and '${num2}' is: ${absDiff}`, logLevel)
}

_3getAbsoluteDifference(1, 100)
//--------------------



function _4roundPriceUp(price, logLevel=3){
    if(!isArgumentValid(price, 'number')){return}

    const roundUp = Math.ceil(price);

    l.success(` 4: '${price}' rounded up is: '${roundUp}'`, logLevel)
}

_4roundPriceUp(15.23)
//--------------------



function _5findExtremes(arr, logLevel=3){
    if(typeof arr != 'object'){
        l.fail(` 5: Input '${arr}' of type '${typeof arr}' must be of type [object]. Input has to be an array of numbers.`, logLevel)
        return
    }

    const min = Math.min(...arr);
    const max = Math.max(...arr);

    const extremes = [min, max]

    l.success(` 5: The Extremes of the Array Range are [${extremes}]`, logLevel)
}

_5findExtremes([420,69,14,88])
//--------------------



function _6calculateCircleArea(radius, logLevel=3){
    if(!isArgumentValid(radius, 'number')){return}

    const circleArea = Math.PI * Math.pow(radius, 2);

    l.success(` 6: The Area of Circle whose radius = '${radius}' is: ${truncator(circleArea)}`, logLevel)
}

_6calculateCircleArea(4)
//--------------------



function _7removeDecimals(num, logLevel=3){
    if(!isArgumentValid(num, 'number')){return}

    const truncated = Math.trunc(num);

    l.success(` 7: Explicit Truncation gives: '${truncated}'`, logLevel)
}

_7removeDecimals(-50.57)
//--------------------



function _8getRandomInRange(min, max, logLevel=3){
    if(!isArgumentValid(min, 'number') || !isArgumentValid(max, 'number')){return}

    if(!Number.isInteger(min) || !Number.isInteger(max)){
        l.fail(` 8: min and max should be integers!`)
        return
    }

    const x = Math.floor((Math.random() * (max-min+1)) + min);

    l.success(` 8: RNG rolled: '${x}'`, logLevel)
}

_8getRandomInRange(1, 3)
//--------------------



function _9raiseToPower(base, exponent, logLevel=3){
    if(!isArgumentValid(base, 'number') || !isArgumentValid(exponent, 'number')){return}

    const x = Math.pow(base, exponent);

    l.success(` 9: '${truncator(x)}`, logLevel)
}

_9raiseToPower(9, -1)
//--------------------



function _10getWholeMinutes(seconds, leftover=false, logLevel=3){
    if(!isArgumentValid(seconds, 'number')){return}

    const minutes = Math.trunc(seconds / 60);
    let secs = seconds % 60;

    if(!leftover){
        secs = 0;
    }

    l.success(`10: '${seconds}' seconds corresponds to '${minutes}' minutes and '${truncator(secs)}' seconds.`, logLevel)
}

_10getWholeMinutes(3601.5, true)