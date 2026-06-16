import {l, isArgumentValid} from '../lib/utilities.js'

const strA = 'This is a demo string';
let strB =   'This is another demo string';

strA.at(9) //  ' '
strB[9] // 'n'
// strB[9] = 'x' // works only with arrays, with strings it will throw an error

l.info(`strA.charCodeAt(9), ${strA.charCodeAt(9)}`) //char to unicode
l.info(`strB.charCodeAt(9), ${strB.charCodeAt(9)}`)

// for(let i=1;i<256;i++){
//     l.info(`unicode of ${i} is '${String.fromCharCode(i)}'`) //unicode to char [static method, object method, class method] String has the sepcial case that it can be implemented either as a primitive (string) type or as an object (String)
// }

// constructor: not at the level to understand it yet. To be seen in Object Oriented Programming.


l.info(`${strA.endsWith('ring')}`) // true


l.info(`${strA.includes('mo s')}`) // true
l.info(`${strB.includes('other')}`) // true

// indexOf() returns -1 if item is not found
l.info(`${strA.indexOf('his')}`) // 1

//------------------



function _1repeatRunner(str, n, logLevel=3){
    if (!isArgumentValid(str, ['string']) && !isArgumentValid(n, ['number'])){return}
    
    const text = str.repeat(n);

    l.success(` 1: '${text}'`, logLevel)
}

_1repeatRunner('Run', 3)
//--------------------



function _2emailMasker(email, logLevel=3){
    if (!isArgumentValid(email, ['string'])){return}

    const atPos = email.search('@');

    const asterisks = '*'.repeat(atPos-2);
    const firstChar = email.slice(0,1);
    const lastChar = email.slice(atPos-1,atPos);
    const domainName = email.slice(atPos);

    const maskedEmail = "".concat(firstChar, asterisks, lastChar, domainName);

    l.success(` 2: '${maskedEmail}'`, logLevel)
}

_2emailMasker('codelearn@email.com')
//--------------------



function _3urlSlugger(str, logLevel=3){
    if(!isArgumentValid(str, ['string'])){return}

    const text = str.toLowerCase().replaceAll(' ', '-');

    l.success(` 3: '${text}'`, logLevel)
}

_3urlSlugger('Top 10 JavaScript Tips')
//--------------------



function _4extensionExtractor(str, logLevel=3){
    if(!isArgumentValid(str, ['string'])){return}

    const ext = str.slice(str.lastIndexOf('.')+1);

    l.success(` 4: '${ext}'`, logLevel)
}

_4extensionExtractor('main.app.component.ts')
//--------------------



function _5wordTruncator(str, n, logLevel=3){
    if(!isArgumentValid(str, ['string']) || !isArgumentValid(n, ['number'])){return}

    const truncated = str.slice(0, n).concat('...');

    l.success(` 5: '${truncated}'`, logLevel)
}

_5wordTruncator('JavaScript is awesome', 10)
//--------------------



function _6nameFormatter(str, logLevel=3){
    if(!isArgumentValid(str, ['string'])){return}

    const spacePos = str.search(' ');

    const firstName = str.slice(0, spacePos)
    const lastName = str.slice(spacePos+1)

    const formattedName = "".concat(lastName, ', ', firstName)

    l.success(` 6: '${formattedName}'`, logLevel)
}

_6nameFormatter('Alan Turing')
//--------------------



function _7charCounter(str, char, logLevel=3){
    if(!isArgumentValid(str, ['string']) || !isArgumentValid(char, ['string', 'number'])){return}

    const regex = new RegExp(char, 'gi');

    const input = str.match(regex);

    let output = 0;

    if(input != null){
        output = input.length;
    }
    
    l.success(` 7: '${output}'`, logLevel)
}

_7charCounter('Banana', 'a')
//--------------------



function _8wordReplacer(phrase, word, substitute, logLevel=3){
    if(!isArgumentValid(phrase, ['string']) || !isArgumentValid(word, ['string', 'number'])){return}

    let subst = substitute;

    if(substitute == undefined){
        subst = '';
    }

    const output = phrase.replaceAll(word, subst);

    l.success(` 8: '${output}'`, logLevel)
}

_8wordReplacer('The cat sat on the mat', 'mat', 'couch')
//--------------------



function _9moneyFormatterOld(amount, sign='USD', logLevel=3){
    if(!isArgumentValid(amount, ['number']) || !isArgumentValid(sign, ['string'])){return}

    // Is it possible to use OBJECT.ARGUMENT?
    const CURRENCY = {
        USD: '$',
        EUR: '€',
        GBP: '£',
        JPY: '¥'
    }

    const capSign = sign.toUpperCase();

    const index = Object.keys(CURRENCY).findIndex(x => x == capSign)
    const signPick = Object.values(CURRENCY)[index]

    if(signPick == undefined){
        l.warn(` 9: Currency N/A. Pick from [${Object.keys(CURRENCY)}].`)
        return
    }

    
    let decimal = amount.toString();


    function toDecimal(num){
        if(num.search(/\./) == -1){
            decimal = decimal.concat('.00')
            return decimal

        } else if(num.search(/\./) === num.length-2){
            decimal = decimal.concat('0')
            return decimal

        } else if(num.length - num.search(/\./) >= 3){
            decimal = decimal.slice(0, num.search(/\./)+3)
            return decimal
        }
    }
    
    decimal = toDecimal(decimal);

    const output = "".concat(signPick, decimal)

    l.success(` 9: '${output}'`, logLevel)
}

function _9moneyFormatter(amount, sign='$', logLevel=3){
    if(!isArgumentValid(amount, 'number')){return}

    if(!['$', '€', '£', '¥'].includes(sign)){
        l.warn(`Unsupported currency symbol '${sign}'. Pick from [$, €, £, ¥].`, logLevel)
        return
    }

    l.success(` 9: ${sign+amount.toFixed(2)}`)
}

_9moneyFormatter(45.5555, '€')
//--------------------



function _10spaceCleaner(phrase, logLevel){
    if(!isArgumentValid(phrase, ['string'])){return}

    const input = phrase.split(' ').filter(x => x).join(' '); // filters by truthy, thus an empty string is falsy, no need to write it this way: .filter(x => x != '')

    l.success(`10: '${input}'`, logLevel)
}

_10spaceCleaner(' Too many  spaces ')