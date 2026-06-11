import {l, isArgumentValid} from '../lib/utilities.js'

export function sValuePalindrome(v, logLevel=3){
    if(!isArgumentValid(v, ['number','string'])){return}

    const vLowerCase = v.toString().toLowerCase()
    const reverse = vLowerCase.split('').reverse().join('');

    if(vLowerCase != reverse){
        l.warn(`19: ${v} is not a palindrome!`)
        return
    }

    l.success(`19: ${v} is a palindrome!`)
}