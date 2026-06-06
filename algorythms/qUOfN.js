//import your dependencies if needed 
import {l, isArgumentValid} from '../lib/utilities.js'

export function qUOfN(n){
    if (!isArgumentValid(n, 'number')){return}

    const Un = [3,8]

    for(let i = 2; i <= n; i++){
        const seq = Un[i-1] + Un[i-2]
        Un.push(seq);
    }

    l.success(`17: U of ${n} is: '${Un[n]}'`)
}