import {l} from '../lib/utilities.js'


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




